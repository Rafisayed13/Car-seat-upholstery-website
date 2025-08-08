// src/app/blog/[slug]/page.jsx
import React from 'react';
import Link from 'next/link';

const blogPosts = {
  'choose-best-car-seat-upholstery': {
    title: 'How to Choose the Best Car Seat Upholstery',
    date: '2025-08-01',
    content: `Learn what to look for when selecting car seat upholstery materials and styles for your vehicle. Consider durability, comfort, and style to make the best choice for your car.`,
  },
  'leather-vs-fabric-car-interiors': {
    title: 'Leather vs Fabric: Pros and Cons for Car Interiors',
    date: '2025-07-20',
    content: `A comparison of leather and fabric upholstery for car seats, including durability, comfort, and style. Find out which is best for your needs.`,
  },
};

export default function BlogPostPage({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <main className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-600">404 - Blog Post Not Found</h1>
        <p className="text-gray-600">Sorry, the blog post you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{post.date}</p>
      <div className="text-lg text-gray-700 mb-8">{post.content}</div>
      <Link href="/#gallery" className="text-blue-500 hover:underline">← Back to Gallery</Link>
    </main>
  );
}
