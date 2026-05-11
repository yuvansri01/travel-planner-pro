export const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=250&fit=crop",
    description: "Tropical paradise with stunning temples, rice terraces, and beaches.",
    category: "Beach",
    avgBudget: 800,
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=250&fit=crop",
    description: "The city of love — art, culture, fashion, and iconic landmarks.",
    category: "City",
    avgBudget: 2000,
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop",
    description: "Ancient temples, cherry blossoms, and traditional Japanese culture.",
    category: "Cultural",
    avgBudget: 1500,
  },
  {
    id: 4,
    name: "New York, USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=250&fit=crop",
    description: "The city that never sleeps — skyscrapers, food, and entertainment.",
    category: "City",
    avgBudget: 2500,
  },
  {
    id: 5,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1469796466635-455ede028aca?w=400&h=250&fit=crop",
    description: "Iconic white-washed buildings, blue domes, and breathtaking sunsets.",
    category: "Beach",
    avgBudget: 1800,
  },
  {
    id: 6,
    name: "Safari, Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=250&fit=crop",
    description: "Witness the Big Five in their natural habitat on a guided safari.",
    category: "Adventure",
    avgBudget: 3000,
  },
];

export const hotels: Record<string, Hotel[]> = {
  "bali": [
    { id: 1, name: "Ubud Jungle Resort", rating: 4.8, price: 120, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=180&fit=crop", amenities: ["Pool", "Spa", "WiFi", "Breakfast"] },
    { id: 2, name: "Seminyak Beach Hotel", rating: 4.5, price: 85, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=180&fit=crop", amenities: ["Beach Access", "Pool", "WiFi"] },
    { id: 3, name: "Budget Bali Hostel", rating: 4.0, price: 25, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&h=180&fit=crop", amenities: ["WiFi", "Shared Kitchen"] },
  ],
  "paris": [
    { id: 4, name: "Le Grand Hotel Paris", rating: 4.9, price: 350, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=180&fit=crop", amenities: ["Spa", "Restaurant", "WiFi", "Concierge"] },
    { id: 5, name: "Montmartre Boutique", rating: 4.6, price: 180, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=180&fit=crop", amenities: ["WiFi", "Breakfast", "Bar"] },
    { id: 6, name: "Paris City Hostel", rating: 4.1, price: 45, image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=300&h=180&fit=crop", amenities: ["WiFi", "Lounge"] },
  ],
  "kyoto": [
    { id: 7, name: "Ryokan Arashiyama", rating: 4.9, price: 200, image: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?w=300&h=180&fit=crop", amenities: ["Onsen", "Breakfast", "WiFi", "Garden"] },
    { id: 8, name: "Gion Guesthouse", rating: 4.5, price: 100, image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=300&h=180&fit=crop", amenities: ["WiFi", "Tea Ceremony"] },
    { id: 9, name: "Kyoto Budget Inn", rating: 4.2, price: 40, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=180&fit=crop", amenities: ["WiFi", "Shared Kitchen"] },
  ],
  "default": [
    { id: 10, name: "City Central Hotel", rating: 4.5, price: 150, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=300&h=180&fit=crop", amenities: ["Pool", "WiFi", "Breakfast"] },
    { id: 11, name: "Budget Traveler Inn", rating: 4.0, price: 60, image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=300&h=180&fit=crop", amenities: ["WiFi", "Parking"] },
    { id: 12, name: "Backpacker Hostel", rating: 3.8, price: 20, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=300&h=180&fit=crop", amenities: ["WiFi", "Shared Bath"] },
  ],
};

export const itineraries: Record<string, DayPlan[][]> = {
  "bali": [
    [
      { time: "Morning", activity: "Visit Tanah Lot Temple", cost: 10 },
      { time: "Afternoon", activity: "Rice Terrace Walk in Tegallalang", cost: 5 },
      { time: "Evening", activity: "Sunset at Uluwatu + Kecak Dance", cost: 15 },
    ],
    [
      { time: "Morning", activity: "Ubud Monkey Forest & Market", cost: 8 },
      { time: "Afternoon", activity: "Cooking Class", cost: 35 },
      { time: "Evening", activity: "Dinner at Seminyak", cost: 20 },
    ],
    [
      { time: "Morning", activity: "Mount Batur Sunrise Trek", cost: 45 },
      { time: "Afternoon", activity: "Hot Springs & Spa", cost: 30 },
      { time: "Evening", activity: "Beach bonfire at Kuta", cost: 10 },
    ],
  ],
  "paris": [
    [
      { time: "Morning", activity: "Eiffel Tower Visit", cost: 26 },
      { time: "Afternoon", activity: "Louvre Museum", cost: 17 },
      { time: "Evening", activity: "Seine River Cruise", cost: 15 },
    ],
    [
      { time: "Morning", activity: "Montmartre & Sacré-Cœur", cost: 0 },
      { time: "Afternoon", activity: "Shopping at Champs-Élysées", cost: 50 },
      { time: "Evening", activity: "Fine dining near the Eiffel Tower", cost: 80 },
    ],
  ],
  "default": [
    [
      { time: "Morning", activity: "City walking tour", cost: 20 },
      { time: "Afternoon", activity: "Local museum visit", cost: 15 },
      { time: "Evening", activity: "Dinner at a local restaurant", cost: 30 },
    ],
    [
      { time: "Morning", activity: "Day trip to nearby attraction", cost: 40 },
      { time: "Afternoon", activity: "Shopping at local market", cost: 25 },
      { time: "Evening", activity: "Street food tour", cost: 20 },
    ],
  ],
};

export const travelTips = [
  { icon: "✈️", title: "Book Early", tip: "Book flights 6-8 weeks in advance for the best prices. Use incognito mode when searching." },
  { icon: "🧳", title: "Pack Light", tip: "Use a carry-on only to save on baggage fees and move around more freely." },
  { icon: "💳", title: "Travel Card", tip: "Get a no-foreign-transaction-fee card. Notify your bank before you travel." },
  { icon: "🗺️", title: "Offline Maps", tip: "Download Google Maps or Maps.me offline for your destination before departing." },
  { icon: "🏥", title: "Travel Insurance", tip: "Always get travel insurance. Medical emergencies abroad can be very expensive." },
  { icon: "📱", title: "Local SIM", tip: "Buy a local SIM card at the airport for cheap data instead of expensive roaming." },
];

export interface Hotel {
  id: number;
  name: string;
  rating: number;
  price: number;
  image: string;
  amenities: string[];
}

export interface DayPlan {
  time: string;
  activity: string;
  cost: number;
}
