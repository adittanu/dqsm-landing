import {
  Check,
  ClipboardList,
  LayoutDashboard,
  Timer,
  BarChart3,
  Star,
  Puzzle,
  Palette,
  Crown,
  Download,
  Upload,
  Globe,
  Mail,
  ShoppingCart,
  Webhook,
  Sheet,
  Zap,
  Link2,
  ArrowRightLeft,
  MessageSquare,
} from 'lucide-react';
import type { FeatureRow } from '@/types';

/* ------------------------------------------------------------------ */
/*  Custom illustrations per feature row                              */
/* ------------------------------------------------------------------ */

function CreateQuizMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Glow behind */}
      <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-200/60 via-brand-100/30 to-accent-500/10 blur-3xl transition-all duration-500 group-hover:from-brand-300/70 group-hover:to-accent-500/20" />

      {/* Browser chrome frame */}
      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-all duration-300 group-hover:shadow-brand group-hover:-translate-y-1">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-100/50 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-sun-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-ink-400">
            quiz-builder.dev/editor
          </span>
        </div>

        {/* Quiz editor body */}
        <div className="space-y-4 p-5">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500 text-white">
              <ClipboardList className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-900">Customer Satisfaction Survey</p>
              <p className="text-xs text-ink-400">12 questions \u00b7 3 pages</p>
            </div>
          </div>

          {/* Question card 1 */}
          <div className="rounded-xl border border-brand-200 bg-brand-50/50 p-4 transition-colors">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-brand-600">Question 1</span>
              <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold text-brand-700">Multiple Choice</span>
            </div>
            <p className="text-sm font-medium text-ink-800">How satisfied are you with our service?</p>
            <div className="mt-3 space-y-2">
              {['Very Satisfied', 'Satisfied', 'Neutral'].map((opt, i) => (
                <div key={opt} className="flex items-center gap-2.5 rounded-lg bg-white px-3 py-2 text-xs text-ink-600 shadow-sm">
                  <span className={`grid h-4 w-4 place-items-center rounded-full border-2 ${i === 0 ? 'border-brand-500 bg-brand-500' : 'border-ink-200'}`}>
                    {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                  </span>
                  {opt}
                </div>
              ))}
            </div>
          </div>

          {/* Question card 2 */}
          <div className="rounded-xl border border-ink-100 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-ink-400">Question 2</span>
              <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-semibold text-ink-500">Open Text</span>
            </div>
            <p className="text-sm font-medium text-ink-800">Any additional feedback?</p>
            <div className="mt-3 h-10 rounded-lg border border-dashed border-ink-200 bg-ink-100/30" />
          </div>

          {/* Bottom toolbar */}
          <div className="flex items-center justify-between rounded-lg bg-ink-100/40 px-3 py-2">
            <div className="flex gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-white text-ink-400 shadow-sm"><LayoutDashboard className="h-3.5 w-3.5" /></span>
              <span className="grid h-7 w-7 place-items-center rounded-md bg-white text-ink-400 shadow-sm"><Timer className="h-3.5 w-3.5" /></span>
              <span className="grid h-7 w-7 place-items-center rounded-md bg-white text-ink-400 shadow-sm"><BarChart3 className="h-3.5 w-3.5" /></span>
            </div>
            <span className="text-[10px] font-semibold text-brand-600">+ Add Question</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddonsGrid() {
  const addons = [
    { icon: Crown, label: 'Leaderboard', color: 'from-amber-400 to-orange-500' },
    { icon: Palette, label: 'Themes', color: 'from-purple-400 to-pink-500' },
    { icon: Download, label: 'Export', color: 'from-emerald-400 to-teal-500' },
    { icon: Mail, label: 'MailChimp', color: 'from-yellow-400 to-amber-500' },
    { icon: Puzzle, label: 'Logic', color: 'from-blue-400 to-indigo-500' },
    { icon: Star, label: 'Reporting', color: 'from-rose-400 to-red-500' },
    { icon: Upload, label: 'Import', color: 'from-cyan-400 to-blue-500' },
    { icon: Globe, label: 'Multilingual', color: 'from-violet-400 to-purple-500' },
  ];

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Glow behind */}
      <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent-500/20 via-brand-100/30 to-sun-400/10 blur-3xl transition-all duration-500 group-hover:from-accent-500/30 group-hover:to-sun-400/20" />

      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all duration-300 group-hover:shadow-brand group-hover:-translate-y-1">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-ink-900">Premium Addons</p>
            <p className="text-xs text-ink-400">40+ extensions available</p>
          </div>
          <span className="rounded-full bg-brand-500 px-3 py-1 text-[10px] font-bold text-white">Pro</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-3">
          {addons.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="group/card flex flex-col items-center gap-1.5"
            >
              <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md transition-transform duration-200 group-hover/card:scale-110`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-medium text-ink-500">{label}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-ink-100/40 py-2.5">
          <Puzzle className="h-4 w-4 text-ink-400" />
          <span className="text-xs font-medium text-ink-500">Browse all addons</span>
        </div>
      </div>
    </div>
  );
}

function IntegrationsVisual() {
  const services = [
    { icon: Mail, label: 'Mailchimp', x: 'left-2 top-2', color: 'bg-yellow-400' },
    { icon: Sheet, label: 'Google Sheets', x: 'right-2 top-2', color: 'bg-green-500' },
    { icon: ShoppingCart, label: 'WooCommerce', x: 'left-2 bottom-2', color: 'bg-purple-500' },
    { icon: Webhook, label: 'Zapier', x: 'right-2 bottom-2', color: 'bg-orange-500' },
  ];

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Glow behind */}
      <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-100/50 via-white to-brand-200/30 blur-3xl transition-all duration-500 group-hover:from-brand-200/60 group-hover:to-brand-300/20" />

      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all duration-300 group-hover:shadow-brand group-hover:-translate-y-1">
        {/* Central hub */}
        <div className="relative mx-auto h-64 w-full max-w-xs">
          {/* Connection lines (SVG) */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 280 260" fill="none">
            {/* Lines from center to each corner */}
            <line x1="140" y1="130" x2="52" y2="52" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse" />
            <line x1="140" y1="130" x2="228" y2="52" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <line x1="140" y1="130" x2="52" y2="208" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
            <line x1="140" y1="130" x2="228" y2="208" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2e6bff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#7a5cff" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center — DQSM hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-brand transition-transform duration-300 group-hover:scale-110">
              <Zap className="h-8 w-8" />
            </div>
            <p className="mt-1.5 text-center text-[10px] font-bold text-brand-700">DQSM</p>
          </div>

          {/* Service nodes */}
          {services.map(({ icon: Icon, label, x, color }) => (
            <div key={label} className={`absolute ${x} flex flex-col items-center`}>
              <div className={`grid h-12 w-12 place-items-center rounded-xl ${color} text-white shadow-md transition-transform duration-200 hover:scale-125`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="mt-1 text-[10px] font-medium text-ink-500">{label}</span>
            </div>
          ))}

          {/* Floating extras */}
          <div className="absolute left-1/2 top-1 -translate-x-1/2">
            <div className="flex items-center gap-1 rounded-full bg-ink-100/80 px-2.5 py-1 backdrop-blur-sm">
              <Link2 className="h-3 w-3 text-ink-400" />
              <span className="text-[10px] font-medium text-ink-500">Drip</span>
            </div>
          </div>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 rounded-full bg-ink-100/80 px-2.5 py-1 backdrop-blur-sm">
              <ArrowRightLeft className="h-3 w-3 text-ink-400" />
              <span className="text-[10px] font-medium text-ink-500">API</span>
            </div>
          </div>
          <div className="absolute left-1 top-1/2 -translate-y-1/2">
            <div className="flex items-center gap-1 rounded-full bg-ink-100/80 px-2.5 py-1 backdrop-blur-sm">
              <MessageSquare className="h-3 w-3 text-ink-400" />
              <span className="text-[10px] font-medium text-ink-500">Slack</span>
            </div>
          </div>
          <div className="absolute right-1 top-1/2 -translate-y-1/2">
            <div className="flex items-center gap-1 rounded-full bg-ink-100/80 px-2.5 py-1 backdrop-blur-sm">
              <Mail className="h-3 w-3 text-ink-400" />
              <span className="text-[10px] font-medium text-ink-500">MailerLite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature Row Section                                               */
/* ------------------------------------------------------------------ */

function Illustration({ id }: { id: string }) {
  switch (id) {
    case 'create':
      return <CreateQuizMockup />;
    case 'addons':
      return <AddonsGrid />;
    case 'integrations':
      return <IntegrationsVisual />;
    default:
      return null;
  }
}

export function FeatureRowSection({ row }: { row: FeatureRow }) {
  const isReversed = row.reverse;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Text column */}
        <div className={isReversed ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
          <span className="eyebrow mb-3">{row.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-bold text-ink-900 font-display sm:text-4xl">
            {row.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            {row.body}
          </p>
          <ul className="mt-8 space-y-4">
            {row.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-ink-700">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Illustration column */}
        <div className={`order-1 group ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
          <Illustration id={row.id} />
        </div>
      </div>
    </section>
  );
}
