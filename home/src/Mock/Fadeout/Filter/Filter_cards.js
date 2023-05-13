import print1_img from "./../../../assets/Fadeout/Filter/Print/print-1.jpg";
import print2_img from "./../../../assets/Fadeout/Filter/Print/print-2.jpg";
import branding1_img from "./../../../assets/Fadeout/Filter/Branding/branding-1.jpg";
import branding2_img from "./../../../assets/Fadeout/Filter/Branding/branding-2.jpg";
import digital1_img from "./../../../assets/Fadeout/Filter/Digital/digital-1.jpg";
import branding_print from "./../../../assets/Fadeout/Filter/branding-print.jpg";

const Filter_cards = [
  {
    id: Math.random(),
    name: "Print",
    desc: "project six",
    img: `${print1_img}`,
    category: "print",
  },
  {
    id: Math.random(),
    name: "Digital",
    desc: "project five",
    img: `${digital1_img}`,
    category: "digital",
  },
  {
    id: Math.random(),
    name: "Branding",
    desc: "project one",
    img: `${branding1_img}`,
    category: "branding",
  },
  {
    id: Math.random(),
    name: "Branding - Print",
    desc: "project two",
    img: `${branding_print}`,
    category: "branding",
  },
  {
    id: Math.random(),
    name: "Print",
    desc: "watch on youtube",
    img: `${print2_img}`,
    category: "print",
  },
  {
    id: Math.random(),
    name: "Branding",
    desc: "watch on vimeo",
    img: `${branding2_img}`,
    category: "branding",
  },
];

export default Filter_cards;
