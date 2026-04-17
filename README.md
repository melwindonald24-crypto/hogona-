# Hogona

Hogona is an in-progress travel planning app with a React frontend and an Express/Node backend. The current codebase combines:

- a React/Vite login UI prototype
- an Express backend with basic auth flow
- hotel search integration through SerpAPI
- early itinerary/place-enrichment services using Geoapify

The project is still under active development, so some routes and services are production-minded scaffolds rather than fully wired features.

## Current Status

What is working or partially working today:

- React frontend shell for the login screen
- Express server with route modules for auth, hotels, and itinerary
- MongoDB connection through Mongoose
- user registration/login persistence using the `User` model
- hotel search service that calls SerpAPI Google Hotels and normalizes results
- Geoapify place-fetching and place-normalization utilities for itinerary context

What is still incomplete:

- React frontend is not yet connected to the backend auth flow
- itinerary generation flow is still scaffolded
- hotel display/select routes are not fully implemented end to end
- some models and service files are incomplete or placeholders
- authentication is currently plain and not yet secured with hashing/JWT

## Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS v4

### Backend

- Node.js
- Express
- MongoDB + Mongoose
- Axios
- EJS/HTML templates for backend-side prototype pages

### External Services

- SerpAPI for hotel search
- Geoapify Places API for nearby POIs

## Project Structure

```text
trip_manager/
  backend/
    controllers/
    models/
    routes/
    services/
    utils/
    views/
    index.js
    package.json
  frontend/
    public/
    src/
      assets/
      App.jsx
      App.css
      main.jsx
    package.json
  README.md
```

## Backend Overview

The backend entry point is [backend/index.js](/c:/Users/melwi/OneDrive/Desktop/trip_manager/backend/index.js:1).

It currently:

- loads environment variables with `dotenv`
- connects to MongoDB using `MONGO_CONNECTION_STRING`
- mounts three route groups:
  - `/user` for auth
  - `/user/Hotels` for hotel flow
  - `/user/Iterary` for itinerary flow

### Implemented Backend Modules

- [backend/routes/authRoutes.js](/c:/Users/melwi/OneDrive/Desktop/trip_manager/backend/routes/authRoutes.js:1)
  - serves the legacy login/register HTML form
  - creates a user if the email does not exist
  - performs a basic email/password check if the user exists

- [backend/services/SerpHotelServices.js](/c:/Users/melwi/OneDrive/Desktop/trip_manager/backend/services/SerpHotelServices.js:1)
  - queries SerpAPI Google Hotels
  - normalizes hotel records into app-friendly objects

- [backend/services/geoappfyServices.js](/c:/Users/melwi/OneDrive/Desktop/trip_manager/backend/services/geoappfyServices.js:1)
  - fetches nearby place data from Geoapify
  - deduplicates/normalizes place records for itinerary context

### Backend Areas Still in Progress

- [backend/routes/hotelRoutes.js](/c:/Users/melwi/OneDrive/Desktop/trip_manager/backend/routes/hotelRoutes.js:1)
- [backend/routes/iteraryRoutes.js](/c:/Users/melwi/OneDrive/Desktop/trip_manager/backend/routes/iteraryRoutes.js:1)
- [backend/controllers/IteraryController.js](/c:/Users/melwi/OneDrive/Desktop/trip_manager/backend/controllers/IteraryController.js:1)
- [backend/services/serpIteraryService.js](/c:/Users/melwi/OneDrive/Desktop/trip_manager/backend/services/serpIteraryService.js:1)
- [backend/services/geminiService.js](/c:/Users/melwi/OneDrive/Desktop/trip_manager/backend/services/geminiService.js:1)

## Frontend Overview

The frontend is a Vite React app located in `frontend/`.

Current UI pieces:

- [frontend/src/App.jsx](/c:/Users/melwi/OneDrive/Desktop/trip_manager/frontend/src/App.jsx:1)
- [frontend/src/assets/login.jsx](/c:/Users/melwi/OneDrive/Desktop/trip_manager/frontend/src/assets/login.jsx:1)
- [frontend/src/assets/header.jsx](/c:/Users/melwi/OneDrive/Desktop/trip_manager/frontend/src/assets/header.jsx:1)
- [frontend/src/assets/footer.jsx](/c:/Users/melwi/OneDrive/Desktop/trip_manager/frontend/src/assets/footer.jsx:1)
- [frontend/src/assets/loginContainer.jsx](/c:/Users/melwi/OneDrive/Desktop/trip_manager/frontend/src/assets/loginContainer.jsx:1)

At the moment, this frontend is mainly a UI prototype and is not fully connected to the Express auth flow yet.

## Data Models

Current Mongoose models:

- [backend/models/userSchema.js](/c:/Users/melwi/OneDrive/Desktop/trip_manager/backend/models/userSchema.js:1)
- [backend/models/TripSchema.js](/c:/Users/melwi/OneDrive/Desktop/trip_manager/backend/models/TripSchema.js:1)
- [backend/models/hotelSchema.js](/c:/Users/melwi/OneDrive/Desktop/trip_manager/backend/models/hotelSchema.js:1)

Note: `hotelSchema.js` appears unfinished in the current repo and will likely need cleanup before being used in a full persistence flow.

## Environment Variables

Create `backend/.env` with the values your local setup needs.

```env
MONGO_CONNECTION_STRING=your_mongodb_connection_string
SERP_API_KEY=your_serpapi_key
GEOAPIFY_API_KEY=your_geoapify_key
PORT=3000
```

Notes:

- the backend currently hardcodes port `3000` in `backend/index.js`
- if you add Gemini or other AI integrations, document their keys here too

## Local Development

### 1. Install dependencies

From the repo root:

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 2. Start the backend

From `backend/`:

```bash
node index.js
```

The server starts on `http://localhost:3000`.

### 3. Start the frontend

From `frontend/`:

```bash
npm run dev
```

Vite will print the frontend local URL in the terminal.

## Current App Flow

### Legacy backend flow

1. Open `http://localhost:3000/user/login`
2. Submit the HTML login/register form
3. Existing users are checked against MongoDB
4. New users are created automatically
5. Successful auth redirects toward the hotel preference flow

### Planned React flow

1. React login form submits credentials to backend
2. User is authenticated through an API route
3. User enters trip preferences
4. Backend fetches hotels and nearby POIs
5. AI-assisted itinerary generation is layered on top

## Known Gaps

- passwords are stored in plain text right now
- no JWT/session-based auth yet
- backend route handlers are incomplete in a few places
- hotel selection and itinerary rendering are not fully wired
- frontend/backend integration is still pending
- there are naming inconsistencies such as `Iterary` vs `Itinerary`

## Suggested Next Steps

- connect the React login form to `POST /user/login`
- replace plain-text password storage with hashing
- finish hotel route rendering/response flow
- complete itinerary services and controller wiring
- standardize naming (`itinerary`, `Geoapify`, etc.)
- add proper backend and frontend run scripts

## Author

Melwin Donald

This repository reflects an actively evolving build, with solid architectural intent and several core features still being connected end to end.
