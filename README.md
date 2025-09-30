# Simple Node.js Web Server

## Overview
This project is a basic web server built using Node.js's `http` module. It serves HTML pages with inline CSS and handles routing for a simple portfolio website, including custom error handling and styling. No static files are required; all content is generated and styled directly in `server.js`.

## How the Server Works
- The server is started from `server.js` and listens on port 3000.
- It uses the built-in `http` module to handle incoming requests.
- For each route (`/home`, `/about`, `/contact`), the server sends a complete HTML page with inline CSS.
- If a route does not match any of the defined pages, a custom 404 page is generated and served with a 404 status code.
- All styling is included directly in the HTML response; there is no need for a separate CSS file.

## Steps to Run Locally from GitHub
1. Clone the repository:
	```sh
	git clone https://github.com/animekoon434-afk/Projects.git
	```
3. Start the server:
	```sh
	node server.js
	```
4. Open your browser and visit:
	- `http://localhost:3000/home` for the Home page
	- `http://localhost:3000/about` for the About page
	- `http://localhost:3000/contact` for the Contact page
	- Any invalid route will show the custom 404 page (all with inline CSS)

## File Structure
- `server.js` — Main server logic, routing, and all HTML/CSS content
- `README.md` — Project documentation
