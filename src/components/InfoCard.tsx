interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  external?: boolean;
}

export default function InfoCard({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
  external = false,
}: InfoCardProps) {
  return (
    <div className="bg-white border border-silver/40 rounded-xl p-8 card-shadow text-center flex flex-col items-center">
      <div className="w-16 h-16 bg-purple-primary/10 rounded-full flex items-center justify-center mb-4 text-purple-primary">
        {icon}
      </div>
      <h3 className="text-purple-deep font-serif font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{description}</p>
      {external ? (
        <a
          href={actionHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-purple-deep font-semibold py-3 px-6 rounded-lg hover:bg-gold-dark transition-all duration-200 w-full text-center"
        >
          {actionLabel}
        </a>
      ) : (
        <a
          href={actionHref}
          className="bg-gold text-purple-deep font-semibold py-3 px-6 rounded-lg hover:bg-gold-dark transition-all duration-200 w-full text-center"
        >
          {actionLabel}
        </a>
      )}
    </div>
  );
}
