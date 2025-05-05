import express from 'express';
import { createClient } from '@libsql/client';
import path from 'path';
import url from 'url';

// Get the directory name in ES Modules
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// having issues w/ .env file, made manual const for time being (careful not to push!!)
const TURSO_CONNECTION_URL="your-turso-db-url"
const TURSO_AUTH_TOKEN="your-turso-db-token"

const turso = createClient({
  url: TURSO_CONNECTION_URL,
  authToken: TURSO_AUTH_TOKEN,
});

const app = express();
const port = 3000; // change if you have to

app.use(express.json());

// run npm run build first
app.use(express.static(path.join(__dirname, 'build')));

// GET requests to root URL (signin)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/signin', async (req, res) => {
  console.log('Received POST request'); // debugging
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    await turso.execute({
      sql: "INSERT INTO users (email, password) VALUES (?, ?)",
      args: [email, password],
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Failed to sign up' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
