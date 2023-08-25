# Backend Ecommerce

# Documentación en español

Este es un servidor creado con nodejs y express para practicar la consulta a una API de una
Ecommerce, así que es bastante sencillo y puedes consultar todos los productos o uno en partícular.

1- Clona el repositorio y ejecuta el comando npm install para descargar todas las dependencias

2- Corre npm run dev para modo desarrollo

3- Puedes consultar la API en la dirección http://localhost:8000/products para obtener todos lo productos.
Si necesitas un solo producto http://localhost:8000/products/id

La API devuelve un array con 50 productos, cada producto es un objecto con las siguientes claves: id, name, category, description, price e image.
Ejemplo: product.name retorna el nombre del producto.

# English docs

This server was created using nodejs and express in order to practice fetching a Ecommerce API, it 
was made for practicing purposes, so it is quite simple and you can either fetch all of the products or one of them.

1- Clone the repository and run npm install to download all of the dependencies.

2- Run npm run dev for development

3- You can fetch the API by using this url http://localhost:3000/products to get all of the products.
If you need one product only http://localhost:3000/products/id

The API returns an array with 50 products and each of them has the following keys: id, name, category, description, price and image.
Example: product.name returns the name of the product.

