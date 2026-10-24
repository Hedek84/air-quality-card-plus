/*! For license information please see air-quality-card-plus.js.LICENSE.txt */
(()=>{"use strict";var e={d:(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{B:()=>Me});const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class r{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}}const n=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new r(i,e,s)},a=(e,s)=>{if(i)e.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,e.appendChild(s)}},l=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:c,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:m}=Object,g=globalThis,$=g.trustedTypes,v=$?$.emptyScript:"",f=g.reactiveElementPolyfillSupport,_=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!c(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&h(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const r=s?.call(this);o?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=s,this[s]=o.fromAttribute(t,e.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const s=this.constructor,o=this[e];if(i??=s.getPropertyOptions(e),!((i.hasChanged??b)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==o||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[_("elementProperties")]=new Map,w[_("finalized")]=new Map,f?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.1.0");const A=globalThis,S=A.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,P="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+C,N=`<${O}>`,M=document,T=()=>M.createComment(""),k=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,R="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,z=/>/g,j=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,D=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),W=D(1),F=D(2),V=(D(3),Symbol.for("lit-noChange")),Q=Symbol.for("lit-nothing"),G=new WeakMap,J=M.createTreeWalker(M,129);function K(e,t){if(!U(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const Y=(e,t)=>{const i=e.length-1,s=[];let o,r=2===t?"<svg>":3===t?"<math>":"",n=H;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===H?"!--"===l[1]?n=q:void 0!==l[1]?n=z:void 0!==l[2]?(B.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=j):void 0!==l[3]&&(n=j):n===j?">"===l[0]?(n=o??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?j:'"'===l[3]?L:I):n===L||n===I?n=j:n===q||n===z?n=H:(n=j,o=void 0);const d=n===j&&e[t+1].startsWith("/>")?" ":"";r+=n===H?i+N:c>=0?(s.push(a),i.slice(0,c)+P+i.slice(c)+C+d):i+C+(-2===c?t:d)}return[K(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class Z{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0;const n=e.length-1,a=this.parts,[l,c]=Y(e,t);if(this.el=Z.createElement(l,i),J.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=J.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(P)){const t=c[r++],i=s.getAttribute(e).split(C),n=/([.?@])?(.*)/.exec(t);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?se:"?"===n[1]?oe:"@"===n[1]?re:ie}),s.removeAttribute(e)}else e.startsWith(C)&&(a.push({type:6,index:o}),s.removeAttribute(e));if(B.test(s.tagName)){const e=s.textContent.split(C),t=e.length-1;if(t>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],T()),J.nextNode(),a.push({type:2,index:++o});s.append(e[t],T())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(C,e+1));)a.push({type:7,index:o}),e+=C.length-1}o++}}static createElement(e,t){const i=M.createElement("template");return i.innerHTML=e,i}}function X(e,t,i=e,s){if(t===V)return t;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=k(t)?void 0:t._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(e),o._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(t=X(e,o._$AS(e,t.values),o,s)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??M).importNode(t,!0);J.currentNode=s;let o=J.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new te(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new ne(o,this,e)),this._$AV.push(t),a=i[++n]}r!==a?.index&&(o=J.nextNode(),r++)}return J.currentNode=M,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),k(e)?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>U(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Q&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new ee(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new Z(e)),t}k(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new te(this.O(T()),this.O(T()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(e,t=this,i,s){const o=this.strings;let r=!1;if(void 0===o)e=X(this,e,t,0),r=!k(e)||e!==this._$AH&&e!==V,r&&(this._$AH=e);else{const s=e;let n,a;for(e=o[0],n=0;n<o.length-1;n++)a=X(this,s[i+n],t,n),a===V&&(a=this._$AH[n]),r||=!k(a)||a!==this._$AH[n],a===Q?e=Q:e!==Q&&(e+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class se extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class oe extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class re extends ie{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??Q)===V)return;const i=this._$AH,s=e===Q&&i!==Q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Q&&(i===Q||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const ae=A.litHtmlPolyfillSupport;ae?.(Z,te),(A.litHtmlVersions??=[]).push("3.3.0");const le=globalThis;class ce extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let o=s._$litPart$;if(void 0===o){const e=i?.renderBefore??null;s._$litPart$=o=new te(t.insertBefore(T(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ce._$litElement$=!0,ce.finalized=!0,le.litElementHydrateSupport?.({LitElement:ce});const he=le.litElementPolyfillSupport;he?.({LitElement:ce}),(le.litElementVersions??=[]).push("4.2.0");const de={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},pe=(e=de,t,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,o,e)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];t.call(this,i),this.requestUpdate(s,o,e)}}throw Error("Unsupported decorator location: "+s)};function ue(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}var me,ge,$e;($e=me||(me={})).language="language",$e.system="system",$e.comma_decimal="comma_decimal",$e.decimal_comma="decimal_comma",$e.space_comma="space_comma",$e.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ge||(ge={})),new Set(["fan","input_boolean","light","switch","group","automation"]);var ve=function(e,t,i,s){s=s||{},i=null==i?{}:i;var o=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,e.dispatchEvent(o),o};new Set(["call-service","divider","section","weblink","cast","select"]);const fe={pm1:{id:"pm1",name:"PM1",icon:"custom:pm1",label:"PM1",tooltip:"Healthy: 0–15 µg/m³",min:0,max:30,green_min:0,green_max:15},pm25:{id:"pm25",name:"PM2.5",icon:"custom:pm25",label:"PM2.5",tooltip:"Healthy: 0–25 µg/m³",min:0,max:50,green_min:0,green_max:25},pm10:{id:"pm10",name:"PM10",icon:"custom:pm10",label:"PM10",tooltip:"Healthy: 0–45 µg/m³",min:0,max:90,green_min:0,green_max:45},no2:{id:"no2",name:"NO₂",icon:"mdi:molecule",label:"NO₂",tooltip:"Healthy: 0–40 µg/m³",min:0,max:80,green_min:0,green_max:40},o3:{id:"o3",name:"O₃",icon:"mdi:molecule",label:"O₃",tooltip:"Healthy: 0–100 µg/m³",min:0,max:180,green_min:0,green_max:100},so2:{id:"so2",name:"SO₂",icon:"mdi:smog",label:"SO₂",tooltip:"Healthy: 0–50 µg/m³",min:0,max:100,green_min:0,green_max:50},co:{id:"co",name:"CO",icon:"mdi:molecule-co",label:"CO",tooltip:"Healthy: 0–4000 µg/m³",min:0,max:1e4,green_min:0,green_max:4e3},co2:{id:"co2",name:"CO₂",icon:"mdi:molecule-co2",label:"CO₂",tooltip:"Healthy: 400–1000 ppm",min:400,max:1500,green_min:400,green_max:1e3},voc:{id:"voc",name:"VOC",icon:"mdi:air-filter",label:"VOC",tooltip:"Healthy: 0–500 ppb",min:0,max:1e3,green_min:0,green_max:500},temperature:{id:"temperature",name:"Temperature",icon:"mdi:thermometer",label:"",tooltip:"Comfort: 18–26 °C",min:-20,max:50,green_min:18,green_max:26},humidity:{id:"humidity",name:"Humidity",icon:"mdi:water-percent",label:"",tooltip:"Comfort: 30–60 %",min:0,max:100,green_min:30,green_max:60},pressure:{id:"pressure",name:"Pressure",icon:"mdi:gauge",label:"",tooltip:"Typical: 1000–1025 hPa",min:970,max:1050,green_min:1e3,green_max:1025},wind:{id:"wind",name:"Wind Speed",icon:"mdi:weather-windy",label:"",tooltip:"",min:0,max:50,green_min:0,green_max:25},uv:{id:"uv",name:"UV Index",icon:"mdi:weather-sunny-alert",label:"UV",tooltip:"Low: 0–2",min:0,max:11,green_min:0,green_max:2}},_e=[{value:"",label:"None"},...Object.values(fe).map((e=>({value:e.id,label:e.name})))];var ye=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const be={text:{}},xe={entity:{}},we={icon:{}},Ae={number:{mode:"box",step:"any"}},Se={select:{mode:"dropdown",options:_e}},Ee={select:{mode:"dropdown",options:[{value:"none",label:"None"},{value:"mdi",label:"Home Assistant"},{value:"custom:pm1",label:"PM1"},{value:"custom:pm25",label:"PM2.5"},{value:"custom:pm10",label:"PM10"},{value:"image",label:"Custom"}]}};let Pe=class extends ce{setConfig(e){this._config={...e,width:"100%"===e.width?"":e.width??"",height:"auto"===e.height?"":e.height??"",entities:e.entities?{...e.entities}:{},sensors:e.sensors?e.sensors.map((e=>({...e}))):void 0}}_emitConfig(e){this._config=e,ve(this,"config-changed",{config:e})}_updateTopLevel(e,t){const i={...this._config,[e]:t};"aqi"!==e&&"rating"!==e||(i.entities={...this._config.entities||{},[e]:t||""}),this._emitConfig(i)}_updateSlot(e,t){const i=Array.from({length:9},((e,t)=>({...Me(this._config,t)})));i[e]={...i[e],...t},this._emitConfig({...this._config,sensors:i})}_applyPreset(e,t){if(!t||!fe[t])return void this._updateSlot(e,{preset:""});const i=fe[t];this._updateSlot(e,{preset:t,icon:i.icon,label:i.label,tooltip:i.tooltip,min:i.min,max:i.max,green_min:i.green_min,green_max:i.green_max})}_renderSensorEditor(e,t){const i=Me(this._config,e),s=(o=i.icon)?"custom:pm1"===o||"custom:pm25"===o||"custom:pm10"===o?o:o.startsWith("/")||o.startsWith("http://")||o.startsWith("https://")||o.startsWith("data:")?"image":"mdi":"none";var o;return W`
      <div class="sensor-card">
        <div class="sensor-card-title">Sensor ${t}</div>
        <div class="sensor-body">
          <!-- 1. Entity -->
          <ha-selector
            .hass=${this.hass}
            .selector=${xe}
            .label=${"Entity"}
            .value=${i.entity||""}
            .required=${!1}
            @value-changed=${t=>{t.stopPropagation(),this._updateSlot(e,{entity:t.detail.value??""})}}
          ></ha-selector>

          <!-- 2. Sensor type -->
          <ha-selector
            .hass=${this.hass}
            .selector=${Se}
            .label=${"Sensor type"}
            .value=${i.preset||""}
            .required=${!1}
            @value-changed=${t=>{t.stopPropagation(),this._applyPreset(e,t.detail.value??"")}}
          ></ha-selector>

          <!-- 3. Icon Type & Icon label -->
          <div class="row">
            <ha-selector
              .hass=${this.hass}
              .selector=${Ee}
              .label=${"Icon Type"}
              .value=${s}
              .required=${!1}
              @value-changed=${t=>{t.stopPropagation();const s=t.detail.value;if("none"===s)this._updateSlot(e,{icon:""});else if("custom:pm1"===s||"custom:pm25"===s||"custom:pm10"===s)this._updateSlot(e,{icon:s});else if("mdi"===s){const t=i.icon.startsWith("mdi:")?i.icon:"mdi:blur";this._updateSlot(e,{icon:t})}else if("image"===s){const t=i.icon.startsWith("/")||i.icon.startsWith("http")?i.icon:"/local/";this._updateSlot(e,{icon:t})}}}
            ></ha-selector>

            <ha-selector
              .hass=${this.hass}
              .selector=${be}
              .label=${"Icon label"}
              .value=${i.label??""}
              .required=${!1}
              @value-changed=${t=>{t.stopPropagation(),this._updateSlot(e,{label:t.detail.value??""})}}
            ></ha-selector>
          </div>

          <!-- 4. Icon selector -->
          ${"mdi"===s?W`
                <ha-selector
                  .hass=${this.hass}
                  .selector=${we}
                  .label=${"Icon"}
                  .value=${i.icon||""}
                  .required=${!1}
                  @value-changed=${t=>{t.stopPropagation(),this._updateSlot(e,{icon:t.detail.value??""})}}
                ></ha-selector>
              `:""}

          ${"image"===s?W`
                <ha-selector
                  .hass=${this.hass}
                  .selector=${be}
                  .label=${"Icon URL"}
                  .value=${i.icon||""}
                  .required=${!1}
                  @value-changed=${t=>{t.stopPropagation(),this._updateSlot(e,{icon:t.detail.value??""})}}
                ></ha-selector>
              `:""}

          <!-- 5. Tooltip -->
          <ha-selector
            .hass=${this.hass}
            .selector=${be}
            .label=${"Tooltip"}
            .value=${i.tooltip||""}
            .required=${!1}
            @value-changed=${t=>{t.stopPropagation(),this._updateSlot(e,{tooltip:t.detail.value??""})}}
          ></ha-selector>

          <!-- 6. Min and Max display values -->
          <div class="row">
            <ha-selector
              .hass=${this.hass}
              .selector=${Ae}
              .label=${"Min"}
              .value=${i.min}
              .required=${!1}
              @value-changed=${t=>{t.stopPropagation();const i=t.detail.value;this._updateSlot(e,{min:""===i||null==i?0:Number(i)})}}
            ></ha-selector>

            <ha-selector
              .hass=${this.hass}
              .selector=${Ae}
              .label=${"Max"}
              .value=${i.max}
              .required=${!1}
              @value-changed=${t=>{t.stopPropagation();const i=t.detail.value;this._updateSlot(e,{max:""===i||null==i?100:Number(i)})}}
            ></ha-selector>
          </div>

          <!-- 7. Green min and Green max -->
          <div class="row">
            <ha-selector
              .hass=${this.hass}
              .selector=${Ae}
              .label=${"Green min"}
              .value=${i.green_min}
              .required=${!1}
              @value-changed=${t=>{t.stopPropagation();const s=t.detail.value;this._updateSlot(e,{green_min:""===s||null==s?i.min:Number(s)})}}
            ></ha-selector>

            <ha-selector
              .hass=${this.hass}
              .selector=${Ae}
              .label=${"Green max"}
              .value=${i.green_max}
              .required=${!1}
              @value-changed=${t=>{t.stopPropagation();const s=t.detail.value;this._updateSlot(e,{green_max:""===s||null==s?i.min+.5*(i.max-i.min):Number(s)})}}
            ></ha-selector>
          </div>
        </div>
      </div>
    `}render(){if(!this.hass||!this._config)return W``;const e=this._config.aqi??this._config.entities?.aqi??"",t=this._config.rating??this._config.entities?.rating??"",i=!1!==this._config.show_second_row,s=!0===this._config.show_third_row;return W`
      <div class="card-config">
        <!-- Title -->
        <div class="field-group">
          <div class="field-label">Title</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${be}
            .value=${this._config.title??""}
            .required=${!1}
            @value-changed=${e=>{e.stopPropagation(),this._updateTopLevel("title",e.detail.value??"")}}
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
                .selector=${be}
                .value=${this._config.width??""}
                .required=${!1}
                @value-changed=${e=>{e.stopPropagation(),this._updateTopLevel("width",e.detail.value??"")}}
              ></ha-selector>
            </div>

            <div class="field-group">
              <div class="field-label">Height</div>
              <ha-selector
                .hass=${this.hass}
                .selector=${be}
                .value=${this._config.height??""}
                .required=${!1}
                @value-changed=${e=>{e.stopPropagation(),this._updateTopLevel("height",e.detail.value??"")}}
              ></ha-selector>
            </div>
          </div>
        </div>

        <!-- Air Quality Index -->
        <div class="field-group">
          <div class="field-label">Air Quality Index</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${xe}
            .value=${e}
            .required=${!1}
            @value-changed=${e=>{e.stopPropagation(),this._updateTopLevel("aqi",e.detail.value??"")}}
          ></ha-selector>
        </div>

        <!-- Rating -->
        <div class="field-group">
          <div class="field-label">Rating</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${xe}
            .value=${t}
            .required=${!1}
            @value-changed=${e=>{e.stopPropagation(),this._updateTopLevel("rating",e.detail.value??"")}}
          ></ha-selector>
        </div>

        <!-- Recommendation Sensor -->
        <div class="field-group">
          <div class="field-label">Recommendation Sensor</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${xe}
            .value=${this._config.recommendation??""}
            .required=${!1}
            @value-changed=${e=>{e.stopPropagation(),this._updateTopLevel("recommendation",e.detail.value??"")}}
          ></ha-selector>
        </div>

        <!-- Row 1 -->
        <div class="row-section">
          <div class="row-header">
            <span>Row 1 — Sensors 1–3</span>
          </div>
          ${[0,1,2].map(((e,t)=>this._renderSensorEditor(e,t+1)))}
        </div>

        <!-- Row 2 -->
        <div class="row-section">
          <div class="row-header">
            <span>Row 2 — Sensors 1–3</span>
            <ha-switch
              .checked=${i}
              @change=${e=>{const t=e.target.checked;this._updateTopLevel("show_second_row",t)}}
            ></ha-switch>
          </div>
          ${i?[3,4,5].map(((e,t)=>this._renderSensorEditor(e,t+1))):""}
        </div>

        <!-- Row 3 -->
        <div class="row-section">
          <div class="row-header">
            <span>Row 3 — Sensors 1–3</span>
            <ha-switch
              .checked=${s}
              @change=${e=>{const t=e.target.checked;this._updateTopLevel("show_third_row",t)}}
            ></ha-switch>
          </div>
          ${s?[6,7,8].map(((e,t)=>this._renderSensorEditor(e,t+1))):""}
        </div>
      </div>
    `}};Pe.styles=n`
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
  `,ye([ue({attribute:!1})],Pe.prototype,"hass",void 0),ye([ue({state:!0,attribute:!1})],Pe.prototype,"_config",void 0),Pe=ye([(e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)})("air-quality-card-plus-editor")],Pe);var Ce=function(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};console.info("%c AIR QUALITY CARD PLUS  v1.1 ","color: white; background: green; font-weight: bold;");const Oe=["pm1","pm25","pm10","temperature","humidity","pressure",void 0,void 0,void 0];function Ne(e,t){return null==e||""===String(e)||Number.isNaN(Number(e))?t:Number(e)}function Me(e,t){const i=e.sensors?.[t];if(!i){const i=Oe[t],s=i?e.entities?.[i]:void 0;if(i&&s){const t=fe[i],o=e._customThresholds?.[i],r=Ne(o?.min,t?.min??0),n=Ne(o?.max,t?.max??100);return{preset:i,entity:s,icon:t?.icon??"",label:t?.label??"",tooltip:t?.tooltip??"",min:r,max:n,green_min:t?.green_min??r,green_max:t?.green_max??r+.5*(n-r)}}return{preset:"",entity:"",icon:"",label:"",tooltip:"",min:0,max:100,green_min:0,green_max:50}}const s=Ne(i.min,0),o=Ne(i.max,100),r=Ne(i.green_min,s),n=Ne(i.green_max,s+.5*(o-s));return{preset:i.preset??"",entity:i.entity??"",icon:i.icon??"",label:i.label??"",tooltip:i.tooltip??"",min:s,max:o,green_min:r,green_max:n}}const Te={"custom:pm1":F`
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
  `,"custom:pm25":F`
    <circle cx="8" cy="7" r="2.6" />
    <circle cx="17" cy="6.5" r="1.8" />
    <circle cx="6.5" cy="15.5" r="2.1" />
    <circle cx="14" cy="14.5" r="3" />
    <circle cx="18.5" cy="16.5" r="1.6" />
  `,"custom:pm10":F`
    <circle cx="8.5" cy="8" r="4.5" />
    <circle cx="17" cy="16" r="3.4" />
  `},ke={excellent:"/local/air-quality-card-plus/excellent.png",good:"/local/air-quality-card-plus/good.png",moderate:"/local/air-quality-card-plus/moderate.png",poor:"/local/air-quality-card-plus/poor.png",unhealthy:"/local/air-quality-card-plus/unhealthy.png"},Ue=[{max:25,color:"#79BC6A"},{max:50,color:"#BBCF4C"},{max:75,color:"#EEC20B"},{max:100,color:"#F29305"},{max:1/0,color:"#960018"}],Re={excellent:Ue[0].color,good:Ue[1].color,moderate:Ue[2].color,poor:Ue[3].color,unhealthy:Ue[4].color};class He extends ce{setConfig(e){if(!e)throw new Error("Invalid configuration");this.config=e}static getConfigElement(){return Promise.resolve(document.createElement("air-quality-card-plus-editor"))}static getStubConfig(){return{type:"custom:air-quality-card-plus",title:"Air Quality",show_second_row:!0,show_third_row:!1,sensors:[]}}_renderIconGraphic(e){return e?Te[e]?W`<svg class="dot-icon" viewBox="0 0 24 24">${Te[e]}</svg>`:e.startsWith("/")||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("data:")?W`<img class="custom-img-icon" src="${e}" alt="" />`:W`<ha-icon class="icon" icon="${e}"></ha-icon>`:W``}renderSlotBar(e){const t=Me(this.config,e),i=t.entity;if(!i||!this.hass)return W``;const s=this.hass.states[i];if(!s||"unavailable"===s.state||"unknown"===s.state)return W``;const o=s.state,r=Number(o),n=Number.isNaN(r)?o:(Math.round(100*(r+Number.EPSILON))/100).toFixed(2),a=s.attributes?.unit_of_measurement??"",l=t.min,c=t.max,h=c-l,d=Number.isNaN(r)||0===h?0:Math.max(0,Math.min(100,(r-l)/h*100)),p=function(e,t,i,s){const o=t-e;if(o<=0)return"linear-gradient(to right, #1e8449 0%, #27ae60 25%, #2ecc71 50%, #f1c40f 60%, #e67e22 75%, #c0392b 90%, #922b21 100%)";const r=Math.max(0,Math.min(100,(i-e)/o*100)),n=Math.max(r,Math.min(100,(s-e)/o*100)),a=[];if(r<=.5?(a.push("#1e8449 0%"),a.push(`#27ae60 ${(.5*n).toFixed(1)}%`),a.push(`#2ecc71 ${n.toFixed(1)}%`)):(a.push("#922b21 0%"),a.push(`#c0392b ${(.2*r).toFixed(1)}%`),a.push(`#e67e22 ${(.5*r).toFixed(1)}%`),a.push(`#f1c40f ${(.8*r).toFixed(1)}%`),a.push(`#2ecc71 ${r.toFixed(1)}%`),a.push(`#27ae60 ${(.5*(r+n)).toFixed(1)}%`),a.push(`#2ecc71 ${n.toFixed(1)}%`)),n<99.5){const e=100-n;a.push(`#f1c40f ${(n+.2*e).toFixed(1)}%`),a.push(`#e67e22 ${(n+.5*e).toFixed(1)}%`),a.push(`#c0392b ${(n+.8*e).toFixed(1)}%`),a.push("#922b21 100%")}return`linear-gradient(to right, ${a.join(", ")})`}(l,c,t.green_min,t.green_max),u=t.tooltip?.trim()??"",m=this._renderIconGraphic(t.icon?.trim()??""),g=t.label?.trim()??"";return W`
      <div
        class="bar-container"
        @click=${()=>ve(this,"hass-more-info",{entityId:i})}
        style="cursor: pointer;"
      >
        ${g?W`
              <div class="icon-stack">
                ${m}
                <span class="icon-label">${g}</span>
              </div>
            `:m}
        <div class="bar-wrapper">
          <div class="value-above">${n}${a?` ${a}`:""}</div>
          <div class="bar">
            <div class="gradient" style="background: ${p};"></div>
            <div class="mask" style="left: ${d}%; right: 0;"></div>
          </div>
          ${u?W`<div class="tooltip">${u}</div>`:""}
        </div>
      </div>
    `}render(){if(!this.config||!this.hass)return W``;const e=this.config.title?.trim()??"",t=!1!==this.config.show_second_row,i=!0===this.config.show_third_row,s=[0,1,2].map((e=>this.renderSlotBar(e))),o=t?[3,4,5].map((e=>this.renderSlotBar(e))):[],r=i?[6,7,8].map((e=>this.renderSlotBar(e))):[],n=this.config.rating??this.config.entities?.rating;let a="",l="moderate";if(n&&this.hass.states[n]){a=this.hass.states[n].state??"";const e=a.toLowerCase().trim();e&&Object.prototype.hasOwnProperty.call(ke,e)?l=e:console.warn(`[AirQualityCard] Unknown air quality rating: "${a}" — defaulting to "moderate"`)}const c=ke[l],h=this.config.aqi??this.config.entities?.aqi,d=h?this.hass.states[h]:void 0,p=d&&"unavailable"!==d.state?parseFloat(d.state):NaN,u=isNaN(p)?Re[l]??Re.moderate:function(e){const t=Ue.find((t=>e<=t.max));return(t??Ue[Ue.length-1]).color}(p),m=e&&a?`${e} - ${a}`:e||a;return W`
      <ha-card style="width: ${this.config.width||"100%"}; height: ${this.config.height||"auto"};">
        <div class="card-wrapper">
          <img class="badge" src="${c}" alt="${a}" style="border-color: ${u};" />
          <div class="header">
            <div class="title">${m}</div>
          </div>
          <div class="attributes">
            <div class="row">${s}</div>
            ${t?W`<div class="row">${o}</div>`:""}
            ${i?W`<div class="row">${r}</div>`:""}
          </div>
        </div>
        ${this.config.recommendation&&this.hass.states[this.config.recommendation]?W`
              <div class="recommendation-text">
                ${this.hass.states[this.config.recommendation].state}
              </div>
            `:""}
      </ha-card>
    `}}He.styles=n`
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
  `,Ce([ue({attribute:!1})],He.prototype,"hass",void 0),Ce([ue()],He.prototype,"config",void 0),customElements.get("air-quality-card-plus")||customElements.define("air-quality-card-plus",He),window.customCards=window.customCards||[],window.customCards.push({type:"air-quality-card-plus",name:"Air Quality Card Plus",description:"Displays air quality and weather sensors (up to 3 rows of 3 sensors) with a CAQI-colored ring.",preview:!0})})();