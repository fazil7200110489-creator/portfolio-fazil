const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf-8');

// Update CSS Variables to Light Mode
css = css.replace(/--bg: #[0-9a-fA-F]+;/, '--bg: #ffffff;');
css = css.replace(/--bg-2: #[0-9a-fA-F]+;/, '--bg-2: #f8fafc;');
css = css.replace(/--card: [^;]+;/, '--card: #ffffff;');
css = css.replace(/--text: #[0-9a-fA-F]+;/, '--text: #0f172a;');
css = css.replace(/--muted: [^;]+;/, '--muted: #64748b;');
css = css.replace(/--accent: #[0-9a-fA-F]+;/, '--accent: #2563eb;');
css = css.replace(/--accent-2: #[0-9a-fA-F]+;/, '--accent-2: #3b82f6;');
css = css.replace(/--accent-3: #[0-9a-fA-F]+;/, '--accent-3: #60a5fa;');
css = css.replace(/--line: [^;]+;/, '--line: #e2e8f0;');

// Invert base body styles
css = css.replace(/background:[\s\S]*?radial-gradient[\s\S]*?(?=color: var\(--text\);)/, 'background: var(--bg);\n  ');
css = css.replace(/body::before \{[\s\S]*?\}/, 'body::before { display: none; }');
css = css.replace(/body::after \{[\s\S]*?\}/, 'body::after { display: none; }');

// Invert black and white RGBA
css = css.replace(/rgba\(255,\s*255,\s*255,/g, 'TMP_WHITE');
css = css.replace(/rgba\(0,\s*0,\s*0,/g, 'TMP_BLACK');
css = css.replace(/TMP_WHITE/g, 'rgba(0, 0, 0,');
css = css.replace(/TMP_BLACK/g, 'rgba(255, 255, 255,');

// Hardcoded dark backgrounds
css = css.replace(/rgba\(20,\s*24,\s*13,\s*[0-9.]+\)/g, '#ffffff');
css = css.replace(/rgba\(10,\s*10,\s*10,\s*[0-9.]+\)/g, '#ffffff');
css = css.replace(/rgba\(15,\s*15,\s*15,\s*[0-9.]+\)/g, '#ffffff');
css = css.replace(/rgba\(25,\s*30,\s*20,\s*[0-9.]+\)/g, '#ffffff');
css = css.replace(/rgba\(10,\s*15,\s*8,\s*[0-9.]+\)/g, '#ffffff');
css = css.replace(/linear-gradient\(145deg, #ffffff, #ffffff\)/g, '#ffffff');

// General text colors
css = css.replace(/color: #ffffff;/g, 'color: var(--text);');
css = css.replace(/color: #fff;/g, 'color: var(--text);');

// Remove border glows and box shadows that look bad in light mode
css = css.replace(/box-shadow: 0 0 [0-9]+px rgba[^;]+;/g, 'box-shadow: none;');

fs.writeFileSync('app/globals.css', css);
console.log('CSS transformed successfully!');
