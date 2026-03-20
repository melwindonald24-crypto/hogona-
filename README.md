# 🌍 Hogona - AI-Powered Group Travel Planner

> Collaborative travel planning platform for Indian group travelers with AI-powered itinerary generation, hotel search, and real-time coordination.

[![Node.js](https://img.shields.io/badge/Node.js-v16+-green)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.x-blue)](https://expressjs.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-In%20Development-yellow)](https://github.com/melwindonald24-crypto/hogona-)

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [API Keys Required](#api-keys-required)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Development Roadmap](#development-roadmap)
- [Known Issues & Solutions](#known-issues--solutions)
- [License](#license)

---

## 🎯 Overview

**Hogona** is a travel planning application designed specifically for the Indian group travel market. Currently in backend development phase with EJS templating for rapid prototyping. The platform will enable friends and families to collaboratively plan trips with AI-powered itinerary generation, hotel discovery, and expense management.

### Key Highlights

- **AI-Powered Itineraries**: Groq-based AI generates personalized day-by-day travel plans
- **Hotel-Centric Architecture**: GPS coordinates of selected hotels anchor all routing and activity planning
- **India-Focused**: INR pricing, Indian OTAs (MakeMyTrip, Goibibo), Mappls integration planned
- **Smart Booking Links**: SerpAPI property_token approach for direct OTA redirects
- **Efficient API Usage**: Two-stage hotel search minimizes API calls

---

## Features

### Implemented Features ✅

#### Hotel Search & Discovery
- SerpAPI integration for real-time hotel data
- Budget/Luxury travel mode filtering
- Indian OTA integration (MakeMyTrip, Goibibo, Booking.com)
- Property-specific deep links for direct booking
- Hotel image galleries with fallback handling
- Server-side rendering with EJS

#### AI Itinerary Generation
- Groq API integration (llama-3.3-70b-versatile model)
- Hotel-centric routing (all activities anchored to selected stay)
- Day-by-day personalized travel plans
- Activity suggestions based on location

#### Backend API
- RESTful API endpoints
- Express.js server with MVC architecture
- Modular controller/service pattern
- Environment-based configuration

### Planned Features 

- **React Frontend Migration** - Replace EJS with React for better UX
- **MongoDB Integration** - User, Trip, and Hotel data persistence
- **Real-time Collaboration** - Socket.io for group chat and live updates
- **Expense Splitting** - Automated bill distribution among group members
- **Location Tracking** - Real-time location sharing with Mappls integration
- **Navigation** - Turn-by-turn routing with OSRM

---

## 🛠 Tech Stack

### Current Stack
- **Node.js** (v16+) - Runtime environment
- **Express.js** (v4.x) - Web framework
- **EJS** - Server-side templating engine
- **dotenv** - Environment configuration

### External APIs
- **SerpAPI** - Hotel search & pricing data
- **Groq** - AI itinerary generation

### Planned Additions
- **React.js** - Frontend framework
- **MongoDB** + **Mongoose** - Database
- **Socket.io** - Real-time communication
- **Mappls API** - Indian mapping services
- **OSRM** - Route optimization

---

## 🏗 Architecture

### Hotel-Centric Design

**Core Decision**: The selected hotel's GPS coordinates anchor all routing, AI prompts, and activity planning.

**Benefits**:
- Activities planned within reasonable proximity
- Route optimization starts/ends at hotel
- AI understands geographic context
- Realistic travel time estimates

### Data Flow

```
User Search → SerpAPI Hotels API → Display Results (EJS)
                                          ↓
User Clicks Hotel → property_token → SerpAPI Property Details API
                                          ↓
                                    Booking Links Display
                                          ↓
Hotel GPS + Preferences → Groq AI → Itinerary (EJS)
```

### Optimized API Strategy

**Two-Stage Hotel Search**:
1. **Browse Mode**: Single API call returns all hotels with `property_token`
2. **Detail Mode**: Only when user clicks, fetch booking URLs via `property_token`
3. **Result**: Minimizes API usage, stays within SerpAPI free tier (100/month)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16 or higher ([Download](https://nodejs.org))
- **npm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/melwindonald24-crypto/hogona-.git
   cd hogona
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env and add your API keys
   nano .env  # or use any text editor
   ```

4. **Start the server**
   ```bash
   # Production mode
   npm start
   
   # Development mode (auto-reload with nodemon)
   npm run dev
   ```

5. **Access the application**
   ```
   http://localhost:3000
   ```

---

## 🔑 API Keys Required

### 1. SerpAPI (REQUIRED)
**Purpose**: Hotel search and pricing  
**Free Tier**: 100 searches/month  
**Setup**:
1. Sign up at [serpapi.com](https://serpapi.com)
2. Go to Dashboard
3. Copy your API key
4. Add to `.env` as `SERPAPI_KEY=your_key_here`

### 2. Groq (REQUIRED)
**Purpose**: AI itinerary generation  
**Free Tier**: High rate limits  
**Setup**:
1. Sign up at [console.groq.com](https://console.groq.com)
2. Go to API Keys
3. Create new API key
4. Add to `.env` as `GROQ_API_KEY=your_key_here`

### 3. MongoDB (OPTIONAL - Future Feature)
**Purpose**: Data persistence  
**Free Tier**: MongoDB Atlas M0 (512MB)  
**Setup**: Will be needed in Phase 2

---

## 📁 Project Structure

```
TRIP_MANAGER/                    # Project root
│
├── controllers/                 # Business logic
│   ├── HotelController.js      # Hotel search & display logic
│   └── IteraryController.js    # AI itinerary generation logic
│
├── routes/                      # API endpoints
│   ├── hotelRoutes.js          # /user/Hotels/* routes
│   └── iteraryRoutes.js        # /user/Iterary/* routes
│
├── services/                    # External API integrations
│   └── SerpServices.js         # SerpAPI wrapper service
│
├── views/                       # EJS templates
│   ├── DisplayHotels.ejs       # Hotel listing page
│   └── userPlan.html           # Trip planning form
│
├── plugins/                     # Helper utilities
│   └── paths.js                # Path configuration
│
├── public/                      # Static files (CSS, JS, images)
│
├── node_modules/               # Dependencies (not committed to Git)
│
├── .env                        # Environment variables (NOT committed)
├── .env.example               # Environment template (committed)
├── .gitignore                 # Git ignore rules
├── index.js                   # Main server entry point
├── package.json               # Dependencies & scripts
└── README.md                  # This file
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root with these variables:

```env
# Server Configuration
NODE_ENV=development
PORT=3000

# Required API Keys
SERPAPI_KEY=your_serpapi_key_here
GROQ_API_KEY=your_groq_api_key_here

# Optional (for future features)
MONGODB_URI=mongodb://localhost:27017/hogona
MAPPLS_API_KEY=your_mappls_key_here
JWT_SECRET=your_random_secret_here
```

**⚠️ NEVER commit the `.env` file to Git!** It's already in `.gitignore`.

---

## 🔌 API Endpoints

### Hotel Routes

| Method | Endpoint | Description | Query Parameters |
|--------|----------|-------------|------------------|
| GET | `/user/Hotels/preferences` | Display hotel search form | - |
| POST | `/user/Hotels` | Search for hotels | `q`, `check_in_date`, `check_out_date`, `adults`, `travelType` |
| GET | `/user/Hotels/:propertyToken` | Get booking links for specific hotel | - |

#### Example Request:
```bash
POST http://localhost:3000/user/Hotels
Content-Type: application/x-www-form-urlencoded

q=Goa+hotels
check_in_date=2026-04-15
check_out_date=2026-04-18
adults=2
travelType=budget
```

### Itinerary Routes

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/user/Iterary/generate` | Generate AI itinerary | `destination`, `days`, `hotelGPS`, `preferences` |

#### Example Request:
```bash
POST http://localhost:3000/user/Iterary/generate
Content-Type: application/json

{
  "destination": "Goa",
  "days": 3,
  "hotelGPS": {
    "latitude": 15.3963,
    "longitude": 73.7869
  },
  "preferences": "beaches, water sports, nightlife"
}
```

---

## 🧪 Testing the Application

### 1. Start the Server
```bash
npm start
```

### 2. Test Hotel Search
1. Open browser: `http://localhost:3000/user/Hotels/preferences`
2. Fill the form:
   - **Destination**: "Goa hotels"
   - **Check-in**: 2026-04-15
   - **Check-out**: 2026-04-18
   - **Adults**: 2
   - **Travel Type**: Budget or Luxury
3. Submit and view results

### 3. Test Booking Links
- Click on any hotel
- Should show prices from MakeMyTrip, Goibibo, Booking.com
- Click booking link → redirects to OTA

---

## 🗓 Development Roadmap

### ✅ Phase 1: Backend Foundation (Current)
- [x] Express server setup
- [x] SerpAPI integration
- [x] Hotel search with budget/luxury modes
- [x] Property token booking links
- [x] Groq AI integration
- [x] EJS templating

### 🚧 Phase 2: Database & Auth (Next)
- [ ] MongoDB schema design
- [ ] Mongoose models (User, Trip, Hotel)
- [ ] JWT authentication
- [ ] User registration/login
- [ ] Save trip data

### 📅 Phase 3: React Migration
- [ ] Create React app
- [ ] Convert EJS to React components
- [ ] API client setup
- [ ] State management (Context API)
- [ ] Responsive design

### 📅 Phase 4: Collaboration
- [ ] Socket.io integration
- [ ] Real-time group chat
- [ ] Member management
- [ ] Voting system
- [ ] Expense splitting

### 📅 Phase 5: Advanced Features
- [ ] Mappls map integration
- [ ] Location tracking
- [ ] OSRM routing
- [ ] Offline support
- [ ] PWA features

---

## 🐛 Known Issues & Solutions

### ✅ SOLVED: SerpAPI 429 Error on Images
**Problem**: Google CDN throttling  
**Solution**: Use `original_image` URLs instead of `thumbnail`

### ✅ SOLVED: Empty Hotel Results
**Problem**: Wrong parameter name + overly strict filtering  
**Solution**: 
- Use `hotel_classes` (array) not `hotel_class`
- Removed min/max price filters
- Implemented budget/luxury mode

### ✅ SOLVED: Null Prices from SerpAPI
**Problem**: Lazy loading causes null prices  
**Solution**: Two-stage approach with property_token endpoint

### ✅ SOLVED: Form Field Mismatch
**Problem**: Budget mode not detected  
**Solution**: Fixed field name: `travelType` not `travel_mode`

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Open a Pull Request

### Code Style
- Follow existing patterns
- Add comments for complex logic
- Use meaningful commit messages
- Test before pushing

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Melwin**  
Solo developer building Hogona with AI assistance

---

## 🙏 Acknowledgments

- [SerpAPI](https://serpapi.com) - Hotel data provider
- [Groq](https://groq.com) - Fast AI inference
- [Express.js](https://expressjs.com) - Web framework
- [EJS](https://ejs.co) - Templating engine

---

## 📧 Support

- **GitHub Issues**: [Report bugs](https://github.com/yourusername/hogona/issues)
- **Questions**: Open a discussion

---

**⚠️ Current Status**: Backend development with EJS. React migration planned for Phase 3.

**🔔 Reminder**: Commit and push after every feature! 🚀
