import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Philip Joel | Portfolio",
  description:
    "Student entrepreneur building brands, websites, and content systems. Founder at Ausdauer Groups.",
  keywords: [
    "Philip Joel",
    "Portfolio",
    "Brand Strategy",
    "Web Design",
    "Content Strategy",
    "Student Entrepreneur",
  ],
  authors: [{ name: "Philip Joel" }],
  openGraph: {
    title: "Philip Joel | Portfolio",
    description:
      "Building brands, content systems, and websites. Founder at Ausdauer Groups.",
    url: "https://your-vercel-link.vercel.app",
    siteName: "Philip Joel Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}