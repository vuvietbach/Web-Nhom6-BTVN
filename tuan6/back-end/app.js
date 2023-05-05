const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

mongoose
    .connect(
    process.env.MONGODB_URI ||
        "mongodb+srv://it4409:it4409-soict@lamdb-crud.qd3s7vv.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    )
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));


const blogRouter = require("./routes/BlogRoutes");
app.use("/api/blogs", blogRouter);

module.exports = app;
