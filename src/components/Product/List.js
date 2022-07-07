import React from "react";
import ProductDetail from "./Detail"; 
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from "../../queries/products";
import "../Product/List.scss";
import "../Product/Detail.scss";
import strings from "../../strings";

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  
  if (loading) return <p>{strings.loadingMessage}</p>;
  if (error) return <p>{strings.errorMessage}</p>;
  
  return data.products.map(({ name, image, price, isAvailable, description, rating }) => (
      <div className="product">
        <div className="image">
          <img alt={strings.imageAlt} src={`${image}`}></img>
        </div>
        <h3 className="name">{name}</h3>
        <div className="single-line">
          <div className={`price ${isAvailable}`}>${price.toFixed(2)}</div>
          <div className={`available ${isAvailable}`}></div>
        </div>
        <ProductDetail
          description={description} 
          rating={rating}>
        </ProductDetail>
      </div>
    ));
  }

export default ProductList;