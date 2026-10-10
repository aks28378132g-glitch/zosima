const express = require("express");
const app = express();

const logger = require("./logger3");

app.use(logger);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Student API");
});

app.get("/students", (req, res) => {
    res.json([{ id: 1, name: "Ayush" }]);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});