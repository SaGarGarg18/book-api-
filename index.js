require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

//API
const Book1 = require("./API/book");
const Author1 = require("./API/author");
const Publication1 = require("./API/publications");

// database
const Database = require("./database");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to mongodb !!!"))
  .catch((err) => {
    console.log(err);
  });
// initialization
const OurAPP = express();

OurAPP.use(express.json());

OurAPP.use("/book", Book1);
OurAPP.use("/author", Author1);
OurAPP.use("/publications", Publication1);

OurAPP.get("/", (request, response) => {
  response.json({ message: "Server is working !!!!!!" });
});
OurAPP.listen(4000, () => console.log("Server is running"));
