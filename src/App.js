import './App.css';
import ProductList from './ProductList';
import api from './api';
import React, {useState, useEffect} from 'react';


function App() {
  const [products, setProducts] =  useState([]);


  useEffect(()=> {
    api.getAllProducts()
      .then(setProducts);
  },[])



  return (
    <div>
      <h1>Sweet Apple Acres</h1>
        <ProductList products={products} />
    </div>
  );
}

export default App;
