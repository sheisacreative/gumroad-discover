import { Product } from "@/types/product";
import ProductCard from "./product-card";
import styles from "./product-card-list.module.css";
import TagUser from "@/components/info/tag/tag-user";
import Link from "next/link";
import ButtonPrimaryBlack from "../button/primary-black";

type ProductCardListProps = {
  products: Product[];
  title?: string;
  hasTag?: boolean;
  linkTitle?: string;
  link?: string;
  showTitle?: boolean;
  titleSize?: "medium" | "large";
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
};

export default async function ProductCardList({
  products,
  title,
  hasTag = false,
  linkTitle,
  link,
  showTitle = false,
  titleSize = "medium",
  showButton = false,
  buttonText,
  buttonLink,
}: ProductCardListProps) {
  return (
    <div className={styles.productListContainer}>
      {/* Title */}
      {showTitle && (
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <h2 className={`title-${titleSize}`}>{title}</h2>
            {hasTag && (
              <div className={styles.tagUser}>
                <TagUser />
              </div>
            )}
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

      {/* Button */}
      {showButton && buttonText && buttonLink && (
        <div className={styles.buttonGroup}>
          <ButtonPrimaryBlack text={buttonText} href={buttonLink} />
        </div>
      )}
    </div>
  );
}
