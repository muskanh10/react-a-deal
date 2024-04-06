import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";
import ProductList from "../../components/ProductList/ProductList";
import {
  fetchAsyncSearchProduct,
  getSearchProducts,
  setSearchTerm,
  getSearchProductsStatus,
  clearSearch,
} from "../../store/searchSlice";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const searchProducts = useSelector(getSearchProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchAsyncSearchProduct(searchTerm));
  }, [searchTerm]);

  if(searchProducts.length === 0){
    return (
      <div className='container text-center align-items-center my-3'>
          <p className="h3">No Products found</p>
      </div> 
    )
  }

  return (
    <div className="container my-3">
        <p className="h3">Search Results for "{searchTerm}"</p>
        <hr/>
        {
            searchProductsStatus === STATUS.LOADING ?
            <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div> : <ProductList products={searchProducts} />
        }
    </div>
  );
};

export default SearchPage;
