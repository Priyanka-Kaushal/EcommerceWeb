import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Link,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const BoysOrganicCollection = ({ BoysCollection }) => {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap="2px"
        padding="5px"
        height="100px"
        maxWidth="80%"
        marginInline="auto"
      >
        {BoysCollection[0].map((boysProduct) => (
          <Link
            to={`/boysProduct/${boysProduct.id}`}
            style={{ textDecoration: "none" }}
            key={boysProduct.id}
          >
            <Card
              sx={{ maxWidth: 345, margin: "80px auto" }}
              className="cardStyle"
            >
              <CardMedia
                component="img"
                height="200"
                alt={boysProduct.name}
                image={boysProduct.image[0]}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {boysProduct.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {boysProduct.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {boysProduct.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {boysProduct.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button>View Details</Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default BoysOrganicCollection;
