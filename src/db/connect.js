const mongoose = require('mongoose')

const connectionString = "";


const connect = (url) => {
   return mongoose.connect(url);
}


module.exports = connect;
