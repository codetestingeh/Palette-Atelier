    // ========== DATA ==========
    const projects = [
      {
        id: 1,
        brand: "AI",
        desc: "Artificial Intelligence Website",
        domain: "AI",
        primary: { hex: "#000000", pct: 60, role: "Main brand color" },
        secondary: { hex: "#FFFFFF", pct: 30, role: "Depth & contrast" },
        accent: { hex: "#F5F3F0", pct: 10, role: "Elegant highlights" },
        mood: "classic-gold"
      },
      {
        id: 2,
        brand: "Handmade carpet",
        desc: "Handmade carpet sales site",
        domain: "Handmade carpet",
        primary: { hex: "#A51C30", pct: 45, role: "Main brand color" },
        secondary: { hex: "#1A1A1A", pct: 40, role: "Depth & contrast" },
        accent: { hex: "#C9A962", pct: 15, role: "Elegant highlights" },
        mood: "red-gold"
      },
      {
        id: 3,
        brand: "Diamond Store",
        desc: "Jewelry and Diamond Store",
        domain: "Diamond Store",
        primary: { hex: "#0A4A6B", pct: 55, role: "Main brand color" },
        secondary: { hex: "#F5F5F0", pct: 30, role: "Depth & contrast" },
        accent: { hex: "#C0C0C0", pct: 15, role: "Elegant highlights" },
        mood: "blue-silver"
      },
      {
        id: 4,
        brand: "Luxury watch store",
        desc: "Luxury watch store website",
        domain: "Luxury watch store",
        primary: { hex: "#2C3E2D", pct: 40, role: "Main brand color" },
        secondary: { hex: "#E8D5B5", pct: 35, role: "Depth & contrast" },
        accent: { hex: "#F5F3F0", pct: 25, role: "Elegant highlights" },
        mood: "garden"
      },
      {
        id: 5,
        brand: "Technology",
        desc: "Technology-related website",
        domain: "Technology",
        primary: { hex: "#1B3A4B", pct: 50, role: "Main brand color" },
        secondary: { hex: "#000000", pct: 30, role: "Depth & contrast" },
        accent: { hex: "#E8E4DF", pct: 20, role: "Elegant highlights" },
        mood: "roman"
      },
      {
        id: 6,
        brand: "Developer",
        desc: "Website developer.",
        domain: "Developer",
        primary: { hex: "#0A4A6B", pct: 55, role: "Main brand color" },
        secondary: { hex: "#000000", pct: 30, role: "Depth & contrast" },
        accent: { hex: "#FFFFFF", pct: 15, role: "Elegant highlights" },
        mood: "roman"
      },
      {
        id: 7,
        brand: "Gaming",
        desc: "Gaming website",
        domain: "Gaming",
        primary: { hex: "#66C0F4", pct: 50, role: "Main brand color" },
        secondary: { hex: "#171A21", pct: 35, role: "Depth & contrast" },
        accent: { hex: "#1B2838", pct: 15, role: "Elegant highlights" },
        mood: "champagne"
      },
      {
        id: 8,
        brand: "Coffee",
        desc: "Coffee shop",
        domain: "Coffee",
        primary: { hex: "#A67C52", pct: 45, role: "Main brand color" },
        secondary: { hex: "#F4F0E8", pct: 40, role: "Depth & contrast" },
        accent: { hex: "#4A3728", pct: 15, role: "Elegant highlights" },
        mood: "antique"
      },
      {
        id: 9,
        brand: "Furniture decoration",
        desc: "Furniture decoration store",
        domain: "Furniture decoration",
        primary: { hex: "#D4B896", pct: 55, role: "Main brand color" },
        secondary: { hex: "#F4F0E8", pct: 30, role: "Depth & contrast" },
        accent: { hex: "#4A3728", pct: 15, role: "Elegant highlights" },
        mood: "rose"
      },
      {
        id: 10,
        brand: "Green wall",
        desc: "Green Wall Company",
        domain: "Green wall",
        primary: { hex: "#34B27B", pct: 45, role: "Main brand color" },
        secondary: { hex: "#000000", pct: 35, role: "Depth & contrast" },
        accent: { hex: "#3ECF8E", pct: 20, role: "Elegant highlights" },
        mood: "imperial"
      },
      {
        id: 11,
        brand: "Cosmetics store",
        desc: "Online cosmetics shop",
        domain: "boucheron.atelier",
        primary: { hex: "#3f2b2e", pct: 50, role: "Main brand color" },
        secondary: { hex: "#E8B4B8", pct: 30, role: "Depth & contrast" },
        accent: { hex: "#F5F0E6", pct: 20, role: "Elegant highlights" },
        mood: "vendome"
      },
      {
        id: 12,
        brand: "Car",
        desc: "Red car company website",
        domain: "Car",
        primary: { hex: "#D71921", pct: 50, role: "Main brand color" },
        secondary: { hex: "#000000", pct: 35, role: "Depth & contrast" },
        accent: { hex: "#FFFFFF", pct: 15, role: "Elegant highlights" },
        mood: "ice"
      },
      {
        id: 13,
        brand: "Silver jewelry",
        desc: "Silver Jewelry Store",
        domain: "Silver jewelry",
        primary: { hex: "#F5F0EB", pct: 50, role: "Main brand color" },
        secondary: { hex: "#2C2C2C", pct: 35, role: "Depth & contrast" },
        accent: { hex: "#B8A99A", pct: 15, role: "Elegant highlights" },
        mood: "pearl"
      },
      {
        id: 14,
        brand: "Hotel",
        desc: "Hotel introduction website",
        domain: "Hotel",
        primary: { hex: "#0E3B4C", pct: 55, role: "Main brand color" },
        secondary: { hex: "#C9A86C", pct: 25, role: "Depth & contrast" },
        accent: { hex: "#E8F0F2", pct: 20, role: "Elegant highlights" },
        mood: "marine"
      },
      {
        id: 15,
        brand: "REPOSSI",
        desc: "Architectural Jewelry",
        domain: "repossi.atelier",
        primary: { hex: "#1C1C1C", pct: 50, role: "Main brand color" },
        secondary: { hex: "#E5E5E5", pct: 35, role: "Depth & contrast" },
        accent: { hex: "#C0A080", pct: 15, role: "Elegant highlights" },
        mood: "architectural"
      },
      {
        id: 16,
        brand: "Cash",
        desc: "Finance related website",
        domain: "Cash",
        primary: { hex: "#00D632", pct: 45, role: "Main brand color" },
        secondary: { hex: "#000000", pct: 40, role: "Depth & contrast" },
        accent: { hex: "#000000", pct: 15, role: "Elegant highlights" },
        mood: "modern"
      },
      {
        id: 17,
        brand: "Wine",
        desc: "Wine shop",
        domain: "Wine",
        primary: { hex: "#6B2D3C", pct: 45, role: "Main brand color" },
        secondary: { hex: "#1A1A1A", pct: 35, role: "Depth & contrast" },
        accent: { hex: "#D4C4A8", pct: 20, role: "Elegant highlights" },
        mood: "passion"
      },
      {
        id: 18,
        brand: "Crafts",
        desc: "Handicraft store website",
        domain: "Crafts",
        primary: { hex: "#C45C26", pct: 40, role: "Main brand color" },
        secondary: { hex: "#2D2A26", pct: 40, role: "Depth & contrast" },
        accent: { hex: "#E8DCC8", pct: 20, role: "Elegant highlights" },
        mood: "milanese"
      },
      {
        id: 19,
        brand: "Flight company",
        desc: "Flight company website",
        domain: "Flight company",
        primary: { hex: "#1F8DED", pct: 55, role: "Main brand color" },
        secondary: { hex: "#FFFFFF", pct: 30, role: "Depth & contrast" },
        accent: { hex: "#FFFFFF", pct: 15, role: "Elegant highlights" },
        mood: "camelia"
      },
      {
        id: 20,
        brand: "Classic Fashion",
        desc: "Classic Fashion Website",
        domain: "Classic Fashion",
        primary: { hex: "#4A2C0B", pct: 45, role: "Main brand color" },
        secondary: { hex: "#F5E6C8", pct: 35, role: "Depth & contrast" },
        accent: { hex: "#C5A46B", pct: 20, role: "Elegant highlights" },
        mood: "monogram"
      },
    //   {
    //     id: 21,
    //     brand: "DIOR JOAILLERIE",
    //     desc: "Rose de Dior & Couture",
    //     domain: "dior.atelier",
    //     primary: { hex: "#8B1E3F", pct: 45, role: "Main brand color" },
    //     secondary: { hex: "#F8F4F0", pct: 35, role: "Depth & contrast" },
    //     accent: { hex: "#1C1C1C", pct: 20, role: "Elegant highlights" },
    //     mood: "couture"
    //   },
    //   {
    //     id: 22,
    //     brand: "HERMÈS HORLOGERIE",
    //     desc: "Craft of Time & Leather",
    //     domain: "hermes.atelier",
    //     primary: { hex: "#F37021", pct: 40, role: "Main brand color" },
    //     secondary: { hex: "#1A1A1A", pct: 40, role: "Depth & contrast" },
    //     accent: { hex: "#EDE6DC", pct: 20, role: "Elegant highlights" },
    //     mood: "orange"
    //   },
    //   {
    //     id: 23,
    //     brand: "JAEGER-LECOULTRE",
    //     desc: "Reverso & Precision",
    //     domain: "jlc.atelier",
    //     primary: { hex: "#1C2B3A", pct: 50, role: "Main brand color" },
    //     secondary: { hex: "#D4C9B0", pct: 30, role: "Depth & contrast" },
    //     accent: { hex: "#8B7355", pct: 20, role: "Elegant highlights" },
    //     mood: "precision"
    //   },
    //   {
    //     id: 24,
    //     brand: "VAN CLEEF HIGH",
    //     desc: "Mystery Set & Nature",
    //     domain: "vca-high.atelier",
    //     primary: { hex: "#3D5A4C", pct: 45, role: "Main brand color" },
    //     secondary: { hex: "#F2E8D5", pct: 35, role: "Depth & contrast" },
    //     accent: { hex: "#A33B3B", pct: 20, role: "Elegant highlights" },
    //     mood: "nature"
    //   },
    //   {
    //     id: 25,
    //     brand: "GRAFF HIGH JEWELS",
    //     desc: "Rare Colored Diamonds",
    //     domain: "graff-high.atelier",
    //     primary: { hex: "#0A0A0A", pct: 50, role: "Main brand color" },
    //     secondary: { hex: "#E8E0D5", pct: 30, role: "Depth & contrast" },
    //     accent: { hex: "#6B8E9F", pct: 20, role: "Elegant highlights" },
    //     mood: "rare"
    //   },
    //   {
    //     id: 26,
    //     brand: "BULGARI SERPENTI",
    //     desc: "Serpent Motif & Power",
    //     domain: "serpenti.atelier",
    //     primary: { hex: "#1A2F2A", pct: 45, role: "Main brand color" },
    //     secondary: { hex: "#C9A86C", pct: 35, role: "Depth & contrast" },
    //     accent: { hex: "#F0EDE6", pct: 20, role: "Elegant highlights" },
    //     mood: "serpenti"
    //   },
    //   {
    //     id: 27,
    //     brand: "TIFFANY BLUE BOOK",
    //     desc: "High Jewelry Narrative",
    //     domain: "bluebook.atelier",
    //     primary: { hex: "#81D8D0", pct: 40, role: "Main brand color" },
    //     secondary: { hex: "#1A1A1A", pct: 40, role: "Depth & contrast" },
    //     accent: { hex: "#F5F5F5", pct: 20, role: "Elegant highlights" },
    //     mood: "aqua"
    //   },
    //   {
    //     id: 28,
    //     brand: "CARTIER HIGH",
    //     desc: "Tutti Frutti & Color",
    //     domain: "cartier-high.atelier",
    //     primary: { hex: "#2E5A3C", pct: 35, role: "Main brand color" },
    //     secondary: { hex: "#8B1E3F", pct: 35, role: "Depth & contrast" },
    //     accent: { hex: "#1A3A6B", pct: 30, role: "Elegant highlights" },
    //     mood: "tutti"
    //   },
    //   {
    //     id: 29,
    //     brand: "HARRY WINSTON RARE",
    //     desc: "Cluster & Cluster Motifs",
    //     domain: "winston-rare.atelier",
    //     primary: { hex: "#E8E4DF", pct: 50, role: "Main brand color" },
    //     secondary: { hex: "#1C1C1E", pct: 35, role: "Depth & contrast" },
    //     accent: { hex: "#D4AF37", pct: 15, role: "Elegant highlights" },
    //     mood: "cluster"
    //   },
    //   {
    //     id: 30,
    //     brand: "CHAUMET JARDINS",
    //     desc: "Gardens of Chaumet",
    //     domain: "chaumet-jardins.atelier",
    //     primary: { hex: "#4A6741", pct: 40, role: "Main brand color" },
    //     secondary: { hex: "#F5E6C8", pct: 40, role: "Depth & contrast" },
    //     accent: { hex: "#8B3A5C", pct: 20, role: "Elegant highlights" },
    //     mood: "jardins"
    //   }
    ];

