import React from "react";

const Subtotal = () => {
  return (
    <div>
      <p>
        Subtotal (0 items): <strong>$0</strong>
      </p>
      <small>
        <input type="checkbox" />
        This order contains a gift
      </small>
    </div>
  );
};

export default Subtotal;
