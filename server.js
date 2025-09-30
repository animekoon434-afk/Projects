const http = require('http');
const fs = require('fs');
const PORT = 3000;
const path = require('path');


const server = http.createServer((req, res) => {
    let route = req.url.toLowerCase();
    const style = `
        <style>
            body { 
                background: #f8f8f8; 
                font-family: Arial, 
                sans-serif; 
                margin: 0; 
                padding: 0; 
            }
            nav { 
                background: #3498db; 
                padding: 10px 0; 
            }
            nav ul { 
                list-style: none; 
                display: flex; 
                justify-content: center; 
                margin: 0; 
                padding: 0; 
            }
            nav ul li { 
                margin: 0 20px; 
            }
            nav ul li a { 
                color: #fff; 
                text-decoration: none; 
                font-weight: bold; 
                font-size: 18px; 
                transition: 
                color 0.2s; 
            }
            nav ul li a:hover { 
                color: #e74c3c; 
            }
            .container { 
                max-width: 600px; 
                margin: 60px auto; 
                background: #fff; 
                border-radius: 8px; 
                box-shadow: 0 2px 8px rgba(0,0,0,0.1); 
                padding: 40px; text-align: center; 
            }
            h1 { 
                color: #3498db; 
                margin-bottom: 20px; 
            }
            p { 
                color: #555; 
                margin-bottom: 30px; 
            }
            a { 
                color: #3498db; 
                text-decoration: none; 
                font-weight: bold; 
            }
            a:hover { 
                text-decoration: underline; 
            }
            form input, form textarea { 
                width: 80%; 
                padding: 10px; 
                margin-bottom: 10px; 
                border: 1px solid #ccc; 
                border-radius: 4px; 
                font-size: 16px; 
            }
            form button { 
                background: #3498db; 
                color: #fff; 
                border: none; 
                padding: 10px 20px; 
                border-radius: 4px; 
                font-size: 16px; 
                cursor: pointer; 
                font-weight: bold; 
            }
            form button:hover { 
                background: #e74c3c; 
            }
        </style>`;

    if (route === '/' || route === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Portfolio Home</title>
                ${style}
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div class="container">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Hello! I'm a web developer. This is my portfolio homepage.</p>
                    <p>Explore the About and Contact pages to learn more.</p>
                </div>
            </body>
            </html>
        `);
        res.end();
    } else if (route === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>About Me</title>
                ${style}
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div class="container">
                    <h1>About Me</h1>
                    <p>I am passionate about building web applications and learning new technologies.</p>
                    <p>This page tells you more about my background and skills.</p>
                </div>
            </body>
            </html>
        `);
        res.end();
    } 
    else if (route === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact</title>
                ${style}
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div class="container">
                    <h1>Contact</h1>
                    <p>You can reach me at <a href="mailto:your@email.com">your@email.com</a>.</p>
                    <p>Or fill out the contact form below:</p>
                    <form>
                        <input type="text" placeholder="Your Name" required><br><br>
                        <input type="email" placeholder="Your Email" required><br><br>
                        <textarea placeholder="Your Message" required></textarea><br><br>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </body>
            </html>
        `);
        res.end();
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>404 Not Found</title>
                ${style}
            </head>
            <body>
                <div class="container">
                    <h1>404 - Page Not Found</h1>
                    <p>Sorry, the page you are looking for does not exist.</p>
                    <a href="/home">Go to Home</a>
                </div>
            </body>
            </html>
        `);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
