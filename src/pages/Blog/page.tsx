import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import CTA from "../../components/Blog/CTA";
import SEO from "../../components/SEO";

type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string;
  author_name: string;
  read_time: number;
  published_at: string;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://loan.butterflyfintech.com/api/blogs.php?page=${page}&limit=7`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.data);
        setTotalPages(data.pagination.total_pages);
      });
  }, [page]);

  const latestBlog = blogs[0];

  const filteredBlogs = blogs
    .slice(1)
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(search.toLowerCase())
    );



  return (
    <div className="bg-white overflow-x-hidden">
      <SEO 
        title="Financial Insights & Blogs - Rupy.Money" 
        description="Latest articles, guides, and tips on personal finance, loans, credit cards, and credit scores."
      />
      <Header />

      <main className="pt-28">
        {/* ================= HERO ================= */}
        <section className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Insights & Guides
          </h1>
          <p className="mt-4 text-slate-600">
            Smart reads on finance, credit & money decisions.
          </p>
        </section>

        {/* ================= SEARCH ================= */}
        <section className="mx-auto mt-10 max-w-3xl px-6">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </section>

        {/* ================= LATEST BLOG BANNER ================= */}
        {latestBlog && (
          <section className="mx-auto mt-20 max-w-6xl px-6">
            <Link
              to={`/blog/${latestBlog.slug}`}
              className="group grid gap-10 rounded-3xl bg-slate-50 p-6 lg:grid-cols-2"
            >
              <img
                src={latestBlog.cover_image}
                alt={latestBlog.title}
                className="h-[320px] w-full rounded-2xl object-cover"
              />

              <div className="flex flex-col justify-center">
                <span className="mb-3 inline-block text-sm font-semibold text-orange-600">
                  Latest Article
                </span>

                <h2 className="text-3xl font-bold text-slate-900 group-hover:text-orange-600">
                  {latestBlog.title}
                </h2>

                <p className="mt-4 text-slate-600">
                  {latestBlog.excerpt}
                </p>

                <div className="mt-6 text-sm text-slate-500">
                  {latestBlog.author_name} • {latestBlog.read_time} min read •{" "}
                  {latestBlog.published_at}
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ================= BLOG GRID ================= */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.slug}`}
                className="group overflow-hidden rounded-3xl border bg-white transition hover:shadow-xl"
              >
                {/* COVER IMAGE (FULL WIDTH, BIGGER) */}
                <img
                  src={blog.cover_image}
                  alt={blog.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-orange-600">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600">
                    {blog.excerpt}
                  </p>

                  <div className="mt-5 text-xs text-slate-500">
                    {blog.author_name} • {blog.read_time} min read •{" "}
                    {blog.published_at}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ================= PAGINATION ================= */}
          <div className="mt-20 flex justify-center gap-4">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="rounded-full border px-6 py-2 text-sm disabled:opacity-40"
            >
              Prev
            </button>

            <span className="px-4 py-2 text-sm text-slate-600">
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="rounded-full border px-6 py-2 text-sm disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
