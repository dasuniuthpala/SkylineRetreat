# Skyline Retreat Hotel - Full Stack Mobile Application

A modern full-stack hotel booking and management application featuring a React Native mobile frontend built with Expo and a Node.js + Express + MongoDB backend.

![Hotel App](https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800)

## 🌟 Overview

**Skyline Retreat Hotel** is a comprehensive mobile hotel application that provides:
- User authentication and profile management
- Room browsing, filtering, and booking
- Hotel facilities information
- Restaurant menu with category filtering
- Contact information and messaging
- Beautiful, modern UI with luxury hotel aesthetics

## 🏗️ Project Structure

```
Hotel/
├── backend/                 # Node.js + Express + MongoDB API
│   ├── controllers/        # Business logic
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API endpoints
│   ├── middleware/        # Authentication & validation
│   ├── .env              # Environment variables
│   ├── server.js         # Entry point
│   └── package.json
│
└── frontend/              # React Native + Expo mobile app
    ├── src/
    │   ├── components/   # Reusable UI components
    │   ├── screens/      # App screens
    │   ├── navigation/   # React Navigation setup
    │   ├── context/      # React Context (Auth)
    │   └── services/     # API integration
    ├── App.js
    └── package.json
```

## 🚀 Features

### Backend (Node.js + Express + MongoDB)
- ✅ RESTful API architecture
- ✅ JWT authentication
- ✅ Password hashing with bcrypt
- ✅ MongoDB with Mongoose ODM
- ✅ CRUD operations for all resources
- ✅ Input validation and error handling
- ✅ CORS enabled
- ✅ MVC pattern

### Frontend (React Native + Expo)
- ✅ Modern UI with clean design
- ✅ Bottom tab navigation + Stack navigation
- ✅ User authentication flow
- ✅ Home screen with featured rooms
- ✅ Room browsing with filters
- ✅ Room details and booking
- ✅ Facilities display
- ✅ Food menu with categories
- ✅ Contact screen with forms
- ✅ Reusable components
- ✅ Context API for state management
- ✅ AsyncStorage for persistence

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Expo CLI** - Install globally: `npm install -g expo-cli`
- **Git** - [Download](https://git-scm.com/)

For mobile development:
- **iOS**: Xcode (macOS only)
- **Android**: Android Studio with Android SDK
- Or use **Expo Go** app on your physical device

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Hotel
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
# Edit .env file with your MongoDB connection string
```

**Backend `.env` file:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/skyline_hotel
JWT_SECRET=your_jwt_secret_key_change_in_production
JWT_EXPIRES_IN=7d
```

**Start MongoDB:**
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

**Run the backend server:**
```bash
# Development mode (auto-reload)
npm run dev

# Production mode
npm start
```

Server will be running at: `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd ../frontend

# Install dependencies
npm install

# Update API URL in src/services/api.js
# For Android Emulator: http://10.0.2.2:5000/api
# For iOS Simulator: http://localhost:5000/api
# For Physical Device: http://<YOUR_IP>:5000/api
```

**Run the mobile app:**
```bash
# Start Expo
npm start

# Or directly on simulator/emulator
npm run ios      # iOS Simulator (macOS only)
npm run android  # Android Emulator
```

## 📱 Running on Device

### Physical Device (Easiest)
1. Install **Expo Go** from App Store (iOS) or Play Store (Android)
2. Run `npm start` in frontend directory
3. Scan QR code with Expo Go app

### iOS Simulator (macOS only)
1. Install Xcode from App Store
2. Run `npm run ios`

### Android Emulator
1. Install Android Studio
2. Create an Android Virtual Device (AVD)
3. Run `npm run android`

## 🎯 API Endpoints

### Authentication
```
POST   /api/users/signup      # Register new user
POST   /api/users/signin      # Login user
GET    /api/users/profile     # Get user profile (Protected)
PUT    /api/users/profile     # Update profile (Protected)
```

### Rooms
```
GET    /api/rooms                    # Get all rooms
GET    /api/rooms/:id                # Get room by ID
GET    /api/rooms/featured/list      # Get featured rooms
POST   /api/rooms                    # Create room (Protected)
PUT    /api/rooms/:id                # Update room (Protected)
DELETE /api/rooms/:id                # Delete room (Protected)
```

### Facilities
```
GET    /api/facilities         # Get all facilities
POST   /api/facilities         # Create facility (Protected)
```

### Food
```
GET    /api/food                      # Get all food items
GET    /api/food/category/:category   # Get by category
POST   /api/food                      # Create food item (Protected)
```

### Bookings
```
POST   /api/bookings              # Create booking (Protected)
GET    /api/bookings/my-bookings  # Get user bookings (Protected)
GET    /api/bookings/:id          # Get booking by ID (Protected)
DELETE /api/bookings/:id          # Cancel booking (Protected)
```

## 🎨 Design System

### Color Palette
- **Primary**: `#1E3A8A` (Deep Blue)
- **Secondary**: `#DC2626` (Red)
- **Background**: `#F9FAFB` (Light Gray)
- **Text**: `#1F2937` (Dark Gray)
- **Success**: `#059669` (Green)
- **Warning**: `#F59E0B` (Amber)

### Components
- **CustomButton** - Reusable buttons with variants
- **CustomInput** - Text inputs with icons and validation
- **RoomCard** - Room display cards
- **FoodCard** - Menu item cards
- **FacilityItem** - Facility list items

## 📊 Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  bookings: [ObjectId]
}
```

### Room Model
```javascript
{
  name: String,
  type: Enum ['Single', 'Double', 'Suite', 'Deluxe', 'Presidential'],
  description: String,
  price: Number,
  capacity: Number,
  size: Number,
  image: String,
  amenities: [String],
  availability: Boolean,
  featured: Boolean,
  rating: Number
}
```

### Booking Model
```javascript
{
  user: ObjectId,
  room: ObjectId,
  checkInDate: Date,
  checkOutDate: Date,
  numberOfGuests: Number,
  totalPrice: Number,
  status: Enum ['Pending', 'Confirmed', 'Cancelled', 'Completed'],
  paymentStatus: Enum ['Pending', 'Paid', 'Refunded']
}
```

## 🔐 Authentication Flow

1. User signs up with name, email, password
2. Password is hashed using bcrypt
3. JWT token is generated and returned
4. Token is stored in AsyncStorage on mobile
5. Token is sent in Authorization header for protected routes
6. Backend middleware verifies token on protected routes

## 🧪 Testing the Application

### Backend Testing
```bash
# Test API endpoints using curl or Postman

