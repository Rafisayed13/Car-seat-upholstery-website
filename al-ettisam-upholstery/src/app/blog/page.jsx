// src/app/blog/page.jsx
'use client';

import React from 'react';
import Head from 'next/head';

const blogPosts = [
  {
    title: 'How to Choose the Best Car Seat Upholstery',
    date: '2025-08-01',
    excerpt: 'Learn what to look for when selecting car seat upholstery materials and styles for your vehicle.',
    slug: 'choose-best-car-seat-upholstery',
  },
  {
    title: 'Leather vs Fabric: Pros and Cons for Car Interiors',
    date: '2025-07-20',
    excerpt: 'A comparison of leather and fabric upholstery for car seats, including durability, comfort, and style.',
    slug: 'leather-vs-fabric-car-interiors',
  },
  {
    title: 'Car Seat Repair Dubai – All Types of Cars, All Seat Issues, Expert Fixing & Upholstery',
    date: '2025-08-08',
    excerpt: 'Comprehensive guide to car seat repair, fixing, upholstery, restoration, cleaning, foam replacement, and customization for all car types in Dubai. Expert solutions for leather, fabric, luxury, sports, SUV, and family cars.',
    slug: 'car-seat-repair-dubai',
  },
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Car Seat Repair Blog Dubai | Upholstery, Fixing, Leather, Fabric, Luxury, SUV</title>
        <meta name="description" content="Read expert articles about car seat repair, car upholstery, seat fixing, leather and fabric restoration, luxury and SUV seat care, and more for all car types in Dubai." />
        <meta name="keywords" content="car seat repair Dubai, car upholstery Dubai, seat fixing Dubai, leather car seat Dubai, fabric car seat Dubai, luxury car seat Dubai, SUV seat repair Dubai, family car seat Dubai, car seat restoration Dubai, car seat cleaning Dubai, car seat reupholstery Dubai, car seat foam replacement Dubai, car seat stitching Dubai, car seat customization Dubai, car seat shop Dubai, car seat service Dubai, car seat maintenance Dubai, car seat replacement Dubai, car seat damage Dubai, car seat repair near me Dubai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Car Seat Repair Blog Dubai | Upholstery, Fixing, Leather, Fabric, Luxury, SUV" />
        <meta property="og:description" content="Expert blog for car seat repair, upholstery, fixing, and restoration for all car types in Dubai." />
        <meta property="og:type" content="website" />
      </Head>
      <main className="max-w-3xl mx-auto py-8 px-4 sm:px-2">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Car Seat Repair & Upholstery Blog Dubai</h1>
        <div className="space-y-8">
          {blogPosts.map(post => (
            <article key={post.slug} className="bg-white rounded-lg shadow p-6 transition hover:shadow-lg focus-within:shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                <a href={`/blog/${post.slug}`} className="hover:underline focus:underline outline-none" tabIndex={0} aria-label={`Read blog post: ${post.title}`}>{post.title}</a>
              </h2>
              <p className="text-gray-500 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
              <p className="mb-4 text-gray-700">{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="text-blue-500 hover:underline font-medium focus:underline outline-none" tabIndex={0} aria-label={`Read more about ${post.title}`}>Read More</a>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
