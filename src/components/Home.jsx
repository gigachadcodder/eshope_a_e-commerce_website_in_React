import React from "react";
import ProductsCard from "./ProductsCard";

const Home = () => {
  return (
    <div className=" flex flex-col gap-2 px-2 items-center justify-center">
      <div>
        <img className="object-cover h-full w-full" src="https://picsum.photos/200/300" alt="" />
      </div>
        <div className="flex gap-2">
          <ProductsCard ratings={2}/>
          <ProductsCard ratings={3}/>
        </div>
        <div className="flex gap-2">
          <ProductsCard ratings={5}/>
          <ProductsCard />
          <ProductsCard />
        </div>
        <div className="flex gap-2">
          <ProductsCard />
      </div>
    </div>
  );
};

export default Home;
