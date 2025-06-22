import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiStar, HiHeart, HiShare, HiDownload, HiPlay, HiCheckCircle, HiArrowLeft } from 'react-icons/hi';
import { FaIndustry, FaCog, FaShieldAlt, FaGlobe } from 'react-icons/fa';
import Button from './ui/Button';
import Card from './ui/Card';
import FadeInWhenVisible from './animations/FadeInWhenVisible';

const ProductDetail = ({
  productId,
  name,
  description,
  price,
  images = [],
  specifications = {},
  features = [],
  availability = 'In Stock',
  ratings = { average: 4.8, count: 127 },
  relatedProducts = []
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  // Fallback data if props are missing
  const productData = {
    name: name || 'Product Name',
    description: description || 'Product description not available.',
    price: price || 'Contact for pricing',
    images: images.length > 0 ? images : ['https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800'],
    specifications: Object.keys(specifications).length > 0 ? specifications : {
      'Dimensions': '1200 × 800 × 600 mm',
      'Weight': '150 kg',
      'Power': '3.5 kW',
      'Precision': '±0.1 mm'
    },
    features: features.length > 0 ? features : [
      'Advanced control system',
      'High precision operation',
      'Energy efficient design',
      'Remote monitoring capability'
    ],
    availability,
    ratings
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'features', label: 'Features' },
    { id: 'support', label: 'Support' }
  ];

  const benefits = [
    {
      icon: FaIndustry,
      title: 'Industrial Grade',
      description: 'Built for demanding industrial environments'
    },
    {
      icon: FaCog,
      title: 'Easy Integration',
      description: 'Seamless integration with existing systems'
    },
    {
      icon: FaShieldAlt,
      title: 'Reliable Support',
      description: '24/7 technical support and maintenance'
    },
    {
      icon: FaGlobe,
      title: 'Global Warranty',
      description: 'Comprehensive warranty coverage worldwide'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <HiStar
        key={i}
        className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        size={16}
      />
    ));
  };

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <FadeInWhenVisible className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-accent-blue transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-accent-blue transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{productData.name}</span>
          </nav>
        </FadeInWhenVisible>

        {/* Back Button */}
        <FadeInWhenVisible className="mb-8">
          <Link to="/products">
            <Button variant="ghost" className="group">
              <HiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Button>
          </Link>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <FadeInWhenVisible>
            <div className="space-y-4">
              {/* Main Image */}
              <Card className="overflow-hidden">
                <div className="relative aspect-square">
                  <img
                    src={productData.images[activeImageIndex]}
                    alt={productData.name}
                    loading='lazy'
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {/* <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                      <HiHeart className="text-white" size={20} />
                    </button> */}
                    <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                      <HiShare className="text-white" size={20} />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Button size="sm" className="group">
                      <HiPlay className="size-6 group-hover:scale-110 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Thumbnail Images */}
              {productData.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {productData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === index 
                          ? 'border-accent-blue' 
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${productData.name} view ${index + 1}`}
                        loading='lazy'
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </FadeInWhenVisible>

          {/* Product Info */}
          <FadeInWhenVisible delay={0.2}>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{productData.name}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {productData.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(productData.ratings.average)}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {productData.ratings.average} ({productData.ratings.count} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="text-3xl font-bold text-accent-blue mb-6">
                  {productData.price}
                </div>

                {/* Availability */}
                {/* <div className="flex items-center space-x-2 mb-6">
                  <HiCheckCircle className="text-green-500" size={20} />
                  <span className="text-green-500 font-medium">{productData.availability}</span>
                </div> */}
              </div>

              {/* Actions */}
              {/* <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    Request Quote
                  </Button>
                  <Button size="lg" className="flex-1">
                    Schedule Demo
                  </Button>
                </div>
                <Button variant="ghost" size="lg" className="w-full group">
                  <HiDownload className="mr-2 group-hover:scale-110 transition-transform" />
                  Download Brochure
                </Button>
              </div> */}

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200/20 dark:border-gray-700/30">
                {benefits.map((benefit, index) => (
                  <div key={benefit.title} className="flex items-start space-x-3">
                    <benefit.icon className="text-accent-blue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium text-sm">{benefit.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Product Details Tabs */}
        <FadeInWhenVisible>
          <Card className="mb-16">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200/20 dark:border-gray-700/30">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors relative ${
                      activeTab === tab.id
                        ? 'border-accent-blue text-accent-blue'
                        : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Product Overview</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {productData.description} This advanced industrial solution combines 
                      cutting-edge technology with robust engineering to deliver exceptional 
                      performance in demanding manufacturing environments.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Key Applications</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Automotive manufacturing</li>
                          <li>• Electronics assembly</li>
                          <li>• Precision machining</li>
                          <li>• Quality control systems</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Industries Served</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Aerospace & Defense</li>
                          <li>• Medical Devices</li>
                          <li>• Consumer Electronics</li>
                          <li>• Heavy Machinery</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(productData.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-200/20 dark:border-gray-700/30">
                          <span className="font-medium">{key}</span>
                          <span className="text-gray-600 dark:text-gray-400">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {productData.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <HiCheckCircle className="text-accent-blue flex-shrink-0" size={20} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'support' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Support & Documentation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Documentation</h4>
                        <div className="space-y-2">
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <HiDownload className="mr-2" />
                            User Manual (PDF)
                          </Button>
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <HiDownload className="mr-2" />
                            Installation Guide
                          </Button>
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <HiDownload className="mr-2" />
                            Technical Drawings
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Support Options</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-medium">Phone Support:</span>
                            <p className="text-gray-600 dark:text-gray-400">24/7 technical assistance</p>
                          </div>
                          <div>
                            <span className="font-medium">Email Support:</span>
                            <p className="text-gray-600 dark:text-gray-400">Response within 4 hours</p>
                          </div>
                          <div>
                            <span className="font-medium">On-site Service:</span>
                            <p className="text-gray-600 dark:text-gray-400">Available worldwide</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </Card>
        </FadeInWhenVisible>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <FadeInWhenVisible>
            <section>
              <h2 className="text-2xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.slice(0, 3).map((product, index) => (
                  <Card key={product.id} className="overflow-hidden group">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading='lazy'
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-accent-blue">{product.price}</span>
                        <Link to={`/products/${product.id}`}>
                          <Button size="sm">View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </FadeInWhenVisible>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;