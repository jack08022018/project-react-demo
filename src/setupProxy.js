const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/jpa',
    createProxyMiddleware({
      // target: 'http://51.79.145.101:9092/dancing',
      // target: 'http://localhost:9195/demo',
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true,
      pathRewrite: {
        [`^/jpa`]: ''
        },
    })
  );
};