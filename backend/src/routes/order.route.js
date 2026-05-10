import express from 'express';
const router = express.Router();

// require controllers 
import {
    getAllorders,
    getorderbyid,
    UpdateOrder,
    DeleteOrder,
    CreateOrder
} from "../controllers/order.controller.js";

// require validation middleware and validators
import validate from '../middlewares/validation.middleware.js';
import orderValidator from '../validators/Order.validator.js';

router.get('/', getAllorders);
router.get('/:id', getorderbyid);
router.post('/', validate(orderValidator.CreateOrder), CreateOrder);
router.patch('/:id', validate(orderValidator.UpdateOrder), UpdateOrder);
router.delete('/:id', DeleteOrder);

export default router;