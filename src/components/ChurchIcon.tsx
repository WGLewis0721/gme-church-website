interface ChurchIconProps {
  className?: string;
}

export default function ChurchIcon({ className = "" }: ChurchIconProps) {
  return (
    <div className={`w-10 h-10 bg-purple-primary border-2 border-gold/40 rounded-full flex items-center justify-center flex-shrink-0 ${className}`}>
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    </div>
  );
}
