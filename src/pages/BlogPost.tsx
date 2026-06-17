import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useEffect } from 'react';
import { FooterCta } from '@/components/sections/FooterCta';
import { blogPosts } from '@/data/blogPosts';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <section className="bg-hero-gradient py-24">
        <div className="container-x text-center">
          <h1 className="text-3xl font-bold text-ink-900">Post not found</h1>
          <Link to="/blog" className="mt-4 inline-block text-brand-600 underline">
            Back to blog
          </Link>
        </div>
      </section>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="py-16">
        <div className="container-x max-w-3xl">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-brand-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-ink-400">
            <span className="inline-flex items-center gap-1">
              <User className="h-4 w-4" /> {post.author}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span>{post.readTime} read</span>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
          <div className="mt-10 space-y-6 text-ink-600 leading-relaxed">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-ink-100 py-16">
          <div className="container-x">
            <h2 className="text-2xl font-bold text-ink-900">Related posts</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-brand"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-ink-100">
                    <img src={r.cover} alt={r.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                      {r.category}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-ink-900 group-hover:text-brand-600">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterCta />
    </>
  );
}

export const allPosts = blogPosts;
