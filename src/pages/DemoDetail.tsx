import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { demos } from '@/data/demos';

export function DemoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const demo = demos.find((d) => d.id === slug);

  if (!demo) {
    return (
      <section className="bg-hero-gradient py-24">
        <div className="container-x text-center">
          <h1 className="text-3xl font-bold text-ink-900">Demo not found</h1>
          <p className="mt-3 text-ink-500">The demo you are looking for does not exist.</p>
          <Link to="/demos" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 font-semibold text-white">
            <ArrowLeft className="h-4 w-4" /> All demos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ink-100/40 py-16">
      <div className="container-x">
        <Link to="/demos" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-brand-600">
          <ArrowLeft className="h-4 w-4" /> All demos
        </Link>
        <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft">
            <img src={demo.image} alt={demo.title} className="w-full" />
          </div>
          <div>
            <span className="eyebrow mb-3">Live demo</span>
            <h1 className="mt-3 text-3xl font-bold text-ink-900 font-display">{demo.title}</h1>
            <p className="mt-4 text-ink-500">
              This is a preview of the {demo.title.toLowerCase()} built with Quiz and Survey Master. Use the interactive preview to explore the flow.
            </p>
            <div className="mt-6 space-y-3">
              <Link
                to="/pricing"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-semibold text-white shadow-brand hover:bg-brand-700"
              >
                Build your own <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                to="/demos"
                className="flex items-center justify-center gap-2 rounded-full border border-ink-200 px-5 py-3 font-semibold text-ink-800 hover:border-ink-300"
              >
                Browse more demos
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-ink-100 bg-white p-4">
                <p className="text-ink-500">Question types</p>
                <p className="mt-1 text-lg font-semibold text-ink-900">5+</p>
              </div>
              <div className="rounded-xl border border-ink-100 bg-white p-4">
                <p className="text-ink-500">Setup time</p>
                <p className="mt-1 text-lg font-semibold text-ink-900">~10 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
