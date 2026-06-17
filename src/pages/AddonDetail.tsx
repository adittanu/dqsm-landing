import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { addons } from '@/data/addons';
import { FooterCta } from '@/components/sections/FooterCta';
import { LinkButton } from '@/components/ui/Button';

export function AddonDetail() {
  const { id } = useParams<{ id: string }>();
  const addon = addons.find((a) => a.id === id);

  if (!addon) {
    return (
      <section className="bg-hero-gradient py-24">
        <div className="container-x text-center">
          <h1 className="text-3xl font-bold text-ink-900">Addon not found</h1>
          <Link to="/addons" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 font-semibold text-white">
            <ArrowLeft className="h-4 w-4" /> All addons
          </Link>
        </div>
      </section>
    );
  }

  const features = [
    'Easy one-click setup',
    'Works with any DQSM quiz or survey',
    '1 year of updates & support',
    'Compatible with all DQSM themes',
    'Detailed documentation included',
  ];

  return (
    <>
      <section className="bg-hero-gradient py-16">
        <div className="container-x">
          <Link to="/addons" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-brand-600">
            <ArrowLeft className="h-4 w-4" /> All addons
          </Link>
          <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="flex h-32 w-32 items-center justify-center">
                <img src={addon.icon} alt={addon.name} className="max-h-full max-w-full object-contain" />
              </div>
              <h1 className="mt-6 text-4xl font-bold text-ink-900 font-display">{addon.name}</h1>
              <p className="mt-4 text-ink-500 text-lg">{addon.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    addon.category === 'free' ? 'bg-emerald-50 text-emerald-600' : 'bg-brand-50 text-brand-700'
                  }`}
                >
                  {addon.category === 'free' ? 'Free' : `Premium · $${addon.price}`}
                </span>
                <div className="flex items-center gap-1 text-sun-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <LinkButton to="/pricing" variant="primary">
                  {addon.category === 'free' ? 'Download free' : 'Get this addon'}
                </LinkButton>
                <LinkButton to="/docs" variant="ghost">Read docs</LinkButton>
              </div>
            </div>
            <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-ink-900">What you get</h2>
              <ul className="mt-4 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-ink-700">
                    <Check className="mt-0.5 h-4 w-4 text-brand-600" strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FooterCta />
    </>
  );
}
