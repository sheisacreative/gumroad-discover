import Image from "next/image";
import styles from "./tag-user.module.css";

export default async function TagUser() {
  return (
    <div className={styles.tag}>
      <div className={styles.brandContainer}>
        <Image
          src={"/brand/gumroad-g.svg"}
          width="16"
          height="16"
          alt=""
          className={styles.brand}
        />
      </div>
      <p>@ThePinkGirl</p>
    </div>
  );
}
