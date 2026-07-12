import fs from 'fs';

const dark = {
  'on-error': '#690005', 'outline-variant': '#444650', 'on-error-container': '#ffdad6', 'tertiary-fixed-dim': '#d0bcff', 'surface-container-high': '#242a36', 'on-primary': '#0d2c6e', 'surface-container-low': '#161c28', 'tertiary-fixed': '#e9ddff', 'error-container': '#93000a', 'error': '#ffb4ab', 'on-surface': '#dde2f3', 'surface-bright': '#343946', 'on-tertiary-container': '#9f77ff', 'secondary-container': '#00fbfb', 'primary-fixed-dim': '#b3c5ff', 'surface-container-highest': '#2f3542', 'on-background': '#dde2f3', 'on-tertiary-fixed': '#23005c', 'surface-dim': '#0e131f', 'primary-container': '#002366', 'secondary-fixed-dim': '#00dddd', 'on-secondary-container': '#007070', 'on-tertiary-fixed-variant': '#5516be', 'tertiary': '#d0bcff', 'outline': '#8e909c', 'on-secondary-fixed-variant': '#004f4f', 'on-surface-variant': '#c5c6d2', 'secondary-fixed': '#00fbfb', 'secondary': '#ffffff', 'on-secondary': '#003737', 'inverse-surface': '#dde2f3', 'background': '#0e131f', 'primary': '#b3c5ff', 'surface-container': '#1a202c', 'on-primary-fixed-variant': '#2a4386', 'on-primary-fixed': '#00174a', 'on-secondary-fixed': '#002020', 'surface-variant': '#2f3542', 'surface-tint': '#b3c5ff', 'surface-container-lowest': '#080e1a', 'primary-fixed': '#dbe1ff', 'inverse-on-surface': '#2b303d', 'surface': '#0e131f', 'tertiary-container': '#32007d', 'on-primary-container': '#758dd5', 'on-tertiary': '#3c0091', 'inverse-primary': '#435b9f'
};
const light = {
  'surface-tint': '#b3c5ff', 'on-primary-fixed': '#00174a', 'surface-container-highest': '#2f3542', 'primary-fixed': '#dbe1ff', 'error': '#ffb4ab', 'background': '#faf8ff', 'inverse-surface': '#dde2f3', 'inverse-on-surface': '#2b303d', 'on-primary': '#ffffff', 'surface': '#faf8ff', 'on-secondary-container': '#007070', 'on-surface': '#00174a', 'surface-container-low': '#f2f3ff', 'on-primary-container': '#002366', 'secondary-fixed': '#00fbfb', 'primary': '#1e40af', 'surface-dim': '#d2d9f4', 'tertiary-fixed-dim': '#d0bcff', 'surface-container-high': '#e1e4f5', 'on-secondary': '#ffffff', 'on-error-container': '#ffdad6', 'on-background': '#00174a', 'on-tertiary': '#ffffff', 'outline-variant': '#c5c6d2', 'primary-fixed-dim': '#b3c5ff', 'on-surface-variant': '#444650', 'primary-container': '#dbe1ff', 'secondary-fixed-dim': '#00dddd', 'tertiary-container': '#e9ddff', 'tertiary-fixed': '#e9ddff', 'on-tertiary-container': '#32007d', 'secondary': '#004f4f', 'on-secondary-fixed': '#002020', 'surface-bright': '#faf8ff', 'surface-variant': '#e1e2ec', 'on-tertiary-fixed-variant': '#5516be', 'error-container': '#93000a', 'secondary-container': '#00fbfb', 'surface-container': '#f2f3ff', 'on-secondary-fixed-variant': '#004f4f', 'tertiary': '#32007d', 'on-error': '#690005', 'surface-container-lowest': '#ffffff', 'on-primary-fixed-variant': '#2a4386', 'inverse-primary': '#b3c5ff', 'outline': '#757780', 'on-tertiary-fixed': '#23005c'
};

const keys = Object.keys(dark);
let cssLight = ':root.light {\n';
let cssDark = ':root.dark, :root {\n';
let tailwindConfig = '{\n';

keys.forEach(k => {
  cssLight += '    --color-' + k + ': ' + (light[k] || dark[k]) + ';\n';
  cssDark += '    --color-' + k + ': ' + dark[k] + ';\n';
  tailwindConfig += '                "' + k + '": "var(--color-' + k + ')",\n';
});
cssLight += '}\n';
cssDark += '}\n';
tailwindConfig += '}\n';

fs.writeFileSync('generated_colors.txt', cssLight + '\n' + cssDark + '\n\n' + tailwindConfig);
