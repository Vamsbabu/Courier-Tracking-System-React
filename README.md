# Courier Tracking System - React

A modern, responsive React application for tracking courier packages with a clean and professional UI design.

## 🚀 Features

- **User Authentication**: Simple login system with form validation
- **Courier Tracking**: Track packages by entering Courier ID
- **Smart Status Logic**:
  - IDs with alphabets → "Delivered"
  - Numeric IDs matching mock data → "In Transit" (Air/Road/Sea)
  - Invalid IDs → Error message
- **Color-coded Status**: Green (Delivered), Orange (In Transit), Red (Error)
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Card-based layout with smooth hover effects

## 🛠️ Tech Stack

- **React** (Functional Components with Hooks)
- **JavaScript** (ES6+)
- **HTML5**
- **CSS3** (No external UI libraries)
- **No Backend** (Simulated with frontend data)

## 📁 Project Structure

```
src/
├── components/
│   ├── Login.jsx          # Authentication component
│   ├── TrackCourier.jsx   # Main tracking interface
│   └── Header.jsx         # Application header
├── App.js                 # Main application component
├── App.css                # Global styles
└── index.js               # Application entry point

public/
└── index.html             # HTML template
```

## 🎯 React Concepts Demonstrated

- **useState Hook**: State management for forms and UI state
- **Conditional Rendering**: Dynamic UI based on authentication status
- **Props**: Data flow between parent and child components
- **Event Handling**: Form submissions and button clicks
- **Component Composition**: Modular, reusable components

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vamsbabu/Courier-Tracking-System-React.git
   cd courier-tracking-system-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🎮 How to Use

1. **Login**: Enter any username and password (basic validation)
2. **Track Package**: Enter a Courier ID in the tracking form
3. **View Status**:
   - Try "ABC123" → Shows "Delivered" (green)
   - Try "12345" → Shows "In Transit (Air)" (orange)
   - Try invalid ID → Shows error (red)

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 UI/UX Highlights

- **Gradient Background**: Eye-catching yet professional
- **Card-based Layout**: Clean, contained sections
- **Hover Effects**: Subtle animations for interactivity
- **Typography**: Readable fonts with proper hierarchy
- **Color Scheme**: Intuitive status indicators

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

### Code Quality

- Functional components only (no class components)
- Clean, readable code with comments
- Proper component separation
- Consistent naming conventions

## 📚 Learning Outcomes

This project demonstrates:
- Building complete React applications from scratch
- State management with hooks
- Creating responsive, professional UIs
- Form handling and validation
- Component-based architecture
- Modern CSS techniques

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**Vamsi** - Frontend Developer

- GitHub: [@Vamsbabu](https://github.com/Vamsbabu)
- LinkedIn: [Your LinkedIn Profile]

## 📞 Contact

For questions or suggestions, please open an issue on GitHub.

---

**⭐ Star this repo if you found it helpful!**