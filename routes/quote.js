// routes/quote.js
const router = require(\"express\").Router();
const fetch = require(\"node-fetch\");
router.get(\"/api/quote\", async (req, res) => {
  try {
    const r = await fetch(\"https://api.quotable.io/random\");
    const j = await r.json();
    res.json(j);
  } catch(e) {
    res.status(500).json({ error: \"Fetch failed\" });
  }
});
module.exports = router;