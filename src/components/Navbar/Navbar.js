import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, fetchAsyncCategories } from '../../store/categorySlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  const womenCategories = categories.filter(category => category.startsWith('women'));
  const menCategories = categories.filter(category => category.startsWith('men'));
  const otherCategories = categories.filter(category => !category.startsWith('women') && !category.startsWith('men'));


  useEffect(() =>{
    dispatch(fetchAsyncCategories())
  }, [dispatch])

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <div className="row w-100 justify-content-center">
          <form className="col-8 d-flex" role="search">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <Link to="#" className="btn btn-outline-secondary">
                  <i className="bi bi-search"></i>
                </Link>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="row w-100 text-center mt-2">
          <ul className="d-flex justify-content-around" style={{listStyleType:'none'}}>
            {
            categories.slice(0,14).map((category, idx) => (
              <li key = {idx}>
                <Link to = {`category/${category}`} className='nav-link text-capitalize'>{category.replace("-", " ")}</Link>
              </li>
            ))
            }
          </ul>
        </div> */}
        <div className="row w-100 text-center mt-2">
      <ul className="d-flex justify-content-around" style={{ listStyleType: 'none' }}>

        {/* Women Categories Dropdown */}
        <li>
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Women
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {womenCategories.map((category, idx) => (
                <li key={idx}>
                  <Link to={`category/${category}`} className='dropdown-item text-capitalize'>{category.replace("women-", "").replace("-", " ")}</Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* Men Categories Dropdown */}
        <li>
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              Men
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
              {menCategories.map((category, idx) => (
                <li key={idx}>
                  <Link to={`category/${category}`} className='dropdown-item text-capitalize'>{category.replace("men-", "").replace("-", " ")}</Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        {/* Other Categories */}
        {otherCategories.map((category, idx) => (
          <li key={idx}>
            <Link to={`category/${category}`} className='nav-link text-capitalize'>{category.replace("-", " ")}</Link>
          </li>
        ))}
      </ul>
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
