// import React from "react";
import { Box, Button, Typography } from "@mui/material";
const QuantitySelector = ({
  quantity,
  maxQuantity,
  onIncrement,
  onDecrement,
}) => {
  return (
    <>
      <Box variant="body1" sx={{ fontWeight: "bold", mx: 2 }}>
        <Typography sx={{ fontWeight: "bold", mx: 2 }}>Quantity:</Typography>

        <Button
          variant="outlined"
          size="small"
          onClick={() => onDecrement()}
          className="decrementButton"
          sx={{
            fontWeight: "bold",

            margin: "5px",
            mx: 2,
            minWidth: "40px",
            padding: "4px 8px",
          }}
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            if (quantity < maxQuantity) {
              onIncrement();
            } else {
              alert("Cannot select more than the available quantity");
            }
          }}
          className="incrementButton"
          sx={{
            mx: 2,
            minWidth: "40px",
            padding: "4px 8px",
          }}
        >
          +
        </Button>
      </Box>
    </>
  );
};

export default QuantitySelector;
