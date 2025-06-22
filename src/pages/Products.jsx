import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { HiFilter, HiSearch } from 'react-icons/hi';
import Input from '../components/ui/Input';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'cpu', name: 'CPU Processors' },
    { id: 'gpu', name: 'GPU Graphics' },
    { id: 'ai', name: 'AI Platform' },
  ];

  const products = [
    {
      id: 1,
      name: 'METEOR 5',
      category: 'cpu',
      price: '$299',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Entry-level CPU processor with exceptional performance for everyday computing',
      features: ['6 cores', '12 threads', '3.2 GHz base', 'PCIe 4.0 support'],
    },
    {
      id: 2,
      name: 'METEOR 7',
      category: 'cpu',
      price: '$449',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mid-range CPU processor delivering outstanding performance for gaming and productivity',
      features: ['8 cores', '16 threads', '3.6 GHz base', 'Advanced cache'],
    },
    {
      id: 3,
      name: 'METEOR 9',
      category: 'cpu',
      price: '$599',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-performance CPU processor for demanding applications and content creation',
      features: ['12 cores', '24 threads', '4.0 GHz base', 'Precision boost'],
    },
    {
      id: 4,
      name: 'METEOR 9X',
      category: 'cpu',
      price: '$799',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Flagship CPU processor with extreme performance for professional workloads',
      features: ['16 cores', '32 threads', '4.5 GHz boost', 'Unlocked multiplier'],
    },
    {
      id: 5,
      name: 'METEOR Blaze R90',
      category: 'gpu',
      price: '$699',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-performance graphics card for 4K gaming and content creation',
      features: ['16GB GDDR6', 'Ray tracing', '4K gaming', 'DLSS support'],
    },
    {
      id: 6,
      name: 'METEOR Blaze R100',
      category: 'gpu',
      price: '$1,199',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Flagship graphics card delivering ultimate performance for 8K gaming and AI workloads',
      features: ['24GB GDDR6X', 'Advanced ray tracing', '8K gaming', 'AI acceleration'],
    },
    {
      id: 7,
      name: 'METEOR Neuron X',
      category: 'ai',
      price: '$2,999',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced AI processing platform for machine learning and neural network acceleration',
      features: ['Tensor processing', 'Neural acceleration', 'Cloud integration', 'Real-time inference'],
    },
  ];

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInWhenVisible className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            METEOR Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover our comprehensive range of high-performance processors, graphics cards, 
            and AI platforms designed to power the future of computing.
          </p>
        </FadeInWhenVisible>

        {/* Filters */}
        <FadeInWhenVisible className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/20 dark:border-gray-700/30">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300/30 dark:border-gray-600/30 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all duration-200"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient text-primary-dark'
                        : 'bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300/30 dark:border-gray-600/30 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all duration-200"
              >
                <option value="name" className='dark:text-black'>Sort by Name</option>
                <option value="price" className='dark:text-black'>Sort by Price</option>
              </select>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <FadeInWhenVisible key={product.id} delay={index * 0.1}>
              <Card className="overflow-hidden h-full group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading='lazy'
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* <div className="absolute top-4 right-4">
                    <span className="bg-gradient text-primary-dark px-3 py-1 rounded-full text-sm font-semibold">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                  </div> */}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-white/10 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">
                      {product.price}
                    </span>
                    <Link to={`/products/${product.id}`}>
                      <Button variant='link' size="sm">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;