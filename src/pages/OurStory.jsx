import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiHeart, HiLightBulb, HiGlobe, HiUsers, HiTrendingUp } from 'react-icons/hi';
import { FaQuoteLeft, FaLinkedin, FaTwitter, FaAward } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import CountingNumber from '../components/animations/CountingNumber';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

const OurStory = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const timeline = [
    {
      year: 2015,
      title: 'The Beginning',
      description: 'Founded by three engineers with a vision to revolutionize industrial automation',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      achievements: ['First prototype developed', 'Seed funding secured', 'Team of 5 engineers']
    },
    {
      year: 2017,
      title: 'First Breakthrough',
      description: 'Launched our flagship robotic arm with AI-powered precision control',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
      achievements: ['100+ units sold', 'Series A funding', 'Expanded to 25 employees']
    },
    {
      year: 2019,
      title: 'Global Expansion',
      description: 'Opened manufacturing facilities in Europe and Asia',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      achievements: ['3 global facilities', '1000+ customers', 'ISO certifications']
    },
    {
      year: 2021,
      title: 'Innovation Leadership',
      description: 'Introduced revolutionary IoT platform and sustainable manufacturing',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      achievements: ['Carbon neutral operations', '50+ patents filed', 'Industry awards']
    },
    {
      year: 2024,
      title: 'Future Forward',
      description: 'Leading the industry with AI-driven automation and sustainable technology',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
      achievements: ['500+ global clients', '12 facilities worldwide', 'Market leader']
    }
  ];

  const leadership = [
    {
      name: 'Sarah Chen',
      position: 'CEO & Co-Founder',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former Tesla engineer with 15+ years in robotics and automation. Led the development of our core AI platform.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Marcus Rodriguez',
      position: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'MIT PhD in Mechanical Engineering. Pioneer in sustainable manufacturing technologies and IoT integration.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Aisha Patel',
      position: 'VP of Innovation',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Stanford AI researcher turned industry leader. Holds 25+ patents in machine learning and robotics.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'James Thompson',
      position: 'VP of Operations',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former Boeing executive with expertise in global manufacturing and supply chain optimization.',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const values = [
    {
      icon: HiLightBulb,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology and creative solutions'
    },
    {
      icon: HiHeart,
      title: 'Integrity',
      description: 'Building trust through transparency, honesty, and ethical practices'
    },
    {
      icon: HiGlobe,
      title: 'Sustainability',
      description: 'Protecting our planet through responsible manufacturing and operations'
    },
    {
      icon: HiUsers,
      title: 'Collaboration',
      description: 'Fostering teamwork and partnerships to achieve shared success'
    }
  ];

  const testimonials = [
    {
      name: 'Emily Johnson',
      position: 'Senior Engineer',
      quote: 'Working at TechCorp means being part of something bigger. Every day, we\'re solving problems that matter.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'David Kim',
      position: 'Product Manager',
      quote: 'The innovation culture here is incredible. We\'re encouraged to think big and take calculated risks.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Maria Santos',
      position: 'Manufacturing Lead',
      quote: 'Our commitment to sustainability isn\'t just talk - it\'s embedded in everything we do.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const achievements = [
    { label: 'Years of Innovation', value: 9, suffix: '+' },
    { label: 'Global Employees', value: 1200, suffix: '+' },
    { label: 'Patents Filed', value: 75, suffix: '+' },
    { label: 'Countries Served', value: 50, suffix: '+' }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInWhenVisible className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From a small startup to a global leader in industrial technology, 
            discover the journey that shaped who we are today.
          </p>
        </FadeInWhenVisible>

        {/* Mission Statement */}
        <FadeInWhenVisible className="mb-24">
          <Card className="p-12 text-center bg-gradient-to-r from-accent-neon/10 to-accent-purple/10">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              To revolutionize industrial manufacturing through innovative technology, 
              sustainable practices, and unwavering commitment to quality, creating 
              a more efficient and environmentally responsible future for all.
            </p>
          </Card>
        </FadeInWhenVisible>

        {/* Timeline */}
        <section className="mb-24">
          <FadeInWhenVisible className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Key milestones that defined our path to innovation
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Timeline Navigation */}
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <FadeInWhenVisible key={item.year} delay={index * 0.1}>
                  <Card
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      activeYear === item.year 
                        ? 'border-accent-blue shadow-lg shadow-accent-blue/20' 
                        : 'hover:border-accent-blue/50'
                    }`}
                    onClick={() => setActiveYear(item.year)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                        activeYear === item.year 
                          ? 'bg-accent-blue text-primary-dark' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                        {item.year}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </FadeInWhenVisible>
              ))}
            </div>

            {/* Timeline Details */}
            <div className="sticky top-24">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden">
                  <img
                    src={timeline.find(t => t.year === activeYear)?.image}
                    alt={timeline.find(t => t.year === activeYear)?.title}
                    loading='lazy'
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">
                      {timeline.find(t => t.year === activeYear)?.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {timeline.find(t => t.year === activeYear)?.description}
                    </p>
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {timeline.find(t => t.year === activeYear)?.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <FaAward className="text-accent-blue flex-shrink-0" size={16} />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {achievement}
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

        {/* Leadership Team */}
        <section className="mb-24">
          <FadeInWhenVisible className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Meet the visionaries driving our innovation forward
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <FadeInWhenVisible key={leader.name} delay={index * 0.1}>
                <Card className="p-6 text-center h-full">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading='lazy'
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold mb-1">{leader.name}</h3>
                  <p className=" text-sm mb-3">{leader.position}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {leader.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a href={leader.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <FaLinkedin size={18} />
                    </a>
                    <a href={leader.twitter} className="text-gray-400 hover:text-accent-blue transition-colors">
                      <FaTwitter size={18} />
                    </a>
                  </div>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-24">
          <FadeInWhenVisible className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInWhenVisible key={value.title} delay={index * 0.1}>
                <Card className="p-6 text-center h-full">
                  <value.icon className="text-accent-blue mx-auto mb-4" size={32} />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="mb-24">
          <FadeInWhenVisible className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Team Says
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hear from the people who make our mission possible
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInWhenVisible key={testimonial.name} delay={index * 0.1}>
                <Card className="p-6 h-full">
                  <FaQuoteLeft className="text-accent-blue mb-4" size={24} />
                  <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading='lazy'
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-24">
          <FadeInWhenVisible className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Impact
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <FadeInWhenVisible key={achievement.label} delay={index * 0.1}>
                <Card className="p-6 text-center" gradient={true}>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    <CountingNumber 
                      end={achievement.value} 
                      suffix={achievement.suffix}
                      duration={2000 + index * 200}
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement.label}
                  </p>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* Future Vision */}
        <FadeInWhenVisible>
          <Card className="p-12 text-center bg-gradient-to-r from-accent-neon/10 to-accent-purple/10">
            <HiTrendingUp className="text-accent-blue mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-4">
              Looking Ahead
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Our vision for the next decade includes expanding to 100+ countries, 
              achieving complete carbon neutrality, and pioneering the next generation 
              of AI-powered industrial automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant='outline' size="lg">
                Join Our Team
              </Button>
              <Button variant="outline" size="lg">
                Partner With Us
              </Button>
            </div>
          </Card>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default OurStory;