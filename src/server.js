const { PORT } = require('./common/config');
const app = require('./app');
const logger = require('./common/logger');
const { connectToDB } = require('./common/mongo.client');

process.on('uncaughtException', err => {
  logger.error({
    name: 'uncaughtException',
    message: err.message
  });
  const { exit } = process;
  logger.on('finish', () => exit(1));
});

process.on('unhandledRejection', err => {
  logger.error({
    name: 'unhandledRejection',
    message: err.message
  });
  const { exit } = process;
  logger.on('finish', () => exit(1));
});

connectToDB(() => {
  app.listen(PORT, () =>
    logger.info(`App is running on http://localhost:${PORT}`)
  );
});
