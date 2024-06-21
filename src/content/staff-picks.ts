import { Product } from "@/types/product";
import { v4 as uuidv4 } from "uuid";

export const staffPicks: Product[] = [
  {
    id: uuidv4(),
    title: "Ichigo Translator Subscription",
    productImage: "/staff-picks/card-1.jpg",
    user: "Ichigo Reader",
    userPhoto: "/staff-picks/profile-01.jpg",
    userLink: "#",
    stars: 4.5,
    totalReviews: 148,
    price: 12,
  },
  {
    id: uuidv4(),
    title: "Wrong opinion Podcast",
    productImage: "/staff-picks/card-2.jpg",
    user: "Wrong Opinion",
    userPhoto: "/staff-picks/profile-02.jpg",
    userLink: "#",
    stars: 5,
    totalReviews: 162,
    price: 15,
  },
  {
    id: uuidv4(),
    title: "Daoist Meditation Online Learning Program",
    productImage: "/staff-picks/card-3.jpg",
    user: "Tom Bisio",
    userPhoto: "/staff-picks/profile-03.jpg",
    userLink: "#",
    stars: 5,
    totalReviews: 125,
    price: 10,
  },
  {
    id: uuidv4(),
    title: "Clip Studio Paint (CSP) Chain, & Jewelry Brushes by Vegalia",
    productImage: "/staff-picks/card-4.jpg",
    user: "Vegalia",
    userPhoto: "/staff-picks/profile-04.jpg",
    userLink: "#",
    stars: 4.9,
    totalReviews: 312,
    price: 0,
  },
];
