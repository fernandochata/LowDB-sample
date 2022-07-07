import { Router } from 'express'

const router = Router()

import { getProduct, getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/products.js";

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

router.post("/products", createProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

export default router;