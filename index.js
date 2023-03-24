const express = require('express')()

const { createProxyMiddleware } = require('http-proxy-middleware');

express.use(createProxyMiddleware({
  target: 'https://api.openai.com',
  changeOrigin: true,
}));

express.listen(3000, () => {
  console.log('agent start')
})