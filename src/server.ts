import express from 'express';

import './database/connection';

const app = express();

app.get('/', (req, res) => {
  console.log(req.body);
  return res.json({"opa": "bao"});
})

app.listen(3333);