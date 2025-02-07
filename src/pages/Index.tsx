
import { useState } from "react";
import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";

const categories = [
  { id: "cases", name: "Cases" },
  { id: "chargers", name: "Chargers" },
  { id: "headphones", name: "Headphones" },
  { id: "speakers", name: "Speakers" },
];

const products = [
  {
    id: "1",
    name: "Premium Phone Case",
    price: 29.99,
    category: "Cases",
    image: "https://images.unsplash.com/photo-1587855049254-351f4e55fe02?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Wireless Charger",
    price: 39.99,
    category: "Chargers",
    image: "https://images.unsplash.com/photo-1585338686328-8e1d29dc67f0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "Bluetooth Earbuds",
    price: 129.99,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "Portable Speaker",
    price: 89.99,
    category: "Speakers",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : products;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container px-4 pt-24">
        <section className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold">Premium Mobile Accessories</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our collection of high-quality mobile accessories
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
