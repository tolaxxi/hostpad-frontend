type ButtonVariant = 'gradient' | 'outline';

// extends htmlButton element
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

// base styles for all buttons
const baseStyles = ' font-medium px-5 py-2 rounded-4xl text-lg';

const variantStyles: Record<ButtonVariant, string> = {
  gradient: 'primary-gradient text-white',
  outline: 'border-2 border-border',
};

const Button = ({ variant, className = '', ...props }: ButtonProps) => {
  return <button {...props} className={`${baseStyles} ${variantStyles[variant]} ${className}`} />;
};
export default Button;
