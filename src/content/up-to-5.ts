import { Product } from "@/types/product";
import { v4 as uuidv4 } from "uuid";

export const upTo5: Product[] = [
  {
    id: uuidv4(),
    title: "Prolost Apple Log LUTs",
    productImage: "/up-to-5/card-1.jpg",
    user: "Prolost",
    userPhoto: "/up-to-5/profile-01.jpg",
    userLink: "#",
    stars: 5,
    totalReviews: 29,
    price: 0,
  },
  {
    id: uuidv4(),
    title: "The Sampler MaxPack - Brushes for Procreate",
    productImage: "/up-to-5/card-2.jpg",
    user: "MaxPacks - Brushes for Procreate",
    userPhoto: "/up-to-5/profile-02.jpg",
    userLink: "#",
    stars: 5,
    totalReviews: 125,
    price: 15,
  },
  {
    id: uuidv4(),
    title: "Stock Market Gems",
    productImage: "/up-to-5/card-3.jpg",
    user: "Chris Johnson",
    userPhoto: "/up-to-5/profile-03.jpg",
    userLink: "#",
    stars: 4.9,
    totalReviews: 933,
    price: 10,
  },
];
