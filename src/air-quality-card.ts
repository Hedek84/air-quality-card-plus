console.info('%c AIR QUALITY CARD PLUS  v1.1 ', 'color: white; background: green; font-weight: bold;');

import { LitElement, html, css, svg } from 'lit';
import { property } from 'lit/decorators.js';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';
import { SENSOR_PRESETS } from './sensor-presets';
import './air-quality-card-editor';

export type LegacySensorType = 'pm1' | 'pm25' | 'pm10' | 'temperature' | 'humidity' | 'pressure' | 'aqi' | 'rating';
export type SensorType = LegacySensorType;

export interface SensorSlotConfig {
  preset?: string;
  entity?: string;
  icon?: string;
  label?: string;
  tooltip?: string;
  min?: number;
  max?: number;
  green_min?: number;
  green_max?: number;
}

export interface AirQualityCardConfig {
  type: string;
  title?: string;
  width?: string;
  height?: string;
  aqi?: string;
  rating?: string;
  recommendation?: string;
  show_second_row?: boolean;
  show_third_row?: boolean;
  sensors?: SensorSlotConfig[];
  // Legacy config properties kept for backwards compatibility
  entities?: Partial<Record<LegacySensorType, string>>;
  show_bars?: LegacySensorType[];
  _customThresholds?: Record<string, { min?: number; max?: number }>;
}

const LEGACY_SLOT_KEYS: (LegacySensorType | undefined)[] = [
  'pm1',
  'pm25',
  'pm10',
  'temperature',
  'humidity',
  'pressure',
  undefined,
  undefined,
  undefined,
];

function parseNumberOrDefault(value: unknown, fallback: number): number {
  if (value !== undefined && value !== null && String(value) !== '' && !Number.isNaN(Number(value))) {
    return Number(value);
  }
  return fallback;
}

export function resolveSensorSlot(config: AirQualityCardConfig, index: number): Required<SensorSlotConfig> {
  const raw = config.sensors?.[index];

  // If the slot is not configured in `config.sensors` yet, check if there is a legacy entity in `config.entities`
  if (!raw) {
    const legacyKey = LEGACY_SLOT_KEYS[index];
    const legacyEntity = legacyKey ? config.entities?.[legacyKey] : undefined;
    if (legacyKey && legacyEntity) {
      const preset = SENSOR_PRESETS[legacyKey];
      const legacyThreshold = config._customThresholds?.[legacyKey];
      const min = parseNumberOrDefault(legacyThreshold?.min, preset?.min ?? 0);
      const max = parseNumberOrDefault(legacyThreshold?.max, preset?.max ?? 100);
      return {
        preset: legacyKey,
        entity: legacyEntity,
        icon: preset?.icon ?? '',
        label: preset?.label ?? '',
        tooltip: preset?.tooltip ?? '',
        min,
        max,
        green_min: preset?.green_min ?? min,
        green_max: preset?.green_max ?? min + (max - min) * 0.5,
      };
    }

    // Empty slot — no forced default choices
    return {
      preset: '',
      entity: '',
      icon: '',
      label: '',
      tooltip: '',
      min: 0,
      max: 100,
      green_min: 0,
      green_max: 50,
    };
  }

  const min = parseNumberOrDefault(raw.min, 0);
  const max = parseNumberOrDefault(raw.max, 100);
  const greenMin = parseNumberOrDefault(raw.green_min, min);
  const greenMax = parseNumberOrDefault(raw.green_max, min + (max - min) * 0.5);

  return {
    preset: raw.preset ?? '',
    entity: raw.entity ?? '',
    icon: raw.icon ?? '',
    label: raw.label ?? '',
    tooltip: raw.tooltip ?? '',
    min,
    max,
    green_min: greenMin,
    green_max: greenMax,
  };
}

