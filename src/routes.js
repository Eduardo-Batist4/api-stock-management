const express = require("express")
const routes = express.Router();
const ProductController = require("../controller/ProductController");

routes.post("/products",  ProductController.store);
routes.get("/products",  ProductController.index);
routes.put("/product/:id",  ProductController.put);
routes.delete("/products/:id", ProductController.delete);

module.exports = routes;