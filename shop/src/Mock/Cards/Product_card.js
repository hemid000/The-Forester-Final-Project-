import product_img_1 from "./../../assets/Product/product_img-1.jpg";
import product_img_2 from "./../../assets/Product/product_img-2.jpg";
import product_img_3 from "./../../assets/Product/product_img-3.jpg";
import product_img_4 from "./../../assets/Product/product_img-4.jpg";
import product_img_5 from "./../../assets/Product/product_img-5.jpg";
import product_img_6 from "./../../assets/Product/product_img-6.jpg";

const Product_card = [
  {
    id: Math.random(),
    name: "VIRGIN OLIVE OIL",
    deleting: "25.00",
    current: "15.00",
    img: `${product_img_6}`,
  },
  {
    id: Math.random(),
    name: "BLACKBERRY JAM",
    deleting: "20.00",
    current: "10.00",
    img: `${product_img_1}`,
  },
  {
    id: Math.random(),
    name: "CUCUMBER CONSERVE",
    deleting: "50.00",
    current: "35.00",
    img: `${product_img_2}`,
  },
  {
    id: Math.random(),
    name: "LIGHT OLIVE OIL",
    deleting: "30.00",
    current: "20.00",
    img: `${product_img_3}`,
  },
  {
    id: Math.random(),
    name: "PEAS CONSERVE",
    deleting: "40.00",
    current: "30.00",
    img: `${product_img_4}`,
  },
  {
    id: Math.random(),
    name: "TOMATOES CONSERVE",
    deleting: "40.00",
    current: "25.00",
    img: `${product_img_5}`,
  },
];

export default Product_card;
