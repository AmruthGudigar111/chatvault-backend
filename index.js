const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('ChatVault API'));
app.listen(5000, () => console.log('Server running on port 5000'));
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const cors = require('cors');
app.use(cors({
  origin: '*', // or set to your Vercel frontend URL for security
}));
