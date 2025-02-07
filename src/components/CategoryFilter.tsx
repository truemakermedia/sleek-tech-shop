
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="my-6 flex flex-wrap items-center gap-2">
      <Button
        variant={selectedCategory === null ? "secondary" : "outline"}
        onClick={() => onSelectCategory(null)}
        className="category-chip"
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "secondary" : "outline"}
          onClick={() => onSelectCategory(category.id)}
          className="category-chip"
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
