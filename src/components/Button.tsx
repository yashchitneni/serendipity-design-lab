
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'default',
  className,
  href,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-montserrat font-medium transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-serendipity-teal";
  
  const variants = {
    primary: "bg-serendipity-teal text-white hover:bg-serendipity-teal/90 shadow-md hover:shadow-lg",
    secondary: "bg-serendipity-gold text-serendipity-dark hover:bg-serendipity-gold/90 shadow-md hover:shadow-lg",
    outline: "border border-serendipity-teal text-serendipity-teal hover:bg-serendipity-teal/10"
  };
  
  const sizes = {
    default: "text-sm px-5 py-2.5",
    sm: "text-xs px-3 py-2",
    lg: "text-base px-6 py-3"
  };
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
