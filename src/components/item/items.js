import React from "react";

const Items = (props) => {
  const { items, del, plusMinusHandler } = props;

  let length = items.length;
  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>
          <p className="item_quantity">
            <button
              className="minus"
              onClick={() => plusMinusHandler(item.id, "minus")}
            >
              -
            </button>
            {item?.quantity || 1}
            <button
              className="plus"
              onClick={() => plusMinusHandler(item.id, "plus")}
            >
              +
            </button>
          </p>
          <p>{(item?.quantity || 1) * item.price}</p>
          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Item Price</p>
        <p>Quantity</p>
        <p>Full Price</p>
        <p>Edit</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
