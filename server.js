const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); // For JSON data

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend connected!" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});