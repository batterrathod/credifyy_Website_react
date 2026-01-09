import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    fetch(
      `https://loan.butterflyfintech.com/api/blog.php?slug=${slug}`
    )
      .then(res => res.json())
      .then(data => setBlog(data));
  }, [slug]);

  if (!blog) return null;

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <img
        src={blog.cover_image}
        className="mb-8 rounded-2xl"
      />

      <h1 className="text-4xl font-extrabold">
        {blog.title}
      </h1>

      <div className="mt-3 text-sm text-slate-500">
        {blog.author_name} • {blog.read_time} min read
      </div>

      <div
        className="prose mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}
