const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

const { routes } = require('./src/routes/Routes');

app.listen(PORT, () => {
  console.log(`Nodejs and express app connected on port: ${PORT}`);
});

app.use(express.json());
app.use(cors());

routes(app);

app.get('/', (req, res) => {
  res.send(`Hello from Nodejs and express on port: ${PORT}`);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
