const express = require("express");
const router = express.Router();
const { askWatsonAgent } = require("../services/ibmAgent");

// /ask route
router.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const answer = await askWatsonAgent(question);

    res.json({ answer });
  } catch (error) {
    console.error("❌ Error in /ask:", error.message);
    res.status(500).json({ error: "Failed to fetch from IBM Agent" });
  }
});

// /store-query route
router.post("/store-query", async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ error: "Both question and answer required" });
    }

    // Replace with actual DB later
    console.log("📥 Logged:", { question, answer });

    res.json({ message: "Stored successfully" });
  } catch (error) {
    console.error("❌ Error in /store-query:", error.message);
    res.status(500).json({ error: "Internal error" });
  }
});

module.exports = router;
