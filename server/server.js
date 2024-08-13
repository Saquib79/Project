console.log('Current working directory:', process.cwd());
console.log('Server starting...');
console.log('Current working directory:', process.cwd());
// server/server.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const fs = require('fs');
console.log('Directory contents:', fs.readdirSync('.'));

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..client/build', 'index.html'));
});

app.get('/', (req, res) => {
  constfilePath=path.join(__dirname, 'Task1', 'public', 'index.html');
  console.log('Serving index.html from:', filePath);
});


app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../client/build', 'index.html');
  console.log('Attempting to serve:', indexPath);
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    console.error('index.html not found at:', indexPath);
    res.status(404).send('Not Found');
  }
});
