const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Dummy user posts
const posts = [
  {
    id: 1,
    username: 'jay2k',
    content: 'Hello Friendsy fam!',
    timestamp: '2025-07-28T13:00:00Z'
  },
  {
    id: 2,
    username: 'coolguy123',
    content: 'Just joined Friendsy 😎',
    timestamp: '2025-07-28T13:30:00Z'
  }
];

// Routes
app.get('/', (req, res) => {
  res.send('Friendsy Backend is running!');
});

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});
