const Product = require("../models/Product");

module.exports = {
    async store(req, res) {
        try {
            const { name, input, output } = req.body;

            if(!name || !input || !output) {
                return res.status(400).json({error: "Empty content."});
            }

            const product = await Product.create({ name, input, output });
            return res.status(201).json({product});
        } catch (error) {
            console.error("Error creating a product: ", error);
        }
    },
    async index(req, res) {
        try {
            const products = await Product.findAll()
            return res.json(products);
        } catch (error) {
            console.error("Error fetching products.");
            return res.status(500).json({error: "Interval server Error fetching products."});
        }
    },
    async put(req, res) {
        try {
            const { name, input, output, quantity } = req.body;

            if(!name && !input && !output && !quantity) {
                return res.status(400).json({ error: "Empty content." });
            }

            const existingProduct = await Product.findByPk(req.params.id);

            if(existingProduct) {
                const hasUpdates = name !== existingProduct.name || input !== existingProduct.input || output !== existingProduct.output;

                if(hasUpdates) {
                    await Product.update({name, input, output, quantity}, {
                        where: {
                            id: req.params.id
                        }
                    });

                    return res.status(200).json({ message: "Product updated successfully" });
                } else {
                    return res.status(400).json({ error: "No valid updates provided." });
                }
            } else {
                return res.status(404).json({ error: "Product not found." });
            }
        } catch (error) {
            console.error("Error updating products", error);
            return res.status(500).json({ error: "Internal server error when updating products." });
        }
    },
    async delete(req, res) {
        try {
            const existingProduct = await Product.findByPk(req.params.id);

            if(existingProduct) {
                await Product.destroy({
                    where: {
                        id: req.params.id
                    }
                });

                return res.status(200).json({ message: "Product successfully removed." });
            } else {
                return res.status(404).json({ error: "Product not found." });
            }
        } catch (error) {
            console.log("Error deleting product:", error);
            return req.status(500).json({ error: "Internal server error when deleting product."});
        }
    }
}