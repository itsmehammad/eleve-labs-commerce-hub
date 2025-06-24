
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="bg-gray-900 border-yellow-500/20 hover:border-yellow-500/40 transition-colors group">
      <CardContent className="p-0">
        <Link to={`/product/${product.id}`}>
          <div className="aspect-square overflow-hidden rounded-t-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        </Link>
        <div className="p-4">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-400 text-sm mt-1 line-clamp-2">
            {product.description}
          </p>
          <p className="text-yellow-500 font-bold text-xl mt-2">
            ${product.price}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
