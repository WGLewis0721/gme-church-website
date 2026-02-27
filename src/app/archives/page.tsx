import SectionHeader from "@/components/SectionHeader";
import SermonCard from "@/components/SermonCard";
import { sermons } from "@/data/archives";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermon Archives | Greater Mt. Olive AME Zion Church",
};

export default function ArchivesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-purple-deep py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #2B0F3A 0%, #5B2C83 100%)" }}
      >
        <div className="container-main text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Sermon Library
          </p>
          <h1 className="text-white font-serif font-bold text-4xl md:text-5xl mb-4">
            Sermon Archives
          </h1>
          <p className="text-silver/80 text-lg max-w-2xl mx-auto">
            Browse and watch our collection of messages from our pulpit. Be encouraged,
            challenged, and transformed by the Word of God.
          </p>
        </div>
      </section>

      {/* Archives Grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader
            eyebrow={`${sermons.length} Messages`}
            title="All Sermons"
            subtitle="Click to watch any message on YouTube."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sermons.map((sermon) => (
              <SermonCard key={sermon.id} sermon={sermon} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
