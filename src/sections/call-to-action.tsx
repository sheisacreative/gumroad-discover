import ButtonPrimaryPink from "@/components/action/button/primary-pink";
import Link from "next/link";
import styles from "./call-to-action.module.css";

export default async function CallToAction() {
  return (
    <section className={styles.ctaContainer}>
      <div className={`container ${styles.content}`}>
        <h2 className="display-medium">
          There’s just one product missing... yours!
        </h2>
        <div className={styles.actionButton}>
          <ButtonPrimaryPink text="Start Seeling" href="#" />
          <Link href={`#`} className={styles.subtleLink}>
            Nah... show me all products
          </Link>
        </div>
      </div>
    </section>
  );
}
