// require joi
import Joi from "joi"
// schema 
 const Product_Schema = Joi.object({ 
    name: Joi.string().min(2).max(100).required(),
    price: Joi.number().positive().required(),
    stock: Joi.number().required(),
    category: Joi.string().required()
});
 const CreateProduct = Joi.object({
    body: Product_Schema
});
const UpdateProduct = Joi.object({
    body: Product_Schema
});
// export schema 
export default {CreateProduct, UpdateProduct};