


//import express from 'express';
const express = require('express');
const router = express.Router();

router.get('/json', (req, res) => {
  //res.send(
    //'<script src="/bundle.js"></script>'
  //)
  // respond with json
  if (req.accepts('json')) {
    res.status(404);
    res.json({ error: 'Not found' });
    return;
  }

  res.status(404);
  // default to plain-text. send()
  res.type('txt').send('Not found');
})

module.exports = router;
//export default router;
