# 🤖 AkiraBot

AkiraBot adalah bot WhatsApp berbasis Node.js yang dibangun menggunakan library Baileys. Bot ini mendukung sistem plugin modular sehingga mudah dikembangkan dan di-custom sesuai kebutuhan.

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js" />
  <img src="https://img.shields.io/badge/WhatsApp-Bot-25D366?logo=whatsapp&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Active-success" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
</p>

<p align="center">
  <a href="https://github.com/ReyZ4YouXGod/AkiraBot">
    <img src="https://img.shields.io/badge/GitHub-AkiraBot-black?logo=github" />
  </a>
  <a href="https://wa.me/6281260512743">
    <img src="https://img.shields.io/badge/WhatsApp-Contact-green?logo=whatsapp" />
  </a>
  <a href="https://instagram.com/reycloud_dev">
    <img src="https://img.shields.io/badge/Instagram-@reycloud__dev-E4405F?logo=instagram&logoColor=white" />
  </a>
  <a href="https://tiktok.com/@reycloud_dev">
    <img src="https://img.shields.io/badge/TikTok-@reycloud__dev-black?logo=tiktok" />
  </a>
</p>


## ⚡ Fitur Utama

- 📦 Sistem plugin modular (mudah tambah fitur)
- 🧠 Auto response & command handler
- ⚙️ Support CommonJS
- 🔄 Auto reload plugin (optional tergantung setup)
- 📊 Struktur rapi & mudah dikembangkan
- 📱 Integrasi WhatsApp via Baileys

---

## 🚀 Instalasi

```bash
git clone https://github.com/ReyZ4YouXGod/AkiraBot.git
cd AkiraBot
npm install

📁 Struktur Project

AkiraBot/
├── plugins/        # Semua fitur bot
├── system/         # Core system bot
├── index.js        # Entry point
├── config.js       # Config utama
└── package.json

