import express from 'express';
const router = express.Router();

// require controllers 
import {
    getAllproducts,
    getproductbyid,
    UpdateProduct,
    DeleteProduct,
    CreateProduct
} from "../controllers/product.controller.js";

// require validation middleware and validators

import validate from '../middlewares/validation.middleware.js';
import Product_Validator from "../validators/Product.validator.js";

router.get('/', getAllproducts);
router.get('/:id', getproductbyid);
router.post('/', validate(Product_Validator.CreateProduct), CreateProduct);
router.patch('/:id', validate(Product_Validator.UpdateProduct), UpdateProduct);
router.delete('/:id', DeleteProduct);

export default router;