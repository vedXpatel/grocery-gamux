# Fresh Grocery Store 🛒

A modern, responsive grocery e-commerce website built with React and styled-components. Features a beautiful landing page, product catalog, shopping cart, and user authentication.

## ✨ Features

- **Modern Design**: Beautiful UI with smooth animations and hover effects
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Product Catalog**: Explore categories and featured products
- **Shopping Cart**: Add, remove, and manage items with quantity controls
- **User Authentication**: Login, register, and account management
- **Top Deals**: Highlighted offers with discount badges
- **Fake Functionality**: Demo-ready with realistic interactions

## 🚀 Live Demo

[Deploy to Vercel](https://vercel.com)

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Styled Components, CSS3
- **UI Components**: Material-UI Icons, React Bootstrap
- **Carousel**: React Alice Carousel
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd grocery-gamux
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a React app
   - Click "Deploy"

### Option 3: Deploy with Custom Settings

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   - The `vercel.json` file is already configured
   - Vercel will use the build output automatically

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Cart.jsx        # Shopping cart component
│   ├── Footer.jsx      # Footer with links and info
│   ├── Navbar.jsx      # Navigation bar
│   ├── Product.jsx     # Product card component
│   ├── Slider.jsx      # Hero carousel
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Login.jsx       # Login page
│   ├── Register.jsx    # Registration page
│   ├── Cart.jsx        # Cart page
│   └── ...
├── assets/             # Images and static files
├── data.js             # Product data
└── App.jsx             # Main app component
```

## 🎨 Key Components

### Explore Categories
- Beautiful carousel with hover effects
- Discount badges and pricing
- Smooth animations and transitions

### Top Deals
- Fire-themed design with urgency
- Flash sale indicators
- Original vs discounted pricing

### Product Cards
- Hover effects with action icons
- Quantity controls
- Responsive design

## 🔧 Configuration

### Environment Variables
No environment variables required for demo deployment.

### Build Settings
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Demo Credentials

### Login
- **Email**: demo@example.com
- **Password**: password123
- **Mobile**: 1234567890

### Registration
- Create any account with valid email and password

## 🚀 Performance

- Optimized images and assets
- Lazy loading for better performance
- Efficient state management
- Minimal bundle size

## 📄 License

This project is for demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For deployment issues or questions, please check the Vercel documentation or create an issue in the repository.

---

**Ready to deploy?** 🚀

This project is fully configured for Vercel deployment. Just connect your repository and deploy!