const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());

// Serve assetlinks.json
app.use("/.well-known", express.static(path.join(__dirname, "public/.well-known")));

// Root route
app.get("/", (req, res) => {
  res.send("Deep Link API is Running!");
});

// Handle deep links (Redirect to your Flutter app)
app.get("/profile", (req, res) => {
  const id = req.query.id || "";
  res.redirect(`fldeeplink://profile?id=${id}`);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
