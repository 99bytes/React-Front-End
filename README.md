

LIVE LINK FOR THIS PROJECT --- https://react-fe1.netlify.app/


React Front End - SaaS Pricing Dashboard
This is a modern, responsive SaaS dashboard and pricing page built with React, Vite, and Tailwind CSS. It includes grid-based sections for products/pricing, feature highlights, newsletter signup, and a dynamic hero area.

![App screenshot ✨ Features

⚡ Lightning-fast: Bundled with Vite for instant cold starts.

🎨 Tailwind CSS styling for rapid and customizable UI.

📱 Responsive: Looks great on phone, tablet, and desktop.

🗂️ Modular Components: Clean React functional component structure.

🌐 Easy Deployment: Ready for Netlify, Vercel, or Static Host.

💳 Pricing Cards: Compare single, double, and triple user plans.

📂 Project Structure
text
src/
├── assets/           # Images (single.png, double.png, triple.png, laptop.jpg)
├── components/
│     ├── Analytics.jsx
│     ├── Cards.jsx
│     ├── Footer.jsx
│     ├── Hero.jsx
│     ├── Navbar.jsx
│     └── Newsletter.jsx
├── App.jsx           # Main component
├── index.css         # Tailwind CSS + custom styles
└── main.jsx          # App entry point
🚀 Getting Started
Prerequisites
Node.js (v16 or higher recommended)

npm or yarn

Installation
Clone this repo:

bash
git clone https://github.com/99bytes/React-Front-End.git
cd React-Front-End
Install dependencies:

bash
npm install
# or
yarn install
Start development server:

bash
npm run dev
# or
yarn dev
View in browser:
Visit http://localhost:5173 (or port shown in your terminal)

🏗️ Build for Production
bash
npm run build
# Outputs to /dist
Preview locally:

bash
npm run preview
🌍 Deployment (Netlify)
Update Vite config
(vite.config.js):

text
base: '/',
Build

text
npm run build
Deploy

Git-integrated: Push to GitHub, Netlify builds/deploys automatically.

Manual: Drag-and-drop /dist folder to Netlify dashboard.

For React Router: add _redirects file to /public with

text
/*    /index.html   200
🖼️ Customization
Update src/assets/ for your own images and logos.

Edit sections/components in src/components/ as desired.

Tweak colors and fonts in tailwind.config.js and index.css.



🤝 Credits
React

Vite

Tailwind CSS

Netlify (for free hosting)

UI icons by React Icons

Design inspired by modern SaaS dashboards

📣 Live Demo
Check out the live site on Netlify!
((https://react-fe1.netlify.app/))


