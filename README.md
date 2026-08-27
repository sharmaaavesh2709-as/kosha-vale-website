# KOSHA VALE - Premium Coffee Brand Website

A modern, responsive website for KOSHA VALE, a premium coffee brand focused on ethically-sourced, freshly-roasted coffee.

## 🌟 Features

- **Modern Design**: Clean, minimalist interface with coffee-inspired color scheme
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile
- **Product Showcase**: Featured products with pricing and descriptions
- **Subscription Plans**: Multiple subscription tiers (Monthly, Quarterly, Annual)
- **Shopping Cart**: Functional cart system with item tracking
- **About Section**: Brand story and core values
- **Customer Testimonials**: Social proof and reviews
- **Contact Form**: Get in touch with the team
- **Newsletter Signup**: Email subscription for updates
- **Social Media Links**: Connected to social platforms

## 📁 Project Structure

```
kosha-vale-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All CSS styling
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## 🎨 Color Scheme

- **Primary Brown**: #8B4513 (Saddle Brown)
- **Secondary Orange**: #D2691E (Chocolate)
- **Dark**: #2C2C2C (Near Black)
- **Light**: #F5F5F5 (Off White)

## 📱 Sections

1. **Header/Navigation** - Sticky navigation with cart icon
2. **Hero Banner** - Eye-catching banner with CTA
3. **Featured Products** - Grid of 6 coffee products
4. **About Us** - Brand story and values
5. **How It Works** - 4-step process explanation
6. **Subscription Plans** - 3 subscription tiers
7. **Testimonials** - Customer reviews
8. **Contact** - Contact form and information
9. **Footer** - Links, newsletter, and social media

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs as static HTML

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sharmaaavesh2709-as/kosha-vale-website.git
```

2. Navigate to the project folder:
```bash
cd kosha-vale-website
```

3. Open `index.html` in your browser or use a live server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server package)
http-server
```

4. Visit `http://localhost:8000` in your browser

## ✨ Functionality

### Shopping Cart
- Click "Add to Cart" on any product
- Cart count updates in the header
- Click the cart icon to view cart items

### Subscriptions
- Select a subscription plan
- Click "Subscribe Now" to proceed
- Three tiers available with different benefits

### Contact Form
- Fill in your details
- Submit message to get in touch
- Form validation included

### Newsletter
- Enter email in footer section
- Subscribe for updates and offers

## 📊 Customization

### Changing Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #D2691E;
    /* ... more colors ... */
}
```

### Updating Products
Modify product cards in the "Featured Products" section of `index.html`:
```html
<div class="product-card">
    <div class="product-image" style="background: ..."></div>
    <h3>Product Name</h3>
    <p class="price">₹599</p>
    <p class="description">Description here</p>
    <button class="btn btn-secondary">Add to Cart</button>
</div>
```

### Adding Content
- Update text content directly in `index.html`
- Modify images by replacing placeholder gradients
- Add new sections by copying existing ones

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Responsive design, flexbox, grid
- **JavaScript (Vanilla)** - Interactivity without dependencies
- **Font Awesome** - Icons via CDN

## 📝 SEO Considerations

- Semantic HTML structure
- Descriptive meta tags
- Mobile-responsive design
- Fast loading static files

## 🚀 Deployment

### Options:

1. **GitHub Pages**
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Site will be available at `https://sharmaaavesh2709-as.github.io/kosha-vale-website`

2. **Netlify**
   - Connect GitHub repository
   - Automatic deployments on push

3. **Vercel**
   - Similar to Netlify
   - Fast global CDN

4. **Traditional Hosting**
   - Upload files via FTP
   - Works on any web host

## 📧 Contact

**Email**: hello@koshavale.com  
**Phone**: +91 98765 43210  
**Address**: 123 Coffee Lane, Bangalore, India

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Future Enhancements

- [ ] E-commerce backend integration
- [ ] User authentication system
- [ ] Product review system
- [ ] Blog functionality
- [ ] Admin dashboard
- [ ] Payment gateway integration
- [ ] Inventory management
- [ ] Email notifications
- [ ] Analytics integration
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💝 Support

If you find this project helpful, please consider:
- Giving it a ⭐ star
- Sharing it with others
- Contributing improvements

---

**Made with ☕ and ❤️ for KOSHA VALE**