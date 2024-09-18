import React from "react";
import { useLocation } from "react-router-dom";
// import Moredetail from "./Moredetail";

const Viewdetails = () => {
  let location = useLocation();
  console.log(location.state);



  

  return (
    <div className="row m-0 p-0 mt-5">
      <div className="col-md-6  justify-content-center d-flex">
        <img src={location.state.thumbnail} alt="" />
      </div>
      <div className="col-md-6 ">
        <h4>Title: {location.state.title}</h4>
        <h5>Brand: {location.state.brand}</h5>
        <h6>Category: {location.state.category}</h6>
        <h6>Price:${location.state.price} </h6>
        <h6>Discount:{location.state.discountPercentage} %</h6>
        <h6>Warranty:{location.state.warrantyInformation} %</h6>
        <p>{location.state.description}</p>
        <button className="btn btn-info"   >Add to cart</button>
        {/* <Link to="/Moredetail"  state={location.state}className="btn btn-primary ms-3">
          More Details
        </Link> */}
      </div>

      {/* <Moredetail data={location.state}/> */}
    </div>
  );
};

export default Viewdetails;
