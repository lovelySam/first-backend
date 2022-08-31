const mongoose = require('mongoose')

const connectionString = "mongodb+srv://iyyappan:iyyappan123@task-manager.wgse9xs.mongodb.net/task-manager?retryWrites=true&w=majority";


const connect = (url) => {
   return mongoose.connect(connectionString); 
}


module.exports = connect;
