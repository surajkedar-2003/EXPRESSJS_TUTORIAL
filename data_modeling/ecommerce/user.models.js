import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    street:{
        type:String,
        required:true
    },
    District:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Pincode:{
        type:Number,
        required:true
    }
});
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    address:{
        type: [addressSchema]
    }
},{timestamps:true})



//model("name store to database", "on which basis - create model")
//              |--> this parameter always goes into database in all lowercase letters
export const User = mongoose.model('User', userSchema);