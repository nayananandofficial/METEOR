import { forwardRef } from 'react';

const Input = forwardRef(({ 
  label, 
  error, 
  className = '', 
  type = 'text',
  ...props 
}, ref) => {
  const baseClasses = 'w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue bg-white/5 backdrop-blur-sm';
  const errorClasses = error 
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' 
    : 'border-gray-300/30 dark:border-gray-600/30';
  
  const classes = `${baseClasses} ${errorClasses} ${className}`;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={classes}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;