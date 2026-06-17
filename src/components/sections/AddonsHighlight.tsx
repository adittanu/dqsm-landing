import { addons } from '@/data/addons';
import { ArrowRight, Sparkles } from 'lucide-react';

export function AddonsHighlight() {
  const featured = addons.slice(0, 6);
  return (
    <section className="relative overflow-hidden bg-dark-gradient py-20 text-white">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />
      <div className="container-x relative">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
            <Sparkles className="h-3.5 w-3.5" /> Premium
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-display">
            Supercharge DQSM with
            <br />
            Our Premium Addons
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => (
            <div key={a.id} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition">
              <img src={a.icon} alt="" className="h-14 w-14 object-contain" />
              <h3 className="mt-4 text-lg font-semibold">{a.name}</h3>
              <p className="mt-2 text-sm text-white/70">{a.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/addons"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink-900 hover:bg-ink-100"
          >
            Explore Addons <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