function buildBarGradient(min: number, max: number, greenMin: number, greenMax: number): string {
  const denom = max - min;
  if (denom <= 0) {
    return 'linear-gradient(to right, #1e8449 0%, #27ae60 25%, #2ecc71 50%, #f1c40f 60%, #e67e22 75%, #c0392b 90%, #922b21 100%)';
  }

  const gStart = Math.max(0, Math.min(100, ((greenMin - min) / denom) * 100));
  const gEnd = Math.max(gStart, Math.min(100, ((greenMax - min) / denom) * 100));

  const stops: string[] = [];

  if (gStart <= 0.5) {
    stops.push('#1e8449 0%');
    stops.push(`#27ae60 ${(gEnd * 0.5).toFixed(1)}%`);
    stops.push(`#2ecc71 ${gEnd.toFixed(1)}%`);
  } else {
    stops.push('#922b21 0%');
    stops.push(`#c0392b ${(gStart * 0.2).toFixed(1)}%`);
    stops.push(`#e67e22 ${(gStart * 0.5).toFixed(1)}%`);
    stops.push(`#f1c40f ${(gStart * 0.8).toFixed(1)}%`);
    stops.push(`#2ecc71 ${gStart.toFixed(1)}%`);
    stops.push(`#27ae60 ${((gStart + gEnd) * 0.5).toFixed(1)}%`);
    stops.push(`#2ecc71 ${gEnd.toFixed(1)}%`);
  }

  if (gEnd < 99.5) {
    const rem = 100 - gEnd;
    stops.push(`#f1c40f ${(gEnd + rem * 0.2).toFixed(1)}%`);
    stops.push(`#e67e22 ${(gEnd + rem * 0.5).toFixed(1)}%`);
    stops.push(`#c0392b ${(gEnd + rem * 0.8).toFixed(1)}%`);
    stops.push('#922b21 100%');
  }

  return `linear-gradient(to right, ${stops.join(', ')})`;
}

// Built-in vector dot icons for PM1 / PM2.5 / PM10
export const PM_DOT_ICONS: Record<string, ReturnType<typeof svg>> = {
  'custom:pm1': svg`
    <circle cx="5" cy="6" r="1" />
    <circle cx="10" cy="4" r="1.1" />
    <circle cx="15" cy="6.5" r="0.9" />
    <circle cx="19" cy="4.5" r="1" />
    <circle cx="7" cy="10.5" r="1.2" />
    <circle cx="12" cy="9.5" r="1" />
    <circle cx="17" cy="11" r="1.1" />
    <circle cx="4.5" cy="15" r="1" />
    <circle cx="9.5" cy="14.5" r="1.3" />
    <circle cx="14.5" cy="15.5" r="1" />
    <circle cx="19" cy="15" r="1.1" />
    <circle cx="7" cy="19.5" r="1" />
    <circle cx="12" cy="19" r="1.1" />
    <circle cx="17" cy="19.5" r="0.9" />
  `,
  'custom:pm25': svg`
    <circle cx="8" cy="7" r="2.6" />
    <circle cx="17" cy="6.5" r="1.8" />
    <circle cx="6.5" cy="15.5" r="2.1" />
    <circle cx="14" cy="14.5" r="3" />
    <circle cx="18.5" cy="16.5" r="1.6" />
  `,
  'custom:pm10': svg`
    <circle cx="8.5" cy="8" r="4.5" />
    <circle cx="17" cy="16" r="3.4" />
  `,
};

const RATING_IMAGES: Record<string, string> = {
  excellent: '/local/air-quality-card-plus/excellent.png',
  good: '/local/air-quality-card-plus/good.png',
  moderate: '/local/air-quality-card-plus/moderate.png',
  poor: '/local/air-quality-card-plus/poor.png',
  unhealthy: '/local/air-quality-card-plus/unhealthy.png',
};

// Official CAQI (Common Air Quality Index) colors, as used across the EU index (see airly.org CAQI explainer).
const CAQI_THRESHOLDS: { max: number; color: string }[] = [
  { max: 25, color: '#79BC6A' },   // very low
  { max: 50, color: '#BBCF4C' },   // low
  { max: 75, color: '#EEC20B' },   // medium
  { max: 100, color: '#F29305' },  // high
  { max: Infinity, color: '#960018' }, // very high
];

function getCaqiRingColor(value: number): string {
  const band = CAQI_THRESHOLDS.find(t => value <= t.max);
  return (band ?? CAQI_THRESHOLDS[CAQI_THRESHOLDS.length - 1]).color;
}

const RATING_RING_COLORS: Record<string, string> = {
  excellent: CAQI_THRESHOLDS[0].color,
  good: CAQI_THRESHOLDS[1].color,
  moderate: CAQI_THRESHOLDS[2].color,
  poor: CAQI_THRESHOLDS[3].color,
  unhealthy: CAQI_THRESHOLDS[4].color,
};

