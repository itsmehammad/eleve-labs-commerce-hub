
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserRound, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { state } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-yellow-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Company Name */}
          <Link to="/" className="text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors">
            ELEVE LABS
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </form>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-white hover:text-yellow-500 transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-white hover:text-yellow-500 transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-white hover:text-yellow-500 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-yellow-500 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-white hover:text-yellow-500 hover:bg-gray-900">
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs min-w-[1.25rem] h-5">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Profile */}
            <Button variant="ghost" size="icon" className="text-white hover:text-yellow-500 hover:bg-gray-900">
              <UserRound className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
