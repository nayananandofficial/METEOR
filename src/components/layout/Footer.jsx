import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = {
    'Products': [
      { name: 'Industrial Robotics', href: '/products/robotics' },
      { name: 'Automation Systems', href: '/products/automation' },
      { name: 'IoT Solutions', href: '/products/iot' },
      { name: 'AI Platform', href: '/products/ai' },
    ],
    'Company': [
      { name: 'About Us', href: '/our-story' },
      { name: 'Careers', href: '/careers' },
      { name: 'News', href: '/news' },
      { name: 'Sustainability', href: '/sustainability' },
    ],
    'Support': [
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'Contact', href: '/contact' },
      { name: 'Status', href: '/status' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
    { name: 'GitHub', icon: FaGithub, href: '#' },
    { name: 'Instagram', icon: FaInstagram, href: '#' },
  ];

  return (
    <footer className="bg-white dark:bg-primary-dark border-t border-gray-200/20 dark:border-gray-800/50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                {/* METEOR Logo - Enhanced footer version */}
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-wider">
                METEOR
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Leading the future of industrial technology with innovative solutions 
              that transform manufacturing and automation processes worldwide.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <HiLocationMarker className="text-accent-blue" size={20} />
                <span>San Francisco, CA 94102</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <HiPhone className="text-accent-blue" size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <HiMail className="text-accent-blue" size={20} />
                <span>hello@meteor.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-accent-blue transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200/20 dark:border-gray-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 METEOR. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-accent-blue hover:dark:text-accent-blue transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;