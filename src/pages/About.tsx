
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 text-center mb-8">
            About ELEVE LABS
          </h1>
          
          <div className="grid gap-8 md:gap-12">
            {/* Company Overview */}
            <Card className="bg-gray-900 border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  Founded with a passion for health and wellness, ELEVE LABS is dedicated to bringing you 
                  the finest organic nuts, seeds, and healthy snacks. Our journey began with a simple belief: 
                  that everyone deserves access to premium, nutritious foods that not only taste great but 
                  also support a healthy lifestyle.
                </p>
                <p>
                  We source our products from trusted organic farms and suppliers who share our commitment 
                  to quality and sustainability. Every product in our collection is carefully selected, 
                  tested, and packaged to ensure maximum freshness and nutritional value.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-gray-900 border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>
                  To elevate your nutrition and well-being by providing premium organic products that 
                  nourish your body and support your active lifestyle. We believe that healthy eating 
                  should be convenient, delicious, and accessible to everyone.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="bg-gray-900 border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Quality First</h3>
                    <p className="text-gray-300">
                      We never compromise on quality. Every product meets our strict standards 
                      for purity, freshness, and nutritional value.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Organic & Natural</h3>
                    <p className="text-gray-300">
                      We prioritize organic, non-GMO ingredients that are free from harmful 
                      chemicals and additives.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Sustainability</h3>
                    <p className="text-gray-300">
                      We're committed to sustainable practices that protect our planet 
                      for future generations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Customer Focus</h3>
                    <p className="text-gray-300">
                      Your health and satisfaction are our top priorities. We're here to 
                      support your wellness journey.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="bg-gray-900 border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">Why Choose ELEVE LABS?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    100% organic and natural ingredients
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Rigorous quality testing and certification
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Sustainable and eco-friendly packaging
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Expert nutritionist-approved formulations
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Fast and reliable shipping
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Dedicated customer support team
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
