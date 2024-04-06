import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncProductSingle,
  getProductSingle,
  getSingleProductStatus,
} from "../../store/productSlice";
import { STATUS } from "../../utils/status";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import {
  addToCart,
  getCartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from "../../store/cartSlice";
import CartMessage from "../../components/CartMessage";

const ProductSinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingleProductStatus);
  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));

    if (cartMessageStatus) {
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus]);

  let discountedPrice =
    product?.price - product?.price * (product?.discountPercentage / 100);
  if (productSingleStatus === STATUS.LOADING) {
    return (<div class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div> );
  }

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const addToCartHandler = (product) => {
    let discountedPrice =
      product?.price - product?.price * (product?.discountPercentage / 100);
    let totalPrice = quantity * discountedPrice;

    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice })
    );
    dispatch(setCartMessageOn(true));
  };

  const fullStars = Math.floor(product?.rating || 0);
  const halfStar = product?.rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  console.log("rating", product?.rating);

  return (
    <div className="container">
      <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item">
            <Link
              to={`/category/${product?.category}`}
              className="text-decoration-none link-secondary"
            >
              {product?.category ? product.category.replace("-", " ") : ""}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product?.title}
          </li>
        </ol>
      </nav>
      <div className="row mb-4">
        <div className="d-none d-lg-block col-lg-1">
          <div
            className="image-vertical-scroller"
            style={{ overflowY: "auto", maxHeight: "400px" }}
          >
            <div className="d-flex flex-column">
              {product?.images?.[1] && (
                <img className="img-fluid mb-2" src={product.images[1]} />
              )}
              {product?.images?.[2] && (
                <img className="img-fluid mb-2" src={product.images[2]} />
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={product ? (product.images ? product.images[0] : "") : ""}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            {/* <h2 className="mb-1">{ product?.title } </h2> */}
            <div className="row justify-content-md-center align-items-center">
              <div className="col">
                <h2 className="mb-1">{product?.title} </h2>
              </div>
              <div
                className="col-md-auto h6"
                style={{ opacity: "0.7", textDecoration: "line-through" }}
              >
                {formatPrice(product?.price)}
              </div>
              <div className="col-md-auto h4">
                {formatPrice(discountedPrice)}
              </div>
              <div className="col-md-auto h6 pt-1 text-danger">
                {product?.discountPercentage}%OFF
              </div>
            </div>
            <h4 className="text-muted mb-4">{product?.brand} </h4>
            <div>
              {Array.from({ length: fullStars }, (_, index) => (
                <i
                  key={`full-${index}`}
                  className="bi bi-star-fill"
                  style={{ color: "#ffc107" }}
                ></i>
              ))}
              {halfStar === 1 && (
                <i className="bi bi-star-half" style={{ color: "#ffc107" }}></i>
              )}
              {Array.from({ length: emptyStars }, (_, index) => (
                <i
                  key={`empty-${index}`}
                  className="bi bi-star"
                  style={{ color: "#ffc107" }}
                ></i>
              ))}
            </div>

            <div className="d-flex align-items-center my-1">
              <span className="me-3">Quantity: </span>
              <button
                className="btn btn-outline-secondary"
                onClick={() => decreaseQty()}
              >
                <i class="bi bi-dash"></i>
              </button>
              {/* <div className="flex align-center justify-center" style={{ width: '45px', height: '28px', borderTop: '1px solid rgba(0, 0, 0, 0.1)', borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}>{}</div> */}
              <div
                className="text-center"
                style={{ minWidth: "40px", margin: "0 10px" }}
              >
                {quantity}
              </div>
              <button
                className="btn btn-outline-secondary"
                onClick={() => increaseQty()}
              >
                <i class="bi bi-plus"></i>
              </button>
            </div>
            <div className="row g-3 my-4">
              <div className="col">
                <button
                  className="btn btn-outline-dark py-2 w-100"
                  onClick={() => {
                    addToCartHandler(product);
                  }}
                >
                  Add to cart
                </button>
              </div>
              <div className="col">
                <button className="btn btn-dark py-2 w-100">Buy now</button>
              </div>
              <div className="col-md-auto">
              {cartMessageStatus && <CartMessage />}
              </div>
            </div>
            <hr />
            {product?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSinglePage;
