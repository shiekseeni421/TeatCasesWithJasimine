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

  function decrementCart(id) {
    // setCartItem((cartItem) => {
    //   let exits = cartItem.find((item) => item.id === id);
    //   if (exits && exits.quantity === 1) {
    //     return cartItem.filter((item) => item.id !== id);
    //   } else {
    //     cartItem.map((item) => {
    //       if (item.id === id) {
    //         return { ...item, quantity: item.quantity - 1 };
    //       } else {
    //         return item;
    //       }
    //     });
    //   }
    // });

    let exist = cartItem.find((item) => item.id === id);
    if (exist.quantity === 1) {
      setCartItem(cartItem.filter((item) => item.id !== id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === id ? { ...exist, quantity: exist.quantity - 1 } : item
        )
      );
    }
  }

  function removeCart(id) {
    setCartItem((cartItem) => {
      return cartItem.filter((item) => item.id !== id);
    });
  }

  function onAdd(id) {
    const exist = cartItem.find((item) => item.id === id);
    if (exist) {
      setCartItem(
        cartItem.map((item) =>
          item.id === id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItem([...cartItem, { id, quantity: 1 }]);
    }
  }
  return (
    <ShopingCartContext.Provider
      value={{
        cartItem,
      }}
    >
      <UpdateCartContext.Provider
        value={{ getItemQnty, decrementCart, removeCart, onAdd }}
      >
        {children}
      </UpdateCartContext.Provider>
    </ShopingCartContext.Provider>
  );
}
