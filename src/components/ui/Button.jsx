import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const buttonVariants = {
  filled: 'bg-gradient text-primary-dark hover:bg-accent-blue/90 focus:ring-accent-blue/50',
  ghost: 'text-accent-blue hover:bg-accent-blue/10 focus:ring-accent-blue/50',
  outline: 'border-2 border-sky-900 text-sky-800 dark:border-sky-600 dark:text-sky-500 hover:bg-accent-purple/30  hover:text-primary-dark focus:ring-accent-blue/50',
  secondary: 'bg-accent-purple text-white hover:bg-accent-purple/90 focus:ring-accent-purple/50',
  link: 'text-gradient'
};

const sizeVariants = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = forwardRef(({ 
  children, 
  variant = 'filled', 
  size = 'md', 
  className = '', 
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';
  
  const classes = `${baseClasses} ${buttonVariants[variant]} ${sizeVariants[size]} ${className}`;

  return (
    <motion.button
      ref={ref}
      className={classes}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;