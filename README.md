# JK-Construction Services Sample Website
# Author: JESSE KIPSANG

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
Using ngrok: To run **ngrok** and expose your local server to the internet, follow these steps:

### **Step 1: Install ngrok**
If you haven't installed ngrok yet, you can do so using npm:
```bash
$ npm install -g ngrok
```

Alternatively, you can download it directly from the [ngrok website](https://ngrok.com/download).

---

### **Step 2: Start Your Local Server**
Ensure your local server is running. For your project:
1. Start the JSON Server:
   ```bash
   $ json-server --watch db.json
   ```
2. Serve your project using Live Server in VS Code or any other local server. For example, Live Server typically runs on `http://127.0.0.1:5500`.

---

### **Step 3: Run ngrok**
Run ngrok to expose your local server to the internet. Use the port number of your local server (e.g., `5500` for Live Server or `3000` for JSON Server).

For Live Server:
```bash
$ ngrok http 5500
```

For JSON Server:
```bash
$ ngrok http 3000
```
### Running the Project

- Open `index.html` in a browser or use Live Server in VS Code.
- site url: http://127.0.0.1:5500/Construction-services-sample-website/index.html (LiveServer)
- Another option is via ngrok using the following link: https://fa5e-41-139-163-237.ngrok-free.app/Construction-services-sample-website/

---

## Future Enhancements

- User authentication for admin control
- Contact form with email integration
