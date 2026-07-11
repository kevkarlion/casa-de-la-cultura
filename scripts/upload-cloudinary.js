const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Load .env.local manually
const envPath = path.join(__dirname, '../.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) process.env[match[1].trim()] = match[2].trim();
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const dir = path.join(__dirname, '../public/agenda/julio');
const newImages = [
  'rio-historias', 'pistacho', 'duo-upa', 'cuento-sol',
  'circo-valle', 'poder-k-pop', 'escuadron', 'pochoclo',
  'pan-gomitas', 'juegos-teatrales', 'marionetas',
  'detras-gajo', 'cerdiña', 'carrito-magico'
];

(async () => {
  for (const name of newImages) {
    const exts = ['.webp', '.png', '.jpg'];
    let filePath;
    for (const ext of exts) {
      const p = path.join(dir, name + ext);
      if (fs.existsSync(p)) { filePath = p; break; }
    }
    if (!filePath) { console.log(`SKIP: ${name} not found`); continue; }
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'agenda/julio',
        public_id: name,
        overwrite: true,
      });
      console.log(`${name} -> ${result.secure_url}`);
    } catch (e) {
      console.error(`ERROR ${name}: ${e.message}`);
    }
  }
})();
