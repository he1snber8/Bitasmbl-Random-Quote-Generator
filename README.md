# Bitasmbl-Random-Quote-Generator

A web application that fetches and displays random quotes from a public API using an Express.js backend and an Angular frontend, demonstrating API fetching, dynamic content rendering, and basic interactivity.

## Tech Stack
- Express.js
- Angular

## Requirements
- Fetch quotes from a public API
- Display the quote dynamically on the page
- Allow users to get a new random quote on button click
- Ensure the application is responsive and visually clear

## Installation
1. Clone the repository:
   bash
   git clone https://github.com/username/Bitasmbl-Random-Quote-Generator.git
   
2. Backend setup:
   bash
   cd Bitasmbl-Random-Quote-Generator/server
   npm install
   
   Create a `.env` file in the `server` directory with the following content:
   dotenv
   QUOTE_API_URL=https://api.quotable.io/random
   
   Start the Express server:
   bash
   npm start
   
3. Frontend setup:
   bash
   cd ../client
   npm install
   
   Serve the Angular application:
   bash
   ng serve
   
   Navigate to `http://localhost:4200` in your browser.

## Usage
- Open your browser and go to `http://localhost:4200`.
- Click the **New Quote** button to fetch and display a random quote.
- The Express.js backend proxies the request to the public API and returns the result to the Angular app.

## Implementation Steps
1. Initialize an Express.js project in a `server` folder and install dependencies (`express`, `axios`, `dotenv`, `cors`).
2. Create an endpoint `GET /api/quotes` in Express that fetches a random quote from the public API defined in `QUOTE_API_URL`.
3. Configure CORS in Express to allow requests from the Angular frontend.
4. Scaffold an Angular application in a `client` folder using the Angular CLI.
5. Generate a `QuoteService` in Angular to call the `/api/quotes` endpoint.
6. Create a `QuoteComponent` that displays the fetched quote and includes a **New Quote** button.
7. Style the component with responsive CSS to ensure clarity on all device sizes.
8. Run and test the full stack application to verify functionality and responsiveness.

## API Endpoints
- **GET** `/api/quotes` : Fetches and returns a random quote object from the public API defined in `QUOTE_API_URL`.