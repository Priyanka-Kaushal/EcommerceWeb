import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import productsDescription from "../assets/data/jsonFileProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../prodRedux/action/cartAction"; 
import QuantitySelector from "./QuantitySelector";
import CardActions from "@mui/material/CardActions";
import "../styles/ProductsDesign.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";

const ProductOverview = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

 

  useEffect(() => {
    const currentProduct = productsDescription.find(
      (prod) => prod.id === parseInt(id, 10)
    );

    if (currentProduct) {
      setProduct(currentProduct);
    } else {
      console.log("Product not found for ID:", id);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select both size and color");
      return;
    }

    const cartItem = {
      ...product,
      selectedQuatity: quantity,
      selectedSize,
      selectedColor,
    };

    dispatch(addToCart(cartItem));
    navigate("/cart");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ paddingBottom: "100px", maxWidth: 500, margin: "auto"}}>
      {/* <div sx={{  }}> */}
        <Card sx={{ maxWidth: 500, margin: "auto", paddingBottom: "20px" }}>
          <div className="images">
            {Array.isArray(product.image) ? (
              <div className="image-container">
                {product.image.map((img, items) => (
                  <CardMedia
                    key={items}
                    component="img"
                    image={img}
                    alt={`${product.productName}-${items}`}
                    className={`image-view img-${items}`}
                    sx={{ marginBottom: "10px" }}
                  />
                ))}
              </div>
            ) : (
              <CardMedia
                component="img"
                image={product.image}
                alt={product.productName}
              />
            )}
          </div>
          <CardContent>
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              {product.productName}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              Price: {product.price || "Price not available"}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {product.description}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              Rating:{product.rating || "Not rated"}
            </Typography>
          </CardContent>

          <Box className="selection">
            <Typography variant="body1" sx={{ fontWeight: "bold", mx: 2 }}>
              Color:
            </Typography>

            {product.colors.map((color, index) => (
              <Button
                key={index}
                onClick={() => setSelectedColor(color)}
                sx={{
                  mx: 8,
                  width: "80px",
                  height: "50px",
                  backgroundColor: color,
                  margin: "5px",
                  padding: "10px",
                  border:
                    selectedColor === color
                      ? "2px solid #000"
                      : "1px solid #ccc",
                }}
              >
                {selectedColor === color ? " " : ""}
              </Button>
            ))}

            <Box sx={{ display: "flex" }}>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold", mx: 2 }}>
                  Size:
                </Typography>

                <Box>
                  {product.sizes.map((size, index) => (
                    <Button
                      key={index}
                      onClick={() => setSelectedSize(size)}
                      variant={selectedSize === size ? "contained" : "outlined"}
                      color={selectedSize === size ? "primary" : "default"}
                      sx={{
                        margin: "3px",
                        padding: "10px",
                        minWidth: "50px",
                        fontWeight: "bold",
                        borderColor:
                          selectedSize === size ? "primary.main" : "grey.400",
                        "&:hover": {
                          borderColor: "primary.main",
                          backgroundColor:
                            selectedSize === size
                              ? "primary.dark"
                              : "action.hover",
                        },
                      }}
                    >
                      {size}
                    </Button>
                  ))}
                </Box>
              </Box>

             
              <QuantitySelector
                quantity={quantity}
                maxQuantity={product.quantity}
                onIncrement={() => setQuantity((prev) => prev + 1)}
                onDecrement={() => setQuantity((prev) => Math.max(1, prev - 1))}
              />
            </Box>

           
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>

              <Link
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  backgroundColor: "#1976d2",
                  color: "white",
                  borderRadius: "4px",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                to="/ProductPage"
              >
                Back to Products
              </Link>
            </CardActions>
          </Box>
        </Card>
      </div>
    // </div>
  );
};

export default ProductOverview;
