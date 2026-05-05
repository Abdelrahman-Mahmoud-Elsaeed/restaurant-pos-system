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

router.get('/',getAllorders);
router.get('/:id',getorderbyid);
router.post('/',CreateOrder);
router.patch('/:id',UpdateOrder);
router.delete('/:id',DeleteOrder);

export default router;