import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Palette, Smartphone, Settings, Code } from 'lucide-react';
import { FooterCta } from '@/components/sections/FooterCta';
import { LinkButton } from '@/components/ui/Button';

const themes: Record<string, { name: string; image: string; tagline: string }> = {
  sapience: { name: 'Sapience', image: '/images/theme-sapience.png', tagline: 'A clean, professional theme for knowledge-sharing sites.' },
  sigma: { name: 'Sigma', image: '/images/theme-sigma.png', tagline: 'Bold colors and big typography for personality quizzes.' },
  pixel: { name: 'Pixel', image: '/images/theme-pixel.png', tagline: 'A modern pixel-perfect theme with playful shapes.' },
  fortune: { name: 'Fortune', image: '/images/theme-fortune.png', tagline: 'A premium theme for surveys and feedback forms.' },
  pool: { name: 'Pool', image: '/images/theme-pool.png', tagline: 'Cool blues and gradient effects for tech audiences.' },
  ivory: { name: 'Ivory', image: '/images/theme-ivory.png', tagline: 'Soft pastels and elegant spacing for lifestyle brands.' },
  fragrance: { name: 'Fragrance', image: '/images/theme-fragrance.png', tagline: 'Warm tones and rich typography for product-led sites.' },
  breeze: { name: 'Breeze', image: '/images/theme-breeze.png', tagline: 'Light, airy, and minimal — pairs well with any quiz.' },
};

const features = [
  { icon: Palette, title: 'Custom colors', body: 'Match your brand with one click.' },
  { icon: Smartphone, title: 'Mobile first', body: 'Looks great on phones, tablets, and desktops.' },
  { icon: Settings, title: 'No code', body: 'Configure everything from the WordPress dashboard.' },
  { icon: Code, title: 'Developer friendly', body: 'Hooks and CSS variables for custom tweaks.' },
];

export function ThemeDetail() {
  const { id } = useParams<{ id: string }>();
  const theme = id ? themes[id] : undefined;

  if (!theme) {
    return (
      <section className="bg-hero-gradient py-24">
        <div className="container-x text-center">
          <h1 className="text-3xl font-bold text-ink-900">Theme not found</h1>
          <Link to="/themes" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 font-semibold text-white">
            <ArrowLeft className="h-4 w-4" /> All themes
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-hero-gradient py-16">
        <div className="container-x">
          <Link to="/themes" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-brand-600">
            <ArrowLeft className="h-4 w-4" /> All themes
          </Link>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="overflow-hidden rounded-2xl shadow-brand">
              <img src={theme.image} alt={theme.name} className="w-full" />
            </div>
            <div>
              <span className="eyebrow mb-3">Premium theme</span>
              <h1 className="mt-3 text-4xl font-bold text-ink-900 font-display">{theme.name}</h1>
              <p className="mt-3 text-ink-500 text-lg">{theme.tagline}</p>
              <div className="mt-5 flex items-center gap-2 text-sun-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-sm font-semibold text-ink-700">4.8 / 5</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <LinkButton to="/pricing" variant="primary">Get this theme</LinkButton>
                <LinkButton to="/themes" variant="ghost">Browse all themes</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-ink-900 font-display text-center">Features</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="card text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-ink-500">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FooterCta />
    </>
  );
}
