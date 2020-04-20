const config = require('./config');
const mongoose = require('mongoose');

const connectToDB = cb => {
  mongoose.connect(config.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  // db.once('open', () => {
  //   db.dropDatabase();
  //   console.log('Database connected successful');
  //   cb();
  // });

  db.once('open', async () => {
    console.log('Database connected');
    await db.dropDatabase(() => {
      console.log('Database dropped success');
      cb();
    });
  });
};

module.exports = { connectToDB };
