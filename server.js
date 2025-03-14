const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Enable CORS to allow requests from all origins
app.use(cors());

// Serve assetlinks.json inside the .well-known directory
app.use("/.well-known", express.static(path.join(__dirname, "public/.well-known")));

// Root route
app.get("/", (req, res) => {
  res.send("Deep Link API is Running!");
});

// Start server on port 3000 (Vercel will override this)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
