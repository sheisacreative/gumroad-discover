import { Product } from "@/types/product";
import styles from "./product-card.module.css";
import Image from "next/image";
import { IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";

export default async function ProductCard({ product }: { product: Product }) {
  const {
    productImage,
    title,
    user,
    userLink,
    userPhoto,
    stars,
    totalReviews,
    price,
  } = product;

  return (
    <div className={styles.card}>
      {/* Image */}
      <Image
        src={productImage}
        alt=""
        width={728}
        height={400}
        className={styles.image}
      />

      {/* Content */}
      <div className={styles.content}>
        <h3 className="body-large">{title}</h3>
        <Link href={userLink} className={styles.userContainer}>
          <Image
            src={userPhoto}
            width={80}
            height={80}
            alt=""
            className={styles.userPhoto}
          />
          <p>{user}</p>
        </Link>
        <div className={`body-medium ${styles.starRating}`}>
          <IconStarFilled className={styles.starIcon} />
          <p>{stars}</p>
          <p>({totalReviews})</p>
        </div>
      </div>

      {/* TODO: fix flag color (yellow when 0) and border */}
      {/* TODO: transform flag in component */}
      {/* Price */}
      <div className={styles.priceContainer}>
        <div className={`body-large ${styles.price}`}>${price}</div>
        <Image
          src={"/other/flag-corner.svg"}
          width="32"
          height="40"
          alt=""
          className={styles.priceFlagCorner}
          style={{ backgroundColor: "#fff" }}
        />
      </div>
    </div>
  );
}
