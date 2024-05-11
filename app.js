const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const db = require('./db'); 
const Products = require('./models/product');
const productController = require('./controllers/productController');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use(cors());

db.sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

app.post('/api/addProduct', productController.InputProduct);
app.get('/api/getProduct', productController.GetProducts);
app.put('/api/updateProduct', productController.UpdateProduct);
app.delete('/api/deleteProduct',productController.DeleteProduct);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
