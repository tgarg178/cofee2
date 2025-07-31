import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapClient from '@/components/BootstrapClient'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Toaster } from "react-hot-toast";
import { Poppins } from 'next/font/google';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
export const metadata = {
  title: "Innovative Coffee Processing Solutions | Turnkey Plant Engineering",
  description:
    "We specialize in advanced, energy-efficient coffee processing systems—from green bean handling to instant coffee production. Discover engineered excellence built for quality, consistency, and sustainability.",
  keywords:
    "We specialize in advanced, energy-efficient coffee processing systems—from green bean handling to instant coffee production. Discover engineered excellence built for quality, consistency, and sustainability.",
  openGraph: {
    title: "Innovative Coffee Processing Solutions | Turnkey Plant Engineering",
    description:
      "We specialize in advanced, energy-efficient coffee processing systems—from green bean handling to instant coffee production. Discover engineered excellence built for quality, consistency, and sustainability.",
    url: "https://qualityindustries.global/",
    images: [
      {
        url: "https://qualityindustries.global/img/logo.png",
        width: 800,
        height: 600,
        alt: "Innovative Coffee Processing Solutions | Turnkey Plant Engineering",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://qualityindustries.global/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative Coffee Processing Solutions | Turnkey Plant Engineering",
    description: "We specialize in advanced, energy-efficient coffee processing systems—from green bean handling to instant coffee production. Discover engineered excellence built for quality, consistency, and sustainability.",
    images: ["https://qualityindustries.global/img/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >  <BootstrapClient />     
      {/* <Navbar /> */}
            <Toaster position="top-right" />
        {children}
         <Footer />
      </body>
    </html>
  );
}
