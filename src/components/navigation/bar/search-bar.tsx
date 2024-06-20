import InputSearch from "@/components/action/input/search";
import Tag from "@/components/info/tag/tag";
import { tags } from "@/content/tags";
import { IconSearch } from "@tabler/icons-react";

export default async function SearchBar() {
  return (
    <div className="container">
      {/* Search Bar */}
      <InputSearch
        placeholder="Search products..."
        name="search"
        icon={<IconSearch />}
      />

      {/* Tags */}
      <div>
        {tags.map((tag) => (
          <Tag key={tag.id} />
        ))}
      </div>
    </div>
  );
}
