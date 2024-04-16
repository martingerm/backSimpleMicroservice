const express = require('express');
require('dotenv').config();


const app = express();
const PORT3 = process.env.PORT3;

app.get('/multrandom', (req, res) => {
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;

  res.json({ num1, num2 });
});

app.listen(PORT3, () => {
  console.log(`Servidor de números aleatorios corriendo en http://localhost:${PORT3}`);
});