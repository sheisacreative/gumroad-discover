import Link from "next/link";
import styles from "./outline.module.css";

type ButtonBlackProps = React.ComponentProps<"a"> & {
  text: string;
  href: string;
  hasBottomBorder?: boolean;
  hasTopBorder?: boolean;
};

export default async function ButtonOutline({
  text,
  href,
  hasBottomBorder = true,
  hasTopBorder = true,
  ...props
}: ButtonBlackProps) {
  return (
    <Link
      href={href}
      className={styles.button}
      style={{
        borderBottom: !hasBottomBorder ? "none" : "",
        borderTop: !hasTopBorder ? "none" : "",
      }}
      {...props}
    >
      {text}
    </Link>
  );
}
