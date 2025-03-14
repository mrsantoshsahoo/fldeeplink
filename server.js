const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());

// Serve assetlinks.json inside .well-known directory
// app.use("/.well-known", express.static(path.join(__dirname, "public/.well-known")));

// Root route
app.get("/", (req, res) => {
  res.send("Deep Link API is Running!");
});

// Handle any route dynamically
app.get("*", (req, res) => {
  const fullPath = req.path; // Get the dynamic path
  const query = new URLSearchParams(req.query).toString();
  const deepLink = `fldeeplink://${fullPath}${query ? `?${query}` : ""}`;

  console.log(`Redirecting to deep link: ${deepLink}`);
  res.redirect(deepLink);
});

// Start server on port 3000 (Vercel will override this)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
