Essentials – Donation & Public Distribution Platform 🇮🇳
A responsive web application focused on social welfare and donations, inspired by India’s Public Distribution System (PDS) and National Food Security Act (NFSA). The platform enables users to donate blood, books, toys, clothes, and food, and request donation pickups through a simplified contact form.

🌟 Features
🩸 Blood Donation Awareness: Information and resources for donors.
📚 Old Book Donation: Give a second life to your educational materials.
🧸 Toy Donation: Spread joy to children in need.
👕 Clothes Donation: Donate apparel for all ages.
🍚 Food & Essentials Distribution: Support the NFSA mission.
📩 Pickup Request: Integrated contact form for easy scheduling.
🎨 Modern Design: Responsive UI with mobile-friendly layout.
✉️ Email Integration: Powered by Formspree with direct mail options.


🛠️ Tech Stack
HTML5: Semantic structure.
CSS3: Custom styling and responsive design.
JavaScript (Vanilla): DOM manipulation and form logic.
Formspree: Serverless form handling.
Font Awesome: scalable vector icons.


📁 Project Structure
text
Essentials/
├── index.html        # Main application entry point
├── style.css         # Stylesheets and media queries
├── script.js         # Interactive logic and form handling
├── blood.jpg         # Asset: Blood donation visual
├── book.jpg          # Asset: Book donation visual
├── toy.jpg           # Asset: Toy donation visual
├── pds.jpg           # Asset: PDS visual
├── nfsa.jpg          # Asset: NFSA visual
├── Essentials.png    # Project Logo
└── README.md         # Project Documentation



🚀 Getting Started
1. Clone the Repository
bash
git clone https://github.com/your-username/essentials-donation-platform.git
cd essentials-donation-platform
2. Run the Application
Since this is a static site, no backend server is required.

Simply open 
index.html
 in your web browser.
Or use a live server extension (e.g., in VS Code).
⚙️ Configuration
Contact Form Setup
The contact form uses Formspree.

Open 
index.html
 and locate the <form> tag:
html
<form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
Replace YOUR_FORMSPREE_ID with your actual Formspree endpoint.
Open script.js to update the direct mail link:
javascript
// Replace with your email
const email = "mailto:your-email@example.com";
