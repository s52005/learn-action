const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome😉',
  });
});
const port = 3000;
app.listen(port, () => {
    console.log(Server Listen On http://localhost:${port});
});
