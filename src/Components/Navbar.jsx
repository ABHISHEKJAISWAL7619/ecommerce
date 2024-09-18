import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = (props) => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid bg-primary">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart  <FaShoppingCart /><sup> {props.cartArr.length}</sup></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login    <IoPersonCircleOutline /></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>




    </div>
  )
}

export default Navbar