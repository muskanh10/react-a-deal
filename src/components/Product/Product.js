import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import "./Product.css";


const Product = ({ product }) => {
return (
    <Link to={`/product/${product?.id}`} key={product?.id} className="col-12 col-md-4 mb-4">
      <div className="card shadow-sm">
      <div className="card-img-top-container bg-dark">
            <img
              src={product?.images[0]} alt={product?.title}
              className="cover"
            />
          </div>
        <div className="card-body">
          <h5 className="card-title text-center">{product?.title}</h5>
          <p className="card-text text-center text-muted">{product?.brand}</p>
          <div className='row text-center'>
            <span className='col-sm' style={{ opacity: '0.7', textDecoration: 'line-through' }}>
              {formatPrice(product?.price)}
            </span>
            <span className='col-sm' style={{ fontWeight: '600' }}>
              {formatPrice(product?.discountedPrice)}
            </span>
            <span className='col-sm'>
              ({product?.discountPercentage}% Off)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
  
};

export default Product;
