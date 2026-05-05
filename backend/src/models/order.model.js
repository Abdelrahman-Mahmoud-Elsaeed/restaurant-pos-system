import moongose from "mongoose"
const Orderschema = new moongose.Schema({
  orderid:{
    type :String,
    require : true
  },
  customerid:{
    type : String,
    require : true
  },
  orderdate:{
    type : Date,
    require : true
  },
    author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  totalamount:{
    type : Number,
    require : true
  },
  status:{
    type : String,
    require : true

  }  
})
const model_order = mongoose.model("Orders", Orderschema);
export default model_order;