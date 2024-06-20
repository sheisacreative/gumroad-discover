import styles from "./tag.module.css";

type TagProps = {
  name: string;
  isActive?: boolean;
};

export default async function Tag({
  name = "Tag",
  isActive = false,
}: TagProps) {
  return (
    <button className={`${styles.tag} ${isActive && styles.isActive}`}>
      {name}
    </button>
  );
}
