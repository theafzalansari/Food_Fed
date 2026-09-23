/**
 * Site Configuration for Food Fed
 * Easily edit configuration values such as your Google Form URL here.
 */

export const siteConfig = {
  // Replace this placeholder with your actual Google Form URL (e.g. "https://forms.gle/XXXXX" or "https://docs.google.com/forms/d/e/...")
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-food-fed-feedback/viewform',

  // Optional: Replace with your Google Form Embed URL if you wish to embed it directly in the page
  // Example: "https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?embedded=true"
  googleFormEmbedUrl: '',

  location: {
    city: 'Nashik',
    state: 'Maharashtra',
    tagline: 'Currently serving Nashik • Maharashtra',
  },

  contacts: [
    {
      name: 'Afzal Ansari',
      role: 'Founder & Director – Strategy & Technology',
      phoneDisplay: '+91 82082 57784',
      phoneRaw: '8208257784',
      waUrl: 'https://wa.me/918208257784',
      initials: 'AA',
      isLead: true,
    },
    {
      name: 'Sahil Bhalerao',
      role: 'Co-Founder & Director – Operations & Community',
      phoneDisplay: '+91 93258 89516',
      phoneRaw: '+919325889516',
      waUrl: 'https://wa.me/919325889516',
      initials: 'SB',
      isLead: true,
    },
  ],

  team: [
    {
      name: 'Afzal Ansari',
      role: 'Founder & Director',
      subrole: 'Strategy & Technology',
      initials: 'AA',
      badge: 'Director',
      featured: true,
    },
    {
      name: 'Sahil Bhalerao',
      role: 'Co-Founder & Director',
      subrole: 'Operations & Community',
      initials: 'SB',
      badge: 'Director',
      featured: true,
    },
    {
      name: 'Mahendra Ahire',
      role: 'Community Outreach & Partnerships',
      subrole: 'Local Engagement',
      initials: 'M',
      badge: 'Outreach',
      featured: false,
    },
    {
      name: 'Siddhesh Gaikwad',
      role: 'Logistics & Food Safety',
      subrole: 'Safety Protocol',
      initials: 'S',
      badge: 'Logistics',
      featured: false,
    },
    {
      name: 'Rushikesh Gaikwad',
      role: 'Volunteer & Field Coordination',
      subrole: 'Ground Execution',
      initials: 'R',
      badge: 'Coordination',
      featured: false,
    },
  ],
};
