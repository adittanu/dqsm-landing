import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { footerColumns, socials } from '@/data/footer';
import { useState, FormEvent } from 'react';
export function Footer() {
  return (
    <footer className="bg-white">
      <NewsletterStrip />
      <div className="bg-ink-100/50">
        <div className="container-x py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
            <div>
              <Link to="/" className="inline-flex items-center gap-2">
                <img src="/images/logo.png" alt="DQSM" className="h-8" />
              </Link>
              <p className="mt-4 text-sm text-ink-500 max-w-xs">
                The best WordPress quiz and survey plugin trusted by 1M+ users worldwide.
              </p>
              <SocialRow />
            </div>
            {footerColumns.map((col) => (
              <FooterCol key={col.title} title={col.title} links={col.links} />
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-200 pt-6 text-sm text-ink-400 sm:flex-row">
            <p>© 2026 DQSM — Quiz And Survey Master</p>
            <p>Built with ☕ by DQSM fans</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterStrip() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 text-white">
      <div className="container-x grid items-center gap-10 py-16 md:grid-cols-2">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display">Subscribe to Our Newsletter</h3>
          <p className="mt-2 text-white/80">Get weekly updates, no spam guaranteed we promise ✌️</p>
        </div>
        <form onSubmit={onSubmit} className="flex w-full max-w-md items-center gap-2 rounded-full bg-white p-1.5 shadow-brand md:ml-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="flex-1 bg-transparent px-4 py-2 text-ink-900 placeholder:text-ink-400 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            <Send className="h-4 w-4" />
            Subscribe
          </button>
        </form>
        {submitted && <p className="md:col-span-2 text-sm text-white/90">Thanks! Check your inbox to confirm.</p>}
      </div>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-700">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.href} className="text-sm text-ink-500 hover:text-brand-600">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialRow() {
  return (
    <div className="mt-6 flex items-center gap-3">
      {socials.map((s) => (
        <button
          key={s.name}
          type="button"
          aria-label={s.name}
          className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-soft hover:opacity-80 transition"
        >
          <img src={s.icon} alt={s.name} className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
}
