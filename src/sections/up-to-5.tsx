import { upTo5 } from "@/content/up-to-5";
import styles from "./up-to-5.module.css";
import ProductCardList from "@/components/action/card/product-card-list";

export default async function UpTo5() {
  return (
    <section className={styles.upTo5}>
      <div className="container">
        <ProductCardList
          products={upTo5}
          titleSize="large"
          title="Up to $5"
          link="#"
          linkTitle="More cheap products"
          showTitle
          showButton
          buttonText="View more"
          buttonLink="#"
        />
      </div>
    </section>
  );
}
