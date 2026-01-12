Essentials – Donation & Public Distribution Platform 🇮🇳

Essentials is a responsive web application focused on social welfare and community-driven donations, inspired by India’s Public Distribution System (PDS) and National Food Security Act (NFSA).
The platform enables users to donate blood, books, toys, clothes, and food, and request donation pickups through a simple and accessible interface.

🎯 Purpose & Vision

The goal of this project is to:

Encourage responsible donations

Support essential resource distribution

Promote awareness of public welfare initiatives

Provide a simple digital solution for community participation

🌟 Features

🩸 Blood Donation Awareness
Information and resources to encourage life-saving blood donation.

📚 Old Book Donation
Help underprivileged students by donating used books.

🧸 Toy Donation
Spread joy to children in need by donating toys.

👕 Clothes Donation
Donate wearable clothing for people of all ages.

🍚 Food & Essentials Distribution
Supports the vision of the National Food Security Act (NFSA).

📩 Pickup Request System
Easy-to-use contact form for donation pickup scheduling.

🎨 Modern & Responsive UI
Fully responsive design, optimized for mobile and desktop.

✉️ Email Integration
Powered by Formspree with optional direct mail submission.

🛠️ Tech Stack

HTML5 – Semantic and accessible structure

CSS3 – Custom styling and responsive layout

JavaScript (Vanilla) – DOM manipulation and form logic

Formspree – Serverless email form handling

Font Awesome – Scalable vector icons

📁 Project Structure

Essentials/

├── index.html        # Main application entry point

├── style.css         # Stylesheets and responsive design

├── script.js         # Interactive logic and form handling

├── blood.jpg         # Blood donation visual

├── book.jpg          # Book donation visual

├── toy.jpg           # Toy donation visual

├── pds.jpg           # Public Distribution System visual

├── nfsa.jpg          # National Food Security Act visual

├── Essentials.png    # Project logo

└── README.md         # Project documentation

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/essentials-donation-platform.git
cd essentials-donation-platform

2️⃣ Run the Application

This is a static web application, so no backend setup is required.

You can:

Open index.html directly in your browser
OR

Use a Live Server extension (recommended for development)

⚙️ Configuration
📩 Contact Form Setup (Formspree)

Open index.html

Locate the <form> element:

<form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">


Replace YOUR_FORMSPREE_ID with your actual Formspree form ID.

✉️ Direct Mail Configuration

Open script.js and update the email address:

// Replace with your email address
const email = "mailto:your-email@example.com";


This allows users to send donation details directly through their mail app.

🔐 Data & Privacy

No user data is stored locally or on a server

Form submissions are handled securely by Formspree

Minimal data collection for privacy and safety

📈 Future Enhancements

User authentication (Donor / Admin)

Location-based donation pickup

Donation tracking dashboard

Email & SMS notifications

Backend integration (Node.js / Firebase)

Multi-language support

📄 License

This project is open-source and available under the MIT License.
Free to use for educational, personal, and social-impact purposes.

❤️ Acknowledgements

Inspired by:

India’s Public Distribution System (PDS)

National Food Security Act (NFSA)

Community-led donation initiatives