# Register a user
curl -X POST http://localhost:5000/api/users/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@test.com","password":"test123"}'

# Login
curl -X POST http://localhost:5000/api/users/signin \
  -H "Content-Type: application/json" \
  -d '{"email":"john@test.com","password":"test123"}'

# Get rooms
curl http://localhost:5000/api/rooms
```

### Frontend Testing
1. Start the backend server
2. Start the Expo app
3. Register a new account
4. Browse rooms, facilities, food menu
5. Try booking a room

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
```
Solution: Ensure MongoDB is running and connection string is correct in .env
```

**Port Already in Use:**
```
Solution: Change PORT in .env file or kill process using port 5000
```

### Frontend Issues

**Cannot Connect to API:**
```
Solution: 
- Verify backend is running
- Check API_URL in src/services/api.js
- Use 10.0.2.2 for Android emulator
- Use your local IP for physical devices
```

**Navigation Not Working:**
```
Solution:
- Clear Expo cache: expo start -c
- Reinstall dependencies
```

## 📝 Project Highlights

### Backend Architecture
- **MVC Pattern**: Separation of concerns with Models, Controllers, and Routes
- **Middleware**: JWT authentication, error handling
- **Validation**: Mongoose schema validation
- **Security**: Password hashing, JWT tokens, protected routes

### Frontend Architecture
- **Component-Based**: Reusable React components
- **Navigation**: React Navigation with Stack and Tab navigators
- **State Management**: Context API for global auth state
- **API Layer**: Centralized Axios configuration
- **Form Validation**: Real-time input validation

## 🚀 Future Enhancements

- [ ] Date picker for room bookings
- [ ] Payment gateway integration
- [ ] Push notifications
- [ ] Image upload for rooms and food
- [ ] Reviews and ratings system
- [ ] Search functionality
- [ ] Map integration
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Dark mode

## 📄 Documentation

- **Backend README**: `backend/README.md`
- **Frontend README**: `frontend/HOTEL_README.md`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Skyline Retreat Hotel Development Team**

---

## 📞 Support

For support, email info@skylineretreat.com or open an issue in the repository.

---

**⭐ If you found this project helpful, please give it a star!**
#   S k y l i n e R e t r e a t  
 