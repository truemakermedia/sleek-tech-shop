
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="product-card group animate-fade-up">
      <div className="p-4">
        <AspectRatio ratio={1}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </AspectRatio>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h3 className="mt-1 text-lg font-medium">{product.name}</h3>
          <p className="mt-1 text-lg font-semibold">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Card>
  );
}
