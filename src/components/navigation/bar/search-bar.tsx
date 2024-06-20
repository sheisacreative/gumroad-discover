import InputSearch from "@/components/action/input/search";
import Tag from "@/components/info/tag/tag";
import { tags } from "@/content/tags";
import { IconSearch } from "@tabler/icons-react";
import styles from "./search-bar.module.css";

export default async function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <div className="container">
        {/* Search Bar */}
        <InputSearch
          placeholder="Search products..."
          name="search"
          icon={<IconSearch />}
        />

        {/* Tags */}
        <div className={styles.tags}>
          <Tag name="All" isActive />
          {tags.map((tag) => (
            <Tag key={tag.id} name={tag.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
