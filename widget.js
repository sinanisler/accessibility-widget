/*
===========================================
  ACCESSIBILITY WIDGET
  A comprehensive web accessibility tool
===========================================
*/

// ===========================================
// STYLES & VISUAL ASSETS
// ===========================================

// Styles for the accessibility widget
const styles = `
  #snn-accessibility-fixed-button {
    position: fixed !important;
    right: 20px !important;
    bottom: 20px !important;
    z-index: 9999;
  }
  #snn-accessibility-button {
    background: linear-gradient(135deg, #1e90ff, #00bfff);
    border: none;
    border-radius: 1000px;
    cursor: pointer;
    width: 55px;
    height: 55px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: 0.2s !important;
  }
  #snn-accessibility-button:hover {
    transform: scale(1.05);
  }
  #snn-accessibility-button:focus {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
  #snn-accessibility-button svg {
    width: 28px;
    height: 28px;
    fill: #fff;
    pointer-events: none;
  }
  #snn-accessibility-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 330px;
    height: 100vh;
    overflow-y: auto;
    background-color: #f9f9f9;
    padding: 0 10px 10px 10px;
    display: none;
    font-family: Arial, sans-serif;
    z-index: 9999;
    scrollbar-width: thin;
  }
  .snn-accessibility-option {
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 14px 10px;
    width: calc(100% - 20px);
    margin-left:10px;
    margin-right:10px;
    background-color: #e6e6e6;
    color: #333;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.2s;
    line-height:1 !important;
  }
  .snn-accessibility-option:hover {
    background-color: #d4d4d4;
  }
  .snn-accessibility-option.active {
    background-color: #1e90ff;
    color: #fff;
  }
  .snn-icon {
    margin-right: 12px;
    width: 28px;
    height: 28px;
  }
  .snn-icon svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
  .snn-close {
    background: none;
    border: none;
    font-size: 44px;
    color: #fff;
    cursor: pointer;
    margin-left: auto;
    line-height:1;
    border-radius:1000px;
    width:44px;
    height:44px;
  }
  .snn-close:focus {
    outline:solid 2px #fff;
  }
  .snn-close:hover {
    color: #333;
  }
  .snn-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding:10px;
    background:#1e90ff;
    height:55px;
  }
  .snn-title {
    margin: 0;
    font-size: 22px;
    color: #fff;
    line-height:1 !important;
    margin-left:5px;
    font-weight:500;
  }
  /* Accessibility feature styles */
  .snn-high-contrast {
    background-color: #000 !important;
    color: #fff !important;
    filter: contrast(1.5) !important;
  }
  .snn-high-contrast body *{
    background-color: #000 !important;
    color: #fff !important;
    filter: contrast(1.5) !important;
  }

  .snn-high-contrast #snn-accessibility-menu{
    filter: contrast(0.7) !important;
  }
  .snn-bigger-text * {
    font-size: 24px !important;
  }
  .snn-text-spacing *:not(#snn-accessibility-menu *, #snn-accessibility-fixed-button *, #snn-accessibility-button *, .snn-accessibility-option *) {
    letter-spacing: 0.2em !important;
    word-spacing: 0.3em !important;
  }
  .snn-pause-animations * {
    animation: none !important;
    transition: none !important;
  }
  .snn-dyslexia-font {
    font-family: 'OpenDyslexic', Arial, sans-serif !important;
  }
  .snn-line-height *:not(#snn-accessibility-menu *, #snn-accessibility-fixed-button *, #snn-accessibility-button *, .snn-accessibility-option *) {
    line-height: 2.5 !important;
  }
  .snn-text-align *:not(#snn-accessibility-menu *, #snn-accessibility-fixed-button *, #snn-accessibility-button *, .snn-accessibility-option *) {
    text-align: left !important;
  }
  .snn-bigger-cursor {
    cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAyNCAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiAxVjM1TDEwIDI3SDE4TDIgMVoiIGZpbGw9IiMwMDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9zdmc+'), auto !important;
  }
  
  /* Reading Mode */
  .snn-reading-mode {
    background: #f9f9f9 !important;
    color: #333 !important;
    line-height: 1.6 !important;
    font-family: Georgia, serif !important;
  }
  .snn-reading-mode * {
    background: transparent !important;
    color: inherit !important;
    font-family: inherit !important;
    line-height: inherit !important;
  }
  .snn-reading-mode h1, .snn-reading-mode h2, .snn-reading-mode h3, 
  .snn-reading-mode h4, .snn-reading-mode h5, .snn-reading-mode h6 {
    color: #222 !important;
    font-weight: bold !important;
  }
  .snn-reading-mode img, .snn-reading-mode video, .snn-reading-mode iframe,
  .snn-reading-mode aside, .snn-reading-mode nav, .snn-reading-mode footer,
  .snn-reading-mode header, .snn-reading-mode .sidebar, .snn-reading-mode .menu {
    display: none !important;
  }
  
  /* Font Selection */
  .snn-font-arial {
    font-family: Arial, sans-serif !important;
  }
  .snn-font-arial * {
    font-family: Arial, sans-serif !important;
  }
  .snn-font-times {
    font-family: 'Times New Roman', serif !important;
  }
  .snn-font-times * {
    font-family: 'Times New Roman', serif !important;
  }
  .snn-font-verdana {
    font-family: Verdana, sans-serif !important;
  }
  .snn-font-verdana * {
    font-family: Verdana, sans-serif !important;
  }
  
  /* Color Filters */
  .snn-filter-protanopia {
    filter: url('#protanopia-filter') !important;
  }
  .snn-filter-deuteranopia {
    filter: url('#deuteranopia-filter') !important;
  }
  .snn-filter-tritanopia {
    filter: url('#tritanopia-filter') !important;
  }
  .snn-filter-grayscale {
    filter: grayscale(100%) !important;
  }
  
  /* Enhanced Focus */
  .snn-enhanced-focus *:focus {
    outline: 3px solid #ff6b35 !important;
    outline-offset: 2px !important;
    box-shadow: 0 0 0 5px rgba(255, 107, 53, 0.3) !important;
  }
  
  /* Reduced Motion */
  .snn-reduced-motion * {
    animation: none !important;
    transition: none !important;
  }
  .snn-reduced-motion *::before,
  .snn-reduced-motion *::after {
    animation: none !important;
    transition: none !important;
  }
`;

