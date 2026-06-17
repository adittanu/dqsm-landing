import { useState } from 'react';
import {
  Check,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import { plans } from '@/data/pricing';
import { Reviews } from '@/components/sections/Reviews';
import { Faq } from '@/components/sections/Faq';
import { FooterCta } from '@/components/sections/FooterCta';

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function Toggle({
  yearly,
  onToggle,
}: {
  yearly: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink-200 bg-white p-1.5 shadow-soft">
      <button
        onClick={() => !yearly && onToggle()}
        className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
          yearly
            ? 'bg-brand-600 text-white shadow-brand'
            : 'text-ink-500 hover:text-ink-700'
        }`}
      >
        Yearly
      </button>
      <button
        onClick={() => yearly && onToggle()}
        className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
          !yearly
            ? 'bg-brand-600 text-white shadow-brand'
            : 'text-ink-500 hover:text-ink-700'
        }`}
      >
        Lifetime
      </button>
    </div>
  );
}

function PricingCard({
  plan,
  yearly,
  index,
}: {
  plan: (typeof plans)[number];
  yearly: boolean;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const price = yearly ? plan.yearlyPrice : plan.lifetimePrice;
  const perLabel = yearly ? '/yr' : '';

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-soft transition-all duration-300 ${
        plan.recommended
          ? 'border-brand-400 ring-2 ring-brand-200 scale-[1.03] z-10'
          : 'border-ink-100 hover:border-ink-200 hover:shadow-lg'
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Recommended badge */}
      {plan.recommended && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-brand-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-brand">
            Recommended
          </span>
        </div>
      )}

      {/* Plan name */}
      <h3 className="text-lg font-bold text-ink-900">{plan.name}</h3>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold tracking-tight text-ink-900">
          ${price}
        </span>
        <span className="text-base font-medium text-ink-400">{perLabel}</span>
      </div>

      {/* Sites */}
      <p className="mt-2 text-sm text-ink-500">
        {plan.sites === 1 ? '1 Site' : `${plan.sites} Sites`}
      </p>

      {/* Divider */}
      <div className="my-5 h-px w-full bg-ink-100" />

      {/* What's included summary */}
      <p className="text-sm font-semibold text-ink-700">
        What's included:
      </p>
      <ul className="mt-3 flex flex-1 flex-col gap-2">
        {(expanded ? plan.features : plan.features.slice(0, 4)).map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-ink-600">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            {f}
          </li>
        ))}
      </ul>

      {/* See all features toggle */}
      {plan.features.length > 4 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 transition"
        >
          {expanded ? 'Show less' : 'See All Features'}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${
              expanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      )}

      {/* CTA */}
      <a
        href="#"
        className={`btn mt-6 w-full ${
          plan.recommended
            ? 'btn-primary'
            : 'btn-ghost'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  const honestPrices = plans.map((p) => ({
    name: p.name,
    price: yearly ? p.yearlyPrice : p.lifetimePrice,
  }));

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-hero-gradient py-20">
        <div className="container-x text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-ink-900 leading-tight">
            Choose a plan that fits
            <br />
            for your business
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-500 max-w-xl mx-auto">
            Join 1,213,437+ who get more subscribers and customers with DQSM
          </p>
          <Toggle yearly={yearly} onToggle={() => setYearly((v) => !v)} />
        </div>
      </section>

      {/* ── Pricing Cards ─────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start">
            {plans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} yearly={yearly} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Free Setup ────────────────────────────────────────────────── */}
      <section className="bg-ink-100/40 py-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-white p-8 sm:p-12 shadow-soft text-center">
            <span className="eyebrow mb-4">BONUS</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink-900">
              Free Setup with Your DQSM Bundle
            </h2>
            <p className="mt-4 text-ink-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              When you purchase any DQSM bundle, you get a complimentary
              <strong className="text-ink-700"> 2-hour live setup session</strong> worth
              $160 — our team will configure quizzes, themes, and integrations for you.
            </p>
            <p className="mt-6 text-sm text-ink-400">
              Setup handled by{' '}
              <a
                href="https://justhyre.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-600 hover:underline"
              >
                JustHyre
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Moneyback Guarantee ───────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <ShieldCheck className="mx-auto h-12 w-12 text-brand-500" />
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold font-display text-ink-900">
              14-Day Moneyback Guaranteed!
            </h2>
            <p className="mt-4 text-ink-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              If DQSM does not meet your expectations within the next 14 days,
              we will issue a full refund without any questions asked.
            </p>
            <blockquote className="mt-8 rounded-2xl border border-ink-100 bg-ink-100/40 p-6 text-left">
              <p className="text-ink-600 text-sm italic leading-relaxed">
                &ldquo;We are confident that DQSM will help you create amazing
                quizzes and surveys. If for any reason you are not satisfied,
                we offer a 14-day no-questions-asked money-back guarantee.&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-sm">
                  VS
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Vikas Singhal</p>
                  <p className="text-xs text-ink-400">Founder, DQSM</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Honest Prices ─────────────────────────────────────────────── */}
      <section className="border-t border-ink-100 bg-ink-100/40 py-10">
        <div className="container-x text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink-900">
            Honest Prices, No Surprises!
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {honestPrices.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-ink-200 bg-white px-6 py-4 shadow-soft min-w-[140px]"
              >
                <p className="text-sm font-semibold text-ink-500">{p.name}</p>
                <p className="mt-1 text-2xl font-extrabold text-ink-900">
                  ${p.price}
                  <span className="ml-0.5 text-sm font-medium text-ink-400">
                    {yearly ? '/yr' : ''}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ───────────────────────────────────────────────────── */}
      <Reviews />

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <Faq />

      {/* ── Footer CTA ────────────────────────────────────────────────── */}
      <FooterCta />
    </>
  );
}
