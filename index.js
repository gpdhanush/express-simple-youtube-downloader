const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const cors = require('cors');
const ytdl = require('ytdl-core');


app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
