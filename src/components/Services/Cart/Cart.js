import React from "react";

const Cart = (props) => {    
  const { cartItems, clickToAdd, clickToRemove } = props;
  console.log(cartItems);
  // const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // const taxPrice = itemsPrice * 0.14;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  // const totalPrice = itemsPrice + taxPrice + shippingPrice;
  // const itemsPrice = cartItems.reduce( (itemsPrice, prd) => itemsPrice + prd.price , 0 );
// let itemsPrice = 0;
//   for(let i = 0; i< cartItems.length; i++){
//     const product = cartItems[i];
//     itemsPrice = itemsPrice + product.price * product.quantity || 1;
// }
  return (
    <div className="style mt-4">
        <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => clickToRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => clickToAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              {/* <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div> */}
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              {/* <div className="col-1 text-right">${taxPrice.toFixed(2)}</div> */}
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                {/* ${shippingPrice.toFixed(2)} */}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                {/* <strong>${totalPrice.toFixed(2)}</strong> */}
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
    </div>
  );
};

export default Cart;
