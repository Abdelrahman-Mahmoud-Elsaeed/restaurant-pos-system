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
import Product_Schema from "../validators/Product.validator.js";

router.get('/',getAllproducts);
router.get('/:id',getproductbyid);
router.post('/',CreateProduct);
router.patch('/:id',UpdateProduct);
router.delete('/:id',DeleteProduct);

export default router;