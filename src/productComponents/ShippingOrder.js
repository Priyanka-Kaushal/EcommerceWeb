import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ShippingOrder = () => {
  const navigate = useNavigate();

  const handleReturnToShop = () => {
    navigate("/ProductPage"); // Navigate back to the product page after shipping
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        marginTop: "50px",
      }}
    >
      <Typography variant="h4" align="center" sx={{ marginBottom: "20px" }}>
        Thanks for Your Order!
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" sx={{ marginBottom: "20px" }}>
        Your Order has been successfully processed.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleReturnToShop}
        sx={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Return to Shop
      </Button>
    </Box>
  );
};

export default ShippingOrder;

