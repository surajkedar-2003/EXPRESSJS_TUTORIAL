const mongoose = require('mongoose');
const StudentSchema = mongoose.Schema({
    name:{
        type:String,
        default : 'aaaaaa'
    },
    age:{
        type:Number,
        min: 18,
        max: 80
    },
    city:{
        type:String
    },
    marks:{
        type:Number,
        min:30,
        max:100
    }
})

module.exports = mongoose.model("Student", StudentSchema);