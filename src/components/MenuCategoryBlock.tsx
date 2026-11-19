import { CategoryIcon } from "@/components/Icons";
import { formatPrice, type MenuCategory } from "@/data/menu";

type Props = {
  category: MenuCategory;
  /** Show only the first N items (used for the homepage preview). */
  limit?: number;
  headingLevel?: "h2" | "h3";
  id?: string;
};

export function MenuCategoryBlock({ category, limit, headingLevel = "h3", id }: Props) {
  const Heading = headingLevel;
  const items = limit ? category.items.slice(0, limit) : category.items;
  const hidden = category.items.length - items.length;

  return (
    <section className="menu-cat menu-section" id={id} aria-labelledby={`cat-${category.id}`}>
      <div className="menu-cat__head">
        <CategoryIcon name={category.icon} className="menu-cat__icon" />
        <Heading className="menu-cat__title" id={`cat-${category.id}`}>
          {category.title}
        </Heading>
        {hidden > 0 && <span className="menu-cat__count">+{hidden} more</span>}
      </div>
      <ul className="menu-items">
        {items.map((item) => (
          <li className="menu-item" key={item.name}>
            <span className="menu-item__name">{item.name}</span>
            <span className="menu-item__leader" aria-hidden="true" />
            <span className="menu-item__price">
              {formatPrice(item.price)}
              <abbr title="Bahraini dinar">BD</abbr>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
