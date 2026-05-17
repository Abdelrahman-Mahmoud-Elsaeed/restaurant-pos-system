// require joi
import joi from 'joi';
// schema 
const order_item = joi.object({
  orderid: joi.string().required(),
  itemid: joi.string().min(1).required(),
  quantity: joi.number().min(1).required(),
  price: joi.number().positive().required(),
});
const Orderschema = joi.object({
  author: joi.string().required(),
  totalamount: joi.number().positive().required(),
  status: joi.string().valid("pending", "completed").required(),
  allorder_items: joi.array().items(order_item).min(1).required(),
});
const CreateOrder = joi.object({
  body: Orderschema,
});
const UpdateOrder = joi.object({
  body: joi.object({
    totalamount: joi.number().positive(),
    status: joi.string().valid("pending", "completed"),
    allorder_items: joi.array().items(order_item).min(1),
  }),
});
// export schema 
export default { CreateOrder, UpdateOrder };
