import post_1_img from "./../../assets/Holiday/post-1.jpg";
import post_2_img from "./../../assets/Holiday/post-2.jpg";
import post_3_img from "./../../assets/Holiday/post-3.jpg";
import post_4_img from "./../../assets/Holiday/post-4.jpg";
import post_5_img from "./../../assets/Holiday/post-5.jpg";
import post_6_img from "./../../assets/Holiday/post-6.jpg";

const Holiday_cards = [
  {
    id: Math.random(),
    name: "Holiday Joy",
    type: "in lifestyle",
    img: `${post_1_img}`,
  },
  {
    id: Math.random(),
    name: "Nepenthe, For Real",
    type: "in health",
    img: `${post_2_img}`,
  },
  {
    id: Math.random(),
    name: "How To Cut Tomato In Perfect Slices, Easy",
    type: "in health",
    img: `${post_3_img}`,
  },
  {
    id: Math.random(),
    name: "Passion in Bangkok",
    type: "in travel",
    img: `${post_4_img}`,
  },
  {
    id: Math.random(),
    name: "Experience Impossible",
    type: "in travel",
    img: `${post_5_img}`,
  },
  {
    id: Math.random(),
    name: "Macro At Its Best",
    type: "in photography",
    img: `${post_6_img}`,
  },
];

export default Holiday_cards;
