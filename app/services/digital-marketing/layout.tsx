import React from 'react';

export const metadata = {
  title: "Digital Marketing Services | Drople Agency",
  description:
    "Comprehensive digital marketing solutions to grow your online presence. SEO, social media, content marketing, PPC, and branding strategies that deliver measurable results.",
  keywords: [
    // Branding & Personal
    "Drople digital agency",
    "Digital marketing services",
    "Digital marketing agency",
    "Professional digital marketer",
    "Digital marketing expert",

    // SEO
    "SEO optimization",
    "Keyword research",
    "On-page SEO",
    "Technical SEO",
    "Link building",
    "SEO campaign",
    "YouTube SEO",
    "Content SEO",

    // Social Media
    "Social media marketing",
    "Social media strategy",
    "Content strategy",
    "Community management",
    "Paid social advertising",
    "Facebook ads",
    "Instagram marketing",
    "LinkedIn marketing",
    "Social media campaigns",

    // Content Marketing
    "Content marketing",
    "Blog writing services",
    "Video content marketing",
    "Email marketing campaigns",
    "Infographics design",
    "Email automation",
    "Lead generation content",

    // PPC / Paid Ads
    "PPC campaigns",
    "Google Ads management",
    "Facebook Ads campaigns",
    "ROI focused advertising",
    "Campaign management",
    "Paid search marketing",

    // Branding & Strategy
    "Brand building",
    "Brand awareness campaigns",
    "Visual branding",
    "Brand storytelling",
    "Digital marketing strategy",
    "Creative marketing solutions",
    "Marketing analytics",
    "Data-driven marketing",
    "Targeted marketing",
    "Marketing performance",
    "Conversion optimization",
    "Digital campaign ROI",

    // Location / Service area
    "Digital marketing Pakistan",
    "Islamabad digital marketing",
    "Marketing agency Pakistan",
    
    // Call to Action
    "Hire digital marketing agency",
    "Hire digital marketing expert",
    "Hire Drople for marketing"
  ],
  openGraph: {
    title: "Digital Marketing Services | Drople Agency",
    description:
      "Grow your online presence with comprehensive digital marketing services including SEO, social media, content marketing, PPC campaigns, and branding strategies that deliver measurable results.",
    url: "https://drople.site/digital-marketing",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}