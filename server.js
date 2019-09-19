const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(apiRoutes.js)(app);
require(htmlRoutes.js)(app);

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});