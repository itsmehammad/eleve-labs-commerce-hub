
import RotatingBanner from '@/components/RotatingBanner';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Rotating Banner */}
        <RotatingBanner />
        
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">
            Welcome to ELEVE LABS
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our premium collection of organic nuts, seeds, and healthy snacks. 
            Elevate your nutrition with our carefully curated products.
          </p>
        </div>

        {/* Products Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
