const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api/users', (req, res) => {
  res.send([
    {
      name: 'Alexander',
      age: 34,
    },
    {
      name: 'TongTong',
      age: 23,
    },
  ]);
});

app.get('/', (req, res) => {
  const apiDetails = 'http://localhost:5000/api/users';
  res.send({
    description: 'server is running, go to apiDetails to see api',
    apiDetails,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
