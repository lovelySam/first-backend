const mongoose = require('mongoose')

const connectionString = "";


const connect = (url) => {
   return mongoose.connect(connectionString);
}


module.exports = connect;
