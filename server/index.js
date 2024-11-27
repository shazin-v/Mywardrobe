const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const connectDB = require("./config/db");
const router = require("./routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_IRL,
    credentials: true,
  //   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Add methods your frontend might use
  //   allowedHeaders: ["Content-Type", "Authorization"], // Specify headers you might use
  // origin: true,
  //   credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());


// Handle preflight requests
// app.options('*', cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));


app.use(router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} \n`);
    console.log("Database connected");
  });
});
