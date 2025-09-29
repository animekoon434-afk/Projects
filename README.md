# Simple Node.js Web Server

## Overview
This project is a basic web server built using Node.js's `http` and `fs` modules. It serves multiple HTML pages and handles routing for a simple portfolio website, including custom error handling and CSS styling.

## How the Server Works
- The server is started from `server.js` and listens on port 3000.
- It uses the built-in `http` module to handle incoming requests.
- For each route (`/home`, `/about`, `/contact`), the server reads and serves the corresponding HTML file asynchronously.
- If a CSS file is requested, it is served with the correct content type.
- If a route does not match any of the defined pages, a custom `404.html` page is served with a 404 status code.
- All HTML pages link to a shared `style.css` file for consistent styling.

## Steps to Run Locally from GitHub
1. Clone the repository:
	```sh
	git clone https://github.com/animekoon434-afk/node.js.git
	cd node.js/exercise
	```
2. Make sure you have [Node.js](https://nodejs.org/) installed.
3. Start the server:
	```sh
	node server.js
	```
4. Open your browser and visit:
	- `http://localhost:3000/home` for the Home page
	- `http://localhost:3000/about` for the About page
	- `http://localhost:3000/contact` for the Contact page
	- Any invalid route will show the custom 404 page

## File Structure
- `server.js` — Main server logic and routing
- `index.html` — Home/portfolio page
- `about.html` — About page
- `contact.html` — Contact page
- `404.html` — Custom 404 error page
- `style.css` — Shared CSS styling
- `README.md` — Project documentation
