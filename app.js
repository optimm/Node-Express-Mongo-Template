require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
//built in middeware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// error handler middlewares
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//db
const connectDb = require("./db/connect");

//routers
const ExampleRouter = require("./routes/example");

//routes
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/example", ExampleRouter);
// error handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    console.log("data base is connected");
    app.listen(port, () => {
      console.log(`Server for jobs is running on port ${port} `);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
