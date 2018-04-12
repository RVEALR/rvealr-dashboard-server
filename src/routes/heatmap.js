const express = require("express");
const router = express.Router();
const data = require("../data");
const heatmapData = data.heatmap;

router.get("/", async (req, res) => {
    try {
        const heatmapList = await heatmapData.getAllHeatmap();
        res.json(heatmapList);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
