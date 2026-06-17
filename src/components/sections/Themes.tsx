import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Themes() {
  return (
    <section className="bg-white py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-ink-900 font-display">
            Discover themes that elevate the Quizzes &amp; Surveys!
          </h3>
          <p className="mt-4 text-lg text-ink-500 leading-relaxed">
            Quiz and Survey Master has lots of extra premium features that you can
            buy separately or as a bundle. These &ldquo;add-ons&rdquo; can help you
            get more out of your quizzes and surveys.
          </p>
          <Link
            to="/themes"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-brand transition-colors hover:bg-brand-700"
          >
            Explore All Themes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Theme preview mockup */}
        <div className="relative">
          {/* Ambient glow */}
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-500/20 via-white to-brand-100 blur-2xl" />

          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 — Blue */}
            <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-5 shadow-soft transition-transform hover:scale-[1.03]">
              <div className="h-2 w-12 rounded-full bg-white/40" />
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/25" />
                <div className="h-1.5 w-3/4 rounded-full bg-white/25" />
              </div>
              <div className="mt-4 h-16 rounded-lg bg-white/10" />
              <div className="mt-3 h-6 w-20 rounded-full bg-white/90" />
            </div>

            {/* Card 2 — Purple */}
            <div className="rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 p-5 shadow-soft transition-transform hover:scale-[1.03]">
              <div className="h-2 w-16 rounded-full bg-white/40" />
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/25" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/25" />
              </div>
              <div className="mt-4 h-16 rounded-lg bg-white/10" />
              <div className="mt-3 h-6 w-20 rounded-full bg-white/90" />
            </div>

            {/* Card 3 — Amber */}
            <div className="rounded-2xl bg-gradient-to-br from-sun-400 to-sun-500 p-5 shadow-soft transition-transform hover:scale-[1.03]">
              <div className="h-2 w-10 rounded-full bg-white/50" />
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/30" />
                <div className="h-1.5 w-5/6 rounded-full bg-white/30" />
              </div>
              <div className="mt-4 h-16 rounded-lg bg-white/15" />
              <div className="mt-3 h-6 w-20 rounded-full bg-white/90" />
            </div>

            {/* Card 4 — Dark */}
            <div className="rounded-2xl bg-gradient-to-br from-ink-800 to-ink-900 p-5 shadow-soft transition-transform hover:scale-[1.03]">
              <div className="h-2 w-14 rounded-full bg-white/30" />
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/15" />
                <div className="h-1.5 w-3/5 rounded-full bg-white/15" />
              </div>
              <div className="mt-4 h-16 rounded-lg bg-white/5" />
              <div className="mt-3 h-6 w-20 rounded-full bg-white/80" />
            </div>
          </div>

          {/* Fallback image — invisible, only loads if no JS issues */}
          <img
            src="/images/img-wordpress-logo.png"
            alt="WordPress themes for quizzes"
            className="sr-only"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
