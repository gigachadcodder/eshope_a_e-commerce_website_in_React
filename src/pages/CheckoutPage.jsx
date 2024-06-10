import React from "react";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import ProductsCard from "../components/ProductsCard";
import Checkout from "../components/Checkout";

const CheckoutPage = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between py-3 px-4">
        {" "}
        <img
          src="https://picsum.photos/200/300"
          alt=""
        />
        <Checkout />
      </div>
      <div className="flex px-2 py-4 font-bold ">
        <div>
          Your Shopping Basket
          <CheckoutProduct
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, amet?"
            price={11.96}
            ratings={4}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CheckoutPage;