// ========== STATE ==========
const templateTypes = [
  { id: 'corporate', label: 'Corporate' },
  { id: 'store', label: 'Store' },
  { id: 'portfolio', label: 'Personal' }
];

const previewState = new Map();
let activePicker = null;
let pickerDraft = null;

// One central source for the original/default palette values.
const DEFAULT_PALETTES = Object.fromEntries(projects.map(p => [p.id, {
  primary: p.primary.hex,
  secondary: p.secondary.hex,
  accent: p.accent.hex
}]));

const PALETTE_STORAGE_KEY = 'palette-atelier-saved-palettes-v2';
const PREVIEW_STORAGE_KEY = 'palette-atelier-saved-preview-v1';
const PICKER_POSITION_KEY = 'palette-atelier-picker-position-v1';
const PROJECT_TEXT_STORAGE_KEY = 'palette-atelier-project-text-v1';
const THEME_STORAGE_KEY = 'palette-atelier-theme-v1';

const DEFAULT_PROJECT_TEXT = Object.fromEntries(projects.map(p => [p.id, {
  brand: p.brand,
  desc: p.desc
}]));

function loadSavedProjectText() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROJECT_TEXT_STORAGE_KEY) || '{}');
    projects.forEach(project => {
      const text = saved[project.id];
      if (!text) return;
      if (typeof text.brand === 'string') project.brand = text.brand.trim() || DEFAULT_PROJECT_TEXT[project.id].brand;
      if (typeof text.desc === 'string') project.desc = text.desc.trim() || DEFAULT_PROJECT_TEXT[project.id].desc;
    });
  } catch (error) {
    console.warn('Saved project text could not be loaded.', error);
  }
}

