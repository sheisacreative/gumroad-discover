import { IconArrowAutofitContent, IconSearch } from "@tabler/icons-react";
import { ReactNode } from "react";
import styles from "./search.module.css";

type InputSearchProps = React.ComponentProps<"input"> & {
  name: string;
  placeholder: string;
  icon: ReactNode;
};

export default async function InputSearch({
  name,
  placeholder,
  icon,
  ...props
}: InputSearchProps) {
  // return <input type="search" placeholder={placeholder} {...props} />;
  return (
    <div>
      <div className={styles.inputContainar}>
        <input
          name={name}
          aria-label={name}
          placeholder={placeholder}
          className={styles.input}
          {...props}
        />
        <div className={styles.icon}>{icon}</div>
      </div>
    </div>
  );
}
