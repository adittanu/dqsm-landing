import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addons, addonGroups } from '@/data/addons';
import type { Addon } from '@/types';
import { FooterCta } from '@/components/sections/FooterCta';

export function Addons() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered = addons.filter((a) => {
    if (activeFilter === 'all') return true;
    return a.category === activeFilter || a.group === activeFilter;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-6 text-center">
        <div className="container-x">
          <span className="eyebrow">Premium</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-ink-900 font-display">
            Extend DQSM With Addons
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-ink-500 text-base sm:text-lg">
            Quiz and Survey Master has lots of extra premium features that you can buy separately
            or as a bundle. These &ldquo;add-ons&rdquo; can help you get more out of your quizzes
            and surveys. Check them out!
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white pb-10">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-2">
            {addonGroups.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveFilter(g.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  activeFilter === g.id
                    ? 'bg-brand-600 text-white shadow-brand'
                    : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Addon grid */}
      <section className="bg-white pb-20">
        <div className="container-x">
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <AddonCard key={a.id} addon={a} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-ink-400">No addons found in this category.</p>
          )}
        </div>
      </section>

      <FooterCta />
    </>
  );
}

function AddonCard({ addon }: { addon: Addon }) {
  const isFree = addon.price === 'free';

  return (
    <Link
      to={`/addons/${addon.id}`}
      className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition hover:shadow-lg hover:border-brand-200"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-brand-50">
          <img src={addon.icon} alt={addon.name} className="h-10 w-10 object-contain" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-ink-900 group-hover:text-brand-700 transition">
            {addon.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-ink-500 leading-relaxed">
            {addon.description}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-4 flex items-center justify-between">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
            isFree
              ? 'bg-green-100 text-green-700'
              : 'bg-brand-50 text-brand-700'
          }`}
        >
          {isFree ? 'Free' : `$${addon.price}`}
        </span>
        <span className="text-sm font-medium text-brand-600 opacity-0 group-hover:opacity-100 transition">
          View Details →
        </span>
      </div>
    </Link>
  );
}
