interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif font-bold text-3xl md:text-4xl leading-tight ${light ? "text-white" : "text-purple-deep"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-silver/80" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gold rounded-full ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
