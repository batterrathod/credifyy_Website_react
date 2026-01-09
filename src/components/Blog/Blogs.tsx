import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  cover_image: string;
  author_name: string;
  author_avatar: string;
  read_time: number;
  views: number;
  featured: number;
  created_at: string;
}

export default function LatestArticles() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://loan.butterflyfintech.com/api/blogs.php")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-orange-50 px-4 py-1 text-sm text-orange-600">
            📰 Article Library
          </span>
          <h2 className="mt-6 text-4xl font-extrabold">Latest Articles</h2>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map(blog => (
            <div
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.slug}`)}
              className="cursor-pointer rounded-2xl bg-white shadow hover:shadow-xl transition"
            >
              <img
                src={blog.cover_image}
                className="h-52 w-full rounded-t-2xl object-cover"
              />

              <div className="p-6">
                <div className="mb-3 flex gap-3 text-sm text-slate-500">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-orange-600">
                    {blog.category}
                  </span>
                  <span>• {blog.read_time} min</span>
                  <span>• {blog.views}</span>
                </div>

                <h3 className="font-bold text-lg">{blog.title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {blog.excerpt}
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img
                      src={blog.author_avatar}
                      className="h-8 w-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        {blog.author_name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {new Date(blog.created_at).toDateString()}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="text-orange-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
