interface VideoEmbedProps {
  src: string;
  title: string;
  className?: string;
}

export default function VideoEmbed({ src, title, className = "" }: VideoEmbedProps) {
  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-xl ${className}`}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