function saveProjectText(project) {
  try {
    const saved = JSON.parse(localStorage.getItem(PROJECT_TEXT_STORAGE_KEY) || '{}');
    saved[project.id] = {
      brand: project.brand,
      desc: project.desc
    };
    localStorage.setItem(PROJECT_TEXT_STORAGE_KEY, JSON.stringify(saved));
    return true;
  } catch (error) {
    console.warn('Project text could not be saved.', error);
    return false;
  }
}

function resetProjectText(project) {
  const defaults = DEFAULT_PROJECT_TEXT[project.id];
  if (!defaults) return;
  project.brand = defaults.brand;
  project.desc = defaults.desc;
  try {
    const saved = JSON.parse(localStorage.getItem(PROJECT_TEXT_STORAGE_KEY) || '{}');
    delete saved[project.id];
    localStorage.setItem(PROJECT_TEXT_STORAGE_KEY, JSON.stringify(saved));
  } catch (error) {
    console.warn('Project text reset could not be persisted.', error);
  }
}

function loadTheme() {
  try {
    const theme = localStorage.getItem(THEME_STORAGE_KEY);
    document.body.classList.toggle('light-mode', theme === 'light');
  } catch {}
}

function setupThemeToggle() {
  const button = document.getElementById('themeToggle');
  if (!button) return;
  const update = () => {
    const light = document.body.classList.contains('light-mode');
    button.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    button.setAttribute('title', light ? 'Dark mode' : 'Light mode');
    const label = button.querySelector('.theme-toggle-label');
    if (label) label.textContent = light ? 'Dark' : 'Light';
  };
  button.addEventListener('click', () => {
    const light = !document.body.classList.contains('light-mode');
    document.body.classList.toggle('light-mode', light);
    try { localStorage.setItem(THEME_STORAGE_KEY, light ? 'light' : 'dark'); } catch {}
    update();
  });
  update();
}

loadSavedProjectText();
loadSavedPalettes();
loadTheme();

function getSavedPreviewState(projectId) {
  try {
    const saved = JSON.parse(localStorage.getItem(PREVIEW_STORAGE_KEY) || '{}');
    return saved[projectId] || null;
  } catch { return null; }
}

function savePreviewState(project) {
  try {
    const saved = JSON.parse(localStorage.getItem(PREVIEW_STORAGE_KEY) || '{}');
    const state = previewState.get(project.id) || { index: 0 };
    saved[project.id] = { index: state.index };
    localStorage.setItem(PREVIEW_STORAGE_KEY, JSON.stringify(saved));
    return true;
  } catch { return false; }
}

function resetPreviewState(project) {
  previewState.set(project.id, { index: 0 });
  try {
    const saved = JSON.parse(localStorage.getItem(PREVIEW_STORAGE_KEY) || '{}');
    delete saved[project.id];
    localStorage.setItem(PREVIEW_STORAGE_KEY, JSON.stringify(saved));
  } catch {}
}

function loadSavedPalettes() {
  try {
    const saved = JSON.parse(localStorage.getItem(PALETTE_STORAGE_KEY) || '{}');
    projects.forEach(project => {
      const palette = saved[project.id];
      if (!palette) return;
      ['primary', 'secondary', 'accent'].forEach(role => {
        const hex = normalizeHex(palette[role]);
        if (hex) project[role].hex = hex;
      });
    });
  } catch (error) {
    console.warn('Saved palettes could not be loaded.', error);
  }
}

function saveProjectPalette(project) {
  try {
    const saved = JSON.parse(localStorage.getItem(PALETTE_STORAGE_KEY) || '{}');
    saved[project.id] = {
      primary: project.primary.hex,
      secondary: project.secondary.hex,
      accent: project.accent.hex
    };
    localStorage.setItem(PALETTE_STORAGE_KEY, JSON.stringify(saved));
    return true;
  } catch (error) {
    console.warn('Palette could not be saved.', error);
    return false;
  }
}

function resetProjectColor(project, role) {
  const defaultHex = DEFAULT_PALETTES[project.id]?.[role];
  if (!defaultHex) return;
  project[role].hex = defaultHex;
  try {
    const saved = JSON.parse(localStorage.getItem(PALETTE_STORAGE_KEY) || '{}');
    if (saved[project.id]) {
      delete saved[project.id][role];
      if (!saved[project.id].primary && !saved[project.id].secondary && !saved[project.id].accent) delete saved[project.id];
      localStorage.setItem(PALETTE_STORAGE_KEY, JSON.stringify(saved));
    }
  } catch (error) {
    console.warn('Palette reset could not be persisted.', error);
  }
}

