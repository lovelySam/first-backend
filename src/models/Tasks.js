const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide Name"],
        trim: true,
        maxlength: [10, "Name Can't be more than 10"]
    },
    completed: {
        type:Boolean,
        default:false
    },
})


module.exports = mongoose.model('Task', TaskSchema)