import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  gradient = false,
  ...props 
}) => {
  const baseClasses = 'rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';
  const gradientClasses = gradient 
    ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20' 
    : 'bg-white/10 dark:bg-gray-800/50 border border-gray-200/20 dark:border-gray-700/30';
  
  const classes = `${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`;

  return (
    <motion.div
      className={classes}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;