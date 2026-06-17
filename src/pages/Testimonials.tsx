import { StubPage } from '@/components/ui/StubPage';

export function Testimonials() {
  return (
    <StubPage
      eyebrow="Testimonials"
      title="What our customers say"
      description="A curated collection of reviews from DQSM users across education, marketing, and HR."
    >
      <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 text-left text-sm">
        {[
          { q: 'Excellent plugin, excellent documentation.', a: 'Sophia Rodriguez' },
          { q: 'This plugin is absolutely awesome!', a: 'Michel O Nei' },
          { q: 'Needed a plugin to do surveys, but this can do so much more.', a: 'Jordan Brian' },
          { q: 'Saved me hours of work every week.', a: 'Kevin Douglas' },
        ].map((r) => (
          <div key={r.a} className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
            <p className="text-ink-700">“{r.q}”</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-600">— {r.a}</p>
          </div>
        ))}
      </div>
    </StubPage>
  );
}
