const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('*', async (req, res) => {
  try {
    const response = await axios.get('https://api.vk.com/method/wall.get' + req.url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Proxy server error' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
