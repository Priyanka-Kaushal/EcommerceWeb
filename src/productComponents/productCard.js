import React from "react";
import "../styles/shoppingCart.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
} from "@mui/material";

function ProductCard({ productsDescription }) {
  return (
   <>
   <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      gap= "2px"
      padding = "5px"
      height = "120px"
      maxWidth="80%"
      marginInline='auto'
    >

      {productsDescription.map((product) => (
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none" }}
          key={product.id}
        >
          <Card sx={{ maxWidth: 345, margin: "20px auto" }} className="cardStyle">
            <Typography className="catName cardContent" variant="h6" gutterBottom>
              {product.category}
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image={product.image[0]}
              alt={product.productName}
              className="productImage"
            />
            <CardContent>
              <Typography className="prodName cardContent" variant="h5">
                {product.productName}
              </Typography>
              <Typography className="discription-txt cardContent" variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography className="price-txt cardContent" variant="body1" color="text.primary">
                Price: {product.price}
              </Typography>
              <Typography className="rating-num cardContent" variant="body2" color="text.secondary">
                Rating: {product.rating}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography className="catName cardContent viewDetails" variant="button" color="primary">
                View Details
              </Typography>
            </CardActions>
          </Card>
        </Link>
      ))}
      </Box>
   </>
  );
}

export default ProductCard;