// ===========================================
// SVG ICONS
// ===========================================

// SVG icons
const icons = {
  buttonsvg: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="" height="" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 2713 2713" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"><![CDATA[.fil1 {fill:#118ED6} .fil0 {fill:white}]]></style></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"/><g id="_275060008"><circle class="fil0" cx="1356" cy="1356" r="1356"/><path class="fil1" d="M1305 315c-143,32 -237,147 -205,319 25,141 143,240 312,213 131,-21 237,-160 206,-324 -23,-125 -156,-243 -313,-208zm-150 1699l0 -340c1,-75 5,-367 1,-417 -9,-113 -93,-177 -174,-250 -19,-17 -33,-31 -53,-50 -19,-18 -35,-30 -54,-49 -19,-18 -34,-29 -53,-50 -38,-40 -162,-118 -98,-188 60,-65 124,34 188,86l111 99c11,10 17,13 27,25 9,12 16,18 28,28 35,30 72,64 125,85 122,50 214,44 334,-14 71,-34 103,-68 150,-113 9,-9 17,-15 27,-24 20,-18 39,-34 56,-51l108 -103c19,-18 29,-36 65,-39 33,-3 58,10 67,36 11,30 3,63 -13,83l-273 254c-40,31 -76,64 -109,98 -38,41 -54,80 -55,153 -3,243 -1,489 0,733 0,3 0,5 0,8 0,0 0,0 0,0 0,184 149,333 333,333 61,0 118,-17 167,-45 24,-18 48,-36 67,-51 39,-32 140,-145 171,-186 11,-16 19,-26 30,-42 104,-151 178,-317 209,-505 39,-242 -12,-506 -119,-712 -36,-69 -69,-123 -108,-178 -12,-15 -20,-24 -32,-39 -28,-36 -67,-84 -99,-115 -69,-66 -76,-68 -158,-129 -53,-39 -113,-70 -182,-103 -140,-67 -297,-100 -472,-102 -180,-2 -322,37 -472,97 -55,22 -93,42 -143,72 -55,33 -73,43 -127,87 -47,38 -70,60 -111,104 -6,6 -12,10 -18,17 -7,7 -9,13 -16,20 -8,9 -10,8 -17,18 -80,101 -91,116 -158,235 -64,113 -121,286 -136,435 -18,190 1,329 58,498 46,134 132,283 204,367 13,15 21,26 32,40 34,43 103,105 146,139 7,6 14,11 22,17 54,38 120,61 192,61 183,0 332,-149 332,-333l0 0z"/></g></g></svg>`,
  highContrast: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#000"/><path d="M32 2a30 30 0 000 60V2z" fill="#fff"/></svg>`,
  biggerText: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 8L8 56h12l6-12h24l6 12h12L32 8zm-6 36L32 20l6 24H26z"/></svg>`,
  textSpacing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M10 16h44v4H10zm0 12h44v4H10zm0 12h44v4H10zm0 12h44v4H10z"/></svg>`,
  pauseAnimations: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="16" y="12" width="10" height="40"/><rect x="38" y="12" width="10" height="40"/></svg>`,
  hideImages: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 12C16 12 4 32 4 32s12 20 28 20 28-20 28-20S48 12 32 12zm0 32a12 12 0 1112-12 12 12 0 01-12 12z"/><circle cx="32" cy="32" r="8"/></svg>`,
  dyslexiaFont: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M12 8v48h12a16 16 0 000-32h-8v-8h16V8H12zm12 24a8 8 0 010 16h-4V32h4zM40 8v48h12V8H40z"/></svg>`,
  biggerCursor: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M12 4v56l16-16h24L12 4z"/></svg>`,
  lineHeight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M16 16h32v4H16zm0 12h32v4H16zm0 12h32v4H16zm0 12h32v4H16zM8 8l8 8-8 8V8zm0 32l8 8-8 8V40z"/></svg>`,
  textAlign: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M10 16h44v4H10zm0 12h44v4H10zm0 12h44v4H10zm0 12h44v4H10z"/></svg>`,
  screenReader: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M16 24 L24 24 L32 16 L32 48 L24 40 L16 40 Z" fill="#333" stroke="#555" stroke-width="2"/><path d="M36 20 C42 24, 42 40, 36 44" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M36 12 C48 24, 48 40, 36 52" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round"/><rect x="28" y="48" width="8" height="8" fill="#ccc"/></svg>`,
  resetAll: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 12a20 20 0 100 40 20 20 0 000-40z" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><polyline points="44,32 32,20 32,32" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><line x1="44" y1="32" x2="48" y2="28" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="44" y1="32" x2="48" y2="36" stroke="#333" stroke-width="2" stroke-linecap="round"/><path d="M32 12a20 20 0 0140 0" fill="none" stroke="#333" stroke-width="4" transform="rotate(180 32 32)"/></svg>`,
  voiceControl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 44a12 12 0 0012-12V20a12 12 0 10-24 0v12a12 12 0 0012 12z" fill="#333"/><path d="M20 32h24v4H20z" fill="#555"/><path d="M32 48v8" stroke="#555" stroke-width="4" stroke-linecap="round"/></svg>`,
  readingMode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="8" y="8" width="48" height="48" rx="4" fill="none" stroke="#333" stroke-width="2"/><path d="M16 20h32v4H16zm0 8h32v4H16zm0 8h24v4H16z"/></svg>`,
  fontSelection: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text x="32" y="40" font-family="serif" font-size="24" text-anchor="middle" fill="#333">Aa</text><path d="M8 48h48v2H8z"/></svg>`,
  colorFilter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="24" fill="none" stroke="#333" stroke-width="2"/><path d="M32 8a24 24 0 000 48V8z" fill="#f00" opacity="0.3"/><path d="M32 8a24 24 0 000 48" fill="none" stroke="#333" stroke-width="2" stroke-dasharray="4,2"/></svg>`,
  enhancedFocus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="16" y="16" width="32" height="32" rx="4" fill="none" stroke="#ff6b35" stroke-width="3"/><path d="M8 8l8 8M56 8l-8 8M8 56l8-8M56 56l-8-8" stroke="#ff6b35" stroke-width="2" stroke-linecap="round"/></svg>`,
  reducedMotion: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="16" y="24" width="8" height="16" fill="#333"/><rect x="28" y="24" width="8" height="16" fill="#333"/><rect x="40" y="24" width="8" height="16" fill="#333"/></svg>`,
};

// ===========================================
// CORE UTILITY FUNCTIONS
// ===========================================

// Inject styles and SVG filters into the document
function injectStyles() {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
  
  // Add SVG color blindness filters
  const svgFilters = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgFilters.style.position = 'absolute';
  svgFilters.style.width = '0';
  svgFilters.style.height = '0';
  svgFilters.innerHTML = `
    <defs>
      <filter id="protanopia-filter">
        <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/>
      </filter>
      <filter id="deuteranopia-filter">
        <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/>
      </filter>
      <filter id="tritanopia-filter">
        <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/>
      </filter>
    </defs>
  `;
  document.body.appendChild(svgFilters);
}

// ===========================================
// PERFORMANCE OPTIMIZATION
// ===========================================

// Cache for DOM elements to improve performance
const domCache = {
  body: document.body,
  documentElement: document.documentElement,
  images: null,
  lastImageUpdate: 0,
  getImages: function() {
    const now = Date.now();
    if (!this.images || now - this.lastImageUpdate > 5000) {
      this.images = document.querySelectorAll('img');
      this.lastImageUpdate = now;
    }
    return this.images;
  }
};

// Apply saved settings from localStorage (optimized)
function applySettings() {
  const settings = [
    { key: 'biggerCursor', className: 'snn-bigger-cursor' },
    { key: 'biggerText', className: 'snn-bigger-text' },
    { key: 'highContrast', className: 'snn-high-contrast', target: domCache.documentElement },
    { key: 'dyslexiaFont', className: 'snn-dyslexia-font' },
    { key: 'lineHeight', className: 'snn-line-height' },
    { key: 'textAlign', className: 'snn-text-align' },
    { key: 'pauseAnimations', className: 'snn-pause-animations' },
    { key: 'textSpacing', className: 'snn-text-spacing' },
    { key: 'readingMode', className: 'snn-reading-mode' },
    { key: 'enhancedFocus', className: 'snn-enhanced-focus' },
    { key: 'reducedMotion', className: 'snn-reduced-motion' },
  ];

  // Batch DOM operations for better performance
  const bodyClassesToAdd = [];
  const bodyClassesToRemove = [];
  const docClassesToAdd = [];
  const docClassesToRemove = [];

  settings.forEach(({ key, className, target = domCache.body }) => {
    const isActive = localStorage.getItem(key) === 'true';
    if (className) {
      if (target === domCache.documentElement) {
        if (isActive) {
          docClassesToAdd.push(className);
        } else {
          docClassesToRemove.push(className);
        }
      } else {
        if (isActive) {
          bodyClassesToAdd.push(className);
        } else {
          bodyClassesToRemove.push(className);
        }
      }
    }
  });

  // Apply all class changes at once
  if (bodyClassesToAdd.length > 0) {
    domCache.body.classList.add(...bodyClassesToAdd);
  }
  if (bodyClassesToRemove.length > 0) {
    domCache.body.classList.remove(...bodyClassesToRemove);
  }
  if (docClassesToAdd.length > 0) {
    domCache.documentElement.classList.add(...docClassesToAdd);
  }
  if (docClassesToRemove.length > 0) {
    domCache.documentElement.classList.remove(...docClassesToRemove);
  }

  // Handle font selection
  const fontClasses = ['snn-font-arial', 'snn-font-times', 'snn-font-verdana'];
  domCache.body.classList.remove(...fontClasses);
  const selectedFont = localStorage.getItem('fontSelection');
  if (selectedFont) {
    domCache.body.classList.add(`snn-font-${selectedFont}`);
  }

  // Handle color filters
  const filterClasses = ['snn-filter-protanopia', 'snn-filter-deuteranopia', 'snn-filter-tritanopia', 'snn-filter-grayscale'];
  domCache.documentElement.classList.remove(...filterClasses);
  const selectedFilter = localStorage.getItem('colorFilter');
  if (selectedFilter) {
    domCache.documentElement.classList.add(`snn-filter-${selectedFilter}`);
  }

  // Handle images with cached query
  const hideImages = localStorage.getItem('hideImages') === 'true';
  const displayStyle = hideImages ? 'none' : '';
  domCache.getImages().forEach((img) => {
    img.style.display = displayStyle;
  });

  if (screenReader.active && screenReader.isSupported) {
    document.addEventListener('focusin', screenReader.handleFocus);
  }

  if (voiceControl.isActive && voiceControl.isSupported) {
    voiceControl.startListening();
  }
}

// ===========================================
// UI COMPONENTS
// ===========================================

// Create the accessibility button
function createAccessibilityButton() {
  const buttonContainer = document.createElement('div');
  buttonContainer.id = 'snn-accessibility-fixed-button';

  const button = document.createElement('button');
  button.id = 'snn-accessibility-button';
  button.innerHTML = icons.buttonsvg;
  button.setAttribute('aria-label', 'Accessibility Menu');

  button.addEventListener('click', function () {
    toggleMenu();
  });
  
  button.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  buttonContainer.appendChild(button);
  document.body.appendChild(buttonContainer);
}

// Reset all accessibility settings
function resetAccessibilitySettings() {
  const keys = [
    'biggerCursor',
    'biggerText',
    'dyslexiaFont',
    'hideImages',
    'lineHeight',
    'pauseAnimations',
    'screenReader',
    'textAlign',
    'textSpacing',
    'highContrast',
    'voiceControl',
    'readingMode',
    'enhancedFocus',
    'reducedMotion',
    'fontSelection',
    'colorFilter',
  ];
  keys.forEach((key) => localStorage.removeItem(key));

  // Remove all CSS classes
  const cssClasses = [
    'snn-bigger-cursor',
    'snn-bigger-text',
    'snn-dyslexia-font',
    'snn-pause-animations',
    'snn-text-spacing',
    'snn-line-height',
    'snn-text-align',
    'snn-reading-mode',
    'snn-enhanced-focus',
    'snn-reduced-motion',
    'snn-font-arial',
    'snn-font-times',
    'snn-font-verdana'
  ];
  cssClasses.forEach(cls => document.body.classList.remove(cls));

  const documentClasses = [
    'snn-high-contrast',
    'snn-filter-protanopia',
    'snn-filter-deuteranopia',
    'snn-filter-tritanopia',
    'snn-filter-grayscale'
  ];
  documentClasses.forEach(cls => document.documentElement.classList.remove(cls));

  domCache.getImages().forEach((img) => (img.style.display = ''));

  if (screenReader.active) {
    screenReader.toggle(false);
  }

  if (voiceControl.isActive) {
    voiceControl.toggle(false);
  }

  applySettings();

  const buttons = document.querySelectorAll('#snn-accessibility-menu .snn-accessibility-option');
  buttons.forEach((button) => {
    button.classList.remove('active');
    button.setAttribute('aria-pressed', 'false');
  });
}

// Create toggle buttons for accessibility options
function createToggleButton(
  buttonText,
  localStorageKey,
  className,
  targetElement = document.body,
  customToggleFunction = null,
  iconSVG = '',
  requiresFeature = null
) {
  const button = document.createElement('button');
  button.innerHTML = `<span class="snn-icon">${iconSVG}</span><span class="snn-button-text">${buttonText}</span>`;
  button.setAttribute('data-key', localStorageKey);
  button.setAttribute('aria-label', buttonText);
  button.classList.add('snn-accessibility-option');

  // Check if feature is supported
  if (requiresFeature && !requiresFeature.isSupported) {
    button.disabled = true;
    button.setAttribute('title', `${buttonText} is not supported in this browser`);
    button.style.opacity = '0.5';
    return button;
  }

  const isActive = localStorage.getItem(localStorageKey) === 'true';
  button.setAttribute('aria-pressed', isActive);
  button.setAttribute('role', 'switch');
  if (isActive) {
    button.classList.add('active');
  }

  button.addEventListener('click', function () {
    handleToggle();
  });
  
  button.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  });
  
  function handleToggle() {
    const newIsActive = localStorage.getItem(localStorageKey) !== 'true';
    
    // If there's a custom toggle function, call it and check if it succeeded
    if (customToggleFunction) {
      const success = customToggleFunction(newIsActive);
      if (success === false) {
        // Feature not supported or failed
        return;
      }
    }
    
    localStorage.setItem(localStorageKey, newIsActive);
    button.setAttribute('aria-pressed', newIsActive);

    if (newIsActive) {
      button.classList.add('active');
      if (className) {
        targetElement.classList.add(className);
      }
    } else {
      button.classList.remove('active');
      if (className) {
        targetElement.classList.remove(className);
      }
    }
  }

  return button;
}

// Create special action buttons (for cycling through options)
function createActionButton(buttonText, actionFunction, iconSVG) {
  const button = document.createElement('button');
  button.innerHTML = `<span class="snn-icon">${iconSVG}</span><span class="snn-button-text">${buttonText}: <span class="snn-status">Default</span></span>`;
  button.setAttribute('aria-label', buttonText);
  button.classList.add('snn-accessibility-option');
  
  // Update initial status
  updateActionButtonStatus(button, buttonText, actionFunction);
  
  button.addEventListener('click', function () {
    const result = actionFunction();
    if (result) {
      const statusSpan = button.querySelector('.snn-status');
      statusSpan.textContent = result;
    }
  });
  
  button.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const result = actionFunction();
      if (result) {
        const statusSpan = button.querySelector('.snn-status');
        statusSpan.textContent = result;
      }
    }
  });
  
  return button;
}

// Update action button status on page load
function updateActionButtonStatus(button, buttonText, actionFunction) {
  const statusSpan = button.querySelector('.snn-status');
  
  if (buttonText.includes('Font')) {
    const currentFont = localStorage.getItem('fontSelection');
    statusSpan.textContent = currentFont ? currentFont.charAt(0).toUpperCase() + currentFont.slice(1) : 'Default';
  } else if (buttonText.includes('Color')) {
    const currentFilter = localStorage.getItem('colorFilter');
    statusSpan.textContent = currentFilter ? currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1) : 'None';
  }
}

// ===========================================
// FEATURE TOGGLE FUNCTIONS
// ===========================================

// Function to hide or show images (optimized)
function toggleHideImages(isActive) {
  const displayStyle = isActive ? 'none' : '';
  domCache.getImages().forEach((img) => {
    img.style.display = displayStyle;
  });
}

// Font selection handler (optimized)
function handleFontSelection() {
  const fonts = ['arial', 'times', 'verdana'];
  const currentFont = localStorage.getItem('fontSelection') || 'default';
  const currentIndex = fonts.indexOf(currentFont);
  const nextIndex = (currentIndex + 1) % (fonts.length + 1); // +1 for default
  
  // Remove all font classes in one operation
  const fontClasses = ['snn-font-arial', 'snn-font-times', 'snn-font-verdana'];
  domCache.body.classList.remove(...fontClasses);
  
  if (nextIndex === fonts.length) {
    // Default font
    localStorage.removeItem('fontSelection');
    return 'Default Font';
  } else {
    const selectedFont = fonts[nextIndex];
    localStorage.setItem('fontSelection', selectedFont);
    domCache.body.classList.add(`snn-font-${selectedFont}`);
    return selectedFont.charAt(0).toUpperCase() + selectedFont.slice(1);
  }
}

// Color filter handler (optimized)
function handleColorFilter() {
  const filters = ['protanopia', 'deuteranopia', 'tritanopia', 'grayscale'];
  const currentFilter = localStorage.getItem('colorFilter') || 'none';
  const currentIndex = filters.indexOf(currentFilter);
  const nextIndex = (currentIndex + 1) % (filters.length + 1); // +1 for none
  
  // Remove all filter classes in one operation
  const filterClasses = ['snn-filter-protanopia', 'snn-filter-deuteranopia', 'snn-filter-tritanopia', 'snn-filter-grayscale'];
  domCache.documentElement.classList.remove(...filterClasses);
  
  if (nextIndex === filters.length) {
    // No filter
    localStorage.removeItem('colorFilter');
    return 'No Filter';
  } else {
    const selectedFilter = filters[nextIndex];
    localStorage.setItem('colorFilter', selectedFilter);
    domCache.documentElement.classList.add(`snn-filter-${selectedFilter}`);
    return selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1);
  }
}

// ===========================================
// ACCESSIBILITY FEATURES
// ===========================================

// Screen reader functionality
const screenReader = {
  active: localStorage.getItem('screenReader') === 'true',
  isSupported: 'speechSynthesis' in window,
  handleFocus: function (event) {
    if (screenReader.active && screenReader.isSupported) {
      try {
        const content = event.target.innerText || event.target.alt || event.target.title || '';
        if (content.trim() !== '') {
          window.speechSynthesis.cancel();
          const speech = new SpeechSynthesisUtterance(content);
          speech.lang = 'en-US';
          speech.onerror = function(event) {
            console.warn('Speech synthesis error:', event.error);
          };
          window.speechSynthesis.speak(speech);
        }
      } catch (error) {
        console.warn('Screen reader error:', error);
      }
    }
  },
  toggle: function (isActive) {
    if (!screenReader.isSupported) {
      console.warn('Speech synthesis is not supported in this browser.');
      return false;
    }
    
    screenReader.active = isActive;
    localStorage.setItem('screenReader', isActive);
    
    try {
      if (isActive) {
        document.addEventListener('focusin', screenReader.handleFocus);
        const feedbackSpeech = new SpeechSynthesisUtterance('Screen reader on');
        feedbackSpeech.lang = 'en-US';
        feedbackSpeech.onerror = function(event) {
          console.warn('Speech synthesis feedback error:', event.error);
        };
        window.speechSynthesis.speak(feedbackSpeech);
      } else {
        document.removeEventListener('focusin', screenReader.handleFocus);
        window.speechSynthesis.cancel();
        const feedbackSpeech = new SpeechSynthesisUtterance('Screen reader off');
        feedbackSpeech.lang = 'en-US';
        feedbackSpeech.onerror = function(event) {
          console.warn('Speech synthesis feedback error:', event.error);
        };
        window.speechSynthesis.speak(feedbackSpeech);
      }
    } catch (error) {
      console.warn('Screen reader toggle error:', error);
      return false;
    }
    
    return true;
  },
};

// Voice control functionality
const voiceControl = {
  isActive: localStorage.getItem('voiceControl') === 'true',
  recognition: null,
  isSupported: 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window,
  retryCount: 0,
  maxRetries: 3,
  toggle: function (isActive) {
    if (!voiceControl.isSupported) {
      console.warn('Speech Recognition API is not supported in this browser.');
      return false;
    }
    
    voiceControl.isActive = isActive;
    localStorage.setItem('voiceControl', isActive);
    
    try {
      if (isActive) {
        voiceControl.startListening();
      } else {
        if (voiceControl.recognition) {
          voiceControl.recognition.stop();
          voiceControl.recognition = null;
        }
        voiceControl.retryCount = 0;
      }
    } catch (error) {
      console.warn('Voice control toggle error:', error);
      return false;
    }
    
    return true;
  },
  startListening: function () {
    if (!voiceControl.isSupported) {
      return;
    }
    
    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      voiceControl.recognition = new SpeechRecognition();
      voiceControl.recognition.interimResults = false;
      voiceControl.recognition.lang = 'en-US';
      voiceControl.recognition.continuous = false;

      voiceControl.recognition.onstart = function () {
        console.log('Voice control activated');
        voiceControl.retryCount = 0;
      };

      voiceControl.recognition.onresult = function (event) {
        try {
          const command = event.results[0][0].transcript.toLowerCase();
          voiceControl.handleVoiceCommand(command);
        } catch (error) {
          console.warn('Voice command processing error:', error);
        }
      };

      voiceControl.recognition.onerror = function (event) {
        console.warn('Speech recognition error:', event.error);
        if (event.error === 'no-speech' && voiceControl.retryCount < voiceControl.maxRetries) {
          voiceControl.retryCount++;
          setTimeout(() => {
            if (voiceControl.isActive) {
              voiceControl.startListening();
            }
          }, 1000);
        }
      };

      voiceControl.recognition.onend = function () {
        if (voiceControl.isActive && voiceControl.retryCount < voiceControl.maxRetries) {
          setTimeout(() => {
            if (voiceControl.isActive) {
              voiceControl.startListening();
            }
          }, 100);
        }
      };

      voiceControl.recognition.start();
    } catch (error) {
      console.warn('Voice control initialization error:', error);
    }
  },
  handleVoiceCommand: function (command) {
    console.log(`Received command: ${command}`);
    
    try {
      const commandMap = {
        'show menu': 'snn-accessibility-button',
        'open menu': 'snn-accessibility-button',
        'accessibility menu': 'snn-accessibility-button',
        'high contrast': 'highContrast',
        'bigger text': 'biggerText',
        'large text': 'biggerText',
        'text spacing': 'textSpacing',
        'pause animations': 'pauseAnimations',
        'stop animations': 'pauseAnimations',
        'hide images': 'hideImages',
        'dyslexia friendly': 'dyslexiaFont',
        'dyslexia font': 'dyslexiaFont',
        'bigger cursor': 'biggerCursor',
        'large cursor': 'biggerCursor',
        'line height': 'lineHeight',
        'align text': 'textAlign',
        'text align': 'textAlign',
        'screen reader': 'screenReader',
        'voice command': 'voiceControl',
        'voice control': 'voiceControl',
        'reset all': 'resetAll',
        'reset everything': 'resetAll',
      };

      if (command === 'show menu' || command === 'open menu' || command === 'accessibility menu') {
        if (!menuCache.button) menuCache.init();
        if (menuCache.button) {
          menuCache.button.click();
        }
        return;
      }

      if (command === 'reset all' || command === 'reset everything') {
        resetAccessibilitySettings();
        return;
      }

      const localStorageKey = commandMap[command];
      if (localStorageKey) {
        // Use cached menu reference if available
        if (!menuCache.menu) menuCache.init();
        const button = menuCache.menu?.querySelector(
          `.snn-accessibility-option[data-key='${localStorageKey}']`
        );
        if (button) {
          button.click();
        } else {
          console.log('Button not found for command:', command);
        }
      } else {
        console.log('Command not recognized:', command);
      }
    } catch (error) {
      console.warn('Voice command handling error:', error);
    }
  },
};

// Create the accessibility menu
function createAccessibilityMenu() {
  const menu = document.createElement('div');
  menu.id = 'snn-accessibility-menu';
  menu.style.display = 'none';
  menu.setAttribute('role', 'dialog');
  menu.setAttribute('aria-labelledby', 'snn-accessibility-title');
  menu.setAttribute('aria-hidden', 'true');

  const header = document.createElement('div');
  header.classList.add('snn-header');

  const title = document.createElement('h2');
  title.classList.add('snn-title');
  title.id = 'snn-accessibility-title';
  title.textContent = 'Accessibility Tools';

  const closeButton = document.createElement('button');
  closeButton.className = 'snn-close';
  closeButton.innerHTML = '&times;';
  closeButton.setAttribute('aria-label', 'Close Accessibility Menu');

  closeButton.addEventListener('click', function () {
    closeMenu();
  });
  
  closeButton.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeMenu();
    }
  });

  header.appendChild(title);
  header.appendChild(closeButton);
  menu.appendChild(header);

  // Add accessibility options
  const options = [
    {
      text: 'Screen Reader',
      key: 'screenReader',
      customToggleFunction: screenReader.toggle,
      icon: icons.screenReader,
      requiresFeature: screenReader,
    },
    {
      text: 'Voice Command',
      key: 'voiceControl',
      customToggleFunction: voiceControl.toggle,
      icon: icons.voiceControl,
      requiresFeature: voiceControl,
    },
    {
      text: 'High Contrast',
      key: 'highContrast',
      className: 'snn-high-contrast',
      icon: icons.highContrast,
      target: document.documentElement,
    },
    {
      text: 'Bigger Text',
      key: 'biggerText',
      className: 'snn-bigger-text',
      icon: icons.biggerText,
    },
    {
      text: 'Text Spacing',
      key: 'textSpacing',
      className: 'snn-text-spacing',
      icon: icons.textSpacing,
    },
    {
      text: 'Pause Animations',
      key: 'pauseAnimations',
      className: 'snn-pause-animations',
      icon: icons.pauseAnimations,
    },
    {
      text: 'Hide Images',
      key: 'hideImages',
      icon: icons.hideImages,
      customToggleFunction: toggleHideImages,
    },
    {
      text: 'Dyslexia Friendly',
      key: 'dyslexiaFont',
      className: 'snn-dyslexia-font',
      icon: icons.dyslexiaFont,
    },
    {
      text: 'Bigger Cursor',
      key: 'biggerCursor',
      className: 'snn-bigger-cursor',
      icon: icons.biggerCursor,
    },
    {
      text: 'Line Height',
      key: 'lineHeight',
      className: 'snn-line-height',
      icon: icons.lineHeight,
    },
    {
      text: 'Text Align',
      key: 'textAlign',
      className: 'snn-text-align',
      icon: icons.textAlign,
    },
  ];
  
  // Add regular toggle options
  options.forEach((option) => {
    const button = createToggleButton(
      option.text,
      option.key,
      option.className,
      option.target,
      option.customToggleFunction,
      option.icon,
      option.requiresFeature
    );
    menu.appendChild(button);
  });
  
  // Add new accessibility features
  const newFeatures = [
    {
      text: 'Reading Mode',
      key: 'readingMode',
      className: 'snn-reading-mode',
      icon: icons.readingMode,
    },
    {
      text: 'Enhanced Focus',
      key: 'enhancedFocus',
      className: 'snn-enhanced-focus',
      icon: icons.enhancedFocus,
    },
    {
      text: 'Reduced Motion',
      key: 'reducedMotion',
      className: 'snn-reduced-motion',
      icon: icons.reducedMotion,
    },
  ];
  
  newFeatures.forEach((feature) => {
    const button = createToggleButton(
      feature.text,
      feature.key,
      feature.className,
      feature.target,
      feature.customToggleFunction,
      feature.icon,
      feature.requiresFeature
    );
    menu.appendChild(button);
  });
  
  // Add action buttons (font selection and color filters)
  const fontButton = createActionButton('Font Selection', handleFontSelection, icons.fontSelection);
  menu.appendChild(fontButton);
  
  const colorButton = createActionButton('Color Filter', handleColorFilter, icons.colorFilter);
  menu.appendChild(colorButton);

  // Reset All Button
  const resetButton = document.createElement('button');
  resetButton.innerHTML = `<span class="snn-icon">${icons.resetAll}</span><span class="snn-button-text">Reset All</span>`;
  resetButton.setAttribute('aria-label', 'Reset All Accessibility Settings');
  resetButton.classList.add('snn-accessibility-option');
  resetButton.addEventListener('click', resetAccessibilitySettings);
  menu.appendChild(resetButton);

  document.body.appendChild(menu);
}

// ===========================================
// MENU MANAGEMENT
// ===========================================

// Cache for menu elements
const menuCache = {
  menu: null,
  button: null,
  closeButton: null,
  init: function() {
    this.menu = document.getElementById('snn-accessibility-menu');
    this.button = document.getElementById('snn-accessibility-button');
    this.closeButton = this.menu?.querySelector('.snn-close');
  }
};

// Menu control functions (optimized)
function toggleMenu() {
  if (!menuCache.menu) menuCache.init();
  const isOpen = menuCache.menu.style.display === 'block';
  
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  if (!menuCache.menu) menuCache.init();
  menuCache.menu.style.display = 'block';
  menuCache.menu.setAttribute('aria-hidden', 'false');
  
  if (menuCache.closeButton) {
    menuCache.closeButton.focus();
  }
  
  // Add keyboard navigation
  document.addEventListener('keydown', handleMenuKeyboard);
}

function closeMenu() {
  if (!menuCache.menu) menuCache.init();
  menuCache.menu.style.display = 'none';
  menuCache.menu.setAttribute('aria-hidden', 'true');
  
  if (menuCache.button) {
    menuCache.button.focus();
  }
  
  // Remove keyboard navigation
  document.removeEventListener('keydown', handleMenuKeyboard);
}

// Cache for keyboard navigation elements
let keyboardCache = {
  focusableElements: null,
  lastUpdate: 0,
  getFocusableElements: function() {
    const now = Date.now();
    if (!this.focusableElements || now - this.lastUpdate > 1000) {
      if (menuCache.menu) {
        this.focusableElements = {
          all: menuCache.menu.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
          options: Array.from(menuCache.menu.querySelectorAll('.snn-accessibility-option, .snn-close'))
        };
        this.lastUpdate = now;
      }
    }
    return this.focusableElements;
  }
};

function handleMenuKeyboard(e) {
  if (!menuCache.menu || menuCache.menu.style.display !== 'block') return;
  
  if (e.key === 'Escape') {
    e.preventDefault();
    closeMenu();
    return;
  }
  
  const elements = keyboardCache.getFocusableElements();
  if (!elements) return;
  
  if (e.key === 'Tab') {
    const firstElement = elements.all[0];
    const lastElement = elements.all[elements.all.length - 1];
    
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }
  
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const currentIndex = elements.options.indexOf(document.activeElement);
    let nextIndex;
    
    if (e.key === 'ArrowDown') {
      nextIndex = currentIndex === elements.options.length - 1 ? 0 : currentIndex + 1;
    } else {
      nextIndex = currentIndex === 0 ? elements.options.length - 1 : currentIndex - 1;
    }
    
    elements.options[nextIndex].focus();
  }
}

// ===========================================
// INITIALIZATION
// ===========================================

// Initialize the widget
function initAccessibilityWidget() {
  injectStyles();
  applySettings();
  createAccessibilityButton();
  createAccessibilityMenu();
}

// ===========================================
// WIDGET BOOTSTRAP
// ===========================================

// Load the widget when the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccessibilityWidget);
} else {
  initAccessibilityWidget();
}

/*
===========================================
  WIDGET FEATURES SUMMARY:
  
  Core Features:
  - High contrast mode
  - Text size adjustment
  - Text spacing modification
  - Animation pausing
  - Image hiding
  - Dyslexia-friendly font
  - Cursor size adjustment
  - Line height adjustment
  - Text alignment
  
  Advanced Features:
  - Screen reader with speech synthesis
  - Voice control with speech recognition
  - Reading mode
  - Enhanced focus indicators
  - Reduced motion mode
  - Font selection (Arial, Times, Verdana)
  - Color blindness filters (Protanopia, Deuteranopia, Tritanopia, Grayscale)
  
  Technical Features:
  - Persistent settings via localStorage
  - Full keyboard navigation
  - ARIA compliance
  - Error handling for browser compatibility
  - Performance optimization with DOM caching
  - Single file deployment
  
===========================================
*/