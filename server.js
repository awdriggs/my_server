const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Single route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});