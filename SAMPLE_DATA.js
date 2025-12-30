// Sample Data for Skyline Retreat Hotel
// You can import this data into MongoDB or use the API endpoints

// Sample Rooms
const rooms = [
  {
    name: "Deluxe Ocean View Suite",
    type: "Deluxe",
    description: "Luxurious suite with panoramic ocean views, king-size bed, and modern amenities. Perfect for a romantic getaway.",
    price: 299,
    capacity: 2,
    size: 55,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    amenities: ["WiFi", "Smart TV", "Mini Bar", "Ocean View Balcony", "Jacuzzi", "Room Service"],
    availability: true,
    featured: true,
    rating: 4.9
  },
  {
    name: "Executive Business Suite",
    type: "Suite",
    description: "Spacious suite designed for business travelers with dedicated workspace, high-speed internet, and conference facilities.",
    price: 259,
    capacity: 2,
    size: 48,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    amenities: ["WiFi", "Work Desk", "Smart TV", "Coffee Maker", "City View"],
    availability: true,
    featured: true,
    rating: 4.7
  },
  {
    name: "Presidential Penthouse",
    type: "Presidential",
    description: "The epitome of luxury with 3 bedrooms, private terrace, home theater, and personal butler service.",
    price: 899,
    capacity: 6,
    size: 180,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
    amenities: ["WiFi", "Smart TV", "Kitchen", "Terrace", "Butler Service", "Home Theater", "Private Pool"],
    availability: true,
    featured: true,
    rating: 5.0
  },
  {
    name: "Family Double Room",
    type: "Double",
    description: "Comfortable family room with two queen beds, perfect for families with children. Includes complimentary breakfast.",
    price: 189,
    capacity: 4,
    size: 40,
    image: "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=800",
    amenities: ["WiFi", "TV", "Mini Fridge", "Coffee Maker", "Safe"],
    availability: true,
    featured: false,
    rating: 4.5
  },
  {
    name: "Standard Single Room",
    type: "Single",
    description: "Cozy single room ideal for solo travelers. Clean, comfortable, and affordable.",
    price: 129,
    capacity: 1,
    size: 25,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    amenities: ["WiFi", "TV", "Work Desk", "Safe"],
    availability: true,
    featured: false,
    rating: 4.3
  },
  {
    name: "Honeymoon Paradise Suite",
    type: "Suite",
    description: "Romantic suite with jacuzzi, champagne on arrival, and stunning sunset views. Perfect for newlyweds.",
    price: 399,
    capacity: 2,
    size: 60,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
    amenities: ["WiFi", "Jacuzzi", "Smart TV", "Mini Bar", "Balcony", "Rose Petals Decoration"],
    availability: true,
    featured: true,
    rating: 4.9
  }
];

// Sample Facilities
const facilities = [
  {
    name: "Swimming Pool",
    description: "Olympic-sized outdoor swimming pool with poolside bar and lounge chairs. Open daily with lifeguard on duty.",
    icon: "water",
    available: true,
    category: "Recreation",
    operatingHours: "6:00 AM - 10:00 PM"
  },
  {
    name: "Free Wi-Fi",
    description: "High-speed complimentary Wi-Fi throughout the hotel including all rooms and common areas.",
    icon: "wifi",
    available: true,
    category: "Services",
    operatingHours: "24/7"
  },
  {
    name: "Fitness Center",
    description: "State-of-the-art gym with modern equipment, personal trainers, and fitness classes.",
    icon: "fitness",
    available: true,
    category: "Recreation",
    operatingHours: "5:00 AM - 11:00 PM"
  },
  {
    name: "Luxury Spa",
    description: "Full-service spa offering massages, facials, body treatments, and wellness therapies.",
    icon: "spa",
    available: true,
    category: "Recreation",
    operatingHours: "9:00 AM - 9:00 PM"
  },
  {
    name: "Parking",
    description: "Secure covered parking with valet service available. EV charging stations included.",
    icon: "car",
    available: true,
    category: "Services",
    operatingHours: "24/7"
  },
  {
    name: "Restaurant & Bar",
    description: "Fine dining restaurant serving international cuisine with rooftop bar offering cocktails and city views.",
    icon: "restaurant",
    available: true,
    category: "Dining",
    operatingHours: "7:00 AM - 11:00 PM"
  },
  {
    name: "Business Center",
    description: "Fully equipped business center with meeting rooms, printing, and secretarial services.",
    icon: "briefcase",
    available: true,
    category: "Business",
    operatingHours: "8:00 AM - 8:00 PM"
  },
  {
    name: "Concierge Service",
    description: "24/7 concierge to assist with reservations, tours, transportation, and local recommendations.",
    icon: "people",
    available: true,
    category: "Services",
    operatingHours: "24/7"
  },
  {
    name: "Kids Play Area",
    description: "Safe and fun indoor play area for children with supervised activities and games.",
    icon: "happy",
    available: true,
    category: "Recreation",
    operatingHours: "8:00 AM - 8:00 PM"
  },
  {
    name: "Room Service",
    description: "In-room dining service available round the clock with extensive menu options.",
    icon: "restaurant-outline",
    available: true,
    category: "Services",
    operatingHours: "24/7"
  }
];

