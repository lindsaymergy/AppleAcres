import React, { useState } from "react";
import "../Product/Detail.scss";

function ProductDetail({description, rating}) {
  const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <div 
              className="details" 
              onClick={() => setIsActive(!isActive)}>
                View Details 
                <span>{isActive ? '-' : '+'}</span>
            </div>
          {isActive && 
            <div className="internal">
              <div className="description">Description: <span>{description}</span></div>
              <div className="rating">Rating: <span>{rating}</span></div>

            </div>
            }
        </div>
    )
  }

export default ProductDetail;