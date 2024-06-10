import React from "react";

const ProductsCard = ({ info, price, ratings, image }) => {

  return (
    <div>
      <div className="flex flex-col justify-center px-4 py-4 bg-white rounded-lg gap-1">
        <div>
          info Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
          tenetur.
        </div>
        <div>price : 10$</div>
        <div className="flex gap-1">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <div className="flex items-center justify-center">
          <img
            className="object-contain justify-center items-center"
            src="https://picsum.photos/200/300"
            alt="productImage"
          />
        </div>
        <div className="flex justify-center items-center ">
          <button className="bg-orange-400 px-2 rounded-md">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
