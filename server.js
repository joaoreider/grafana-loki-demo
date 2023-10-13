const express = require('express');
const winston = require('winston');
const LokiTransport = require('winston-loki');

const app = express();
const port = 8080;

const Logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new LokiTransport({
      host: 'http://loki:3100', 
      json: true, // JSON format for logs
      labels: { app: 'node-api' }, // Custom label for records
    }),
  ],
});

app.get('/generate-log', ( _, res) => {
  res.send('Hello, Loki Test!');
  Logger.info('Request received on /generate-log');
});

app.get('/error', ( _, res) => {
  res.status(500).send('Internal Server Error');
  Logger.error('Error occurred on /error');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
