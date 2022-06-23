import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, getCart, deleteCartTabacco, changeTabaccoCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div className="mainContainer-cart">
        <div className="container-cart" data-aos="zoom-in-up">
          <table>
            <thead>
              <tr className="cart-mainText">
                <th id="mainText">Image</th>
                <th id="mainText">Title</th>
                <th id="mainText">Price</th>
                <th id="mainText">Count</th>
                <th id="mainText">Sum</th>
              </tr>
            </thead>
            <tbody>
              {cart.tabaccos
                ? cart.tabaccos.map((elem) => (
                    <tr key={elem.item.id}>
                      <td>
                        <img
                          className="elem-img"
                          width={200}
                          src={elem.item.image}
                          alt="phone"
                        />
                      </td>
                      <td className="elem-title">{elem.item.title}</td>
                      <td className="elem-price">{elem.item.price}</td>
                      <td>
                        <input
                          id="input-cart"
                          type="number"
                          style={{ width: "70px" }}
                          value={elem.count}
                          onChange={(e) =>
                            changeTabaccoCount(elem.item.id, e.target.value)
                          }
                        />
                      </td>
                      <td className="elem-subPrice">{elem.subPrice}</td>
                      <td>
                        <button
                          id="delete"
                          onClick={() => deleteCartTabacco(elem.item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container-pay2">
        <h4>Total Price: {cart.totalPrice}</h4>
      </div>
      <div className="container-pay">
        <NavLink to="/payment">
          <button id="oformit">Design</button>
        </NavLink>
      </div>
    </>
  );
};

export default Cart;
