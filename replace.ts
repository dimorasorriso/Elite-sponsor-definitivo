import fs from 'fs';

// 1. Update App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf-8');
// Replace all lowercase 'gold' (covers tailwind classes like text-gold, bg-gold, border-gold, etc.)
app = app.replace(/gold/g, 'red');
// Replace 'Gold' with 'Red' for the sponsor tier text
app = app.replace(/Gold/g, 'Red');
fs.writeFileSync('src/App.tsx', app);

// 2. Update index.css
let css = fs.readFileSync('src/index.css', 'utf-8');
// Replace the color variables with red hex codes
css = css.replace('--color-gold: #D4AF37;', '--color-red: #D90429;');
css = css.replace('--color-gold-light: #E8C86B;', '--color-red-light: #FF4D5A;');
css = css.replace('--color-gold-dark: #B39020;', '--color-red-dark: #9B0014;');
// Replace any remaining 'gold' references in css (like .gold-gradient-text)
css = css.replace(/gold/g, 'red');
fs.writeFileSync('src/index.css', css);

console.log('Replacement complete.');
