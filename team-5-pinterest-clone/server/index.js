const express = require("express");
const db = require("./database/index.js");
const pinterestRoutes = require("./routes/pinterestRoutes");
const PORT = 3000;
const app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use("/api/users", pinterestRoutes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
