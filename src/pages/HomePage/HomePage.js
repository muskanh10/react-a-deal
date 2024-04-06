import React, { useEffect } from "react";
import HeaderSlider from "../../components/Slider/HeaderSlider";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../store/categorySlice";
import ProductList from "../../components/ProductList/ProductList";
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
} from "../../store/productSlice";
import { STATUS } from "../../utils/status";

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, []);

  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);
  const sortedProducts = products.slice().sort((a, b) => b.discountPercentage - a.discountPercentage);


  return (
    <>
      <div className="container-fluid">
        <HeaderSlider />
      </div>
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center h2">Check out our products!</p>
      </div>
      <div className="container pb-5 px-lg-5">
        
      { productStatus === STATUS.LOADING ? <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div> : <ProductList products = {sortedProducts}/>}
      </div>
    </>
  );
};

export default HomePage;
