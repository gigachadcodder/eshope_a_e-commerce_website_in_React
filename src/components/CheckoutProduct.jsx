import React from "react";

const CheckoutProduct = ({ title, price, ratings }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-white">
      <div className="flex gap-4">
        <div>
          <img src="https://picsum.photos/200/300" alt="productImage" className="w-40 h-40 object-cover" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="font-bold text-lg mb-2">
            {title}
          </div>
          <div className="text-gray-700 mb-2">Price: ${price}</div>
          <div className="flex items-center mb-2">
            Ratings: 
            {Array(ratings)
              .fill()
              .map((_, i) => (
                <span key={i} className="text-yellow-500">⭐️</span>
              ))}
          </div>
          <div><button className="px-2 bg-orange-400 rounded-md">Remove from cart</button></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
