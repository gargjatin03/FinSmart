const app = require('./app');
require('dotenv').config();
const connectDB = require('./config/db');

// DATABASE CONNECTION CAN BE SET UP HERE
connectDB();

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});


process.on('SIGNIT', async () => {
  await mongoose.connection.close();
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});
