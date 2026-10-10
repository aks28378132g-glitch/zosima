
const express = require("express");
const app = express();

const studentRoutes = require("./studentRoutes4");
const logger = require("./logger4");

app.use(express.json());
app.use(logger);
app.use("/students", studentRoutes);

const PORT = 3004;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
