# 🍎 Sweet Apple Acres Challenge
Our friends Applejack, Big McIntosh, Apple Bloom, and Granny Smith over at the Sweet Apple Acres farm need your help to build an app so that their customers, as far away as Canterlot, can place bulk orders for produce.

They previously worked with a backend engineer to setup an API in GraphQL and REST.

## Requirements
Customers can call in their orders, so at a minimum, users of the app must be able to:

### Browse a list of products
### View product details

---

Here are the REST endpoints:

GET /.netlify/functions/api/products
GET /.netlify/functions/api/products?
search=apple
minRating=3
maxRating=5
minPrice=5
maxPrice=25
isAvailable=true
limit=2
offset=0
orderBy=name
sort=DESC

GET /.netlify/functions/api/products/[id]
GET /.netlify/functions/api/products/1e780016-94ef-4063-9fbb-fbafbabb636e

POST /.netlify/functions/api/orders

{
  "name": "Fluttershy",
  "deliveryAddress": "Fluttershy's Cottage, The Edge of the Everfree Forest",
  "items": [{
    "productId": "b0cc414e-7a03-428c-81ae-5c472ca11cdc",
    "quantity": 5
  }]
}
