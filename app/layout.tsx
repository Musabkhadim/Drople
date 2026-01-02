import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./_client-layout"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Drople – Web Development, Digital Marketing & Video Editing",
  description:
    "Drople offers professional web development, digital marketing, and video editing services. Build modern websites, grow your brand, and create engaging videos for your business.",
  keywords: [
    "web development services",
    "Next.js development",
    "React development",
    "WordPress development",
    "responsive web design",
    "e-commerce development",
    "frontend development",
    "backend development",
    "full stack development",
    "custom website design",

    // Digital Marketing
    "digital marketing services",
    "SEO services",
    "social media marketing",
    "content marketing",
    "YouTube SEO",
    "brand growth strategies",
    "PPC campaigns",
    "email marketing",
    "online marketing",

    // Video Editing
    "video editing services",
    "professional video editor",
    "YouTube video editor",
    "documentary video editor",
    "short form video editing",
    "reels and shorts editing",
    "motion graphics designer",
    "visual storytelling",
    "CapCut editor",
    "Adobe Premiere Pro editor",
    "DaVinci Resolve editor",

    "Awais Zakir",
    "Musab Khadim",
    "Awais Zakir portfolio",
    "Musab Khadim official website",
   "Portfolio Website Developer",
    "Awais Zakir personal portfolio",
    "Awais Zakir Drople",
    "Co-Founder of Drople",
    "Awais Zakir Creative Director",
     "Awais Zakir official website",
    "Musab Khadim portfolio",
     "Musab khadim Co-Founder of Drople",
     
    

  ],
   icons: {
    icon: "/logo.png", 
    shortcut: "/logo.png",
    apple: "/apple-touch-icon.png", 
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drople.site",
    siteName: "Drople",
    title: "Drople – Web Development, Digital Marketing & Video Editing",
    description:
      "Professional services in web development, digital marketing, and video editing. Build websites, grow your brand, and create engaging video content.",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1D4059",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VGS5Z40CMQ"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VGS5Z40CMQ');` }} />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
