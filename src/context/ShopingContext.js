import React, { createContext, useContext, useState } from "react";

const ShopingCartContext = createContext({});
const UpdateCartContext = createContext({});

export function UseShopingContext() {
  return useContext(ShopingCartContext);
}
export function UseCartUpdate() {
  return useContext(UpdateCartContext);
}

export function ShopingProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  function getItemQnty(id) {
    let exits = cartItem.find((item) => item.id === id);
    if (exits) {
      return exits.quantity;
    } else {
      return 0;
    }
  }

  function incrementCart(id) {
    setCartItem((cartItem) => {
      if (cartItem.find((item) => item.id === id) == null) {
        return [...cartItem, { id, quantity: 1 }];
      } else {
        cartItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log(cartItem);
  }

  function decrementCart(id) {
    setCartItem((cartItem) => {
      let exits = cartItem.find((item) => item.id === id);
      if (exits && exits.quantity === 1) {
        return cartItem.filter((item) => item.id !== id);
      } else {
        cartItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeCart(id) {
    setCartItem((cartItem) => {
      return cartItem.filter((item) => item.id !== id);
    });
  }
  return (
    <ShopingCartContext.Provider
      value={{
        cartItem,
      }}
    >
      <UpdateCartContext.Provider
        value={{ getItemQnty, incrementCart, decrementCart, removeCart }}
      >
        {children}
      </UpdateCartContext.Provider>
    </ShopingCartContext.Provider>
  );
}
