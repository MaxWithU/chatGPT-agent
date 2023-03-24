const express = require('express');
var proxy = require('express-http-proxy');
const app = express();
const port = 3000;

// ChatGPT API endpoint
const chatgptApiUrl = 'https://api.openai.com';

// Proxy middleware for /chat

// Use proxy middleware
app.use(proxy('api.openai.com', {
  https: true
}));

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});