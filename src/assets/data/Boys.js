import Boy1 from "../images/Boy1.jpg";
import Boy2 from "../images/Boy2.jpg";




const BoysCollection = [
    [
        {
          id: 1,
          image : [Boy1, Boy2],
          category: "T-Shirt",
          name: "Casual T-Shirt",
          description: "Comfortable cotton t-shirt with graphic print.",
          price: 499,
          size: ["S", "M", "L", "XL"],
          color: ["Blue", "Red", "Green"],
          material: "100% Cotton",
          brand: "KidStyle",
          availability: true
        },
        {
          id: 2,
          image : [Boy1, Boy2],
          category: "T-Shirt",
          name: "Denim Jeans",
          description: "Stylish slim-fit denim jeans with stretch fabric.",
          price: 999,
          size: [24, 26, 28, 30],
          color: ["Blue", "Black"],
          material: "Denim",
          brand: "CoolKids",
          availability: true
        },
        {
          id: 3,
          image : [Boy1, Boy2],
          category: "T-Shirt",
          name: "Formal Shirt",
          description: "Classic white shirt, perfect for formal occasions.",
          price: 799,
          size: ["S", "M", "L", "XL"],
          color: ["White", "Light Blue"],
          material: "Polyester Blend",
          brand: "SmartWear",
          availability: false
        },
        {
          id: 4,
          image : [Boy1, Boy2],
          category: "T-Shirt",
          name: "Winter Jacket",
          description: "Warm padded jacket with a hood.",
          price: 1999,
          size: ["M", "L", "XL"],
          color: ["Navy Blue", "Gray"],
          material: "Polyester",
          brand: "FrostyFit",
          availability: true
        },
        {
          id: 5,
          image : [Boy1, Boy2],
          category: "T-Shirt",
          name: "Sports Shorts",
          description: "Breathable sports shorts for outdoor activities.",
          price: 399,
           size: ["S", "M", "L"],
          color: ["Black", "Gray", "Blue"],
          material: "Polyester",
          brand: "ActiveWear",
         availability: true
        },
        {
          id: 6,
          image : [Boy1, Boy2],
          category: "T-Shirt",
          name: "Sports Shorts",
          description: "Breathable sports shorts for outdoor activities.",
          price: 399,
           size: ["S", "M", "L"],
          color: ["Black", "Gray", "Blue"],
          material: "Polyester",
          brand: "ActiveWear",
         availability: true
        }
      ]
       
]

export default BoysCollection;