// ========== UTILITIES ==========
function getLuminance(hex) {
  const clean = normalizeHex(hex).slice(1);
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  const [rs, gs, bs] = [r, g, b].map(c => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getTextClass(hex) {
  return getLuminance(hex) > 0.45 ? 'text-dark' : 'text-light';
}

function getContrastText(hex) {
  return getLuminance(hex) > 0.45 ? '#161618' : '#f7f7f5';
}

function padNum(n) {
  return String(n).padStart(2, '0');
}

function normalizeHex(value) {
  let hex = String(value || '').trim().replace(/^#/, '');
  if (/^[0-9a-fA-F]{3}$/.test(hex)) {
    hex = hex.split('').map(c => c + c).join('');
  }
  return /^([0-9a-fA-F]{6})$/.test(hex) ? `#${hex.toUpperCase()}` : null;
}

function hexToRgb(hex) {
  const value = normalizeHex(hex).slice(1);
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('').toUpperCase();
}

function rgbToHsv(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  if (d) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  const s = max === 0 ? 0 : d / max;
  return { h, s, v: max };
}

function hsvToRgb(h, s, v) {
  const c = v * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return { r: (r + m) * 255, g: (g + m) * 255, b: (b + m) * 255 };
}

function hsvToHex(h, s, v) {
  const rgb = hsvToRgb(h, s, v);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
}

// ========== RENDER COLOR CARD ==========
function renderColorCard(color, label, roleKey) {
  const textClass = getTextClass(color.hex);
  return `
    <button class="color-card" type="button" data-role="${roleKey}" aria-label="Change ${label} color">
      <span class="color-reset" data-reset-role="${roleKey}" role="button" tabindex="0" aria-label="Reset ${label} color" title="Reset to default">↺</span>
      <div class="color-fill" style="height: ${color.pct}%; --liquid-color: ${color.hex};"></div>
      <div class="color-content ${textClass}">
        <div class="color-label">${label}</div>
        <div class="color-hex">${color.hex}</div>
        <div class="color-percent">${color.pct}%</div>
        <div class="color-role">${color.role}</div>
      </div>
    </button>
  `;
}

// ========== MINI WEBSITE TEMPLATES ==========
function templateShell({ p, prim, sec, acc, primText, secText, accText, logo, nav, children, className = '' }) {
  return `
    <div class="template-page ${className}">
      <div class="mini-site">
        <div class="mini-nav" style="background:${sec};color:${secText};">
          <div class="mini-logo" style="color:${prim};">${logo}</div>
          <div class="mini-nav-links">${nav.map(item => `<span>${item}</span>`).join('')}</div>
        </div>
        ${children}
        <div class="mini-footer" style="background:${sec};color:${secText};">
          <div class="mini-footer-links"><span>About</span><span>Contact</span><span>Journal</span><span>Follow</span></div>
          <div>© ${new Date().getFullYear()} ${escapeHtml(p.brand)}</div>
        </div>
      </div>
    </div>
  `;
}

function renderStoreTemplate(p, colors) {
  const { prim, sec, acc, primText, secText, accText } = colors;
  return templateShell({
    p, prim, sec, acc, primText, secText, accText,
    logo: escapeHtml(p.brand.split(' ')[0]),
    nav: ['Shop', 'Collections', 'Journal', 'Contact'],
    className: 'template-store',
    children: `
      <div class="mini-hero" style="background:linear-gradient(135deg,${prim} 0%,${sec} 100%);color:${primText};">
        <div class="mini-kicker">NEW COLLECTION</div>
        <div class="mini-hero-title">Made to be remembered.</div>
        <div class="mini-hero-sub">A refined storefront shaped around your color system.</div>
        <div class="mini-btn" style="color:${primText};border-color:${primText};">Explore collection</div>
      </div>
      <div class="mini-section" style="background:${sec};color:${secText};">
        <div class="mini-section-title">Featured pieces</div>
        <div class="mini-grid">
          <div class="mini-card product-card" style="background:${prim};color:${primText};"><span>01</span><b>Signature</b></div>
          <div class="mini-card product-card" style="background:${acc};color:${accText};"><span>02</span><b>Essential</b></div>
          <div class="mini-card product-card" style="background:${prim};color:${primText};"><span>03</span><b>Edition</b></div>
        </div>
      </div>
      <div class="mini-split" style="background:${acc};color:${accText};">
        <div class="mini-img tall" style="background:linear-gradient(135deg,${prim},${sec});"></div>
        <div><div class="mini-section-title align-left">The signature</div><div class="mini-text-block">Carefully designed details, clear hierarchy and a visual rhythm that follows the palette.</div><div class="mini-btn" style="color:${accText};border-color:${accText};">View details</div></div>
      </div>
      <div class="mini-feature" style="background:${prim};color:${primText};"><div class="mini-feature-title">A complete shopping experience</div><div class="mini-feature-text">Products, editorial moments and calls to action all inherit the same color language.</div></div>
    `
  });
}

function renderCorporateTemplate(p, colors) {
  const { prim, sec, acc, primText, secText, accText } = colors;
  return templateShell({
    p, prim, sec, acc, primText, secText, accText,
    logo: escapeHtml(p.brand.split(' ')[0]),
    nav: ['Company', 'Services', 'Work', 'Contact'],
    className: 'template-corporate',
    children: `
      <div class="mini-hero corporate-hero" style="background:${prim};color:${primText};">
        <div class="mini-kicker">STRATEGY · DESIGN · GROWTH</div>
        <div class="mini-hero-title">Build a brand people trust.</div>
        <div class="mini-hero-sub">A corporate layout showing how the same palette behaves in a structured business context.</div>
        <div class="mini-btn" style="color:${primText};border-color:${primText};">Start a conversation</div>
      </div>
      <div class="mini-section" style="background:${sec};color:${secText};">
        <div class="mini-section-title">What we do</div>
        <div class="mini-grid corporate-grid">
          <div class="mini-card" style="background:${acc};color:${accText};">Strategy</div>
          <div class="mini-card" style="background:${prim};color:${primText};">Design</div>
          <div class="mini-card" style="background:${acc};color:${accText};">Technology</div>
        </div>
      </div>
      <div class="mini-stats" style="background:${acc};color:${accText};"><div><b>24</b><span>Projects</span></div><div><b>12</b><span>Markets</span></div><div><b>98%</b><span>Retention</span></div></div>
      <div class="mini-split" style="background:${sec};color:${secText};">
        <div><div class="mini-section-title align-left">A clearer direction</div><div class="mini-text-block">Strong contrast for headlines, restrained accent use and generous spacing make this palette feel intentional.</div></div>
        <div class="mini-img tall" style="background:linear-gradient(145deg,${acc},${prim});"></div>
      </div>
      <div class="mini-feature" style="background:${prim};color:${primText};"><div class="mini-feature-title">Let's build what comes next.</div><div class="mini-btn" style="color:${primText};border-color:${primText};margin-top:6px;">Get in touch</div></div>
    `
  });
}

function renderPortfolioTemplate(p, colors) {
  const { prim, sec, acc, primText, secText, accText } = colors;
  return templateShell({
    p, prim, sec, acc, primText, secText, accText,
    logo: 'PORTFOLIO',
    nav: ['Work', 'About', 'Notes', 'Contact'],
    className: 'template-portfolio',
    children: `
      <div class="mini-hero" style="background:${sec};color:${secText};align-items:flex-start;text-align:left;">
        <div class="mini-kicker">INDEPENDENT CREATIVE</div>
        <div class="mini-hero-title">I turn ideas into visual systems.</div>
        <div class="mini-hero-sub">A personal layout that lets the palette feel expressive without losing readability.</div>
        <div class="mini-btn" style="color:${secText};border-color:${secText};">View my work</div>
      </div>
      <div class="mini-section" style="background:${prim};color:${primText};">
        <div class="mini-section-title">Selected work</div>
        <div class="mini-grid portfolio-grid">
          <div class="mini-card" style="background:${acc};color:${accText};">Identity</div>
          <div class="mini-card" style="background:${sec};color:${secText};">Web</div>
          <div class="mini-card" style="background:${acc};color:${accText};">Editorial</div>
        </div>
      </div>
      <div class="mini-split" style="background:${acc};color:${accText};">
        <div class="mini-img tall" style="background:${prim};"></div>
        <div><div class="mini-section-title align-left">About the work</div><div class="mini-text-block">Typography, composition and motion adapt to the same three-color foundation.</div></div>
      </div>
      <div class="mini-feature" style="background:${prim};color:${primText};"><div class="mini-feature-title">Available for selected projects</div><div class="mini-feature-text">Brand identity · Digital products · Creative direction</div></div>
    `
  });
}

function renderRestaurantTemplate(p, colors) {
  const { prim, sec, acc, primText, secText, accText } = colors;
  return templateShell({
    p, prim, sec, acc, primText, secText, accText,
    logo: escapeHtml(p.brand.split(' ')[0]),
    nav: ['Menu', 'Story', 'Reservations', 'Visit'],
    className: 'template-restaurant',
    children: `
      <div class="mini-hero" style="background:linear-gradient(145deg,${acc},${prim});color:${accText};">
        <div class="mini-kicker">EST. 1998 · TASTE &amp; PLACE</div>
        <div class="mini-hero-title">Good food. Slow moments.</div>
        <div class="mini-hero-sub">A warm editorial restaurant layout built from the same palette.</div>
        <div class="mini-btn" style="color:${accText};border-color:${accText};">Reserve a table</div>
      </div>
      <div class="mini-section" style="background:${sec};color:${secText};">
        <div class="mini-section-title">Tonight's menu</div>
        <div class="menu-list"><div><span>Seasonal tasting</span><b>$78</b></div><div><span>Chef's table</span><b>$120</b></div><div><span>Garden lunch</span><b>$46</b></div></div>
      </div>
      <div class="mini-split" style="background:${prim};color:${primText};">
        <div><div class="mini-section-title align-left">From our kitchen</div><div class="mini-text-block">Soft surfaces, high-contrast type and a restrained accent create a more atmospheric experience.</div></div>
        <div class="mini-img tall" style="background:${acc};"></div>
      </div>
      <div class="mini-feature" style="background:${sec};color:${secText};"><div class="mini-feature-title">Open Tuesday — Sunday</div><div class="mini-feature-text">Dinner from 17:30 · Walk-ins welcome</div></div>
    `
  });
}

function renderSaaSTemplate(p, colors) {
  const { prim, sec, acc, primText, secText, accText } = colors;
  return templateShell({
    p, prim, sec, acc, primText, secText, accText,
    logo: escapeHtml(p.brand.split(' ')[0]),
    nav: ['Product', 'Solutions', 'Pricing', 'Login'],
    className: 'template-saas',
    children: `
      <div class="mini-hero" style="background:${sec};color:${secText};">
        <div class="mini-kicker">THE MODERN WORKSPACE</div>
        <div class="mini-hero-title">Everything your team needs.</div>
        <div class="mini-hero-sub">See how the palette behaves on a clean product-led interface.</div>
        <div class="mini-btn" style="background:${acc};color:${accText};border-color:${acc};">Start free</div>
      </div>
      <div class="dashboard-strip" style="background:${prim};color:${primText};"><div class="dashboard-top"><span>Overview</span><b>+24.8%</b></div><div class="chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
      <div class="mini-section" style="background:${sec};color:${secText};">
        <div class="mini-section-title">Built for focus</div>
        <div class="mini-grid"><div class="mini-card" style="background:${prim};color:${primText};">Automate</div><div class="mini-card" style="background:${acc};color:${accText};">Analyze</div><div class="mini-card" style="background:${prim};color:${primText};">Scale</div></div>
      </div>
      <div class="mini-feature" style="background:${acc};color:${accText};"><div class="mini-feature-title">Simple by design.</div><div class="mini-feature-text">A balanced palette keeps actions visible while secondary surfaces stay quiet.</div></div>
    `
  });
}

function renderTemplate(type, p, colors) {
  switch (type) {
    case 'corporate': return renderCorporateTemplate(p, colors);
    case 'portfolio': return renderPortfolioTemplate(p, colors);
    case 'store': return renderStoreTemplate(p, colors);
    default: return renderCorporateTemplate(p, colors);
  }
}

function getProjectColors(p) {
  const prim = p.primary.hex;
  const sec = p.secondary.hex;
  const acc = p.accent.hex;
  return { prim, sec, acc, primText: getContrastText(prim), secText: getContrastText(sec), accText: getContrastText(acc) };
}

function renderPreviewCarousel(p) {
  const state = previewState.get(p.id) || getSavedPreviewState(p.id) || { index: 0 };
  previewState.set(p.id, state);
  const colors = getProjectColors(p);
  return `
    <div class="preview-stage">
      <div class="preview-wrapper" data-id="${p.id}" tabindex="0" aria-label="Website preview carousel">
        <div class="browser-chrome">
          <div class="browser-dots"><span class="browser-dot red"></span><span class="browser-dot yellow"></span><span class="browser-dot green"></span></div>
          <div class="browser-url">${escapeHtml(p.domain)}</div>
          <div class="preview-actions" aria-label="Preview controls">
            <button type="button" class="preview-action preview-save" data-preview-save aria-label="Save preview" title="Save preview">✓</button>
            <button type="button" class="preview-action preview-reset" data-preview-reset aria-label="Reset preview" title="Reset preview">↺</button>
          </div>
        </div>
        <div class="preview-viewport" data-preview-viewport>
          <div class="preview-track" data-preview-track style="transform:translateX(-${state.index * 100}%);">
            ${templateTypes.map((type, i) => renderTemplate(type.id, p, colors).replace('template-page ', `template-page ${i === state.index ? 'is-active ' : ''}`)).join('')}
          </div>
          <div class="swipe-hint" aria-hidden="true"><span>←</span><em>swipe</em><span>→</span></div>
        </div>
      </div>
      <div class="preview-meta">
        <div class="preview-page-label"><span class="preview-page-number">${padNum(state.index + 1)}</span><span class="preview-page-divider">/</span><span>${padNum(templateTypes.length)}</span><span class="preview-page-title">${templateTypes[state.index].label}</span></div>
        <div class="preview-dots" role="tablist" aria-label="Website preview pages">
          ${templateTypes.map((type, i) => `<button type="button" class="preview-dot ${i === state.index ? 'active' : ''}" data-preview-index="${i}" aria-label="${type.label}" aria-selected="${i === state.index}"></button>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// ========== RENDER PROJECT ==========
function renderProject(p) {
  if (!previewState.has(p.id)) {
    const saved = getSavedPreviewState(p.id);
    previewState.set(p.id, saved ? { index: Math.max(0, Math.min(templateTypes.length - 1, Number(saved.index) || 0)) } : { index: 0 });
  }
  return `
    <article class="project-card" id="project-${p.id}">
      <div class="project-edit-actions" aria-label="Project text controls">
        <button type="button" class="project-save" data-project-save aria-label="Save title and description" title="Save changes">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11l3 3v13H5z"></path><path d="M8 4v6h8V4M8 20v-5h8v5"></path></svg>
        </button>
        <button type="button" class="project-reset" data-project-reset aria-label="Reset title and description" title="Reset title and description">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 12a8.5 8.5 0 1 0 2.5-6"></path><path d="M3.5 4.5v5h5"></path></svg>
        </button>
      </div>
      <div class="project-header">
        <span class="project-number">${padNum(p.id)}</span>
        <h2 class="project-brand" contenteditable="true" spellcheck="false" data-project-brand data-placeholder="Title">${escapeHtml(p.brand)}</h2>
      </div>
      <p class="project-desc" contenteditable="true" spellcheck="true" data-project-desc data-placeholder="Description">${escapeHtml(p.desc)}</p>
      <div class="project-body">
        <div class="color-group">
          ${renderColorCard(p.primary, 'Primary', 'primary')}
          ${renderColorCard(p.secondary, 'Secondary', 'secondary')}
          ${renderColorCard(p.accent, 'Accent', 'accent')}
        </div>
        ${renderPreviewCarousel(p)}
      </div>
    </article>
  `;
}

// ========== COLOR PICKER ==========
function createColorPicker() {
  if (document.getElementById('colorPicker')) return;
  const picker = document.createElement('div');
  picker.id = 'colorPicker';
  picker.className = 'color-picker';
  picker.setAttribute('role', 'dialog');
  picker.setAttribute('aria-label', 'Color picker');
  picker.innerHTML = `
    <div class="picker-header">
      <div><span class="picker-kicker">COLOR</span><strong id="pickerRole">Primary</strong></div>
      <button class="picker-close" type="button" aria-label="Close color picker">×</button>
    </div>
    <div class="picker-controls">
      <div class="picker-sv" id="pickerSV"><div class="picker-cursor" id="pickerSVCursor"></div></div>
      <div class="picker-hue" id="pickerHue"><div class="picker-hue-cursor" id="pickerHueCursor"></div></div>
    </div>
    <div class="picker-preview-row">
      <div class="picker-preview-swatch" id="pickerSwatch"></div>
      <div class="picker-hex-value"><span>HEX</span><strong id="pickerHexLabel">#000000</strong></div>
      <button class="picker-save" id="pickerSave" type="button">Save</button>
    </div>
    <label class="picker-hex-field"><span>#</span><input id="pickerHexInput" maxlength="7" spellcheck="false" inputmode="text" value="#000000" aria-label="Hex color"></label>
  `;
  document.body.appendChild(picker);

  // Drag the picker by its header so it never blocks the color cards.
  const pickerHeader = picker.querySelector('.picker-header');
  let pickerDragging = false, pickerOffsetX = 0, pickerOffsetY = 0;
  pickerHeader.addEventListener('pointerdown', event => {
    if (event.target.closest('button')) return;
    pickerDragging = true;
    const rect = picker.getBoundingClientRect();
    pickerOffsetX = event.clientX - rect.left;
    pickerOffsetY = event.clientY - rect.top;
    pickerHeader.setPointerCapture?.(event.pointerId);
    picker.classList.add('is-dragging');
    event.preventDefault();
  });
  pickerHeader.addEventListener('pointermove', event => {
    if (!pickerDragging) return;
    const margin = 8;
    const maxLeft = Math.max(margin, window.innerWidth - picker.offsetWidth - margin);
    const maxTop = Math.max(margin, window.innerHeight - picker.offsetHeight - margin);
    const left = Math.min(maxLeft, Math.max(margin, event.clientX - pickerOffsetX));
    const top = Math.min(maxTop, Math.max(margin, event.clientY - pickerOffsetY));
    picker.style.left = `${left}px`;
    picker.style.top = `${top}px`;
  });
  const stopPickerDrag = () => {
    if (!pickerDragging) return;
    pickerDragging = false;
    picker.classList.remove('is-dragging');
    try {
      localStorage.setItem(PICKER_POSITION_KEY, JSON.stringify({
        left: parseFloat(picker.style.left) || 8,
        top: parseFloat(picker.style.top) || 8
      }));
    } catch {}
  };
  pickerHeader.addEventListener('pointerup', stopPickerDrag);
  pickerHeader.addEventListener('pointercancel', stopPickerDrag);

  picker.querySelector('.picker-close').addEventListener('click', closeColorPicker);
  picker.querySelector('#pickerSave').addEventListener('click', savePickerChanges);
  document.addEventListener('pointerdown', event => {
    if (activePicker && !picker.contains(event.target) && !event.target.closest('.color-card')) closeColorPicker();
  });

  const sv = picker.querySelector('#pickerSV');
  const hue = picker.querySelector('#pickerHue');
  const hexInput = picker.querySelector('#pickerHexInput');

  function updateFromSV(event) {
    if (!activePicker) return;
    const rect = sv.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
    activePicker.s = x / rect.width;
    activePicker.v = 1 - y / rect.height;
    applyPickerHSV();
  }

  function updateFromHue(event) {
    if (!activePicker) return;
    const rect = hue.getBoundingClientRect();
    const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
    activePicker.h = (y / rect.height) * 360;
    applyPickerHSV();
  }

  let dragSV = false, dragHue = false;
  sv.addEventListener('pointerdown', event => { dragSV = true; sv.setPointerCapture(event.pointerId); updateFromSV(event); });
  hue.addEventListener('pointerdown', event => { dragHue = true; hue.setPointerCapture(event.pointerId); updateFromHue(event); });
  sv.addEventListener('pointermove', event => { if (dragSV) updateFromSV(event); });
  hue.addEventListener('pointermove', event => { if (dragHue) updateFromHue(event); });
  sv.addEventListener('pointerup', () => dragSV = false);
  hue.addEventListener('pointerup', () => dragHue = false);
  sv.addEventListener('pointercancel', () => dragSV = false);
  hue.addEventListener('pointercancel', () => dragHue = false);

  hexInput.addEventListener('input', () => {
    const normalized = normalizeHex(hexInput.value);
    if (!normalized) return;
    const { r, g, b } = hexToRgb(normalized);
    const hsv = rgbToHsv(r, g, b);
    activePicker.h = hsv.h;
    activePicker.s = hsv.s;
    activePicker.v = hsv.v;
    applyColor(normalized);
    updatePickerUI(normalized);
  });

  hexInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      const normalized = normalizeHex(hexInput.value);
      if (normalized) {
        applyColor(normalized);
        hexInput.blur();
      }
    }
    if (event.key === 'Escape') closeColorPicker();
  });
}

function openColorPicker(card, project, role) {
  createColorPicker();
  const picker = document.getElementById('colorPicker');
  const current = project[role].hex;
  const { r, g, b } = hexToRgb(current);
  const hsv = rgbToHsv(r, g, b);
  activePicker = { project, role, card, h: hsv.h, s: hsv.s, v: hsv.v };
  pickerDraft = {
    project,
    role,
    originalHex: current,
    savedHex: current,
    committed: false
  };
  picker.querySelector('#pickerRole').textContent = role.charAt(0).toUpperCase() + role.slice(1);
  const pickerSaveButton = picker.querySelector('#pickerSave');
  if (pickerSaveButton) {
    pickerSaveButton.textContent = 'Save';
    pickerSaveButton.classList.remove('saved');
  }
  updatePickerUI(current);

  const rect = card.getBoundingClientRect();
  const pickerWidth = 276;
  let left = rect.left;
  let top = rect.bottom + 12;
  try {
    const savedPos = JSON.parse(localStorage.getItem(PICKER_POSITION_KEY) || 'null');
    if (savedPos && Number.isFinite(savedPos.left) && Number.isFinite(savedPos.top)) {
      left = savedPos.left;
      top = savedPos.top;
    }
  } catch {}
  if (left + pickerWidth > window.innerWidth - 14) left = window.innerWidth - pickerWidth - 14;
  if (top + 390 > window.innerHeight - 14) top = Math.max(14, rect.top - 402);
  picker.style.left = `${Math.max(14, left)}px`;
  picker.style.top = `${Math.max(14, top)}px`;
  picker.classList.add('open');
  setTimeout(() => picker.querySelector('#pickerHexInput').focus(), 20);
}

function closeColorPicker(commit = false) {
  const picker = document.getElementById('colorPicker');
  if (picker) picker.classList.remove('open');
  if (pickerDraft && !commit) {
    pickerDraft.project[pickerDraft.role].hex = pickerDraft.originalHex;
    refreshProject(pickerDraft.project);
  }
  activePicker = null;
  pickerDraft = null;
}

function savePickerChanges() {
  if (!activePicker || !pickerDraft) return;
  const saved = saveProjectPalette(activePicker.project);
  if (saved) {
    pickerDraft.originalHex = activePicker.project[activePicker.role].hex;
    pickerDraft.committed = true;
    const button = document.getElementById('pickerSave');
    if (button) {
      button.textContent = '✓';
      button.classList.add('saved');
    }
    setTimeout(() => closeColorPicker(true), 260);
  }
}

function applyPickerHSV() {
  if (!activePicker) return;
  const hex = hsvToHex(activePicker.h, activePicker.s, activePicker.v);
  applyColor(hex);
  updatePickerUI(hex);
}

function applyColor(hex) {
  if (!activePicker) return;
  const normalized = normalizeHex(hex);
  if (!normalized) return;
  activePicker.project[activePicker.role].hex = normalized;
  refreshProject(activePicker.project);
}

function updatePickerUI(hex) {
  const picker = document.getElementById('colorPicker');
  if (!picker || !activePicker) return;
  const hueColor = hsvToHex(activePicker.h, 1, 1);
  picker.querySelector('#pickerSV').style.background = `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, ${hueColor})`;
  picker.querySelector('#pickerSVCursor').style.left = `${activePicker.s * 100}%`;
  picker.querySelector('#pickerSVCursor').style.top = `${(1 - activePicker.v) * 100}%`;
  picker.querySelector('#pickerHueCursor').style.top = `${(activePicker.h / 360) * 100}%`;
  picker.querySelector('#pickerSwatch').style.background = hex;
  picker.querySelector('#pickerHexLabel').textContent = hex;
  picker.querySelector('#pickerHexInput').value = hex;
}

// ========== REFRESH ==========
function refreshProject(project) {
  const article = document.getElementById(`project-${project.id}`);
  if (!article) return;
  const stage = article.querySelector('.preview-stage');
  const colorGroup = article.querySelector('.color-group');
  if (colorGroup) colorGroup.innerHTML = [
    renderColorCard(project.primary, 'Primary', 'primary'),
    renderColorCard(project.secondary, 'Secondary', 'secondary'),
    renderColorCard(project.accent, 'Accent', 'accent')
  ].join('');
  if (stage) stage.outerHTML = renderPreviewCarousel(project);
  bindProject(article, project);
  if (activePicker && activePicker.project === project) {
    activePicker.card = article.querySelector(`[data-role="${activePicker.role}"]`);
  }
}

// ========== PREVIEW CAROUSEL ==========
function updatePreviewScrollDistance(wrapper) {
  const viewport = wrapper.querySelector('[data-preview-viewport]');
  if (!viewport) return;
  const activePage = wrapper.querySelector('.template-page.is-active .mini-site');
  if (!activePage) return;
  const distance = Math.max(90, activePage.scrollHeight - viewport.clientHeight - 12);
  activePage.style.setProperty('--preview-scroll', `${distance}px`);
}

function setPreviewIndex(wrapper, project, index, animate = true) {
  const state = previewState.get(project.id) || { index: 0 };
  state.index = (index + templateTypes.length) % templateTypes.length;
  previewState.set(project.id, state);
  const track = wrapper.querySelector('[data-preview-track]');
  const stage = wrapper.closest('.preview-stage');
  if (track) {
    track.style.transition = animate ? 'transform .65s cubic-bezier(.22,1,.36,1)' : 'none';
    track.style.transform = `translateX(-${state.index * 100}%)`;
  }
  if (stage) {
    const number = stage.querySelector('.preview-page-number');
    const title = stage.querySelector('.preview-page-title');
    if (number) number.textContent = padNum(state.index + 1);
    if (title) title.textContent = templateTypes[state.index].label;
    stage.querySelectorAll('.preview-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === state.index);
      dot.setAttribute('aria-selected', i === state.index ? 'true' : 'false');
    });
    stage.querySelectorAll('.template-page').forEach((page, i) => {
      page.classList.toggle('is-active', i === state.index);
    });
    requestAnimationFrame(() => updatePreviewScrollDistance(wrapper));
  }
}

