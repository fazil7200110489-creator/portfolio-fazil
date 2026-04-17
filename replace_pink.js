const fs = require('fs');

function replaceColors(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace Pink (#ec4899 and rgba(236, 72, 153)) with Emerald
  content = content.replace(/#ec4899/gi, '#10b981');
  content = content.replace(/rgba\(236,\s*72,\s*153/g, 'rgba(16, 185, 129');
  content = content.replace(/Vibrant Pink/gi, 'Vibrant Emerald');

  // Replace Purple (#8b5cf6 and rgba(139, 92, 246)) with Cyan
  content = content.replace(/#8b5cf6/gi, '#0ea5e9');
  content = content.replace(/rgba\(139,\s*92,\s*246/g, 'rgba(14, 165, 233');
  content = content.replace(/Vibrant Purple/gi, 'Vibrant Cyan');

  fs.writeFileSync(filePath, content);
}

replaceColors('app/globals.css');
replaceColors('components/ThreeBackground.js');
console.log('Colors replaced successfully!');
