import React, { useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProductsByCategory,
  fetchAsyncProductsOfCategory,
  getCategoryProductsStatus,
} from "../../store/categorySlice";
import { STATUS } from "../../utils/status";

const CategoryProductPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoryProducts = useSelector(getAllProductsByCategory);
  console.log(categoryProducts);
  const categoryProductsStatus = useSelector(getCategoryProductsStatus);

  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category));
  }, [dispatch, category]);

  return (
    <div className="container my-3">
        <p className="h3"> Check out our {category}</p>
        <hr/>
        {
            categoryProductsStatus === STATUS.LOADING ?
            <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div> : <ProductList products={categoryProducts} />
        }
    </div>
  );
};

export default CategoryProductPage;
