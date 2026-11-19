/**
 * Notes menu — single source of truth.
 *
 * Source: the printed Notes menu supplied by the client (2026).
 * Prices are stored in fils (1 BHD = 1000 fils) so they stay exact.
 * To update a price, change it here only; every page reads from this file.
 */

export type MenuItem = {
  name: string;
  /** Price in fils. 1300 => 1.300 BD */
  price: number;
};

export type IconName =
  | "bean"
  | "dripper"
  | "cup"
  | "star"
  | "whisk"
  | "glass"
  | "sandwich"
  | "cookie";

export type MenuCategory = {
  id: string;
  title: string;
  icon: IconName;
  group: "coffee" | "more";
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "black",
    title: "Black",
    icon: "bean",
    group: "coffee",
    items: [
      { name: "Coffee of the day", price: 500 },
      { name: "Cold brew", price: 1200 },
      { name: "Americano", price: 1000 },
      { name: "Espresso", price: 500 },
    ],
  },
  {
    id: "v60",
    title: "V60",
    icon: "dripper",
    group: "coffee",
    items: [
      { name: "Ethiopia Guji", price: 1000 },
      { name: "El Salvador", price: 1000 },
      { name: "Colombia Excelso", price: 1000 },
      { name: "Colombia Premium", price: 1500 },
    ],
  },
  {
    id: "white",
    title: "White",
    icon: "cup",
    group: "coffee",
    items: [
      { name: "Piccolo", price: 600 },
      { name: "Latte", price: 800 },
      { name: "Cappuccino", price: 800 },
    ],
  },
  {
    id: "special",
    title: "Special",
    icon: "star",
    group: "coffee",
    items: [
      { name: "Popcorn", price: 1300 },
      { name: "Smores", price: 1300 },
      { name: "Waffle", price: 1300 },
      { name: "Biscoff", price: 1300 },
    ],
  },
  {
    id: "matcha",
    title: "Matcha",
    icon: "whisk",
    group: "more",
    items: [
      { name: "Popcorn matcha", price: 1900 },
      { name: "Strawberry matcha", price: 1900 },
      { name: "Waffle matcha", price: 1800 },
      { name: "Birthday cake matcha", price: 1900 },
      { name: "Cloud matcha", price: 1900 },
    ],
  },
  {
    id: "refreshes",
    title: "Refreshes",
    icon: "glass",
    group: "more",
    items: [
      { name: "Hibiscus", price: 900 },
      { name: "Al Hasa pink lemonade", price: 1200 },
      { name: "Water", price: 100 },
      { name: "Sparkling water", price: 350 },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    icon: "sandwich",
    group: "more",
    items: [
      { name: "Notes tuna sandwich", price: 1200 },
      { name: "Halloumi sandwich", price: 1200 },
      { name: "Turkey sandwich", price: 1200 },
    ],
  },
  {
    id: "sweets",
    title: "Sweets",
    icon: "cookie",
    group: "more",
    items: [
      { name: "Cookies", price: 500 },
      { name: "Babka", price: 900 },
    ],
  },
];

/** 1300 -> "1.300" (Bahraini dinar uses three decimal places). */
export function formatPrice(fils: number): string {
  return (fils / 1000).toFixed(3);
}

export function getCategory(id: string): MenuCategory {
  const category = menu.find((c) => c.id === id);
  if (!category) throw new Error(`Unknown menu category: ${id}`);
  return category;
}

export function lowestPrice(category: MenuCategory): number {
  return Math.min(...category.items.map((i) => i.price));
}
