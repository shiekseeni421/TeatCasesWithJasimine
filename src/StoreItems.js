import React, { useState } from "react";
import "./App.css";
import { UseCartUpdate } from "./context/ShopingContext";
function StoreItems(props) {
  let { id, Name, Prize, ImgUrl } = props;

  const { getItemQnty, incrementCart, decrementCart, removeCart } =
    UseCartUpdate();
  let stockItem = getItemQnty(id);
  return (
    <>
      <div className="card">
        <img src={ImgUrl} className="imgStyle" alt="shopingImg" />
        <div className="prizeContainer">
          <h1>{Name}</h1>
          <p className="prize">Prize:{Prize}</p>
        </div>
        <div className="button_container">
          {stockItem === 0 ? (
            <button className="addButton" onClick={() => incrementCart(id)}>
              + Add Cart
            </button>
          ) : (
            <div className="d-flex align-items-center flex-column">
              <div className="button_container" style={{ gap: "0.5rem" }}>
                <button className="addButton" onClick={() => incrementCart(id)}>
                  +
                </button>
                <span>{stockItem} Item to add</span>
                <button className="addButton" onClick={() => decrementCart(id)}>
                  -
                </button>
              </div>
              <button className="remove_button" onClick={() => removeCart(id)}>
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default StoreItems;
