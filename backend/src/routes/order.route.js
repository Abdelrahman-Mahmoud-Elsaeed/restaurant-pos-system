import express from 'express';
const router = express.Router();

import asyncHandler from "../utils/asyncHandlar.js"

import { 
    getAllorders,
    getorderbyid,
    updateOrder,
    deleteOrder,
    createOrder,
    updateOrderStatus
} from "../controllers/order.controller.js";

router.get('/',asyncHandler(getAllorders));
router.get('/:id',asyncHandler(getorderbyid));
router.post('/',asyncHandler(createOrder));
router.patch('/:id',asyncHandler(updateOrder));
router.patch('/:id',asyncHandler(updateOrderStatus));
router.delete('/:id',asyncHandler(deleteOrder));

export default router;