import SectionHeader from "@/components/SectionHeader";
import GalleryGrid from "@/components/GalleryGrid";
import { siteConfig } from "@/data/siteConfig";
import { galleryImages } from "@/data/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the history, mission, leadership, and community of Greater Mt. Olive AME Zion Church in Hayneville, Alabama.",
  openGraph: {
    title: "About Us | Greater Mt. Olive AME Zion Church",
    description:
      "Learn about our history, mission, and the people who make Greater Mt. Olive a home for all who seek God.",
  },
};

const leadership = [
  {
    name: "Rev. Marcus Johnson",
    title: "Senior Pastor",
    bio: "Rev. Marcus Johnson has served Greater Mt. Olive AME Zion Church with faithfulness and vision for over a decade. He holds a Master of Divinity and is passionate about community transformation and expository preaching.",
    initials: "MJ",
  },
  {
    name: "Sis. Dorothy Williams",
    title: "Assistant Pastor",
    bio: "Sis. Dorothy Williams is a gifted teacher and shepherd who brings warmth and depth to every message. She leads our women's ministry and Bible study programs with dedicated care.",
    initials: "DW",
  },
  {
    name: "Deacon Thomas Brown",
    title: "Head Deacon",
    bio: "Deacon Thomas Brown serves faithfully as the head of our diaconate ministry, ensuring the spiritual and practical care of our congregation. He has been a pillar of this church for over 20 years.",
    initials: "TB",
  },
  {
    name: "Sis. Angela Davis",
    title: "Minister of Music",
    bio: "Sis. Angela Davis leads our praise and worship team with excellence and anointing. Under her leadership, our choir has become a powerful vessel for the move of God.",
    initials: "AD",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-purple-deep py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #2B0F3A 0%, #5B2C83 100%)" }}
      >
        <div className="container-main text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="text-white font-serif font-bold text-4xl md:text-5xl mb-4">
            About Our Church
          </h1>
          <p className="text-silver/80 text-lg max-w-2xl mx-auto">
            Learn about our history, mission, and the people who make Greater Mt. Olive a
            home for all who seek God.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              eyebrow="Our Mission"
              title="Why We Exist"
              centered
            />
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Greater Mt. Olive AME Zion Church exists to glorify God by making disciples who
              are rooted in Scripture, connected in community, and sent in service. We believe
              that every person is created in the image of God and has a divine purpose — and
              our mission is to help each individual discover and live that purpose.
            </p>
            <div className="bg-purple-deep/5 border-l-4 border-gold rounded-r-xl p-6 text-left">
              <p className="text-purple-deep font-serif text-xl italic leading-relaxed">
                &ldquo;Rooted in Faith. Growing in Grace. Serving in Love.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeader
            eyebrow="Our Team"
            title="Church Leadership"
            subtitle="Meet the dedicated servants who shepherd our congregation."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-xl p-6 card-shadow border border-silver/30 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-purple-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-serif font-bold text-xl">
                    {leader.initials}
                  </span>
                </div>
                <h3 className="text-purple-deep font-serif font-bold text-lg mb-1">
                  {leader.name}
                </h3>
                <p className="text-gold font-semibold text-xs uppercase tracking-wide mb-3">
                  {leader.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(135deg, #2B0F3A 0%, #5B2C83 100%)" }}
      >
        <div className="container-main">
          <SectionHeader
            eyebrow="Join Us"
            title="Service Schedule"
            subtitle="We'd love to worship with you. Come as you are."
            centered
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {siteConfig.serviceTimes.map((service, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 rounded-xl p-6 text-center"
              >
                <p className="text-gold font-bold text-4xl mb-1">{service.time}</p>
                <p className="text-white font-semibold text-lg mb-1">{service.day}</p>
                <p className="text-silver/70 text-sm">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Find Us"
                title="Our Location"
                subtitle="We are conveniently located in the heart of Hayneville, Alabama."
              />
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">{siteConfig.location.fullAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-xl h-64 md:h-80 flex items-center justify-center border border-silver/40">
              <div className="text-center text-gray-400">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-sm">Map Placeholder</p>
                <p className="text-xs mt-1">{siteConfig.location.fullAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeader
            eyebrow="Get Involved"
            title="Our Ministries"
            subtitle="Discover where your gifts and passions can serve God and community."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.ministries.map((ministry) => (
              <div
                key={ministry.name}
                className="bg-white border border-silver/40 rounded-xl p-6 card-shadow flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-purple-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-purple-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-purple-deep font-serif font-bold text-base mb-1">
                    {ministry.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {ministry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeader
            eyebrow="Our Community"
            title="Life at Greater Mt. Olive"
            subtitle="A glimpse into our church family."
            centered
          />
          <GalleryGrid images={galleryImages} columns={3} />
        </div>
      </section>
    </>
  );
}
