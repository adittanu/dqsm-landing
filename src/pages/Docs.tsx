import { BookOpen, ClipboardList, Zap, Puzzle, ListChecks, Plug, Palette, Code, Wrench, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FooterCta } from '@/components/sections/FooterCta';
import { docCategories, popularTopics } from '@/data/docs';
import type { DocCategory } from '@/data/docs';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  ClipboardList,
  Zap,
  Puzzle,
  ListChecks,
  Plug,
  Palette,
  Code,
  Wrench,
};

export function Docs() {
  return (
    <>
      <section className="bg-hero-gradient py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Documentation"
            title="Learn how to use DQSM"
            description="Comprehensive documentation to help you get the most out of DQSM. Searchable, versioned, and example-driven."
          />
          <div className="mx-auto mt-8 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full rounded-xl border border-ink-200 bg-white py-3 pl-12 pr-4 text-sm text-ink-700 shadow-sm placeholder:text-ink-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-100 bg-ink-50 py-12">
        <div className="container-x">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-400">Popular topics</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {popularTopics.map((topic) => (
              <Link
                key={topic.slug}
                to={topic.slug}
                className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-brand-300 hover:text-brand-600"
              >
                {topic.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {docCategories.map((c: DocCategory) => {
              const Icon = iconMap[c.icon];
              return (
                <Link
                  key={c.id}
                  to={`/docs/${c.id}`}
                  className="card hover:shadow-brand hover:-translate-y-1 transition flex flex-col"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    {Icon && <Icon className="h-6 w-6" />}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{c.description}</p>
                  <p className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-brand-600">{c.articleCount} articles →</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-ink-900">Browse by category</h2>
          <div className="mt-8 space-y-4">
            {docCategories.map((c: DocCategory) => (
              <details key={c.id} className="group rounded-xl border border-ink-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-600">
                      {(() => { const I = iconMap[c.icon]; return I ? <I className="h-4 w-4" /> : null; })()}
                    </span>
                    <span className="font-semibold text-ink-900">{c.title}</span>
                    <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-xs font-medium text-ink-500">{c.articleCount}</span>
                  </div>
                  <svg className="h-5 w-5 text-ink-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="border-t border-ink-100 px-6 py-4">
                  <ul className="space-y-2">
                    {c.articles.map((article) => (
                      <li key={article.id}>
                        <Link to={`/docs/${c.id}/${article.id}`} className="group/article flex items-start gap-3 rounded-lg p-2 -mx-2 transition hover:bg-brand-50">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                          <div>
                            <span className="text-sm font-medium text-ink-800 group-hover/article:text-brand-600">{article.title}</span>
                            <p className="mt-0.5 text-xs text-ink-400 line-clamp-1">{article.excerpt}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FooterCta />
    </>
  );
}
