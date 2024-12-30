import special1 from "../assets/greek salad.jpg";
import special2 from "../assets/bruchetta.svg";
import special3 from "../assets/lemon dessert.jpg";

const images = [special1, special2, special3];

const descriptions = [
  "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  "Our Bruschetta is made from grilled bread that has been smeared with garlic, seasoned with salt and olive oil, and baked golden crispy.",
  "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
];

const prices = ["$12.99", "$5.99", "$5.00"];

const names = ["Greek Salad", "Bruschetta", "Lemon Desert"];

export const specials = [
  {
    image: images[0],
    name: names[0],
    price: prices[0],
    description: descriptions[0],
  },
  {
    image: images[1],
    name: names[1],
    price: prices[1],
    description: descriptions[1],
  },
  {
    image: images[2],
    name: names[2],
    price: prices[2],
    description: descriptions[2],
  },
];