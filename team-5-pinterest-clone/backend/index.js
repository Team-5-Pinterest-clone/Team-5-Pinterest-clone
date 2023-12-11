const express = require("express");
const db = require("./database/index.js");
const appRoutes = require("./routes/appRoutes");
const PORT = 3000;
const app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use("/api/users", appRoutes);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
