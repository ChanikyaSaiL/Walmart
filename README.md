# Walmart E-Commerce Platform

A modern, responsive e-commerce web application built with React, Vite, and Tailwind CSS. This platform provides a seamless shopping experience with advanced features for browsing, purchasing, and managing products.

## 🚀 Features

### Core E-Commerce Functionality
- **Product Browsing**: Explore products by categories with detailed listings
- **Shopping Cart**: Add, remove, and update item quantities in your cart
- **Wishlist**: Save favorite products for later
- **User-Friendly Navigation**: Smooth routing between different sections

### Advanced Features
- **Smart Mission Pick**: AI-powered shopping assistant that helps users plan and shop for specific events or occasions (e.g., birthday parties, weddings, housewarming)
  - Budget-based recommendations
  - Category prioritization
  - Personalized product suggestions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Enhanced user experience with Framer Motion animations
- **Modern UI**: Clean, intuitive interface using Tailwind CSS and Lucide React icons

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API with useReducer
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Linting**: ESLint

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ChanikyaSaiL/Walmart.git
   cd Walmart/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
client/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Categories.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── RootLayout.jsx
│   │   ├── SmartMissionPick.jsx
│   │   └── Wishlist.jsx
│   ├── context/
│   │   └── ShopContext.jsx
│   ├── data/
│   │   └── missionData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Key Components

- **SmartMissionPick**: Interactive feature for event-based shopping recommendations
- **ShopContext**: Global state management for cart and wishlist functionality
- **Responsive Layout**: Adaptive design across all device sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.
