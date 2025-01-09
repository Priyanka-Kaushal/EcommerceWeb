import React, { Component } from "react";
import { Box, Card, Button, Typography, CardContent, CardActions } from "@mui/material";
import { withRouter } from "../../components/Hoc/withRouter";
import { connect } from "react-redux";
import { addToCart } from "../../prodRedux/action/cartAction";

class ViewDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      selectedColor: "",
      selectedSize: "",
      quantity: 1,
      loading: true,
    };
  }

  async componentDidMount() {
    const { id } = this.props.params;

    try {
      const response = await import("../../assets/data/jsonFileProducts"); // Load product data
      const product = response.default.find((item) => item.id === parseInt(id));
      this.setState({ product, loading: false });
    } catch (error) {
      console.error("Error fetching product data:", error);
      this.setState({ loading: false });
    }
  }

  handleColorSelect = (color) => {
    this.setState({ selectedColor: color });
  };

  handleSizeSelect = (size) => {
    this.setState({ selectedSize: size });
  };

  handleIncrement = () => {
    const { quantity, product } = this.state;
    if (quantity < product.quantity) {
      this.setState({ quantity: quantity + 1 });
    } else {}
  };

  handleDecrement = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  };

  handleAddToCart = () => {
    const { product, selectedSize, selectedColor, quantity } = this.state;

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
    

    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = [...existingCartItems, cartItem];
  
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); 

    
    this.props.addToCart(cartItem);
    alert("Item added to cart!");

    this.props.navigate("/cart");
  };

  render() {
    const { product, loading, selectedColor, selectedSize, quantity } = this.state;

    if (loading) {
      return (
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6">Loading product details...</Typography>
        </Box>
      );
    }

    if (!product) {
      return (
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6">Product not found!</Typography>
        </Box>
      );
    }

    return (
      <Box sx={{ paddingBottom: "100px", maxWidth: 500, margin: "auto" }}>
        <Card sx={{ maxWidth: 500, margin: "auto", paddingBottom: "20px" }}>
          <CardContent>
            <Typography variant="h4">{product.productName}</Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              {product.description}
            </Typography>
            <Typography variant="h5" sx={{ marginTop: 2 }}>
              Price: ₹{product.price}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              Rating: {product.rating} ★
            </Typography>

            {/* Colors Section */}
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold", mx: 2 }}>
                Color:
              </Typography>
              {product.colors.map((color, index) => (
                <Button
                  key={index}
                  onClick={() => this.handleColorSelect(color)}
                  sx={{
                    mx: 1,
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    border:
                      selectedColor === color
                        ? "2px solid #000"
                        : "1px solid #ccc",
                  }}
                />
              ))}
            </Box>

            {/* Sizes Section */}
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold", mx: 2 }}>
                Size:
              </Typography>
              {product.sizes.map((size, index) => (
                <Button
                  key={index}
                  onClick={() => this.handleSizeSelect(size)}
                  variant={selectedSize === size ? "contained" : "outlined"}
                  color={selectedSize === size ? "primary" : "default"}
                  sx={{
                    margin: "5px",
                    minWidth: "50px",
                    fontWeight: "bold",
                  }}
                >
                  {size}
                </Button>
              ))}
            </Box>

            {/* Quantity Selector */}
            <Box variant="body1" sx={{ fontWeight: "bold", mx: 2 }}>
            <Typography sx={{ fontWeight: "bold", mx: 2 }}>Quantity:</Typography>
              <Button
              size="small"
                onClick={this.handleDecrement}
                disabled={quantity <= 1}
                variant="outlined"
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
              size="small"
                onClick={this.handleIncrement}
                disabled={quantity >= product.quantity}
                variant="outlined"
                sx={{
                  fontWeight: "bold",
      
                  margin: "5px",
                  mx: 2,
                  minWidth: "40px",
                  padding: "4px 8px",
                }}
              >
                +
              </Button>
            </Box>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleAddToCart}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(ViewDetails));
