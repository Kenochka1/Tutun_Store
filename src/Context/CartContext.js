import React, { createContext, useReducer } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountTabaccosCart,
} from "../helpers/cartFunctions";

export const cartContext = createContext();

const INIT_STATE = {
  cart: {},
  cartLength: getCountTabaccosCart(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addTabaccoToCart = (tabaccoItem) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        tabaccos: [],
        totalPrice: 0,
      };
    }

    let newTabacco = {
      item: tabaccoItem,
      count: 1,
      subPrice: 0,
    };

    let filterCart = cart.tabaccos.filter((elem) => {
      return elem.item.id === tabaccoItem.id;
    });

    if (filterCart.length > 0) {
      cart.tabaccos = cart.tabaccos.filter((elem) => {
        return elem.item.id !== tabaccoItem.id;
      });
    } else {
      cart.tabaccos.push(newTabacco);
    }

    newTabacco.subPrice = calcSubPrice(newTabacco);
    cart.totalPrice = calcTotalPrice(cart.tabaccos);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.tabaccos.length,
    });
  };

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        tabaccos: [],
      };
    }

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  const deleteCartTabacco = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.tabaccos = cart.tabaccos.filter((elem) => elem.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  function changeTabaccoCount(id, count) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.tabaccos = cart.tabaccos.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.tabaccos);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        cartLenght: state.cartLength,
        addTabaccoToCart,
        getCart,
        deleteCartTabacco,
        changeTabaccoCount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
