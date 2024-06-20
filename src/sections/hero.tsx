import ProductCard from "@/components/action/card/product-card";
import TagUser from "@/components/info/tag/tag-user";
import { fromThisCreator } from "@/content/from-this-creator";
import Link from "next/link";
import styles from "./hero.module.css";
import Image from "next/image";

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
        {/* Title */}
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <h1>Products from this creator</h1>
            <TagUser />
          </div>
          <Link href={"#"}>View all Products</Link>
        </div>

        {/* Product List */}
        <div className={`grid-auto-inline ${styles.productsList}`}>
          {fromThisCreator.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}
