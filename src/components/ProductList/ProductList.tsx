import React from 'react';
import {ProductItem} from "../ProductItem/ProductItem";
import {useSelector} from "react-redux";
import {productItem} from "../../redux/redusers/productReducer";


export const ProductList = () => {
  // @ts-ignore
  const {products, filteredProducts} = useSelector((state) => state.products);

  return (
    <>
      {
        filteredProducts.length ?
          filteredProducts.map((item: productItem) => <ProductItem key={item.uid} {...item}/>) :
          products.map((item: productItem) => <ProductItem key={item.uid} {...item}/>)
      }
    </>
  );
};