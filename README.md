
# Travel Agency Website

This is a fully functional, modern travel agency website designed to provide users with an intuitive and interactive platform to search, explore, and book travel experiences. The website includes sections for featured destinations, exclusive offers, popular travel packages, customer testimonials, travel tips, and much more. It is built with a responsive design, optimized for both performance and SEO.

---

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

---

## Demo
[Live Demo Link]([https://travel-agency-sathish-kumar-t.vercel.app/])

---

## Features
- **Advanced search functionality** for flights, hotels, car rentals, and travel packages.
- **Featured destinations** with high-quality images and brief descriptions.
- **Exclusive deals and offers** section for budget-conscious travelers.
- **Customer testimonials** with real images and ratings for credibility.
- **Interactive booking process** with integrated payment gateway support.
- **Travel guides and tips** for travelers seeking information and inspiration.
- **Visa and passport assistance** information.
- **Real-time currency converter** for easy planning.
- **Interactive world map** for exploring destinations by region.

---

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, React.js, Next.js
- **Backend**: Node.js, Express.js
- **Database**: SQL
- **Authentication**: Google OAuth
- **Payment Gateway**: Stripe (or preferred provider)
- **Other Libraries**: Axios (for API requests), Tailwind CSS (for styling)

---

## Getting Started

### Prerequisites
- Node.js and npm installed
- SQL Database setup
- Stripe (or alternative) account for payment processing

### Installation
1. Clone this repository:
    ```bash
    git clone https://github.com/sathish2905/travel-agency.git
    cd travel-agency
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```plaintext
     NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
     NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your-google-client-secret
     DATABASE_URL=your-database-url
     STRIPE_SECRET_KEY=your-stripe-secret-key
     ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open `http://localhost:3000` in your browser to view the website.

---

## File Structure
```plaintext
travel-agency/
├── public/               # Static files
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Next.js pages
│   ├── services/         # API and backend services
│   ├── styles/           # Styling files (CSS, SCSS, etc.)
│   ├── utils/            # Helper functions
├── .env                  # Environment variables
├── README.md
└── package.json
```

---

## API Integration
This project integrates with the following APIs:
- **Google OAuth**: For user authentication.
- **Stripe API**: For secure payment processing.
- **Currency API** (optional): For real-time currency conversion rates.
- **Travel Data API** (optional): For destination details, weather, and other data.

Refer to the specific API documentation for integration details.

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

---

## License
This project is licensed under the MIT License.

---

## Acknowledgments
- Special thanks to the creators of React, Next.js, and Tailwind CSS for making web development a joy.
- [API Providers] for travel data, currency exchange rates, and other essential integrations.

---

Happy traveling! 🌍✈️
