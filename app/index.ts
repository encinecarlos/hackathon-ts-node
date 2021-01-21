import express from 'express'

const consign = require('consign')
const app = express();

app.use(express.json());

consign()
  .include('controllers')
  .then('config/routes.ts')
  .into(app);


app.listen(3200, () => console.log('Servidor Rodando'));
