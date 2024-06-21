import ProductCardList from "@/components/action/card/product-card-list";
import styles from "./made-for-you.module.css";
import { madeForYou } from "@/content/made-for-you";

export default async function MadeForYou() {
  return (
    <section className={styles.madeForYou}>
      <div className="container">
        <ProductCardList
          products={madeForYou}
          titleSize="large"
          title="Made for you"
          link="#"
          linkTitle="More for you"
          showTitle
          showButton
          buttonText="View more"
          buttonLink="#"
        />
      </div>
    </section>
  );
}
