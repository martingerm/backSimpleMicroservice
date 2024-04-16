const express = require('express');
const axios = require('axios');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT;
const translateService = require('./translateService');



app.get('/sum', async (req, res) => {
  try {

    const { data: { num1, num2 } } = await axios.get('http://localhost:6001/random');

    const suma = num1 + num2;

    res.json({ suma });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al sumar los números' });
  }
});

app.get('/mult', async (req, res) => {
  try {

    const { data: { num1, num2 } } = await axios.get('http://localhost:6003/multrandom');

    const mult = num1 * num2;

    res.json({ mult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al multiplicar los números' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor de suma corriendo en http://localhost:${PORT}`);
});

app.get('/randomfrase', async (req, res) => {
  try {
    const { data: { frase } } = await axios.get('http://localhost:6004/randomfrase');

    res.json({ frase });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar la frase' });
  }
});
app.post('/translate-service/translate', async (req, res) => {
  try {
    const { text, dest_lang } = req.body;

    
    if (!text || !dest_lang) {
      return res.status(400).json({ error: 'Texto y destino del idioma son obligatorios' });
    }

    const { data: { translated_text } } = await axios.post(`http://localhost:6005/translate`, { text, dest_lang });
    
    res.json({ translated_text });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al traducir el texto' });
  }
});

