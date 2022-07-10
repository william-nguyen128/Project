export default {
  schemes: process.env.APP_SCHEMES || process.env.SCHEMES || 'http',
  host: process.env.APP_HOST || process.env.HOST || 'localhost',
  port: process.env.APP_PORT || process.env.PORT || '3000',
  isDev:
    (process.env.NODE_ENV || process.env.ENV || 'development') ===
    'development',
};