function bindPreview(wrapper, project) {
  if (wrapper.dataset.bound === 'true') return;
  wrapper.dataset.bound = 'true';
  let startX = 0, startY = 0, lastX = 0, dragging = false;
  const viewport = wrapper.querySelector('[data-preview-viewport]');

  wrapper.addEventListener('pointerdown', event => {
    if (event.target.closest('.browser-chrome')) return;
    dragging = true;
    startX = lastX = event.clientX;
    startY = event.clientY;
    wrapper.classList.add('is-dragging');
    wrapper.setPointerCapture?.(event.pointerId);
  });

  wrapper.addEventListener('pointermove', event => {
    if (!dragging) return;
    lastX = event.clientX;
    const dx = lastX - startX;
    const dy = event.clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 6) {
      const track = wrapper.querySelector('[data-preview-track]');
      const state = previewState.get(project.id) || { index: 0 };
      const base = -state.index * 100;
      const dragPercent = (dx / Math.max(1, viewport.clientWidth)) * 100;
      track.style.transition = 'none';
      track.style.transform = `translateX(${base + dragPercent}%)`;
    }
  });

  const finishDrag = event => {
    if (!dragging) return;
    dragging = false;
    wrapper.classList.remove('is-dragging');
    const dx = lastX - startX;
    if (Math.abs(dx) > 42) {
      const state = previewState.get(project.id) || { index: 0 };
      setPreviewIndex(wrapper, project, state.index + (dx < 0 ? 1 : -1));
    } else {
      const state = previewState.get(project.id) || { index: 0 };
      setPreviewIndex(wrapper, project, state.index);
    }
  };
  wrapper.addEventListener('pointerup', finishDrag);
  wrapper.addEventListener('pointercancel', finishDrag);

  wrapper.addEventListener('keydown', event => {
    const state = previewState.get(project.id) || { index: 0 };
    if (event.key === 'ArrowRight') { event.preventDefault(); setPreviewIndex(wrapper, project, state.index + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); setPreviewIndex(wrapper, project, state.index - 1); }
  });

  requestAnimationFrame(() => updatePreviewScrollDistance(wrapper));

  wrapper.closest('.preview-stage').querySelectorAll('.preview-dot').forEach(dot => {
    dot.addEventListener('click', event => {
      event.stopPropagation();
      setPreviewIndex(wrapper, project, Number(dot.dataset.previewIndex));
    });
  });

  const stage = wrapper.closest('.preview-stage');
  const saveButton = stage.querySelector('[data-preview-save]');
  const resetButton = stage.querySelector('[data-preview-reset]');
  saveButton?.addEventListener('click', event => {
    event.stopPropagation();
    if (savePreviewState(project)) {
      saveButton.textContent = '✓';
      saveButton.classList.add('saved');
      setTimeout(() => saveButton.classList.remove('saved'), 900);
    }
  });
  resetButton?.addEventListener('click', event => {
    event.stopPropagation();
    resetPreviewState(project);
    const fresh = renderPreviewCarousel(project);
    stage.outerHTML = fresh;
    bindProject(document.getElementById(`project-${project.id}`), project);
  });
}

