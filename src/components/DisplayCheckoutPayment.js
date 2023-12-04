/** @format */

import React from "react";

function DisplayCheckoutPayment({
  cartCourses,
  deleteCourseFromCartFunction,
  totalAmountCalculationFunction,
  setCartCourses,
  proceedToPayment,
  isClicked,
  setIsClicked,
}) {
    
  return (
    <div className={`cart ${isClicked === true ? "active" : ""}`} style={{marginTop:"50px"}}>
      <div className="checkout-section">
        <div className="checkout-total">
          <h1> Checkout Items</h1>
          <div>
         <p>Checkout your payment:${totalAmountCalculationFunction()}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayCheckoutPayment;
