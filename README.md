# Restaurant Web Application

A web application for searching restaurants by name, address, ratings, cuisine, and location.

## Features
- Search restaurants by multiple criteria (name, address, rating, cuisine, location)
- View restaurant details and search results
- Restaurant data backed by a NoSQL database

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Database:** MongoDB (via the `mongodb` Node.js driver)

## Project Structure
```
index.html            → Landing / search page
searchresults.html     → Search results view
hoteldes.html           → Restaurant detail view
script.js              → Client-side interactivity (search, navigation)
DbConnect.js            → MongoDB connection and query logic
```

## How to Run
1. Set up a MongoDB Atlas cluster (or local MongoDB instance) with a `sample_restaurants` database and `restaurants` collection.
2. Update the connection string in `DbConnect.js` with your own credentials.
3. Serve the HTML files with a local web server (e.g. `npx serve` or the VS Code Live Server extension).

## Notes
This was an early project exploring MongoDB-backed search on the frontend. The current `DbConnect.js` mixes browser and Node.js code and needs to be split into a proper backend (Express/Node server) that the frontend calls via API, rather than connecting to MongoDB directly from client-side JavaScript.
