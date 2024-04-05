import React from "react";

const Footer = () => {
  return (
    <footer class="container-fluid bg-light py-3 mt-auto">
      <div class="col-12 text-center">
    <h5 className="text-center mb-3">Follow us on</h5>
    <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
          <i class="bi bi-facebook"></i>
          </a>
          <a href="!#">
          <i class="bi bi-instagram"></i>
          </a>
          <a href="!#" className="ms-3">
          <i class="bi bi-twitter"></i>
          </a>
        </div>
        <hr/>
        Powered by <a href="https://dummyjson.com/">DummyJSON</a>
      </div>
    </footer>
  );
};

export default Footer;
