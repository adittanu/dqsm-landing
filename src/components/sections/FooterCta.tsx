import { LinkButton } from '@/components/ui/Button';
import { Star, ArrowRight } from 'lucide-react';

export function FooterCta() {
  return (
    <section className="bg-gradient-to-br from-brand-50 via-white to-accent-500/5 py-20">
      <div className="container-x text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink-900">
          Educators &amp; Professional
          <br />
          Web Developers, Try DQSM!
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/images/img-wordpress-logo.png" alt="WordPress" className="h-12 w-12" />
            <div className="text-left">
              <div className="flex items-center gap-1 text-sun-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold text-ink-800">4.9 / 5</p>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-ink-200 sm:block" />
          <div>
            <div className="flex items-center gap-1 text-sun-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm font-semibold text-ink-800">Over 1 million downloads</p>
          </div>
        </div>
        <div className="mt-8">
          <LinkButton to="/pricing" variant="primary">
            Get Started <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
