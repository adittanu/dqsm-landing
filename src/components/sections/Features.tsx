import { discoverFeatures } from '@/data/features';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function Features() {
  return (
    <section className="bg-ink-100/40 py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="More features"
          title="Discover More Features"
          description="Create interactive quizzes, exams, and surveys for your website with Quiz and Survey Master."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {discoverFeatures.map((f) => (
            <div key={f.title} className="card hover:shadow-brand hover:-translate-y-1 transition">
              <h3 className="text-lg font-semibold text-ink-900">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <LinkButton to="/pricing" variant="primary">
            Get Started <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
