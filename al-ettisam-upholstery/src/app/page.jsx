

import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Car Seat Upholstery Dubai | Car Seats, Seat Repair & Custom Interiors | Al Ettisam',
  description: 'Looking for car seats, car seat upholstery, seat repair, or custom leather interiors in Dubai? Al Ettisam provides expert car seat repair, upholstery, restoration, and custom interiors for all vehicles. Transform your car’s interior with our quality craftsmanship and professional service.',
  keywords: 'car seats, car seat upholstery, seat repair, car seat repair Dubai, car upholstery Dubai, leather car seats, custom car interiors, car seat restoration, car seat replacement, car seat covers, Al Ettisam',
  openGraph: {
    title: 'Car Seat Upholstery Dubai | Car Seats, Seat Repair & Custom Interiors | Al Ettisam',
    description: 'Find car seats, car seat upholstery, seat repair, and custom interiors in Dubai. Al Ettisam offers expert car seat repair, restoration, and luxury leather interiors.',
    url: 'https://al-ettisam-upholstery.com',
    images: [
      {
        url: '/hero-car.jpg',
        width: 1200,
        height: 630,
        alt: 'Car seat upholstery, repair, and custom interiors in Dubai by Al Ettisam',
      },
    ],
  },
};

const HomePage = () => {
  return (
    <>
      {/* Navbar is now included globally in layout.jsx */}
      <main className="pt-0 md:pt-0">
        {/* Hero Section */}
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] flex items-center justify-center text-white animate-fade-in">
          <Image
            src="/hero-car.jpg"
            alt="Dubai car seat upholstery - luxury interior by Al Ettisam"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 text-center px-2 sm:px-4 animate-slide-up mt-8 sm:mt-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Al Ettisam Car Seat Upholstery in Dubai
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              Transform your car's interior with our expert custom upholstery, leather interiors, and professional repair services.
            </p>
            <a href="#contact" className="inline-block" aria-label="Get a Free Quote">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300">
                Get a Free Quote
              </button>
            </a>
          </div>
        </div>
        {/* Services Section - Redesigned */}
        <section className="py-10 sm:py-14 md:py-20 bg-gray-900 text-white animate-fade-in" id="services">
          <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services in Dubai</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Choose from a wide range of custom upholstery, repairs, and interior designs tailored to your style.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Service Card 1 */}
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl flex flex-col bg-black bg-opacity-70 transition-transform duration-500 hover:scale-105 animate-zoom-in mb-6">
                <div className="w-full h-40 relative">
                  <Image src="/service-1.jpg" alt="Customised Leather Seats" fill style={{ objectFit: 'cover' }} className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">Customised Leather Seats</h3>
                  <p className="text-gray-300 text-sm mb-4">Premium customised leather seats for unmatched comfort and style.</p>
                  <div className="flex justify-center space-x-4">
                    <a href="tel:0554969599" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-full transition-colors duration-300">
                      Call Us
                    </a>
                    <a href="https://wa.me/971551010341" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              {/* Service Card 2 */}
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl flex flex-col bg-black bg-opacity-70 transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <div className="w-full h-40 relative">
                  <Image src="/service-2.jpg" alt="Repair & Restoration" fill style={{ objectFit: 'cover' }} className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">Repair & Restoration</h3>
                  <p className="text-gray-300 text-sm mb-4">Professional repair of torn or damaged seats, as well as restoration of classic car interiors.</p>
                  <div className="flex justify-center space-x-4">
                    <a href="tel:0554969599" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-full transition-colors duration-300">
                      Call Us
                    </a>
                    <a href="https://wa.me/971551010341" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              {/* Service Card 3 */}
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl flex flex-col bg-black bg-opacity-70 transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <div className="w-full h-40 relative">
                  <Image src="/service-3.png" alt="Steering Wheel Customization" fill style={{ objectFit: 'cover' }} className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">Steering Wheel Customization</h3>
                  <p className="text-gray-300 text-sm mb-4">Upgrade your steering wheel with premium materials like carbon fiber, leather wrapping, and custom finishes for a sporty, luxurious feel.</p>
                  <div className="flex justify-center space-x-4">
                    <a href="tel:0554969599" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-full transition-colors duration-300">
                      Call Us
                    </a>
                    <a href="https://wa.me/971551010341" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery Section */}
        <section className="py-10 sm:py-14 md:py-20 animate-fade-in" id="gallery">
          <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Car Upholstery Gallery – Dubai Projects</h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
              Browse our portfolio of recent car seat upholstery, seat repair, and custom interior projects in Dubai. See how Al Ettisam transforms car seats, repairs damaged upholstery, and creates luxury interiors for all vehicle types. If you’re searching for car seats, car seat upholstery, or seat repair in Dubai, our gallery showcases the best results and craftsmanship.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8">
              {/* Gallery Image 1 */}
              <div className="relative aspect-square transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <Image 
                  src="/gallery-image-1.jpg"
                  alt="Car seat before upholstery repair - Al Ettisam Dubai, car seat repair, car seat upholstery"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              {/* Gallery Image 2 */}
              <div className="relative aspect-square transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <Image 
                  src="/gallery-image-2.jpg"
                  alt="Custom leather car seat after upholstery - Al Ettisam Dubai, car seats, leather car seats"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              {/* Gallery Image 3 */}
              <div className="relative aspect-square transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <Image 
                  src="/gallery-image-3.jpg"
                  alt="Embroidered logo on car seat headrest - Al Ettisam Dubai, custom car interiors"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              {/* Gallery Image 4 */}
              <div className="relative aspect-square transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <Image 
                  src="/gallery-image-4.jpg"
                  alt="Restored classic car interior - Al Ettisam Dubai, seat restoration, car seat covers"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              {/* Add more images here... */}
            </div>
          </div>
        </section>
        {/* Google Reviews Section */}
        <section className="py-10 sm:py-14 md:py-20 bg-gray-100 animate-fade-in" id="reviews">
          <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-2">
              <span>Google Reviews</span>
              <Image src="/google-logo.png" alt="Google logo" width={32} height={32} className="inline-block align-middle" />
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              See what our customers are saying about our premium car upholstery services.
            </p>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-xl max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-2">EXCELLENT</h3>
              <div className="flex justify-center text-yellow-400 text-3xl mb-2 space-x-1">
                <span className="relative z-10">★</span>
                <span className="relative z-10">★</span>
                <span className="relative z-10">★</span>
                <span className="relative z-10">★</span>
                <span className="relative z-10">★</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Based on 35 reviews</p>
              <div className="text-center mb-6">
                <p className="italic text-gray-700">"The service is excellent and fast, and the staff are very professional."</p>
                <p className="text-sm text-gray-500 mt-2">- Farida Ali</p>
              </div>
              <a 
                href="https://share.google/LDuBXkLoSUHXu24j4"
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300"
              >
                <span className="mr-2">Click here to leave a review on Google!</span>
              </a>
            </div>
          </div>
        </section>
        {/* Contact Section - SEO Optimized */}
        <section className="py-10 sm:py-14 md:py-20 bg-gray-100 animate-fade-in" id="contact">
          <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Al Ettisam – Car Seat Upholstery & Repair Dubai</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for car seat upholstery, car seat repair, or custom leather interiors in Dubai? Fill out the form below to get a free quote or expert advice from Al Ettisam’s professional team. We specialize in car seat restoration, seat covers, leather interiors, and all types of car upholstery services in Dubai.
            </p>
            <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-xl mb-8">
              <form
                action="https://formspree.io/f/xpwljzlo"
                method="POST"
                className="space-y-6 text-left"
                aria-label="Contact form for car seat upholstery, repair, and custom interiors in Dubai"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name (required)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your Name"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                    aria-label="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email (required)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                    aria-label="Your Email Address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (required)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about your car seat repair, upholstery, or custom interior needs in Dubai..."
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                    aria-label="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
                  aria-label="Submit contact form for car seat upholstery and repair in Dubai"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-8">
        <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8">
          <h3 className="text-xl font-bold mb-2">Our Location – Al Ettisam Car Seat Upholstery Dubai</h3>
          <p className="mb-4">
            Dubai 1 Street 23/1, Umm Ramool, Dubai, UAE<br />
            <a href="https://maps.google.com/?cid=16270021412166902809&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-yellow-500 transition-colors">
              Get Directions on Google Maps
            </a>
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4 space-y-2 md:space-y-0">
            <a href="tel:0554969599" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-300">
              Call Al Ettisam
            </a>
            <a href="https://wa.me/971551010341" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-300">
              WhatsApp Al Ettisam
            </a>
            <a href="https://maps.google.com/?cid=16270021412166902809&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-300">
              Directions
            </a>
          </div>
          <p className="text-lg font-bold">
            Email: <a href="mailto:info@alettisam.com" className="hover:text-yellow-500 transition-colors">alettisamcarseatupholstery@gmail.com</a>
          </p>
          <p className="mt-4 text-sm text-gray-500">&copy; {new Date().getFullYear()} Al Ettisam Car Seat Upholstery Dubai. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default HomePage;