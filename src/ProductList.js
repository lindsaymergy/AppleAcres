import React, {useState} from 'react';

function regulatePrices(price){
  return price.toFixed(2);
}


function ProductList({products}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = event => {
    setIsVisible(current => !current);
  };

  return (
    <div className="flex">
      {products.map(product => 
        <div className="product" key={product.id} onClick={handleClick}> 
            <div className="image">
                {/* TODO: shrink image size */}
                <img src={`${product.image}`}></img>
            </div>
            <div className="name">
                {product.name}
            </div>
              {/* make all prices consistent */}
            <div className="price">
                ${product.price}
            </div>
            <div className={`${product.isAvailable}`}>
                {/* TODO: display green check or x depending on status */}
            </div>
            {isVisible && (
              <div>
                <h2>Some content here</h2>
              </div>
            )}
        </div>
      )}
    </div>
  );
}
export default ProductList;