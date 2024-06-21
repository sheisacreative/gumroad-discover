import { fromThisCreator } from "@/content/from-this-creator";
import styles from "./hero.module.css";
import Image from "next/image";
import ProductCardList from "@/components/action/card/product-card-list";

export default async function Hero() {
  return (
    <section>
      {/* Video */}
      <div className={styles.videoContainer}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/hero/creator-video.mp4" type="video/mp4" />
        </video>
        <Image
          src={"/hero/creator-of-the-month.svg"}
          width="206"
          height="128"
          alt="Creator of the month"
          className={styles.creatorTag}
        />
      </div>

      {/* Products */}
      <div className={`container ${styles.productsBox}`}>
        {/* Product List */}
        <ProductCardList
          products={fromThisCreator}
          showTitle
          title="Products from this creator"
          hasTag
          linkTitle="View all Products"
          link="#"
        />
      </div>
    </section>
  );
}
