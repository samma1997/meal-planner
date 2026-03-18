/**
 * Generates PNG icons and OG image from SVG sources using sharp.
 * Run with: node scripts/generate-icons.mjs
 */
import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');
const iconsDir = join(publicDir, 'icons');

mkdirSync(iconsDir, { recursive: true });

const iconSvg = readFileSync(join(iconsDir, 'icon.svg'));
const ogSvg = readFileSync(join(publicDir, 'og-image.svg'));
const faviconSvg = readFileSync(join(publicDir, 'favicon.svg'));

console.log('Generating icon-192.png...');
await sharp(iconSvg)
  .resize(192, 192)
  .png()
  .toFile(join(iconsDir, 'icon-192.png'));

console.log('Generating icon-512.png...');
await sharp(iconSvg)
  .resize(512, 512)
  .png()
  .toFile(join(iconsDir, 'icon-512.png'));

console.log('Generating og-image.png (1200x630)...');
await sharp(ogSvg)
  .resize(1200, 630)
  .png()
  .toFile(join(publicDir, 'og-image.png'));

console.log('Generating favicon-32.png...');
await sharp(faviconSvg)
  .resize(32, 32)
  .png()
  .toFile(join(publicDir, 'favicon-32.png'));

console.log('All icons generated successfully.');
