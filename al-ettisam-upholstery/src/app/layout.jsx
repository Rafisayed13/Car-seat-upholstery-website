import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './Navbar';

import FloatingContactButtons from '../components/FloatingContactButtons';
import ExternalScripts from './ExternalScripts';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://al-ettisamcarseats.vercel.app/'),
  title: 'Al Ettisam Car Seat Upholstery Dubai',
  description: 'Professional car seat upholstery services in Dubai.',
  openGraph: {
    title: 'Al Ettisam Car Seat Upholstery Dubai',
    description: 'Professional car seat upholstery services in Dubai.',
    url: 'https://al-ettisamcarseats.vercel.app/',
    siteName: 'Al Ettisam Car Seat Upholstery',
    images: [
      {
        url: 'https://al-ettisamcarseats.vercel.app/logo.png',
        width: 800,
        height: 600,
        alt: 'Al Ettisam Car Seat Upholstery Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Ettisam Car Seat Upholstery Dubai',
    description: 'Professional car seat upholstery services in Dubai.',
    site: '@alettisamcarseats',
    images: ['https://al-ettisamcarseats.vercel.app/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full min-h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen bg-gray-100`}
      >
        <Navbar />
        <ExternalScripts />
        <div style={{paddingTop: '64px'}} className="w-full">
          {children}
        </div>
        <FloatingContactButtons />
      </body>
    </html>
  );
}