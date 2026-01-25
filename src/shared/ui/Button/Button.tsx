type ButtonVariant = 'gradient' | 'outline';

// extends htmlButton element
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

// base styles for all buttons
const baseStyles = ' font-medium px-5 py-2  md:rounded-4xl text-lg';

const variantStyles: Record<ButtonVariant, string> = {
  gradient: 'primary-gradient text-white hover:shadow-xl',
  outline: 'border-2 border-border-gray hover:border-indigo-200',
};

const Button = ({ variant, className = '', ...props }: ButtonProps) => {
  return <button {...props} className={`${baseStyles} ${variantStyles[variant]} ${className}`} />;
};
export default Button;
