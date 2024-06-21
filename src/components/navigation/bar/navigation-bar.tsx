import styles from "./navigation-bar.module.css";
import ButtonOutline from "@/components/action/button/outline";
import ButtonPrimaryBlack from "@/components/action/button/primary-black";
import Image from "next/image";
import Link from "next/link";

export default async function NavigationBar() {
  return (
    <section className={styles.header}>
      {/* Brand */}
      <Image
        src={"/brand/gumroad.svg"}
        width={300}
        height={40}
        alt="Gumroad"
        className={styles.brand}
      />

      {/* Navigation */}
      <nav>
        <ul className={styles.navigationList}>
          <li>
            <Link href={"#"}>Features</Link>
          </li>
          <li>
            <Link href={"#"}>Pricing</Link>
          </li>
          <li>
            <Link href={"#"}>Blog</Link>
          </li>
          <li>
            <Link href={"#"} className={styles.active}>
              Discover
            </Link>
          </li>
        </ul>
      </nav>

      {/* Buttons */}
      <div className={styles.buttonGroup}>
        <ButtonOutline
          text="Login"
          href="#"
          hasBottomBorder={false}
          hasTopBorder={false}
        />
        <ButtonPrimaryBlack text="Start Selling" href="#" />
      </div>
    </section>
  );
}
