import ProductCardList from "@/components/action/card/product-card-list";
import { staffPicks } from "@/content/staff-picks";
import Link from "next/link";
import styles from "./staff-picks.module.css";

export default async function StaffPicks() {
  return (
    <section className={styles.staffSection}>
      {/* Title */}
      <div className={styles.titleContainer}>
        <h2 className={`display-medium ${styles.title}`}>
          From our heart, to yours
        </h2>
      </div>

      {/* Cards */}
      <div className={styles.cardsContainer}>
        <div className={styles.cardsContent}>
          <div className={styles.cardsTitleContainer}>
            <h2 className="title-large">Staff Picks</h2>
            <Link href={`#`}>View selected products</Link>
          </div>
          <ProductCardList products={staffPicks} />
        </div>
      </div>
    </section>
  );
}
