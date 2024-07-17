import mongoose from 'mongoose';

const orderitemsSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:Number,
        required:true
    }
});

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    orderItems:{
        type:[orderitemsSchema]
    },
    orderAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    orderStatus:{
        type:String,
        enum:["PENDING", "CANCELLED", "DELIVERED"],
        default:"PENDING"
    }

},{timestamps:true});

export const Order = mongoose.model("Order", orderSchema);