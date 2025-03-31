# Construction-services-sample-website
Sample of a construction services company webpage built as a Single Page Application (SPA) format.
The site features a professional, lively interface where users can hover over service blocks to reveal more details.

# Key Features
> Dynamic Service Display: Services such as surveying, site prep, major construction, roofing, plumbing, and electrical installation are presented in an interactive layout.
> Hover Pop-up Details: Hovering over a service block triggers a pop-up with detailed descriptions.
> Asynchronous API Handling: Data is fetched from a local JSON server (db.json) using JavaScript.
> Event Listeners for Interactivity: Multiple event listeners enhance user experience (hover effects, click events, etc.).
> Fully Responsive Design: Optimized for different screen sizes.

# Tech Stack
> Frontend: HTML, CSS, JavaScript
> Backend (Mock API): JSON Server (db.json)
> Version Control & Hosting: GitHub

How It Works
> The homepage loads services dynamically from the API (db.json).
> Hovering over a service block reveals additional details in a pop-up.
> JavaScript handles API calls asynchronously using fetch().
> No page reloads—everything runs as a SPA.

# Installation & Setup
Clone the Repository:
$ git clone https://github.com/YOUR-USERNAME/construction-services-spa.git
$ cd construction-services-spa
// Run JSON Server (for Local API)
# To ensure json-server is installed:
$ npm install -g json-server
$ json-server --watch db.json
// This will serve data at http://localhost:3000/services.

# Running the Project
Open index.html in a browser or use Live Server in VS Code.

# Future Enhancements
User authentication for admin control
Contact form with email integration
