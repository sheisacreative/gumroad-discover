import { Product } from "@/types/product";
import { v4 as uuidv4 } from "uuid";

export const fromThisCreator: Product[] = [
  {
    id: uuidv4(),
    title: "The Pink Book",
    productImage: "/this-creator/card-1.jpg",
    user: "The Pink Girl",
    userPhoto: "/this-creator/profile.jpg",
    userLink: "#",
    stars: 5,
    totalReviews: 125,
    price: 15,
  },
  {
    id: uuidv4(),
    title: "Pink Flamingos Photo LUT",
    productImage: "/this-creator/card-2.jpg",
    user: "The Pink Girl",
    userPhoto: "/this-creator/profile.jpg",
    userLink: "#",
    stars: 4.9,
    totalReviews: 323,
    price: 5,
  },
  {
    id: uuidv4(),
    title: "The Pink Pink Poster",
    productImage: "/this-creator/card-3.jpg",
    user: "The Pink Girl",
    userPhoto: "/this-creator/profile.jpg",
    userLink: "#",
    stars: 5,
    totalReviews: 12,
    price: 12,
  },
];
