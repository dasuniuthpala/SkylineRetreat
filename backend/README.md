# Skyline Retreat Hotel - Backend API

A RESTful API for hotel management built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**: JWT-based authentication with signup and signin
- **Room Management**: CRUD operations for hotel rooms
- **Facilities Management**: Manage hotel amenities and services
- **Food Menu**: Restaurant menu management with categories
- **Booking System**: Complete booking management with validations
- **MongoDB Integration**: Mongoose schemas with data validation
- **Security**: Password hashing with bcrypt, JWT tokens

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- Bcrypt.js
- CORS
- Dotenv

## Project Structure

```
backend/
├── controllers/       # Request handlers and business logic
│   ├── userController.js
│   ├── roomController.js
│   ├── facilityController.js
│   ├── foodController.js
│   └── bookingController.js
├── models/           # Mongoose schemas
│   ├── User.js
│   ├── Room.js
│   ├── Facility.js
│   ├── Food.js
│   └── Booking.js
├── routes/           # API routes
│   ├── userRoutes.js
│   ├── roomRoutes.js
│   ├── facilityRoutes.js
│   ├── foodRoutes.js
│   └── bookingRoutes.js
├── middleware/       # Custom middleware
│   └── auth.js       # JWT authentication middleware
├── .env             # Environment variables
├── server.js        # Application entry point
└── package.json     # Dependencies and scripts
```

## Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Setup Environment Variables**

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/skyline_hotel
JWT_SECRET=your_jwt_secret_key_change_in_production_2024
JWT_EXPIRES_IN=7d
```

3. **Start MongoDB**

Make sure MongoDB is running on your machine:
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

4. **Run the Server**

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/users/signup` - Register new user
- `POST /api/users/signin` - Login user
- `GET /api/users/profile` - Get user profile (Protected)
- `PUT /api/users/profile` - Update user profile (Protected)

### Rooms
- `GET /api/rooms` - Get all rooms
- `GET /api/rooms/:id` - Get room by ID
- `GET /api/rooms/featured/list` - Get featured rooms
- `POST /api/rooms` - Create room (Protected)
- `PUT /api/rooms/:id` - Update room (Protected)
- `DELETE /api/rooms/:id` - Delete room (Protected)

### Facilities
- `GET /api/facilities` - Get all facilities
- `GET /api/facilities/:id` - Get facility by ID
- `POST /api/facilities` - Create facility (Protected)
- `PUT /api/facilities/:id` - Update facility (Protected)
- `DELETE /api/facilities/:id` - Delete facility (Protected)

### Food
- `GET /api/food` - Get all food items
- `GET /api/food/:id` - Get food item by ID
- `GET /api/food/category/:category` - Get food by category
- `POST /api/food` - Create food item (Protected)
- `PUT /api/food/:id` - Update food item (Protected)
- `DELETE /api/food/:id` - Delete food item (Protected)

### Bookings
- `POST /api/bookings` - Create booking (Protected)
- `GET /api/bookings` - Get all bookings (Protected)
- `GET /api/bookings/my-bookings` - Get user's bookings (Protected)
- `GET /api/bookings/:id` - Get booking by ID (Protected)
- `PUT /api/bookings/:id` - Update booking (Protected)
- `DELETE /api/bookings/:id` - Cancel booking (Protected)

## Authentication

Protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Sample API Usage

### Register User
```bash
POST http://localhost:5000/api/users/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+1234567890"
}
```

### Login
```bash
POST http://localhost:5000/api/users/signin
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get All Rooms
```bash
GET http://localhost:5000/api/rooms
```

### Create Booking
```bash
POST http://localhost:5000/api/bookings
Authorization: Bearer <token>
Content-Type: application/json

{
  "room": "room_id_here",
  "checkInDate": "2024-01-15",
  "checkOutDate": "2024-01-17",
  "numberOfGuests": 2
}
```

## Database Models

### User
- name, email, password, phone
- bookings (references)

### Room
- name, type, description, price, capacity, size
- image, amenities, availability, featured, rating

### Facility
- name, description, icon, available
- category, operatingHours

### Food
- name, description, price, category
- image, cuisine, isVegetarian, spicyLevel, rating

### Booking
- user, room, checkInDate, checkOutDate
- numberOfGuests, totalPrice, status
- specialRequests, paymentStatus, paymentMethod

## Error Handling

All API responses follow this format:

**Success Response:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Optional success message"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Development

- Uses ES6+ syntax
- MVC architecture pattern
- Mongoose for MongoDB ODM
- Express middleware for request handling
- Environment-based configuration

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected route middleware
- Input validation with Mongoose schemas
- CORS enabled

## Notes

- Change JWT_SECRET in production
- Add admin role authentication for protected admin routes
- Implement rate limiting for production
- Add input sanitization
- Set up proper error logging
- Configure CORS for specific origins in production

## License

MIT
