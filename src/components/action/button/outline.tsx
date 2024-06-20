import Link from "next/link";
import styles from "./outline.module.css";

type ButtonBlackProps = React.ComponentProps<"a"> & {
  text: string;
  href: string;
};

export default async function ButtonOutline({ text, href }: ButtonBlackProps) {
  return (
    <Link href={href} className={styles.button}>
      {text}
    </Link>
  );
}
