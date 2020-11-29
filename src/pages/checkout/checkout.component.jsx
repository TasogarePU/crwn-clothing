import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-background'>
    {cartItems.length ? (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">
          <span>TOTAL: ${total}</span>
        </div>
        <div className="test-warning">
          *PLEASE USE FOLLOWING TEST CREDIT CARD FOR PAYMENTS*
          <br />
          4242 4242 4242 4242 - Exp: 01/30 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} cartItems={cartItems} />
      </div>
    ) : (
      <div className="checkout-page">
        <span className="empty-cart">
          There is nothing here at the moment,
          <br />
          Go buy some clothes.
        </span>
      </div>
    )}
  </div>
);

const MapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(MapStateToProps)(CheckoutPage);
