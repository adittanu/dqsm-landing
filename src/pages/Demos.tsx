import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { demos } from '@/data/demos';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FooterCta } from '@/components/sections/FooterCta';

export function Demos() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return demos.filter((d) => d.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <section className="bg-hero-gradient py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Live demos"
            title="See DQSM in Action"
            description="Click any demo to preview the full experience. Each demo is built with the DQSM plugin and can be installed on your own site."
          />
          <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full border border-ink-100 bg-white px-4 py-2 shadow-soft">
            <Search className="h-4 w-4 text-ink-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search demos..."
              className="flex-1 bg-transparent text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none"
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-x">
          {filtered.length === 0 ? (
            <p className="text-center text-ink-500">No demos match your search.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((d) => (
                <Link
                  key={d.id}
                  to={`/demos/${d.id}`}
                  className="group block overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-brand"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-ink-100">
                    <img src={d.image} alt={d.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-semibold text-ink-800 group-hover:text-brand-600">{d.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <FooterCta />
    </>
  );
}
