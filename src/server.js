const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");
const PORT = 3001

app.use(bodyParser.json());
configRoutes(app);

app.listen(PORT, () => {
  console.log("RVEALR server running on http://localhost:" + PORT);
});
