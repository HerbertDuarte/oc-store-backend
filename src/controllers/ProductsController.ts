import ProductServices from "../services/ProductServices";
import { router } from "../router";
const productController = router

const productServices = new ProductServices()

productController.get("/products", productServices.list)
productController.post("/products", productServices.create)
productController.put("/products/:id", productServices.update)
productController.delete("/products/:id", productServices.delete)

export {productController}