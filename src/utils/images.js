import shopping_cart from "../assets/shopping_cart.png";
import laptop from "../assets/laptop.jpg";
import mens_shirt from "../assets/mens-shirt.jpg";
import mens_shoes from "../assets/mens-shoes.jpg";
import mens_watches from "../assets/mens-watches.jpg";
import smartphones from "../assets/smartphones.jpg";
import womens_watches from "../assets/womens-watches.jpg";
import womens_shoes from "../assets/womens-shoes.jpg";
import womens_bag from "../assets/womens-bag.jpg";
import womens_dress from "../assets/womens-dress.jpg";
import womens_jewellery from "../assets/womens-jewellery.jpg";
import groceries from "../assets/groceries.jpg";
import sunglasses from "../assets/sunglasses.jpg";
import perfumes from "../assets/perfumes.jpg";
import motorcycle from "../assets/motorcycle.jpg"
import skincare from "../assets/skincare.jpg";

 
const sliderImgs = [
    {
      images: [
        { src: womens_dress, link: "womens-dresses" },
        { src: womens_shoes, link: "womens-shoes" },
        { src: womens_watches, link: "womens-watches" },
        { src: womens_bag, link: "womens-bags" },
        { src: womens_jewellery, link: "womens-jewellery" }
      ],
    },
    {
      images: [
        { src: mens_shirt, link: "mens-shirts" },
        { src: mens_shoes, link: "mens-shoes" },
        { src: mens_watches, link: "mens-watches" },
        { src: smartphones, link: "smartphones" },
        { src: laptop, link: "laptops" },
      ],
    },
    {
        images: [
          { src: groceries, link: "groceries" },
          { src: sunglasses, link: "sunglasses" },
          { src: perfumes, link: "fragnances" },
          { src: skincare, link: "skincare" },
          { src: motorcycle, link: "motorcycle" },
        ],
      },
  ];
  
export {sliderImgs, shopping_cart};