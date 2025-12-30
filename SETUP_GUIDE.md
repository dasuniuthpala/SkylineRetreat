# 🚀 Quick Setup Guide - Skyline Retreat Hotel

Follow these steps to get the application running on your machine.

## Step 1: Start MongoDB

### Windows
```powershell
net start MongoDB
```

### macOS/Linux
```bash
sudo systemctl start mongod
```

## Step 2: Start Backend Server

Open a terminal:

```bash
cd backend
npm run dev
```

✅ Backend should be running at `http://localhost:5000`

## Step 3: Start Frontend App

Open another terminal:

```bash
cd frontend
npm start
```

✅ Expo DevTools should open in your browser

## Step 4: Run on Device

### Option A: Physical Device (Recommended)
1. Install **Expo Go** app from App Store or Play Store
2. Scan the QR code from Expo DevTools

⚠️ **Important**: Update API URL in `frontend/src/services/api.js`:
```javascript
const API_URL = 'http://YOUR_COMPUTER_IP:5000/api';
// Example: 'http://192.168.1.100:5000/api'
```

### Option B: iOS Simulator (macOS only)
```bash
npm run ios
```

### Option C: Android Emulator
```bash
npm run android
```

⚠️ For Android Emulator, use:
```javascript
const API_URL = 'http://10.0.2.2:5000/api';
```

## Step 5: Test the Application

### Create Test Account
1. Open the app
2. Click "Sign Up"
3. Fill in the form:
   - Name: Test User
   - Email: test@hotel.com
   - Password: test123
4. Click "Sign Up"

### Add Sample Data (Optional)

You can add sample data through the backend API or MongoDB directly.

#### Sample Room (using curl):
```bash
curl -X POST http://localhost:5000/api/rooms \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Deluxe Ocean View",
    "type": "Deluxe",
    "description": "Spacious deluxe room with stunning ocean views",
    "price": 299,
    "capacity": 2,
    "size": 45,
    "amenities": ["WiFi", "TV", "Mini Bar", "Balcony"],
    "availability": true,
    "featured": true,
    "rating": 4.8
  }'
```

#### Sample Facility:
```bash
curl -X POST http://localhost:5000/api/facilities \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Swimming Pool",
    "description": "Olympic-sized outdoor swimming pool",
    "icon": "water",
    "category": "Recreation",
    "operatingHours": "6:00 AM - 10:00 PM"
  }'
```

#### Sample Food Item:
```bash
curl -X POST http://localhost:5000/api/food \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Grilled Salmon",
    "description": "Fresh Atlantic salmon with herbs",
    "price": 28,
    "category": "Dinner",
    "cuisine": "Continental",
    "isVegetarian": false,
    "rating": 4.7
  }'
```

## Common IP Addresses

### Find Your Computer's IP Address:

#### Windows:
```powershell
ipconfig
# Look for "IPv4 Address" under your active network adapter
```

#### macOS/Linux:
```bash
ifconfig
# Look for "inet" under your active network interface
```

#### Quick Reference:
- **iOS Simulator**: `http://localhost:5000/api`
- **Android Emulator**: `http://10.0.2.2:5000/api`
- **Physical Device**: `http://YOUR_IP:5000/api` (e.g., `http://192.168.1.100:5000/api`)

## Verification Checklist

- [ ] MongoDB is running
- [ ] Backend server shows: "✅ Connected to MongoDB successfully"
- [ ] Backend server shows: "🚀 Server is running on port 5000"
- [ ] Expo shows QR code or simulator launched
- [ ] API_URL in frontend matches your setup
- [ ] Can access http://localhost:5000 in browser (shows welcome message)

## Troubleshooting

### "Cannot connect to backend"
- Ensure backend is running on port 5000
- Check firewall settings
- Verify API_URL in `frontend/src/services/api.js`

### "MongoDB connection error"
- Start MongoDB service
- Check MongoDB is running: `mongo` or `mongosh` in terminal
- Verify MONGODB_URI in `backend/.env`

### "Expo app crashes on startup"
- Clear cache: `expo start -c`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### "Cannot sign in/sign up"
- Check browser console/Expo logs for errors
- Verify backend API is accessible
- Test backend directly: `curl http://localhost:5000/api/users/signin`

## Next Steps

Once everything is running:

1. **Explore the app**:
   - Home tab - View featured rooms
   - Rooms tab - Browse and filter rooms
   - Facilities tab - See hotel amenities
   - Food tab - Browse the restaurant menu
   - Contact tab - View contact information

2. **Add your own data**:
   - Use the API endpoints to add rooms, facilities, food items
   - Or use MongoDB Compass to add data directly

3. **Customize**:
   - Change hotel name in screens
   - Update colors in components
   - Add your own images

## Success! 🎉

You should now have a fully functional hotel booking application running!

**Backend**: http://localhost:5000
**Frontend**: Running on Expo

Enjoy exploring the Skyline Retreat Hotel app!
