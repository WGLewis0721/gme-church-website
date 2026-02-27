import SectionHeader from "@/components/SectionHeader";
import VideoEmbed from "@/components/VideoEmbed";
import Button from "@/components/Button";
import { siteConfig } from "@/data/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Service",
  description:
    "Watch Greater Mt. Olive AME Zion Church live every Sunday at 10:30 AM CT. Stream our worship service or catch the latest recording on YouTube.",
  openGraph: {
    title: "Live Service | Greater Mt. Olive AME Zion Church",
    description:
      "Watch our Sunday morning worship service live every Sunday at 10:30 AM CT. Join us from anywhere in the world.",
  },
};

export default function LivePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-purple-deep py-14 md:py-20"
        style={{ background: "linear-gradient(135deg, #2B0F3A 0%, #5B2C83 100%)" }}
      >
        <div className="container-main text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/50 rounded-full px-4 py-1 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-300 font-semibold text-sm">Live Sundays at 10:30 AM</span>
          </div>
          <h1 className="text-white font-serif font-bold text-4xl md:text-5xl mb-4">
            Join Us Live
          </h1>
          <p className="text-silver/80 text-lg max-w-xl mx-auto">
            Watch our Sunday morning worship service live, or catch the latest recording below.
          </p>
        </div>
      </section>

      {/* Live Stream Embed */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <VideoEmbed
              src={`https://www.youtube.com/embed/live_stream?channel=${siteConfig.liveStream.youtubeChannelId}&autoplay=0`}
              title="Greater Mt. Olive Live Service"
            />
            <div className="mt-6 bg-purple-deep/5 border border-silver/40 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <h3 className="text-purple-deep font-serif font-bold text-xl">
                    Service Time Reminder
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Join us live every Sunday at 10:30 AM CT. Wednesday Bible Study at 7:00 PM.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-red-700 transition-colors text-sm"
                  >
                    Subscribe on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Give CTA */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(135deg, #2B0F3A 0%, #5B2C83 100%)" }}
      >
        <div className="container-main text-center">
          <SectionHeader
            eyebrow="Support Our Ministry"
            title="Give Online"
            subtitle="Your generous giving enables us to continue spreading the gospel and serving our community. Give securely today."
            centered
            light
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.giving.online} external variant="primary">
              Give Online Now
            </Button>
            <Button href="/give" variant="lightGhost">
              Learn About Giving
            </Button>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeader
            eyebrow="Plan Your Visit"
            title="Service Schedule"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {siteConfig.serviceTimes.map((service, i) => (
              <div
                key={i}
                className="bg-white border border-silver/40 rounded-xl p-6 text-center card-shadow"
              >
                <p className="text-purple-primary font-bold text-3xl mb-1">{service.time}</p>
                <p className="text-purple-deep font-semibold text-lg mb-1">{service.day}</p>
                <p className="text-gray-500 text-sm">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
