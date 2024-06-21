import InputSearch from "@/components/action/input/search";
import Tag from "@/components/info/tag/tag";
import { tags } from "@/content/tags";
import { IconApps, IconDots, IconSearch } from "@tabler/icons-react";
import styles from "./search-bar.module.css";

export default async function DiscoverNavigation() {
  return (
    <section className={styles.discoverSection}>
      <div className="container">
        {/* Search Bar */}
        <div className={styles.searchGroup}>
          {/* Input */}
          <div className={styles.searchContainer}>
            <InputSearch
              placeholder="Search products..."
              name="search"
              icon={<IconSearch />}
            />
          </div>
          {/* Categories */}
          <div className={styles.categories}>
            <IconApps />
            <p className={styles.categoriesText}>Categories</p>
          </div>
        </div>

        {/* Tags */}
        <div className={styles.tags}>
          <Tag name="All" isActive />
          {tags.map((tag) => (
            <Tag key={tag.id} name={tag.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
