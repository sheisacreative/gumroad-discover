import { Product } from "@/types/product";
import ProductCard from "./product-card";
import styles from "./product-card-list.module.css";
import TagUser from "@/components/info/tag/tag-user";
import Link from "next/link";

type ProductCardListProps = {
  products: Product[];
  title?: string;
  hasTag?: boolean;
  linkTitle?: string;
  link?: string;
  showTitle?: boolean;
};

export default async function ProductCardList({
  products,
  title,
  hasTag = false,
  linkTitle,
  link,
  showTitle = false,
}: ProductCardListProps) {
  return (
    <>
      {/* Title */}
      {showTitle && (
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <h1 className="title-medium">{title}</h1>
            {hasTag && <TagUser />}
          </div>
          {link && <Link href={link}>{linkTitle}</Link>}
        </div>
      )}

      {/* Product List */}
      <div className={`grid-auto-inline ${styles.productsList}`}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
