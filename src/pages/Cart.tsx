import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import CheckoutForm from '@/components/CheckoutForm';
import { useState } from 'react';

const Cart = () => {
  const { state, dispatch } = useCart();
  const { toast } = useToast();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    toast({
      title: 'Item removed',
      description: 'Item has been removed from your cart.',
    });
  };

  const handleCheckoutSubmit = (data: any) => {
    console.log('Order data:', data);
    toast({
      title: 'Order placed successfully!',
      description: `Your order for $${state.total.toFixed(2)} has been placed. We'll contact you at ${data.email} with updates.`,
    });
    dispatch({ type: 'CLEAR_CART' });
    setCheckoutOpen(false);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-400 mb-6">Add some products to get started</p>
          <Link to="/products">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={item.id} className="bg-gray-900 border-yellow-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        ${item.price} each
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black h-8 w-8"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-white font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black h-8 w-8"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-400 hover:bg-red-500/10 mt-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="bg-gray-900 border-yellow-500/20 sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-400">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span className="text-white">Total:</span>
                    <span className="text-yellow-500">${state.total.toFixed(2)}</span>
                  </div>
                </div>

                <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg py-3">
                      Place Order
                    </Button>
                  </DialogTrigger>
                  <CheckoutForm onSubmit={handleCheckoutSubmit} total={state.total} />
                </Dialog>

                <Link to="/products" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
