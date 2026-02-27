import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-gold text-purple-deep font-semibold py-3 px-6 rounded-lg hover:bg-gold-dark transition-all duration-200",
  secondary: "border-2 border-purple-primary text-purple-primary font-semibold py-3 px-6 rounded-lg hover:bg-purple-primary hover:text-white transition-all duration-200",
  ghost: "text-purple-primary font-semibold py-2 px-4 rounded-lg hover:bg-purple-primary/10 transition-all duration-200",
};

export default function Button({
  children,
  variant = "primary",
  href,
  external = false,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-block ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
