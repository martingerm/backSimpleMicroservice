// phraseService.js

const express = require('express');
require('dotenv').config();

const app = express();
const PORT4 = process.env.PORT4;

const sujetoList = ['El profe', 'El alumno', 'El Nahuel'];
const verboList = ['corre', 'salta', 'vuela'];
const objetoList = ['la computadora', 'el libro', 'la banana'];
const lugarList = ['en el aula', 'en la casa', 'en el baño'];

function randomFuncion(array) {
  return array[Math.floor(Math.random() * array.length)];
}

app.get('/randomfrase', (req, res) => {
  const sujeto = randomFuncion(sujetoList);
  const verbo = randomFuncion(verboList);
  const objeto = randomFuncion(objetoList);
  const lugar = randomFuncion(lugarList);

  const frase = `${sujeto} ${verbo} ${objeto} ${lugar}`;

  res.json({ frase });
});

app.listen(PORT4, () => {
  console.log(`Servidor de frases aleatorias corriendo en http://localhost:${PORT4}`);
});

module.exports = app;
