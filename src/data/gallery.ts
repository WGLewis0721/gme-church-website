export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=400&fit=crop",
    alt: "Church congregation worshipping",
    caption: "Sunday Morning Worship",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop",
    alt: "Church interior with pews",
    caption: "Our Sanctuary",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1548625149-720754874b31?w=600&h=400&fit=crop",
    alt: "Community gathering",
    caption: "Community Fellowship",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop",
    alt: "Bible study group",
    caption: "Wednesday Bible Study",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1618977600099-ac0b0b93ef97?w=600&h=400&fit=crop",
    alt: "Choir performing",
    caption: "Praise & Worship",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=600&h=400&fit=crop",
    alt: "Youth group activity",
    caption: "Youth Ministry",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=600&h=400&fit=crop",
    alt: "Prayer circle",
    caption: "Prayer Service",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop",
    alt: "Church community event",
    caption: "Community Outreach",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=600&h=400&fit=crop",
    alt: "Church exterior",
    caption: "Our Church Home",
  },
];
