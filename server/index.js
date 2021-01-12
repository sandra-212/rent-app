const express = require("express");
const bodyParser = require("body-parser");
const { getOffers } = require("./handlers.js");

express()
  .use(bodyParser.json())
  .use(express.static("public"))
  .get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "Server is running..." });
  })
  // get offers
  .get("/offers", getOffers)

  .listen(5678, () => console.log(`Listening on port 5678`));
