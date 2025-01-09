import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  emailID,
  addressUser,
  userLocation_area,
  address_post_code,
  userInfoeSave,
  nameUSer,
  last_name,
  userCity,
} from "../prodRedux/action/CheckOutAction";

import {
  Box,
  FormControl,
  Typography,
  Input,
  Button,
  // Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state);
  const navigate = useNavigate();

  const [email, setEmail] = useState(userState.email || "");
  const [address, setAddress] = useState(userState.address || "");
  const [postalCode, setPostalCode] = useState(userState.postalCode || "");
  const [userNameValue, setUserName] = useState(userState.name || "");
  const [lastNameValue, setLastName] = useState(userState.lastName || "");
  const [userArea, setUserArea] = useState(userState.area || "");
  const [user_City, setUser_City] = useState(userState.city || "");

  const [savedInfo, setSavedInfo] = useState(null);

  const handleSaveInfo = useCallback(
    (event) => {
      event.preventDefault();

      dispatch(emailID(email));
      dispatch(addressUser(address));
      dispatch(nameUSer(userNameValue));
      dispatch(last_name(lastNameValue));
      dispatch(userLocation_area(userArea));
      dispatch(address_post_code(postalCode));
      dispatch(userCity(user_City));
      dispatch(userInfoeSave(true));

      setSavedInfo({
        email,
        address,
        postalCode,
        name: userNameValue,
        lastName: lastNameValue,
        area: userArea,
        city: user_City,
      });

      alert("Information Saved!");
    },
    [
      email,
      address,
      postalCode,
      userNameValue,
      lastNameValue,
      userArea,
      user_City,
      dispatch,
    ]
  );

  return (
    <>
      <Box sx={{ maxWidth: "600px", margin: "0 auto", padding: "2px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
          Checkout
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Fill your Adress for checkout </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="form" onSubmit={handleSaveInfo} fullWidth>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Contact Information
              </Typography>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                sx={{ mb: 1 }}
              />

              <Typography variant="h6" sx={{ mb: 2 }}>
                Shipping
              </Typography>

              <Box sx={{ display: "flex", gap: "16px" }}>
                <Input
                  type="text"
                  placeholder="Name"
                  value={userNameValue}
                  onChange={(e) => setUserName(e.target.value)}
                  sx={{ flex: 1 }}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={lastNameValue}
                  onChange={(e) => setLastName(e.target.value)}
                  sx={{ flex: 1 }}
                />
              </Box>

              <Input
                sx={{ mt: 1 }}
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />

              <Input
                sx={{ mt: 1 }}
                type="text"
                placeholder="Apartment, suite, etc."
                value={userArea}
                onChange={(e) => setUserArea(e.target.value)}
                required
              />

              <Box sx={{ display: "flex", gap: "16px" }}>
                <Input
                  sx={{ flex: 1 }}
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                />
                <Input
                  sx={{ flex: 1 }}
                  type="text"
                  placeholder="City"
                  value={user_City}
                  onChange={(e) => setUser_City(e.target.value)}
                  required
                />
              </Box>

              <Button
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "16px",
                  textTransform: "none",
                  borderRadius: "8px",
                  mt: 2,
                }}
                type="submit"
                variant="contained"
              >
                Save Information
              </Button>
            </FormControl>
          </AccordionDetails>
        </Accordion>

        {savedInfo && (
          <Box
            sx={{ p: 3, border: "1px solid #ccc", borderRadius: "8px", mt: 4 }}
          >
            <Typography variant="h6">Saved Information:</Typography>
            <Typography>Email: {savedInfo.email}</Typography>
            <Typography>Address: {savedInfo.address}</Typography>
            <Typography>Postal Code: {savedInfo.postalCode}</Typography>
            <Typography>
              Name: {savedInfo.name} {savedInfo.lastName}
            </Typography>
            <Typography>Area: {savedInfo.area}</Typography>
            <Typography>City: {savedInfo.city}</Typography>
          </Box>
        )}
        {/* <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Checkbox />
                <Typography variant="body2">Select Adress </Typography>
              </Box>  */}
      </Box>

      <Box
        sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 3, mt: 2 }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/ShippingOrder")}
        >
          Shipping Order summary
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/cart")}
        >
          Cart Page
        </Button>
      </Box>
    </>
  );
};

export default CheckoutPage;