export class AirQualityCard extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property() private config!: AirQualityCardConfig;

  public setConfig(config: AirQualityCardConfig) {
    if (!config) throw new Error('Invalid configuration');
    this.config = config;
  }

  static styles = css`
    :host {
      display: block;
      margin-top: 34px;
    }
    .card-wrapper {
      position: relative;
    }
    .badge {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      position: absolute;
      top: -45px;
      left: -15px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
      border: 3px solid var(--card-background-color);
    }
    ha-card {
      padding: 15px;
      overflow: visible;
      max-width: 100%;
      box-sizing: border-box;
    }
    .recommendation-text {
      margin-top: 16px;
      font-size: 14px;
      color: var(--primary-text-color);
      background: var(--secondary-background-color);
      padding: 10px;
      border-radius: 8px;
      line-height: 1.4;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 22px;
      min-height: 20px;
    }
    .title {
      margin-left: 84px;
      font-weight: bold;
    }
    .attributes {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
    }
    .row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .bar-container {
      display: flex;
      align-items: center;
      width: 100%;
      position: relative;
    }
    .icon {
      margin-right: 8px;
      font-size: 24px;
      --mdc-icon-size: 24px;
      flex-shrink: 0;
    }
    .icon-stack {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 8px;
      flex-shrink: 0;
    }
    .icon-stack .icon,
    .icon-stack .custom-img-icon {
      margin-right: 0;
    }
    .dot-icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      fill: var(--primary-text-color);
      margin-right: 8px;
    }
    .icon-stack .dot-icon {
      margin-right: 0;
    }
    .custom-img-icon {
      width: 24px;
      height: 24px;
      object-fit: contain;
      flex-shrink: 0;
      margin-right: 8px;
    }
    .icon-label {
      font-size: 9px;
      line-height: 1.2;
      color: var(--secondary-text-color);
      white-space: nowrap;
    }
    .bar {
      flex-grow: 1;
      height: 10px;
      border-radius: 3px;
      background: var(--primary-background-color);
      position: relative;
      overflow: hidden;
    }
    .value-above {
      text-align: right;
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 6px;
      padding-right: 2px;
    }
    .gradient {
      position: absolute;
      inset: 0;
      z-index: 1;
    }
    .mask {
      position: absolute;
      top: 0;
      bottom: 0;
      background: var(--primary-background-color);
      z-index: 2;
      right: 0;
    }
    .bar-wrapper {
      position: relative;
      flex-grow: 1;
    }
    .tooltip {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(-8px);
      background: #555;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s;
      z-index: 10;
    }
    .bar-wrapper:hover .tooltip {
      visibility: visible;
      opacity: 1;
    }
  `;

  static getConfigElement(): Promise<HTMLElement> {
    return Promise.resolve(document.createElement('air-quality-card-plus-editor'));
  }

  static getStubConfig(): Record<string, any> {
    return {
      type: 'custom:air-quality-card-plus',
      title: 'Air Quality',
      show_second_row: true,
      show_third_row: false,
      sensors: [],
    };
  }

  private _renderIconGraphic(iconValue: string) {
    if (!iconValue) return html``;
    if (PM_DOT_ICONS[iconValue]) {
      return html`<svg class="dot-icon" viewBox="0 0 24 24">${PM_DOT_ICONS[iconValue]}</svg>`;
    }
    if (
      iconValue.startsWith('/') ||
      iconValue.startsWith('http://') ||
      iconValue.startsWith('https://') ||
      iconValue.startsWith('data:')
    ) {
      return html`<img class="custom-img-icon" src="${iconValue}" alt="" />`;
    }
    return html`<ha-icon class="icon" icon="${iconValue}"></ha-icon>`;
  }

  renderSlotBar(slotIndex: number) {
    const slot = resolveSensorSlot(this.config, slotIndex);
    const entityId = slot.entity;
    if (!entityId || !this.hass) return html``;

    const state = this.hass.states[entityId];
    if (!state || state.state === 'unavailable' || state.state === 'unknown') return html``;

    const raw = state.state;
    const numeric = Number(raw);
    const formatted = Number.isNaN(numeric)
      ? raw
      : (Math.round((numeric + Number.EPSILON) * 100) / 100).toFixed(2);

    const unit: string = state.attributes?.unit_of_measurement ?? '';
    const min = slot.min;
    const max = slot.max;
    const denom = max - min;
    const fillPercent = Number.isNaN(numeric) || denom === 0
      ? 0
      : Math.max(0, Math.min(100, ((numeric - min) / denom) * 100));

    const gradientCss = buildBarGradient(min, max, slot.green_min, slot.green_max);
    const tooltip = slot.tooltip?.trim() ?? '';
    const iconElement = this._renderIconGraphic(slot.icon?.trim() ?? '');
    const labelText = slot.label?.trim() ?? '';

    return html`
      <div
        class="bar-container"
        @click=${() => fireEvent(this, 'hass-more-info', { entityId })}
        style="cursor: pointer;"
      >
        ${labelText
          ? html`
              <div class="icon-stack">
                ${iconElement}
                <span class="icon-label">${labelText}</span>
              </div>
            `
          : iconElement}
        <div class="bar-wrapper">
          <div class="value-above">${formatted}${unit ? ` ${unit}` : ''}</div>
          <div class="bar">
            <div class="gradient" style="background: ${gradientCss};"></div>
            <div class="mask" style="left: ${fillPercent}%; right: 0;"></div>
          </div>
          ${tooltip ? html`<div class="tooltip">${tooltip}</div>` : ''}
        </div>
      </div>
    `;
  }

  render() {
    if (!this.config || !this.hass) return html``;

    const title = this.config.title?.trim() ?? '';
    const showSecondRow = this.config.show_second_row !== false;
    const showThirdRow = this.config.show_third_row === true;

    const row1 = [0, 1, 2].map(i => this.renderSlotBar(i));
    const row2 = showSecondRow ? [3, 4, 5].map(i => this.renderSlotBar(i)) : [];
    const row3 = showThirdRow ? [6, 7, 8].map(i => this.renderSlotBar(i)) : [];

    const ratingEntityId = this.config.rating ?? this.config.entities?.rating;
    let rawState = '';
    let ratingKey = 'moderate';

    if (ratingEntityId && this.hass.states[ratingEntityId]) {
      const state = this.hass.states[ratingEntityId].state;
      rawState = state ?? '';

      const candidate = rawState.toLowerCase().trim();
      if (candidate && Object.prototype.hasOwnProperty.call(RATING_IMAGES, candidate)) {
        ratingKey = candidate;
      } else {
        console.warn(`[AirQualityCard] Unknown air quality rating: "${rawState}" — defaulting to "moderate"`);
      }
    }

    const badgeImage = RATING_IMAGES[ratingKey];

    const aqiEntityId = this.config.aqi ?? this.config.entities?.aqi;
    const aqiState = aqiEntityId ? this.hass.states[aqiEntityId] : undefined;
    const aqiValue = aqiState && aqiState.state !== 'unavailable' ? parseFloat(aqiState.state) : NaN;
    const ringColor = !isNaN(aqiValue)
      ? getCaqiRingColor(aqiValue)
      : RATING_RING_COLORS[ratingKey] ?? RATING_RING_COLORS.moderate;

    const headerTitle = title && rawState ? `${title} - ${rawState}` : (title || rawState);

    return html`
      <ha-card style="width: ${this.config.width || '100%'}; height: ${this.config.height || 'auto'};">
        <div class="card-wrapper">
          <img class="badge" src="${badgeImage}" alt="${rawState}" style="border-color: ${ringColor};" />
          <div class="header">
            <div class="title">${headerTitle}</div>
          </div>
          <div class="attributes">
            <div class="row">${row1}</div>
            ${showSecondRow ? html`<div class="row">${row2}</div>` : ''}
            ${showThirdRow ? html`<div class="row">${row3}</div>` : ''}
          </div>
        </div>
        ${this.config.recommendation && this.hass.states[this.config.recommendation]
          ? html`
              <div class="recommendation-text">
                ${this.hass.states[this.config.recommendation].state}
              </div>
            `
          : ''}
      </ha-card>
    `;
  }
}

if (!customElements.get('air-quality-card-plus')) {
  customElements.define('air-quality-card-plus', AirQualityCard);
}

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'air-quality-card-plus',
  name: 'Air Quality Card Plus',
  description: 'Displays air quality and weather sensors (up to 3 rows of 3 sensors) with a CAQI-colored ring.',
  preview: true,
});