// Sample Food Items
const foodItems = [
  // Breakfast
  {
    name: "Continental Breakfast",
    description: "Fresh croissants, pastries, fruits, yogurt, cereals, and your choice of beverage.",
    price: 18,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800",
    cuisine: "Continental",
    available: true,
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.6
  },
  {
    name: "American Breakfast",
    description: "Eggs any style, bacon, sausage, hash browns, toast, and coffee.",
    price: 22,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
    cuisine: "Continental",
    available: true,
    isVegetarian: false,
    spicyLevel: "None",
    rating: 4.7
  },
  {
    name: "Pancake Stack",
    description: "Fluffy pancakes served with maple syrup, butter, and fresh berries.",
    price: 16,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
    cuisine: "Continental",
    available: true,
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.8
  },
  
  // Lunch
  {
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.",
    price: 14,
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
    cuisine: "Continental",
    available: true,
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.4
  },
  {
    name: "Club Sandwich",
    description: "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo.",
    price: 18,
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
    cuisine: "Continental",
    available: true,
    isVegetarian: false,
    spicyLevel: "None",
    rating: 4.5
  },
  {
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
    price: 20,
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
    cuisine: "Italian",
    available: true,
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.7
  },

  // Dinner
  {
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with lemon butter sauce, served with vegetables and rice.",
    price: 32,
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
    cuisine: "Continental",
    available: true,
    isVegetarian: false,
    spicyLevel: "None",
    rating: 4.9
  },
  {
    name: "Filet Mignon",
    description: "Premium beef tenderloin with red wine reduction, mashed potatoes, and asparagus.",
    price: 48,
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800",
    cuisine: "Continental",
    available: true,
    isVegetarian: false,
    spicyLevel: "None",
    rating: 5.0
  },
  {
    name: "Vegetable Curry",
    description: "Aromatic Indian curry with mixed vegetables, served with basmati rice and naan.",
    price: 24,
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    cuisine: "Indian",
    available: true,
    isVegetarian: true,
    spicyLevel: "Medium",
    rating: 4.6
  },
  {
    name: "Seafood Pasta",
    description: "Linguine with shrimp, mussels, and clams in white wine garlic sauce.",
    price: 28,
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
    cuisine: "Italian",
    available: true,
    isVegetarian: false,
    spicyLevel: "Mild",
    rating: 4.7
  },

  // Desserts
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, served with vanilla ice cream.",
    price: 12,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
    cuisine: "Continental",
    available: true,
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.9
  },
  {
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
    price: 10,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
    cuisine: "Italian",
    available: true,
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.8
  },

  // Beverages
  {
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice, no added sugar.",
    price: 6,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800",
    cuisine: "Other",
    available: true,
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.5
  },
  {
    name: "Cappuccino",
    description: "Rich espresso with steamed milk and foam, dusted with cocoa.",
    price: 5,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800",
    cuisine: "Continental",
    available: true,
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.6
  },
  {
    name: "Tropical Smoothie",
    description: "Blend of mango, pineapple, banana, and coconut milk.",
    price: 8,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800",
    cuisine: "Other",
    available: true,
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.7
  }
];

// Export for use
module.exports = {
  rooms,
  facilities,
  foodItems
};

/* 
 * TO USE THIS DATA:
 * 
 * Option 1: Import directly to MongoDB
 * - Use MongoDB Compass or mongosh
 * - Copy the arrays above
 * - Insert into respective collections
 * 
 * Option 2: Use API endpoints
 * - First, create a user account and get JWT token
 * - Use POST requests to create each item
 * - See backend README for API endpoint details
 * 
 * Option 3: Create a seed script
 * - Create a file like backend/seed.js
 * - Connect to MongoDB and insert this data
 * - Run: node seed.js
 */
