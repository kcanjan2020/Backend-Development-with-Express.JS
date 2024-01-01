import { Router } from "express";
import { createProduct, deleteProductDetails, readProduct, readProductDetails, updateProduct } from "../controller/productController.js";

let  productRouter=Router();
productRouter.route("/") //localhost:8000/products

.post(createProduct)
.get(readProduct)

//For update
productRouter.route("/:productId") //localhost:8000/products/any
.patch(updateProduct)
.delete(deleteProductDetails)

//Read Specific
.get(readProductDetails)
export default productRouter;