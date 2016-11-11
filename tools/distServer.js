// This file configures a web server for testing the production build
// on your local machine.

import express from 'express';
import path from 'path';
import {chalkProcessing} from './chalkConfig';

/* eslint-disable no-console */
console.log(chalkProcessing('Starting production build...'));

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));

app.get('robots.txt', (req, res) => {
  res.sendfile(path.join(__dirname, '../dist/robots.txt'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
  if(err) {
    console.log(err);
  }
});
