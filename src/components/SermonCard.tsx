import type { Sermon } from "@/data/archives";
import VideoEmbed from "./VideoEmbed";

interface SermonCardProps {
  sermon: Sermon;
  featured?: boolean;
}

export default function SermonCard({ sermon, featured = false }: SermonCardProps) {
  return (
    <article className={`bg-white border border-silver/40 rounded-xl overflow-hidden card-shadow ${featured ? "md:flex" : ""}`}>
      {/* Video Thumbnail / Embed */}
      <div className={featured ? "md:w-1/2" : ""}>
        <VideoEmbed src={sermon.youtubeUrl} title={sermon.title} />
      </div>

      {/* Content */}
      <div className={`p-5 ${featured ? "md:w-1/2 md:p-8 flex flex-col justify-center" : ""}`}>
        {sermon.series && (
          <span className="text-gold font-semibold text-xs uppercase tracking-wide">
            {sermon.series}
          </span>
        )}
        <h3 className="text-purple-deep font-serif font-bold text-xl mt-1 mb-2 leading-snug">
          {sermon.title}
        </h3>
        <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
          <span>{sermon.date}</span>
          <span>·</span>
          <span>{sermon.speaker}</span>
        </div>
        {sermon.description && (
          <p className="text-gray-600 text-sm leading-relaxed">{sermon.description}</p>
        )}
        <a
          href={sermon.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-purple-primary font-semibold text-sm hover:text-purple-light transition-colors"
        >
          Watch on YouTube
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}
