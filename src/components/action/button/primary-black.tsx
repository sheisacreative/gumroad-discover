import Link from "next/link";
import styles from "./primary-black.module.css";

type ButtonBlackProps = React.ComponentProps<"a"> & {
  text: string;
  href: string;
};

export default async function ButtonPrimaryBlack({
  text,
  href,
}: ButtonBlackProps) {
  return (
    <Link href={href} className={styles.button}>
      {text}
    </Link>
  );
}
