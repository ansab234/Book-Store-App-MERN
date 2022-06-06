const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const BookRoute = require("./routes/book-routes");
const UserRoute = require("./routes/user-routes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");
const path = require("path");

const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

app.use("/", UserRoute);
app.use("/books", BookRoute);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Api running on port ${PORT}`);
});
