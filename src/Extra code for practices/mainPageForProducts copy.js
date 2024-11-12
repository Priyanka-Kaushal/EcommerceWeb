import MainPageItems from "./products";

export default function MainPageForProducts() {
  const products = [
    {
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933",
      title: "Shop for Boys",
      link: "https://shonaz.in/product-category/boys/",
    },

    {
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747",
      title: "Shop for Girls",
      link: "https://shonaz.in/product-category/girls/",
    },
    {
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437",
      title: "Shop from organic Collection",
      link: "https://shonaz.in/product-category/organic-cotton/",
    },
  ];

  return (
    <div>
      <header>{/* Content of the header will go here */}</header>
      <div className="App">
        {products.map((product, index) => (
          <MainPageItems
            key={index}
            image={product.image}
            title={product.title}
            link={product.link}
            alt={product.alt}
          />
        ))}
      </div>
    </div>
  );
}
