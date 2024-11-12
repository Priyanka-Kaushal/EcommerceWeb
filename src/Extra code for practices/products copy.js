import { Card } from "@mui/material";

export default function MainPageItems(props) {
  // const BoyImage= "./BoysDress.jpg";
  // const GirlsImage= "./gilrsDress.jpg";
  // const CollectionImage= "./Collection.jpg";
  // const Sale  = "./sale.jpg";

  return (
    <div>
      <Card>
        <img src={props.image} alt="products" />

        <caption> {props.title} </caption>

        <a href={props.link}>View More</a>
      </Card>

      {/* <Card> */}
      {/* <img src={BoyImage} alt = "BoysImage"/>
<caption> 
Shop for Boys
</caption>
<a href="https://shonaz.in/product-category/boys/"> View More </a> */}
      {/* </Card> */}
      {/* <Card>
<img src= {GirlsImage} alt="girls image"/>
<caption> 
Shop for Girls
</caption>
<a href="https://shonaz.in/product-category/girls/"> View More </a>
</Card> */}

      {/* <Card>
<img src={CollectionImage} alt="Collects image"/>
<caption> 
Shop for Collections
</caption>
<a href="https://shonaz.in/product-category/organic-cotton/"> </a>
</Card>

<Card>
<img src = {Sale}/>
<caption> 
Sale
</caption>
<a href="https://shonaz.in/product-category/organic-cotton/" >View more</a>
</Card> */}
    </div>
  );
}
