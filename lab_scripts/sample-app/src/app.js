const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Kubernetes GitOps! (Updated)',
    version: process.env.APP_VERSION || 'v2.0.0',
    timestamp: new Date().toISOString(),
    hostname: require('os').hostname(),
    update: 'This is version 2.0!'
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    uptime: process.uptime()
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
