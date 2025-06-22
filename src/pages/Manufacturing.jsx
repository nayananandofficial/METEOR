import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPlay, HiCheckCircle, HiShieldCheck, HiGlobe, HiLightningBolt } from 'react-icons/hi';
import { FaLeaf, FaRecycle, FaCertificate, FaIndustry } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import CountingNumber from '../components/animations/CountingNumber';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

const Manufacturing = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: 'Design & Engineering',
      description: 'Advanced CAD modeling and simulation using proprietary algorithms',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: [
        'AI-powered design optimization',
        '3D modeling and prototyping',
        'Stress testing simulations',
        'Material selection analysis'
      ],
      duration: '2-4 weeks'
    },
    {
      id: 2,
      title: 'Material Sourcing',
      description: 'Sustainable procurement from certified global suppliers',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: [
        'Ethical supplier verification',
        'Quality material inspection',
        'Sustainable sourcing practices',
        'Supply chain transparency'
      ],
      duration: '1-2 weeks'
    },
    {
      id: 3,
      title: 'Precision Manufacturing',
      description: 'State-of-the-art robotic assembly with nanometer precision',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: [
        'Robotic precision assembly',
        'Real-time quality monitoring',
        'Zero-defect manufacturing',
        'Automated process control'
      ],
      duration: '3-6 weeks'
    },
    {
      id: 4,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and certification processes',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: [
        'Multi-stage testing protocols',
        'Performance validation',
        'Safety compliance checks',
        'Final inspection approval'
      ],
      duration: '1-2 weeks'
    },
    {
      id: 5,
      title: 'Packaging & Delivery',
      description: 'Eco-friendly packaging and global logistics network',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      details: [
        'Sustainable packaging materials',
        'Global shipping network',
        'Real-time tracking',
        'White-glove delivery service'
      ],
      duration: '3-5 days'
    }
  ];

  const capabilities = [
    { label: 'Annual Production Capacity', value: 50000, suffix: '+ units' },
    { label: 'Quality Assurance Rate', value: 99.9, suffix: '%' },
    { label: 'Manufacturing Facilities', value: 12, suffix: ' worldwide' },
    { label: 'Sustainability Score', value: 95, suffix: '/100' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
    { name: 'ISO 14001:2015', description: 'Environmental Management' },
    { name: 'ISO 45001:2018', description: 'Occupational Health & Safety' },
    { name: 'CE Marking', description: 'European Conformity' },
    { name: 'UL Listed', description: 'Safety Certification' },
    { name: 'RoHS Compliant', description: 'Environmental Standards' }
  ];

  const sustainabilityFeatures = [
    {
      icon: FaLeaf,
      title: 'Carbon Neutral',
      description: '100% renewable energy in all facilities'
    },
    {
      icon: FaRecycle,
      title: 'Circular Economy',
      description: '95% material recycling and reuse programs'
    },
    {
      icon: HiGlobe,
      title: 'Global Impact',
      description: 'Supporting local communities worldwide'
    },
    {
      icon: HiLightningBolt,
      title: 'Energy Efficient',
      description: '40% reduction in energy consumption'
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInWhenVisible className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Manufacturing Excellence
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover how we combine cutting-edge technology, sustainable practices, 
            and rigorous quality control to deliver world-class industrial solutions.
          </p>
        </FadeInWhenVisible>

        {/* Hero Video Section */}
        <FadeInWhenVisible className="mb-24">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Manufacturing facility"
                loading='lazy'
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button size="lg" className="group">
                  <HiPlay className="mr-2 group-hover:scale-110 transition-transform" />
                  Watch Factory Tour
                </Button>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Manufacturing Process */}
        <section className="mb-24">
          <FadeInWhenVisible className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From concept to delivery, every step is optimized for quality, 
              efficiency, and sustainability.
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Process Steps */}
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <FadeInWhenVisible key={step.id} delay={index * 0.1}>
                  <Card
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      activeProcess === index 
                        ? 'border-accent-blue shadow-lg shadow-accent-blue/20' 
                        : 'hover:border-accent-blue/50'
                    }`}
                    onClick={() => setActiveProcess(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        activeProcess === index 
                          ? 'bg-accent-blue text-primary-dark' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                        {step.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {step.description}
                        </p>
                        <span className="text-xs text-accent-blue font-medium">
                          Duration: {step.duration}
                        </span>
                      </div>
                    </div>
                  </Card>
                </FadeInWhenVisible>
              ))}
            </div>

            {/* Process Details */}
            <div className="sticky top-24">
              <motion.div
                key={activeProcess}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden">
                  <img
                    src={processSteps[activeProcess].image}
                    alt={processSteps[activeProcess].title}
                    loading='lazy'
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                      {processSteps[activeProcess].title}
                    </h3>
                    <ul className="space-y-2">
                      {processSteps[activeProcess].details.map((detail, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <HiCheckCircle className="text-accent-blue flex-shrink-0" size={16} />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mb-24">
          <FadeInWhenVisible className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Production Capabilities
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <FadeInWhenVisible key={capability.label} delay={index * 0.1}>
                <Card className="p-6 text-center" gradient={true}>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    <CountingNumber 
                      end={capability.value} 
                      suffix={capability.suffix}
                      duration={2000 + index * 200}
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {capability.label}
                  </p>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-24">
          <FadeInWhenVisible className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quality Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our commitment to excellence is validated by industry-leading certifications
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <FadeInWhenVisible key={cert.name} delay={index * 0.1}>
                <Card className="p-6 text-center">
                  <FaCertificate className="text-accent-blue mx-auto mb-4" size={32} />
                  <h3 className="font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.description}
                  </p>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* Sustainability */}
        <section className="mb-24">
          <FadeInWhenVisible className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sustainable Manufacturing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're committed to responsible manufacturing that protects our planet 
              while delivering exceptional products.
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <FadeInWhenVisible key={feature.title} delay={index * 0.1}>
                <Card className="p-6 text-center h-full">
                  <feature.icon className="text-accent-blue mx-auto mb-4" size={32} />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <FadeInWhenVisible>
          <Card className="p-12 text-center bg-gradient-to-r from-accent-neon/10 to-accent-purple/10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience Our Quality?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Schedule a virtual factory tour or request a custom manufacturing quote 
              for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Schedule Factory Tour
              </Button>
              <Button variant="outline" size="lg">
                Request Quote
              </Button>
            </div>
          </Card>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Manufacturing;