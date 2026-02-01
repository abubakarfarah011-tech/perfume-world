import React from 'react';
import './Cart.css'; 
/**
 * blk 1:COMPONENT DEFINITION & PROPS
 */
const Cart = ({ isOpen, onClose, cartItems, onRemove }) => {
/**
   * blk 2: CONDITIONAL RENDERING
   */
  if (!isOpen) return null;
/**
   * blk 3: Data Calculationn
   */
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    /**
     * Block 4: Overlay and sidebar container
     * cart-overlay provides the semi-transparent background.
     * cart-sidebar creates the slide-out panel effect.
     */
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Your Bag ({cartItems.length})</h2>
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price} KES</p>
                </div>
                <button onClick={() => onRemove(index)} className="remove-btn">Remove</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
            <h3>Total: {total} KES</h3>
            <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;