const server = require('./server');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const user = process.env.MLAB_USERNAME;
const pass = process.env.MLAB_PASSWORD;

mongoose
    .connect(`mongodb://${user}:${pass}@ds135233.mlab.com:35233/eplansoft`,
      { useNewUrlParser: true })
    .then(() => console.log('Mongo Connected'))
    .catch(error => {
        console.error('Error connecting to Mongo', error)
    });

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});