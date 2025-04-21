const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Inizializza Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // <-- Carica il tuo file JSON qui

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Simulazione: route per ottenere custom token da Epic
app.get('/api/oauth/epic', async (req, res) => {
  try {
    const uid = 'epic_user_123'; // Questo dovrebbe provenire da Epic
    const customToken = await admin.auth().createCustomToken(uid);
    res.json({ token: customToken });
  } catch (err) {
    console.error(err);
    res.status(500).send('Errore nella generazione del token Firebase');
  }
});

// Simulazione: route per ottenere custom token da Arc
app.get('/api/oauth/arc', async (req, res) => {
  try {
    const uid = 'arc_user_456'; // Questo dovrebbe provenire da Arc
    const customToken = await admin.auth().createCustomToken(uid);
    res.json({ token: customToken });
  } catch (err) {
    console.error(err);
    res.status(500).send('Errore nella generazione del token Firebase');
  }
});

app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
