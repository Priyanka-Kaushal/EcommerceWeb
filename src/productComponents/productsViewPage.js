// import React from "react";
import ProductCard from "./productCard";
import productsDescription from "../assets/data/jsonFileProducts";
import TitleContext from '../productComponents/productContext';
// import {useContext} from 'react';

import { Box, Typography } from "@mui/material";
import { useContext } from "react";

function ProductViewPage() {
  console.log(productsDescription);

  const {titles} = useContext(TitleContext);
  return (
    <>
      <Box sx={{ background: "#F5F5F5", width: "100%" }}>
        <Typography variant="h4" sx={{ ml: 2 }}>
          {titles.mainTitle}

          {/* subTitles */}
        </Typography>

        <Typography variant="h6" sx={{ color: "grey", ml: 2 }}>
          {/* Exclusive Selection */}

          {titles.subTitles}
        </Typography>
      </Box>

      <ProductCard productsDescription={productsDescription} />
    </>
  );
}

export default ProductViewPage;
