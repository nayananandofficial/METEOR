import { useParams, Navigate } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  const { id } = useParams();
  
  // Product data - in a real app, this would come from an API or database
  const products = {
    '1': {
      productId: '1',
      name: 'METEOR 5',
      description: 'Entry-level CPU processor with exceptional performance for everyday computing tasks. Built on advanced 7nm architecture with intelligent power management and enhanced security features.',
      price: '$299',
      images: [
        'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specifications: {
        'Cores': '6',
        'Threads': '12',
        'Base Clock': '3.2 GHz',
        'Boost Clock': '4.4 GHz',
        'Cache': '16MB L3',
        'TDP': '65W',
        'Socket': 'AM5',
        'Process Node': '7nm'
      },
      features: [
        '6 cores and 12 threads for multitasking',
        'PCIe 4.0 support for fast storage',
        'Integrated security processor',
        'Advanced power management',
        'DDR5 memory support',
        'Precision Boost technology',
        'Smart Prefetch algorithms',
        'Enhanced virtualization'
      ],
      availability: 'In Stock - Ships in 1-2 days',
      ratings: { average: 4.7, count: 342 }
    },
    '2': {
      productId: '2',
      name: 'METEOR 7',
      description: 'Mid-range CPU processor delivering outstanding performance for gaming and productivity. Perfect balance of performance and efficiency for enthusiast users.',
      price: '$449',
      images: [
        'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specifications: {
        'Cores': '8',
        'Threads': '16',
        'Base Clock': '3.6 GHz',
        'Boost Clock': '4.7 GHz',
        'Cache': '32MB L3',
        'TDP': '105W',
        'Socket': 'AM5',
        'Process Node': '7nm'
      },
      features: [
        '8 cores and 16 threads for gaming',
        'Advanced cache hierarchy',
        'Precision Boost 2 technology',
        'Smart Memory Access',
        'PCIe 4.0 ready',
        'Enhanced gaming performance',
        'Content creation optimized',
        'Overclocking support'
      ],
      availability: 'In Stock - Ships in 1-2 days',
      ratings: { average: 4.8, count: 567 }
    },
    '3': {
      productId: '3',
      name: 'METEOR 9',
      description: 'High-performance CPU processor for demanding applications and content creation. Engineered for professionals who need maximum computational power.',
      price: '$599',
      images: [
        'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specifications: {
        'Cores': '12',
        'Threads': '24',
        'Base Clock': '4.0 GHz',
        'Boost Clock': '5.0 GHz',
        'Cache': '64MB L3',
        'TDP': '125W',
        'Socket': 'AM5',
        'Process Node': '5nm'
      },
      features: [
        '12 cores and 24 threads for workstations',
        'Advanced 5nm process technology',
        'Precision Boost 3 with AI',
        'Large cache for complex workloads',
        'Professional content creation',
        'Advanced security features',
        'Thermal management system',
        'Enterprise-grade reliability'
      ],
      availability: 'In Stock - Ships in 2-3 days',
      ratings: { average: 4.9, count: 234 }
    },
    '4': {
      productId: '4',
      name: 'METEOR 9X',
      description: 'Flagship CPU processor with extreme performance for professional workloads. The ultimate choice for enthusiasts and professionals demanding the absolute best.',
      price: '$799',
      images: [
        'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specifications: {
        'Cores': '16',
        'Threads': '32',
        'Base Clock': '4.2 GHz',
        'Boost Clock': '5.4 GHz',
        'Cache': '128MB L3',
        'TDP': '170W',
        'Socket': 'AM5',
        'Process Node': '5nm'
      },
      features: [
        '16 cores and 32 threads for extreme performance',
        'Unlocked multiplier for overclocking',
        'Massive 128MB L3 cache',
        'AI-enhanced boost algorithms',
        'Professional workstation performance',
        'Advanced thermal interface',
        'Precision overclocking tools',
        'Flagship performance guarantee'
      ],
      availability: 'In Stock - Ships in 2-3 days',
      ratings: { average: 4.9, count: 156 }
    },
    '5': {
      productId: '5',
      name: 'METEOR Blaze R90',
      description: 'High-performance graphics card for 4K gaming and content creation. Delivers exceptional visual fidelity with advanced ray tracing and AI-enhanced graphics.',
      price: '$699',
      images: [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specifications: {
        'Memory': '16GB GDDR6',
        'Memory Bus': '256-bit',
        'Base Clock': '2100 MHz',
        'Boost Clock': '2500 MHz',
        'RT Cores': '80',
        'Tensor Cores': '320',
        'TDP': '320W',
        'Outputs': '3x DP 1.4a, 1x HDMI 2.1'
      },
      features: [
        '4K gaming at high frame rates',
        'Hardware-accelerated ray tracing',
        'DLSS 3.0 AI upscaling',
        'AV1 encoding and decoding',
        'Advanced cooling solution',
        'RGB lighting customization',
        'Content creator optimized',
        'VR ready performance'
      ],
      availability: 'In Stock - Ships in 3-5 days',
      ratings: { average: 4.8, count: 423 }
    },
    '6': {
      productId: '6',
      name: 'METEOR Blaze R100',
      description: 'Flagship graphics card delivering ultimate performance for 8K gaming and AI workloads. The pinnacle of graphics technology with uncompromising performance.',
      price: '$1,199',
      images: [
        'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specifications: {
        'Memory': '24GB GDDR6X',
        'Memory Bus': '384-bit',
        'Base Clock': '2200 MHz',
        'Boost Clock': '2700 MHz',
        'RT Cores': '128',
        'Tensor Cores': '512',
        'TDP': '450W',
        'Outputs': '4x DP 2.0, 1x HDMI 2.1'
      },
      features: [
        '8K gaming capability',
        'Advanced ray tracing architecture',
        'AI acceleration for creative workflows',
        'Professional rendering performance',
        'Liquid cooling ready',
        'Multi-GPU support',
        'Enterprise-grade drivers',
        'Flagship performance guarantee'
      ],
      availability: 'In Stock - Ships in 5-7 days',
      ratings: { average: 4.9, count: 187 }
    },
    '7': {
      productId: '7',
      name: 'METEOR Neuron X',
      description: 'Advanced AI processing platform for machine learning and neural network acceleration. Purpose-built for AI researchers, data scientists, and enterprise AI deployments.',
      price: '$2,999',
      images: [
        'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      specifications: {
        'AI Cores': '1024',
        'Tensor Performance': '640 TOPS',
        'Memory': '48GB HBM3',
        'Memory Bandwidth': '3.2 TB/s',
        'Precision': 'FP32, FP16, INT8, INT4',
        'Interconnect': 'NVLink 4.0',
        'TDP': '700W',
        'Form Factor': 'Dual-slot PCIe'
      },
      features: [
        'Dedicated tensor processing units',
        'Neural network acceleration',
        'Real-time inference capabilities',
        'Cloud integration and scaling',
        'Multi-precision support',
        'Advanced memory architecture',
        'Enterprise AI frameworks',
        'Professional support included'
      ],
      availability: 'Made to Order - 2-4 weeks lead time',
      ratings: { average: 4.9, count: 89 }
    }
  };

  // Get related products (exclude current product)
  const getRelatedProducts = (currentId) => {
    return Object.values(products)
      .filter(product => product.productId !== currentId)
      .slice(0, 3)
      .map(product => ({
        id: product.productId,
        name: product.name,
        description: product.description.substring(0, 100) + '...',
        price: product.price,
        image: product.images[0]
      }));
  };

  const product = products[id];

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <ProductDetail
      {...product}
      relatedProducts={getRelatedProducts(id)}
    />
  );
};

export default ProductDetailPage;