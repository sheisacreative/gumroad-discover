import { Product } from "@/types/product";
import { v4 as uuidv4 } from "uuid";

export const madeForYou: Product[] = [
  {
    id: uuidv4(),
    title: "Procreate Chain and Jewelry Brushes by Vegalia",
    productImage: "/staff-picks/card-1.jpg",
    user: "Vegalia",
    userPhoto: "/staff-picks/profile-01.jpg",
    userLink: "#",
    stars: 5,
    totalReviews: 21,
    price: 12,
  },
  {
    id: uuidv4(),
    title: "Paper Pack",
    productImage: "/staff-picks/card-2.jpg",
    user: "MaxPacks - Brushes for Procreate",
    userPhoto: "/staff-picks/profile-02.jpg",
    userLink: "#",
    stars: 5,
    totalReviews: 125,
    price: 15,
  },
  {
    id: uuidv4(),
    title: "Instagram Close Friends Family",
    productImage: "/staff-picks/card-3.jpg",
    user: "Chris Johnson",
    userPhoto: "/staff-picks/profile-03.jpg",
    userLink: "#",
    stars: 5,
    totalReviews: 231,
    price: 10,
  },
  {
    id: uuidv4(),
    title: "Fangy Business Issue#1 (English)",
    productImage: "/staff-picks/card-4.jpg",
    user: "Labro",
    userPhoto: "/staff-picks/profile-04.jpg",
    userLink: "#",
    stars: 4.9,
    totalReviews: 1,
    price: 0,
  },
];
