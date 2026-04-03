# 🌍 Hogona — AI-Powered Group Travel Planner

Collaborative group travel planning platform for the Indian market with AI-generated itineraries, hotel discovery, and real-time coordination.

---

## 🚀 Overview

Hogona is a backend-first MERN application designed to simplify group travel planning.

Unlike traditional planners, Hogona follows a **hotel-centric architecture**, where the selected stay becomes the anchor for:

* itinerary generation
* routing
* activity suggestions

---

## ✨ Features

### ✅ Implemented

#### 🏨 Hotel Search

* SerpAPI Google Hotels integration
* Budget / Luxury filtering
* Direct booking links (MakeMyTrip, Goibibo, etc.)
* Two-stage API optimization (property_id based)



#### ⚙️ Backend

* Node.js + Express (MVC structure)
* EJS for temporary frontend
* Modular services (SerpAPI layer)

---

### 🚧 In Progress

* MongoDB + Mongoose integration
* JWT authentication (cookie-based)
* Trip creation system
* React frontend (Vite)

---

### 📅 Planned

* Socket.io (chat, expenses, live location)
* OSRM routing + Mappls fallback
* Expense splitting
* Real-time collaboration

---

## 🛠 Tech Stack

```
Frontend   : React (planned)
Backend    : Node.js + Express + EJS
Database   : MongoDB (upcoming)
Realtime   : Socket.io
Hotels     : SerpAPI (Google Hotels)
AI         : Groq (llama-3.3-70b)
Routing    : OSRM + Mappls fallback
Maps       : Leaflet + OpenStreetMap
Deploy     : Railway + Vercel
```

---

## 🏗 Architecture

### 🔑 Core Idea: Hotel-Centric Planning

```
User selects hotel
        ↓
Hotel coordinates
        ↓
Used for:
  - AI itinerary
  - route planning
  - nearby activities
```

👉 This ensures:

* realistic travel plans
* better location relevance
* optimized routing

---

## 📁 Project Structure

```
controllers/
  HotelController.js
  IteraryController.js
  tripController.js

models/
  hotelSchema.js
  TripSchema.js

routes/
  authRoutes.js
  hotelRoutes.js
  iteraryRoutes.js

services/
  SerpServices.js

views/
  DisplayHotels.ejs
  login.html
  userPlan.html

public/
utils/

index.js
.env
```

---

## 🔌 API Flow

```
Form → SerpAPI → Clean hotel data
        ↓
property_id search → fetch booking links
        ↓
Sort (budget/luxury)
        ↓
Render (EJS)
```

---

## 🧪 Known Issues (Fixed)

* ❌ travelType mismatch → ✅ fixed
* ❌ sort vs sort_by → ✅ fixed
* ❌ hotel_class too strict → ✅ removed
* ❌ 429 image error → ✅ use original_image
* ❌ null prices → ✅ property_id search
* ❌ vacation rentals → ✅ filtered

---

## ⚙️ Environment Variables

```
PORT=3000

SERPAPI_KEY=your_key
GROQ_API_KEY=your_key

MONGODB_URI=your_uri
JWT_SECRET=your_secret
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/melwindonald24-crypto/hogona
cd hogona

npm install

```

---

## 🧠 Future Scope

* Smart group decision making (voting)
* AI budget optimizer
* Offline travel plans
* Social + shared trips

---

## 👨‍💻 Author

**Melwin Donald**
Second-year student building Hogona for placements 🚀

---

## ⭐ Note

This project is actively evolving — backend-first approach with production-level architecture focus.
