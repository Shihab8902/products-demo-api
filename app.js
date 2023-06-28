const router = require("express").Router();

//Controllers
const {getProducts, getProductById, createProducts, updateProduct, deleteProduct} = require("./controllers/productsController");

//GET method
router.get("/products", getProducts);

//GET method with id
router.get("/products/:id", getProductById);

//POST method
router.post("/products", createProducts);

//PUT method
router.put("/products/:id", updateProduct);

//DELETE method
router.delete("/products/:id", deleteProduct);

module.exports = router;