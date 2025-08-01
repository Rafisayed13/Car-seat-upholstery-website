import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './Navbar';
import FloatingContactButtons from '../components/FloatingContactButtons';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Al Ettisam Car Seat Upholstery",
  description: "Al Ettisam provides expert car seat upholstery, custom leather interiors, and professional repairs in Dubai. Transform your car's interior with our quality craftsmanship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full min-h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen bg-gray-100`}
      >
        <Navbar />
        <div style={{paddingTop: '64px'}} className="w-full">
          {children}
        </div>
        <FloatingContactButtons />
      </body>
    </html>
  );
}