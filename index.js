const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// ChatGPT API endpoint
const chatgptApiUrl = 'https://api.openai.com';

// Proxy middleware for /chat
const chatProxy = createProxyMiddleware('/v1', {
  target: chatgptApiUrl,
  changeOrigin: true,
  pathRewrite: {
    '/v1': '/v1'
  },
});

// Use proxy middleware
app.use(chatProxy);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});