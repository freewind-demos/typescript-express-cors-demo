import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());

app.get('/data.json', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data.json'));
});

app.listen(3000, () => {
  console.log('listen on http://localhost:3000');
});
