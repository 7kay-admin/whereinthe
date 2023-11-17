// import {
//   getBlogPostBySlug,
//   getBlogPostSlugs,
//   getBlogMetaData,
// } from '@/utils/blog';

import { notFound } from 'next/navigation';

export default function ContinentPage({ params }) {
  const content = { name: params.continentId }; // getBlogPostBySlug(params.blogId);

  if (!content.name) return notFound();

  return <main>{content.name}</main>;
}

export async function generateMetadata({ params }) {
  // const blog = getBlogMetaData(params.continentId);

  // const title = `${blog.name} - Blog - Site`;

  // return {
  //   title,
  //   description: blog.blurb,
  //   openGraph: {
  //     title,
  //     description: blog.blurb,
  //     // url: `https://domain.com/blog/${params.blogId}`,
  //     // siteName: 'Site',
  //     locale: 'en_GB',
  //     type: 'article',
  //     // publishedTime: blog.date,
  //     // authors: [blog.author],
  //   },
  // };

  return {

  }
}

export async function generateStaticParams() {
  // const blogPosts = getBlogPostSlugs();

  return [{continentId: 'europe'}]

  // return blogPosts.map((blogId) => ({ blogId }));
}
