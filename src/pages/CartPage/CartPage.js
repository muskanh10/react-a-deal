import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { shopping_cart } from "../../utils/images";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,
  clearCart,
  getCartTotal,
} from "../../store/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);

  const { itemsCount, totalAmount } = useSelector((state) => state.cart);
  console.log("count", itemsCount, totalAmount);

  if (carts.length === 0) {
    return (
      <div className="container text-center my-5">
        <img src={shopping_cart} alt="" />
        <p className="h3">Your shopping cart is empty.</p>
        <Link to="/" className="my-2 btn btn-outline-secondary">
          Go shopping Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-3">
      <div class="row">
        <div class="col-sm-8">
      {carts.map((cart, idx) => {
        return (
          <div className="card mb-3" style={{ maxHeight: "340px" }}>
            <div
              className="m-3"
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                zIndex: "1",
              }}
            >
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={() => dispatch(removeFromCart(cart?.id))}
              ></button>
            </div>
            <div className="row g-0">
              <div className="col-md-4 d-flex">
                <img
                  src={cart?.images[0]}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{
                    objectFit: "cover",
                    height: "15vw",
                    width: "100%",
                  }}
                />
              </div>
              <div className="col-md-8 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title h3">{cart?.title}</h5>
                  <p className="card-text flex-grow-1">{cart?.brand}</p>
                  <div className="d-flex justify-content-between mt-auto align-items-center">
                    <div className="d-flex align-items-center my-1">
                      <span className="me-2">Quantity: </span>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          dispatch(toggleCartQty({ id: cart?.id, type: "DEC" }))
                        }
                      >
                        <i class="bi bi-dash"></i>
                      </button>
                      <div
                        className="text-center"
                        style={{ minWidth: "30px", margin: "0 10px" }}
                      >
                        {cart?.quantity}
                      </div>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          dispatch(toggleCartQty({ id: cart?.id, type: "INC" }))
                        }
                      >
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                    <span className="h4 me-2">
                      {formatPrice(cart?.totalPrice)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
        <div class="col-sm-4">
      <div className="card mb-3">
        <div className="card-header btn btn-secondary"  onClick={() => dispatch(clearCart())}>Clear Cart</div>
        <div className="card-body">
          <p className="card-text">Total ({itemsCount}) items:</p>
          <h5 className="card-title">
          {formatPrice(totalAmount)}
          </h5>
        </div>
        <div className="card-footer btn btn-secondary">Check Out</div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default CartPage;
