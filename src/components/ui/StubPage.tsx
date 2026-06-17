import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  backHref?: string;
  backLabel?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export function StubPage({
  eyebrow,
  title,
  description,
  children,
  backHref = '/',
  backLabel = 'Back to home',
  ctaHref = '/pricing',
  ctaLabel = 'Get Started',
}: Props) {
  return (
    <section className="bg-hero-gradient py-20">
      <div className="container-x">
        <Link to={backHref} className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-brand-600">
          <ArrowLeft className="h-4 w-4" /> {backLabel}
        </Link>
        <div className="mt-8">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </div>
        {children}
        <div className="mt-12 text-center">
          <Link
            to={ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-brand hover:bg-brand-700"
          >
            {ctaLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