function bindProject(article, project) {
  const brandField = article.querySelector('[data-project-brand]');
  const descField = article.querySelector('[data-project-desc]');
  const saveTextButton = article.querySelector('[data-project-save]');
  const resetTextButton = article.querySelector('[data-project-reset]');

  const syncProjectTextFromDOM = () => {
    if (brandField) project.brand = brandField.textContent.trim() || DEFAULT_PROJECT_TEXT[project.id].brand;
    if (descField) project.desc = descField.textContent.trim() || DEFAULT_PROJECT_TEXT[project.id].desc;
  };

  saveTextButton?.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    syncProjectTextFromDOM();
    if (saveProjectText(project)) {
      saveTextButton.classList.add('saved');
      saveTextButton.setAttribute('aria-label', 'Saved');
      saveTextButton.title = 'Saved';
      setTimeout(() => {
        saveTextButton.classList.remove('saved');
        saveTextButton.setAttribute('aria-label', 'Save title and description');
        saveTextButton.title = 'Save changes';
      }, 900);
    }
  });

  resetTextButton?.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    resetProjectText(project);

    // Update the visible fields immediately. This avoids the contenteditable
    // blur event restoring the old value after Reset is clicked.
    if (brandField) brandField.textContent = DEFAULT_PROJECT_TEXT[project.id].brand;
    if (descField) descField.textContent = DEFAULT_PROJECT_TEXT[project.id].desc;

    brandField?.blur();
    descField?.blur();
  });

  [brandField, descField].forEach(field => {
    field?.addEventListener('keydown', event => {
      if (event.key === 'Enter' && field === brandField) {
        event.preventDefault();
        descField?.focus();
      }
    });
    field?.addEventListener('blur', syncProjectTextFromDOM);
    field?.addEventListener('click', event => event.stopPropagation());
  });

  article.querySelectorAll('.color-card').forEach(card => {
    if (card.dataset.bound === 'true') return;
    card.dataset.bound = 'true';
    card.addEventListener('click', event => {
      if (event.target.closest('.color-reset')) return;
      event.stopPropagation();
      openColorPicker(card, project, card.dataset.role);
    });
    const reset = card.querySelector('.color-reset');
    reset?.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      if (activePicker && activePicker.project === project) closeColorPicker();
      resetProjectColor(project, card.dataset.role);
      refreshProject(project);
    });
    reset?.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        reset.click();
      }
    });
  });
  const wrapper = article.querySelector('.preview-wrapper');
  if (wrapper) bindPreview(wrapper, project);
}

// ========== INIT ==========
const container = document.getElementById('projects');
container.innerHTML = projects.map(renderProject).join('');

document.querySelectorAll('.project-card').forEach((article, index) => {
  bindProject(article, projects[index]);
});

createColorPicker();
setupThemeToggle();

window.addEventListener('resize', () => {
  const picker = document.getElementById('colorPicker');
  if (!picker?.classList.contains('open')) return;
  const margin = 8;
  const left = Math.min(window.innerWidth - picker.offsetWidth - margin, Math.max(margin, parseFloat(picker.style.left) || margin));
  const top = Math.min(window.innerHeight - picker.offsetHeight - margin, Math.max(margin, parseFloat(picker.style.top) || margin));
  picker.style.left = `${Math.max(margin, left)}px`;
  picker.style.top = `${Math.max(margin, top)}px`;
});
