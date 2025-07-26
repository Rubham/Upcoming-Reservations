# Upcoming Reservations React Component

A responsive React component for displaying upcoming restaurant reservations with a modern, clean UI built using Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth hover effects and transitions
- **Status Indicators**: Color-coded status badges (Confirmed, Pending, Cancelled)
- **Interactive Elements**: Edit and Cancel buttons for each reservation
- **Empty State**: Handles the case when no reservations exist
- **Static Data**: Uses the provided JSON data structure

## 🛠️ Tech Stack

- **React 18** - Functional components with hooks
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Scripts** - Development and build tools

## 📦 Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   └── UpcomingReservations.js    # Main component
├── App.js                         # App wrapper
├── index.js                       # React entry point
└── index.css                      # Global styles with Tailwind
```

## 🎨 Component Features

### Data Structure
The component uses the following JSON structure for reservations:
```json
{
  "id": 1,
  "venueName": "The Grand Cafe",
  "date": "2024-08-15",
  "time": "19:00",
  "partySize": 2,
  "status": "Confirmed"
}
```

### Responsive Grid Layout
- **Mobile**: Single column layout
- **Tablet**: Two columns (md:grid-cols-2)
- **Desktop**: Three columns (lg:grid-cols-3)

### Status Badges
- **Confirmed**: Green badge
- **Pending**: Yellow badge
- **Cancelled**: Red badge

### Interactive Elements
- **Edit Button**: Allows modification of reservation details
- **Cancel Button**: Cancels the reservation
- **New Reservation Button**: Creates a new reservation

## 🎯 Usage

The `UpcomingReservations` component can be easily integrated into any React application:

```jsx
import UpcomingReservations from './components/UpcomingReservations';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <UpcomingReservations />
    </div>
  );
}
```

## 🎨 Customization

### Styling
The component uses Tailwind CSS classes and can be easily customized by:
- Modifying the color scheme in the `getStatusBadgeStyle` function
- Adjusting the grid layout classes
- Changing the card design and spacing

### Data
To use different data, simply replace the static data array in the `useState` hook with your own data source.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE). 