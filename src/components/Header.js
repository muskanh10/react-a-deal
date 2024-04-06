import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getAllCarts, getCartItemsCount, getCartTotal } from '../store/cartSlice';

const Header = () => {
  
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts])
  return (
    <>
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="h2 mx-3">React-A-Deal</Link>
        <form className="d-flex" role="search">
          <Link to = "/cart" className="btn btn-outline-success" type="submit">
          <i class="bi bi-cart"></i>
          <span className="ms-3 badge rounded-pill bg-dark">{itemsCount}</span>
          </Link>
        </form>
      </div>
    </nav>
    <Navbar />
    </>
 );
};

export default Header;
