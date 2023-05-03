const express = require('express');
const cors = require('cors');
const path = require ('path');
const authRouter = require('./routes/authRouter');
const dbRouter = require('./routes/databaseRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname, '/index.html')
});

app.use('/todo', dbRouter);

app.use('/auth', authRouter);

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = { ...defaultErr, ...err };
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(3000, () => {
    console.log('server running on port 3000');
});

