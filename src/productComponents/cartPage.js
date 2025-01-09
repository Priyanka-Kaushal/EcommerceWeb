import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../prodRedux/action/cartAction";
import { useNavigate } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import { Button, Typography, Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
    setTotalAmount(JSON.parse(localStorage.getItem("cartTotalAmount")) || 0);
  }, [isRefresh]);

  // useEffect(() => {
  //   const cartItemsFromStorage = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   setCartItems(cartItemsFromStorage);
    
  //   const totalAmountFromStorage = JSON.parse(localStorage.getItem("cartTotalAmount")) || 0;
  //   setTotalAmount(totalAmountFromStorage);
  // }, [isRefresh]);  

  if (cartItems.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" color="grey">
          Your cart is empty.
        </Typography>
      </Box>
    );
  }

  return (
    <Box  align = "center"
      sx={{
        padding: 3,
        maxWidth: "1200px",
        margin: "auto",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Total Amount: ₹{totalAmount.toFixed(2)}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 2 }}>
        FREE SHIPPING AND RETURN
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/productPage")}
        >
          Continue Shopping
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/CheckoutPage")}
        >
          Checkout Page
        </Button>
      </Box>

      <TableContainer component={Paper} sx ={{mb: '80px'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Variant</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img
                    src={item.image[0]}
                    alt={item.productName}
                    style={{ width: "80px", height: "auto", cursor: "pointer" }}
                    onClick={() => navigate(`/product/${item.id}`)}
                  />
                </TableCell>
                <TableCell>{item.productName}</TableCell>
                <TableCell>₹{item.price.toFixed(2)}</TableCell>
                <TableCell>
                  <QuantitySelector
                    quantity={item.selectedQuatity}
                    maxQuantity={item.quantity}
                    onIncrement={() => {
                      dispatch(updateQuantity(item.id, item.selectedQuatity + 1));
                      setIsRefresh((prev) => !prev);
                    }}
                    onDecrement={() => {
                      dispatch(
                        updateQuantity(
                          item.id,
                          Math.max(1, item.selectedQuatity - 1)
                        )
                      );
                      setIsRefresh((prev) => !prev);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "inline-block",
                      width: 16,
                      height: 16,
                      backgroundColor: item.selectedColor,
                      borderRadius: "50%",
                      marginRight: 1,
                    }}
                  />
                  {item.selectedSize}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      dispatch(removeFromCart(item.id));
                      setIsRefresh((prev) => !prev);
                    }}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CartPage;

