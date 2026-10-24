import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';
import {
  AirQualityCardConfig,
  SensorSlotConfig,
  resolveSensorSlot,
} from './air-quality-card';
import { PRESET_OPTIONS, SENSOR_PRESETS } from './sensor-presets';

const TEXT_SELECTOR = { text: {} };
const ENTITY_SELECTOR = { entity: {} };
const ICON_SELECTOR = { icon: {} };
const NUMBER_SELECTOR = { number: { mode: 'box', step: 'any' } };
const SENSOR_TYPE_SELECTOR = {
  select: {
    mode: 'dropdown',
    options: PRESET_OPTIONS,
  },
};
const ICON_MODE_SELECTOR = {
  select: {
    mode: 'dropdown',
    options: [
      { value: 'none', label: 'None' },
      { value: 'mdi', label: 'Home Assistant' },
      { value: 'custom:pm1', label: 'PM1' },
      { value: 'custom:pm25', label: 'PM2.5' },
      { value: 'custom:pm10', label: 'PM10' },
      { value: 'image', label: 'Custom' },
    ],
  },
};

function getIconMode(iconValue: string): 'none' | 'mdi' | 'custom:pm1' | 'custom:pm25' | 'custom:pm10' | 'image' {
  if (!iconValue) return 'none';
  if (iconValue === 'custom:pm1' || iconValue === 'custom:pm25' || iconValue === 'custom:pm10') {
    return iconValue;
  }
  if (
    iconValue.startsWith('/') ||
    iconValue.startsWith('http://') ||
    iconValue.startsWith('https://') ||
    iconValue.startsWith('data:')
  ) {
    return 'image';
  }
  return 'mdi';
}

