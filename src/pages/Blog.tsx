import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FooterCta } from '@/components/sections/FooterCta';
import { blogPosts } from '@/data/blogPosts';

export function Blog() {
  return (
    <>
      <section className="bg-hero-gradient py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Blog"
            title="All posts"
            description="Tutorials, guides, and use cases from the DQSM team and community."
          />
        </div>
      </section>
      <section className="py-16">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group block overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-brand"
            >
              <div className="aspect-[16/10] overflow-hidden bg-ink-100">
                <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">{p.category}</span>
                <h3 className="mt-3 text-lg font-semibold text-ink-900 group-hover:text-brand-600">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed line-clamp-2">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
                  <span className="inline-flex items-center gap-1"><User className="h-3 w-3" /> {p.author}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 shadow-soft hover:text-brand-600"
          >
            See latest posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <FooterCta />
    </>
  );
}
