


//import express from 'express';
import express from 'express'
import { nanoid16 } from '../lib/helper.mjs';
const router = express.Router();

router.get('/json', (req, res) => {
  console.log(nanoid16());
  //res.send(
    //'<script src="/bundle.js"></script>'
  //)
  // respond with json
  if (req.accepts('json')) {
    //res.status(404);
    //res.json({ error: 'Not found' }); //error return
    res.json({ text: 'hello' });
    return;
  }

  res.status(404);
  // default to plain-text. send()
  res.type('txt').send('Not found');
})

router.get("/api/json", async (req, res) => {
  res.json({text:"hello"})
})

//module.exports = router;
export default router;
