const Products=require('../models/product');


const InputProduct= async (req, res) => {
    const{name,price,quantity,details}=req.body;
    try{
    const product=await Products.create({
        name,price,quantity,details
    });
    res.status(201).json(product);
} catch (error) {
  console.error('Error creating product info:', error);
  res.status(500).json({ error: 'Internal server error' });
}
};


const GetProducts= async (req, res) => {
 
    try {
        const product = await Products.findAll();
        if (!product) {
            return res.status(404).json({ error: 'product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error finding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const UpdateProduct = async (req, res) => {
    const { id } = req.query;
    if (!id) {
        return res.status(400).json({ error: 'product not provided in params' });
    }

    try {
        
        const { name, price, quantity, details } = req.body;

        
        const updatedProduct = await Products.update(
            { name, price, quantity, details },
            { where: { id:id } }
        );

        if (updatedProduct[0] === 0) {
            return res.status(404).json({ error: 'product not found' });
        }

       
        const updatedproductData = await Products.findOne({ where: { id:id } });
        res.json(updatedproductData);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const DeleteProduct = async (req, res) => {
    const { id } = req.query;

    try {
        const product = await Products.findOne({ where: { id:id } });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await product.destroy();
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports = { GetProducts, InputProduct,UpdateProduct,DeleteProduct};