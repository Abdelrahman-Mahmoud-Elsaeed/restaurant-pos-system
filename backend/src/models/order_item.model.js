import mongoose from "mongoose";
const order_item=new moongose.Schema({
  orderid:{
    type :String,
    require : true
  },
  itemid:{
    type : String,
    require : true
  },
  quantity:{
    type : Number,
    require : true
  },
  price:{
    type : Number,
    require : true
  }
})

const model_item=moongose.model=("order_item" , order_item)
export default model_item