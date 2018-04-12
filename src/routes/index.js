const heatmapRoutes = require("./heatmap");

const constructorMethod = app => {
  app.use("/heatmap", heatmapRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
