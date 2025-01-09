import React, { Component } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
// import { useContext } from "react";
import TitleContext from "../productContext";

// import firstDressPic from "../../assets/images/product-overview-3-1.png";
// import secDressPic from "../../assets/images/product-overview-3-2.png";

// import productsDescription from '../../assets/data/jsonFileProducts';

class OrganicGirlsCloths extends Component {

  // class componentis connected with the react component to a context. 
  static contextType = TitleContext;
  // Initializing the cloths array
  //   girlsCloths = [
  //     {
  //       id: 1,
  //       category: "Apparel",
  //       image: [firstDressPic], // Using the imported image here
  //       productName: "Venus Dress",
  //       description: "Elegant black dress with a stylish design.",
  //       price: 449,
  //       rating: 5,
  //       colors: ["#4F4F4F", "#32CD32", "#00CED1"],
  //       sizes: ["XS", "S", "M", "L", "XL"],
  //       quantity: 12,
  //     },
  //     {
  //       id: 2,
  //       category: "Apparel",
  //       image: [secDressPic], // Using the imported image here
  //       productName: "Bianca Dress",
  //       description: "A chic and versatile dress.",
  //       price: 399,
  //       rating: 4.8,
  //       colors: ["#4F4F4F", "#32CD32", "#00CED1"],
  //       sizes: ["XS", "S", "M", "L", "XL"],
  //       quantity: 10,
  //     },
  //   ];

  //   constructor() {
  //     super();
  //     console.log("Hello, I am the constructor for girls' clothes collection!");
  //     this.state = {
  //     //   girlsCloths: this.girlsCloths, // Set initial state with cloths data

  //     girlsCloths: productsDescription,
  //       loading: false,
  //     };
  //   }

  //   m using here didmount method

  constructor() {
    super();
    this.state = {
      girlsCloths: [], // Initialize the girlsCloths array as an empty array
      loading: true, // Set loading to true initially
    };
  }

  async componentDidMount() {
    try {
      // Dynamically import the JSON file
      const response = await import("../../assets/data/jsonFileProducts");
      this.setState({ girlsCloths: response.default, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { girlsCloths, loading } = this.state;
    const { titles } = this.context;  
    // access the value provided by a context through this.context method

    // Render loading state until the data is fetched
    if (loading) {
      return <Typography variant="h6">Loading...</Typography>;
    }

    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "space-between",
          padding: "5px",
          height: "100px",
          maxWidth: "80%",
          marginInline: "auto",
        }}
      >
        <Box
          sx={{
            background: "#F5F5F5",
            width: "100%",
            height: "50px",
            // mb: "80px",
          }}
        >
          <Typography variant="h4" sx={{ ml: 2 }}>
          {titles.girlsCollectionTitle}
          
          {/* Girls Collection */}
          </Typography>
        </Box>

        {girlsCloths.map((item) => (
          <Card key={item.id} sx={{ width: 300 }}>
            <CardMedia
              component="img"
              alt={item.productName}
              height="200"
              image={item.image[0]} // Use the first image from the array
            />
            <CardContent>
              <Typography variant="h6">{item.productName}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description.slice(0, 20)}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
                ₹{item.price}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Rating: {item.rating} ⭐
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/view-details/${item.id}`}>View Details</Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    );
  }
}

export default OrganicGirlsCloths;
