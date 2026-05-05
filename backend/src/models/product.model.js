import mongoose from "moongose"
const Product_Schema=new moongose.Schema({
  name:{
    type :String,
    require : true
  },
  price:{
    type : Number,
    require : true
  },
  stock:{
    type : Number,
    require : true
  },
  category:{
    type : String,
    require : true
  }

})
const model_Product=moongose.model("Product" , Product_Schema)

export default Product_Schema