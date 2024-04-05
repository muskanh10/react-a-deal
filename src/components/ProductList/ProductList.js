import React from 'react';
import Product from "../Product/Product";

const ProductList = ({products}) => {
  return (
    <div className='container my-3'>
      <div className="row">
      {
        products.map(product => {
          let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));

          return (
            <Product key = {product.id} product = {{...product, discountedPrice}} />
          )
        })
      }
      </div>
    </div>
  )
}

export default ProductList