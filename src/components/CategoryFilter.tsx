type Category = {
  id: number | null;
  name: string;
};

type Props = {
  categories: Category[];
  selected: number | null;
  onSelect: (id: number | null) => void;
};

const CategoryFilter = ({ categories, selected, onSelect }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "0 2rem",
        marginBottom: "1rem",
        flexWrap: "wrap",
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat.id ?? "all"}
          onClick={() => onSelect(cat.id)}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: selected === cat.id ? "#3b82f6" : "#3c3c40",
            color: "white",
            fontWeight: "500",
          }}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;