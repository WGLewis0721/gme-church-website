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
      {/* Hero */}
      <section
        className="bg-purple-deep py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2B0F3A 0%, #5B2C83 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-main text-center relative z-10">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Make a Difference
          </p>
          <h1 className="text-white font-serif font-bold text-4xl md:text-5xl mb-4">
            Give to God&apos;s Work
          </h1>
          <p className="text-silver/80 text-lg max-w-2xl mx-auto mb-8">
            Your generous gifts support our ministry, community outreach, and the ongoing work
            of God through Greater Mt. Olive AME Zion Church.
          </p>
          <Button href={siteConfig.giving.online} external variant="primary">
            Give Online Now
          </Button>
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
              When you give to Greater Mt. Olive AME Zion Church, you are investing in lives
              being changed, families being strengthened, and our community being served. Your
              faithfulness enables us to preach the Gospel, care for the needs of others, and
              fulfill our God-given mission.
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

      {/* Why We Give */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(135deg, #2B0F3A 0%, #5B2C83 100%)" }}
      >
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              eyebrow="The Heart of Giving"
              title="Why We Give"
              centered
              light
            />
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 mb-8">
              <p className="text-gold font-serif text-2xl md:text-3xl font-bold italic mb-4">
                &ldquo;Each of you should give what you have decided in your heart to give, not
                reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
              </p>
              <p className="text-silver/70 text-base">— 2 Corinthians 9:7 (NIV)</p>
            </div>
            <p className="text-silver/80 text-base leading-relaxed mb-6">
              Giving is an act of worship and an expression of trust in God&apos;s provision.
              As we give generously and cheerfully, we participate in the work of His Kingdom —
              impacting lives, funding ministries, and advancing the Gospel in our community
              and beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                { title: "Fund Ministry", desc: "Your gifts power worship services, outreach, and discipleship programs." },
                { title: "Serve Community", desc: "We provide food, resources, and support to families in need." },
                { title: "Grow Together", desc: "Your generosity enables us to grow our facilities and programming." },
              ].map((item) => (
                <div key={item.title} className="bg-white/10 border border-white/20 rounded-xl p-5">
                  <h4 className="text-gold font-semibold text-sm uppercase tracking-wide mb-2">{item.title}</h4>
                  <p className="text-silver/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
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
