# Construction Services Sample Website

This project is a sample webpage for a construction services company, built as a **Single Page Application (SPA)**. The site features a professional and interactive interface, allowing users to explore various services dynamically.

## Key Features

- **Dynamic Service Display**: Services such as surveying, site preparation, major construction, roofing, plumbing, and electrical installation are presented in an interactive layout.
- **Hover Pop-up Details**: Hovering over a service block triggers a pop-up with detailed descriptions of the service.
- **Asynchronous API Handling**: Data is fetched from a local JSON server (`db.json`) using JavaScript's `fetch()` API.
- **Event Listeners for Interactivity**: Multiple event listeners enhance the user experience with hover effects, click events, and more.
- **Responsive Design**: The website is optimized for various screen sizes, ensuring a seamless experience across devices.

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend (Mock API)**: JSON Server (`db.json`)
- **Version Control & Hosting**: GitHub, ngrok (for virtual server setup)

---

## How It Works

1. **Dynamic Content Loading**: The homepage dynamically loads service data from the local API (`db.json`) using JavaScript.
2. **Interactive Service Blocks**: Hovering over a service block reveals additional details in a pop-up, enhancing user engagement.
3. **Single Page Application**: The website operates as an SPA, meaning there are no page reloads. All interactions and data fetching are handled asynchronously.
4. **Mock API**: A local JSON server is used to simulate a backend API, serving service data to the frontend.

---

## Installation & Setup

Follow these steps to set up and run the project locally:

### Prerequisites

- Ensure you have **Node.js** and **npm** installed on your system.
- Install the JSON Server globally:
  ```bash
  $ npm install -g json-server
```
- Start the JSON Server to serve data at `http://localhost:3000/services`:
  ```bash
  $ json-server --watch db.json
```

### Running the Project

- Open `index.html` in a browser or use Live Server in VS Code.

---

## Future Enhancements

- User authentication for admin control
- Contact form with email integration
