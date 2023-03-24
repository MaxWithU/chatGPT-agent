const express = require('express')()

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(
  '*',
  createProxyMiddleware({
    target: 'https://api.openai.com',
    changeOrigin: true,
  })
);

app.listen(3000);

express.listen(3000, () => {
  console.log('agent start')
})