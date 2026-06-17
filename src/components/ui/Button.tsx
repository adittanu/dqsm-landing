import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'ghost' | 'outline';

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  ghost: 'btn-ghost',
  outline: 'btn-outline',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', className = '', children, ...rest },
  ref
) {
  return (
    <button ref={ref} className={`${variantClass[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
});

export function LinkButton({ variant = 'primary', className = '', children, to, ...rest }: LinkProps) {
  return (
    <Link to={to} className={`${variantClass[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
