import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import CTA from "../../components/Blog/CTA";
import SEO from "../../components/SEO";

type Blog = {
  title: string;
  content: string;
  excerpt: string;
  cover_image: string;
  author_name: string;
  author_image: string;
  read_time: number;
  published_at: string;
};

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    fetch(`https://loan.butterflyfintech.com/api/blog.php?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [slug]);

  if (!blog) return null;



  return (
    <div className="bg-white overflow-x-hidden">
      <SEO 
        title={`${blog.title} - Rupy.Money`} 
        description={blog.excerpt}
      />
      <Header />

      {/* ================= BLOG CONTENT STYLES ================= */}
      <style>{`
        .blog-content {
          font-family: "Inter", "Segoe UI", Arial, sans-serif;
          line-height: 1.8;
          color: #1f2937;
          font-size: 16px;
        }

        .blog-content p {
          margin-bottom: 20px;
        }

        .blog-content h1 {
          font-size: 32px;
          font-weight: 800;
          margin: 48px 0 20px;
        }

        .blog-content h2 {
          font-size: 26px;
          font-weight: 700;
          margin: 42px 0 18px;
        }

        .blog-content h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 32px 0 14px;
        }

        .blog-content h4 {
          font-size: 18px;
          font-weight: 600;
          margin: 24px 0 12px;
        }

        .blog-content ul,
        .blog-content ol {
          padding-left: 24px;
          margin: 20px 0 28px;
        }

        .blog-content li {
          margin-bottom: 10px;
        }

        .blog-content a {
          color: #2563eb;
          font-weight: 500;
          text-decoration: underline;
        }

        .blog-content img {
          max-width: 100%;
          height: auto;
          margin: 32px auto;
          border-radius: 14px;
          display: block;
        }

        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 32px 0;
          font-size: 15px;
        }

        .blog-content th,
        .blog-content td {
          border: 1px solid #e5e7eb;
          padding: 12px 14px;
          text-align: left;
        }

        .blog-content th {
          background-color: #f9fafb;
          font-weight: 600;
        }

        .blog-content blockquote {
          border-left: 4px solid #2563eb;
          background: #f9fafb;
          padding: 18px 24px;
          margin: 32px 0;
          font-style: italic;
          color: #374151;
        }

        .blog-content pre {
          background: #0f172a;
          color: #e5e7eb;
          padding: 20px;
          border-radius: 12px;
          overflow-x: auto;
          margin: 32px 0;
        }

        .blog-content code {
          background: #f1f5f9;
          padding: 3px 6px;
          border-radius: 6px;
          font-size: 14px;
        }

        .blog-content iframe {
          width: 100%;
          min-height: 360px;
          margin: 32px 0;
          border-radius: 12px;
        }

        @media (max-width: 768px) {
          .blog-content {
            font-size: 15px;
          }

          .blog-content h1 {
            font-size: 26px;
          }

          .blog-content h2 {
            font-size: 22px;
          }
        }
      `}</style>

      <main className="pt-28">
        {/* ================= BLOG TITLE ================= */}
        <section className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900">
            {blog.title}
          </h1>

          <p className="mt-6 text-sm text-slate-500">
            <span className="font-medium text-slate-700">
              {blog.author_name}
            </span>{" "}
            • {blog.read_time} min read • {blog.published_at}
          </p>
        </section>

        {/* ================= COVER IMAGE ================= */}
        <section className="mx-auto mt-16 max-w-5xl px-6">
          <img
            src={blog.cover_image}
            alt={blog.title}
            className="w-full rounded-2xl object-cover shadow-md"
          />
        </section>

        {/* ================= BLOG BODY ================= */}
        <section className="mx-auto max-w-3xl px-6 py-24">
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
