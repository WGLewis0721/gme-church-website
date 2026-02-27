import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import InfoCard from "@/components/InfoCard";
import Button from "@/components/Button";
import { siteConfig } from "@/data/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give | Greater Mt. Olive AME Zion Church",
};

export default function GivePage() {
  return (
    <>
      {/* Hero — split layout */}
      <section className="relative overflow-hidden" style={{ minHeight: "340px" }}>
        <div className="grid md:grid-cols-2" style={{ minHeight: "340px" }}>
          {/* Left: Text */}
          <div
            className="flex flex-col justify-center px-8 py-20 md:py-28 relative z-10"
            style={{ background: "var(--gradient-purple-deep)" }}
          >
            <h1 className="text-white font-serif font-bold text-5xl md:text-6xl mb-4">
              Give
            </h1>
            <p className="text-silver/80 text-base max-w-sm leading-relaxed">
              Your generous offerings, donations, and tithes support the mission and
              ministry of Greater Mt. Olive AME Zion Church. Thank you for helping us
              spread the love of Christ in our community and beyond.
            </p>
          </div>
          {/* Right: Church photo */}
          <div className="relative min-h-[260px]">
            <Image
              src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&h=600&fit=crop"
              alt="Church congregation worshipping"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-purple-deep/20" />
          </div>
        </div>
      </section>

      {/* Support Our Ministry Intro */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              eyebrow="Your Gift Matters"
              title="Support Our Ministry"
              subtitle="Every gift, no matter the size, makes a real impact in our church and community."
              centered
            />
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Your generous offerings, donations, and tithes support the mission and ministry
              of Greater Mt. Olive AME Zion Church. Thank you for helping us spread the love
              of Christ in our community and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Three Giving Method Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeader
            eyebrow="Ways to Give"
            title="Choose Your Giving Method"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Give Online */}
            <InfoCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Give Online"
              description="Give securely online anytime, anywhere. Quick, safe, and easy to set up recurring gifts to support the church consistently."
              actionLabel="Give Online Now"
              actionHref={siteConfig.giving.online}
              external
            />

            {/* Text to Give */}
            <InfoCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
              title="Text to Give"
              description={`Give instantly by text message. Text "GIVE" to ${siteConfig.giving.textToGive} and follow the simple steps to complete your gift from your phone.`}
              actionLabel={`Text ${siteConfig.giving.textToGive}`}
              actionHref={`sms:${siteConfig.giving.textToGive}`}
            />

            {/* By Mail */}
            <InfoCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="By Mail"
              description={`You may also mail your tithe or offering to our church office. Make checks payable to "Greater Mt. Olive AME Zion Church."`}
              actionLabel="View Mailing Address"
              actionHref="#mailing-address"
            />
          </div>

          {/* Mailing address detail */}
          <div id="mailing-address" className="mt-8 bg-white border border-silver/40 rounded-xl p-6 max-w-md mx-auto text-center card-shadow">
            <h4 className="text-purple-deep font-serif font-bold text-lg mb-2">Mailing Address</h4>
            <p className="text-gray-600">Greater Mt. Olive AME Zion Church</p>
            <p className="text-gray-600">{siteConfig.giving.mailAddress}</p>
          </div>
        </div>
      </section>

      {/* Why We Give — side-by-side layout */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden card-shadow">
              <Image
                src="https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=600&h=450&fit=crop"
                alt="Church offering plate with congregation"
                fill
                className="object-cover"
              />
            </div>
            {/* Right: Text */}
            <div>
              <SectionHeader eyebrow="The Heart of Giving" title="Why We Give" />
              <p className="text-gray-600 leading-relaxed mb-3">
                Giving is an act of worship and obedience, reflecting our gratitude for
                God&apos;s blessings.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your support enables us to continue our programs, maintain our place of
                worship, and reach out to those in need.
              </p>
              <blockquote className="border-l-4 border-gold pl-5">
                <p className="text-purple-deep font-serif italic text-base leading-relaxed mb-2">
                  &ldquo;Each of you should give what you have decided in your heart to give, not
                  reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
                </p>
                <footer className="text-gray-500 text-sm not-italic">
                  — 2 Corinthians 9:7
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-main">
          <h2 className="text-purple-deep font-serif font-bold text-3xl mb-4">
            Ready to Give?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Thank you for your faithful and generous support of God&apos;s work through
            Greater Mt. Olive AME Zion Church.
          </p>
          <Button href={siteConfig.giving.online} external variant="primary">
            Give Online Now
          </Button>
        </div>
      </section>
    </>
  );
}
