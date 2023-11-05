/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component";
import { PRODUCTS } from "./Products";
import { PRODUCTS1 } from "./Products";
import { ShopContext } from "./ShopContext";
import Prod from "./Prod";

const Shopitems = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => (
          <Prod key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default Shopitems;
