const { Translate } = require('@google-cloud/translate').v2;
const express = require('express');
const axios = require('axios');

const app = express();
const PORT5 = process.env.PORT5;
const translate = new Translate();

app.use(express.json());

app.post('/translate', async (req, res) => {
  try {
    const { text, dest_lang } = req.body;

    if (!text || !dest_lang) {
      return res.status(400).json({ error: 'Texto y destino del idioma son obligatorios' });
    }

    // Traducción del texto
    const [translation] = await translate.translate(text, dest_lang);
    res.json({ translated_text: translation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al traducir el texto' });
  }
});

app.listen(PORT5, () => {
  console.log(`Servidor de traducción corriendo en http://localhost:${PORT5}`);
});

module.exports = app;