@customElement('air-quality-card-plus-editor')
export class AirQualityCardEditor extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: AirQualityCardConfig;

  setConfig(config: AirQualityCardConfig) {
    this._config = {
      ...config,
      width: config.width === '100%' ? '' : (config.width ?? ''),
      height: config.height === 'auto' ? '' : (config.height ?? ''),
      entities: config.entities ? { ...config.entities } : {},
      sensors: config.sensors ? config.sensors.map(s => ({ ...s })) : undefined,
    };
  }

  static styles = css`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 4px 0;
      box-sizing: border-box;
    }
    .field-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .field-label {
      font-size: 14px;
      font-weight: 400;
      color: var(--primary-text-color);
    }
    .row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 12px;
      align-items: start;
      width: 100%;
      box-sizing: border-box;
    }
    .row > * {
      min-width: 0;
      max-width: 100%;
      overflow: hidden;
    }
    ha-selector {
      display: block;
      width: 100%;
      min-width: 0;
      max-width: 100%;
      box-sizing: border-box;
    }
    .row-section {
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 10px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      box-sizing: border-box;
    }
    .row-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      color: var(--primary-text-color);
    }
    .sensor-card {
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      padding: 12px;
      background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
      box-sizing: border-box;
      overflow: hidden;
    }
    .sensor-card-title {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 10px;
      color: var(--primary-text-color);
    }
    .sensor-body {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  `;

  private _emitConfig(nextConfig: AirQualityCardConfig) {
    this._config = nextConfig;
    fireEvent(this, 'config-changed', { config: nextConfig });
  }

  private _updateTopLevel<K extends keyof AirQualityCardConfig>(key: K, value: AirQualityCardConfig[K]) {
    const next: AirQualityCardConfig = {
      ...this._config,
      [key]: value,
    };
    if (key === 'aqi' || key === 'rating') {
      next.entities = {
        ...(this._config.entities || {}),
        [key]: (value as string) || '',
      };
    }
    this._emitConfig(next);
  }

  private _updateSlot(index: number, patch: Partial<SensorSlotConfig>) {
    const slots: SensorSlotConfig[] = Array.from({ length: 9 }, (_, i) => {
      const resolved = resolveSensorSlot(this._config, i);
      return { ...resolved };
    });

    slots[index] = {
      ...slots[index],
      ...patch,
    };

    this._emitConfig({
      ...this._config,
      sensors: slots,
    });
  }

  private _applyPreset(slotIndex: number, presetId: string) {
    if (!presetId || !SENSOR_PRESETS[presetId]) {
      this._updateSlot(slotIndex, { preset: '' });
      return;
    }
    const preset = SENSOR_PRESETS[presetId];
    this._updateSlot(slotIndex, {
      preset: presetId,
      icon: preset.icon,
      label: preset.label,
      tooltip: preset.tooltip,
      min: preset.min,
      max: preset.max,
      green_min: preset.green_min,
      green_max: preset.green_max,
    });
  }

  private _renderSensorEditor(slotIndex: number, numberInRow: number) {
    const slot = resolveSensorSlot(this._config, slotIndex);
    const iconMode = getIconMode(slot.icon);

    return html`
      <div class="sensor-card">
        <div class="sensor-card-title">Sensor ${numberInRow}</div>
        <div class="sensor-body">
          <!-- 1. Entity -->
          <ha-selector
            .hass=${this.hass}
            .selector=${ENTITY_SELECTOR}
            .label=${'Entity'}
            .value=${slot.entity || ''}
            .required=${false}
            @value-changed=${(e: CustomEvent) => {
              e.stopPropagation();
              this._updateSlot(slotIndex, { entity: e.detail.value ?? '' });
            }}
          ></ha-selector>

          <!-- 2. Sensor type -->
          <ha-selector
            .hass=${this.hass}
            .selector=${SENSOR_TYPE_SELECTOR}
            .label=${'Sensor type'}
            .value=${slot.preset || ''}
            .required=${false}
            @value-changed=${(e: CustomEvent) => {
              e.stopPropagation();
              this._applyPreset(slotIndex, e.detail.value ?? '');
            }}
          ></ha-selector>

          <!-- 3. Icon Type & Icon label -->
          <div class="row">
            <ha-selector
              .hass=${this.hass}
              .selector=${ICON_MODE_SELECTOR}
              .label=${'Icon Type'}
              .value=${iconMode}
              .required=${false}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                const mode = e.detail.value;
                if (mode === 'none') {
                  this._updateSlot(slotIndex, { icon: '' });
                } else if (mode === 'custom:pm1' || mode === 'custom:pm25' || mode === 'custom:pm10') {
                  this._updateSlot(slotIndex, { icon: mode });
                } else if (mode === 'mdi') {
                  const nextIcon = slot.icon.startsWith('mdi:') ? slot.icon : 'mdi:blur';
                  this._updateSlot(slotIndex, { icon: nextIcon });
                } else if (mode === 'image') {
                  const nextUrl = slot.icon.startsWith('/') || slot.icon.startsWith('http') ? slot.icon : '/local/';
                  this._updateSlot(slotIndex, { icon: nextUrl });
                }
              }}
            ></ha-selector>

            <ha-selector
              .hass=${this.hass}
              .selector=${TEXT_SELECTOR}
              .label=${'Icon label'}
              .value=${slot.label ?? ''}
              .required=${false}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                this._updateSlot(slotIndex, { label: e.detail.value ?? '' });
              }}
            ></ha-selector>
          </div>

          <!-- 4. Icon selector -->
          ${iconMode === 'mdi'
            ? html`
                <ha-selector
                  .hass=${this.hass}
                  .selector=${ICON_SELECTOR}
                  .label=${'Icon'}
                  .value=${slot.icon || ''}
                  .required=${false}
                  @value-changed=${(e: CustomEvent) => {
                    e.stopPropagation();
                    this._updateSlot(slotIndex, { icon: e.detail.value ?? '' });
                  }}
                ></ha-selector>
              `
            : ''}

          ${iconMode === 'image'
            ? html`
                <ha-selector
                  .hass=${this.hass}
                  .selector=${TEXT_SELECTOR}
                  .label=${'Icon URL'}
                  .value=${slot.icon || ''}
                  .required=${false}
                  @value-changed=${(e: CustomEvent) => {
                    e.stopPropagation();
                    this._updateSlot(slotIndex, { icon: e.detail.value ?? '' });
                  }}
                ></ha-selector>
              `
            : ''}

          <!-- 5. Tooltip -->
          <ha-selector
            .hass=${this.hass}
            .selector=${TEXT_SELECTOR}
            .label=${'Tooltip'}
            .value=${slot.tooltip || ''}
            .required=${false}
            @value-changed=${(e: CustomEvent) => {
              e.stopPropagation();
              this._updateSlot(slotIndex, { tooltip: e.detail.value ?? '' });
            }}
          ></ha-selector>

          <!-- 6. Min and Max display values -->
          <div class="row">
            <ha-selector
              .hass=${this.hass}
              .selector=${NUMBER_SELECTOR}
              .label=${'Min'}
              .value=${slot.min}
              .required=${false}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                const val = e.detail.value;
                this._updateSlot(slotIndex, {
                  min: val === '' || val === undefined || val === null ? 0 : Number(val),
                });
              }}
            ></ha-selector>

            <ha-selector
              .hass=${this.hass}
              .selector=${NUMBER_SELECTOR}
              .label=${'Max'}
              .value=${slot.max}
              .required=${false}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                const val = e.detail.value;
                this._updateSlot(slotIndex, {
                  max: val === '' || val === undefined || val === null ? 100 : Number(val),
                });
              }}
            ></ha-selector>
          </div>

          <!-- 7. Green min and Green max -->
          <div class="row">
            <ha-selector
              .hass=${this.hass}
              .selector=${NUMBER_SELECTOR}
              .label=${'Green min'}
              .value=${slot.green_min}
              .required=${false}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                const val = e.detail.value;
                this._updateSlot(slotIndex, {
                  green_min: val === '' || val === undefined || val === null ? slot.min : Number(val),
                });
              }}
            ></ha-selector>

            <ha-selector
              .hass=${this.hass}
              .selector=${NUMBER_SELECTOR}
              .label=${'Green max'}
              .value=${slot.green_max}
              .required=${false}
              @value-changed=${(e: CustomEvent) => {
                e.stopPropagation();
                const val = e.detail.value;
                this._updateSlot(slotIndex, {
                  green_max: val === '' || val === undefined || val === null ? slot.min + (slot.max - slot.min) * 0.5 : Number(val),
                });
              }}
            ></ha-selector>
          </div>
        </div>
      </div>
    `;
  }

  render() {
    if (!this.hass || !this._config) return html``;

    const aqiEntity = this._config.aqi ?? this._config.entities?.aqi ?? '';
    const ratingEntity = this._config.rating ?? this._config.entities?.rating ?? '';
    const showRow2 = this._config.show_second_row !== false;
    const showRow3 = this._config.show_third_row === true;

    return html`
      <div class="card-config">
        <!-- Title -->
        <div class="field-group">
          <div class="field-label">Title</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${TEXT_SELECTOR}
            .value=${this._config.title ?? ''}
            .required=${false}
            @value-changed=${(e: CustomEvent) => {
              e.stopPropagation();
              this._updateTopLevel('title', e.detail.value ?? '');
            }}
          ></ha-selector>
        </div>

        <!-- Size -->
        <div class="field-group">
          <div class="field-label">Size</div>
          <div class="row">
            <div class="field-group">
              <div class="field-label">Width</div>
              <ha-selector
                .hass=${this.hass}
                .selector=${TEXT_SELECTOR}
                .value=${this._config.width ?? ''}
                .required=${false}
                @value-changed=${(e: CustomEvent) => {
                  e.stopPropagation();
                  this._updateTopLevel('width', e.detail.value ?? '');
                }}
              ></ha-selector>
            </div>

            <div class="field-group">
              <div class="field-label">Height</div>
              <ha-selector
                .hass=${this.hass}
                .selector=${TEXT_SELECTOR}
                .value=${this._config.height ?? ''}
                .required=${false}
                @value-changed=${(e: CustomEvent) => {
                  e.stopPropagation();
                  this._updateTopLevel('height', e.detail.value ?? '');
                }}
              ></ha-selector>
            </div>
          </div>
        </div>

        <!-- Air Quality Index -->
        <div class="field-group">
          <div class="field-label">Air Quality Index</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${ENTITY_SELECTOR}
            .value=${aqiEntity}
            .required=${false}
            @value-changed=${(e: CustomEvent) => {
              e.stopPropagation();
              this._updateTopLevel('aqi', e.detail.value ?? '');
            }}
          ></ha-selector>
        </div>

        <!-- Rating -->
        <div class="field-group">
          <div class="field-label">Rating</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${ENTITY_SELECTOR}
            .value=${ratingEntity}
            .required=${false}
            @value-changed=${(e: CustomEvent) => {
              e.stopPropagation();
              this._updateTopLevel('rating', e.detail.value ?? '');
            }}
          ></ha-selector>
        </div>

        <!-- Recommendation Sensor -->
        <div class="field-group">
          <div class="field-label">Recommendation Sensor</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${ENTITY_SELECTOR}
            .value=${this._config.recommendation ?? ''}
            .required=${false}
            @value-changed=${(e: CustomEvent) => {
              e.stopPropagation();
              this._updateTopLevel('recommendation', e.detail.value ?? '');
            }}
          ></ha-selector>
        </div>

        <!-- Row 1 -->
        <div class="row-section">
          <div class="row-header">
            <span>Row 1 — Sensors 1–3</span>
          </div>
          ${[0, 1, 2].map((slotIdx, idx) => this._renderSensorEditor(slotIdx, idx + 1))}
        </div>

        <!-- Row 2 -->
        <div class="row-section">
          <div class="row-header">
            <span>Row 2 — Sensors 1–3</span>
            <ha-switch
              .checked=${showRow2}
              @change=${(e: Event) => {
                const checked = (e.target as HTMLInputElement).checked;
                this._updateTopLevel('show_second_row', checked);
              }}
            ></ha-switch>
          </div>
          ${showRow2 ? [3, 4, 5].map((slotIdx, idx) => this._renderSensorEditor(slotIdx, idx + 1)) : ''}
        </div>

        <!-- Row 3 -->
        <div class="row-section">
          <div class="row-header">
            <span>Row 3 — Sensors 1–3</span>
            <ha-switch
              .checked=${showRow3}
              @change=${(e: Event) => {
                const checked = (e.target as HTMLInputElement).checked;
                this._updateTopLevel('show_third_row', checked);
              }}
            ></ha-switch>
          </div>
          ${showRow3 ? [6, 7, 8].map((slotIdx, idx) => this._renderSensorEditor(slotIdx, idx + 1)) : ''}
        </div>
      </div>
    `;
  }
}
