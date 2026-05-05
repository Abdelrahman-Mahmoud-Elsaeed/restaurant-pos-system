import mongoose from "moongose"
const Product_Schema=new mongoose.Schema({
  name:{
    type :String,
    required : true
  },
  price:{
    type : Number,
    required : true
  },
  stock:{
    type : Number,
    required : true
  },
  category:{
    type : String,
    required : true
  }

})
const model_Product=mongoose.model("Product" , Product_Schema)

export default Product_Schema