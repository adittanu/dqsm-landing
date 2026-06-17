import { ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reviews } from '@/components/sections/Reviews';
import { FooterCta } from '@/components/sections/FooterCta';

interface Theme {
  name: string;
  image: string;
  demoUrl: string;
}

const themes: Theme[] = [
  { name: 'Sapience', image: '/images/540-1.png', demoUrl: 'https://themes.quizandsurveymaster.com/sapience/' },
  { name: 'Sigma', image: '/images/Sigma-1-1.png', demoUrl: 'https://themes.quizandsurveymaster.com/sigma/' },
  { name: 'Pixel', image: '/images/Pixel-img.png', demoUrl: 'https://themes.quizandsurveymaster.com/pixel/' },
  { name: 'Fortune', image: '/images/Frame-9-1.png', demoUrl: 'https://themes.quizandsurveymaster.com/fortune/' },
  { name: 'Pool', image: '/images/theme-pool-1.png', demoUrl: 'https://themes.quizandsurveymaster.com/pool-qsm-theme-demo/' },
  { name: 'Ivory', image: '/images/theme-ivory-1.png', demoUrl: 'https://themes.quizandsurveymaster.com/ivory-qsm-theme-demo/' },
  { name: 'Fragrance', image: '/images/theme-fragrance-1.png', demoUrl: 'https://themes.quizandsurveymaster.com/fragrance/' },
  { name: 'Breeze', image: '/images/theme-breeze-1.png', demoUrl: 'https://themes.quizandsurveymaster.com/breeze-qsm-theme-demo/' },
];

export function Themes() {
  return (
    <>
      {/* Hero heading */}
      <section className="bg-white pt-16 pb-6 text-center">
        <div className="container-x">
          <SectionHeading eyebrow="Themes" title="Elevate Your Quiz and Survey Styles" />
        </div>
      </section>

      {/* Theme grid */}
      <section className="bg-white pb-20">
        <div className="container-x">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map((theme) => (
              <ThemeCard key={theme.name} theme={theme} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <Reviews />

      {/* Footer CTA */}
      <FooterCta />
    </>
  );
}

function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <div className="group rounded-2xl border border-ink-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Preview image */}
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={theme.image}
          alt={`${theme.name} theme preview`}
          className="w-full transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex items-center justify-between p-4">
        <h3 className="text-lg font-bold text-ink-900 font-display">{theme.name}</h3>
        <a
          href={theme.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-100"
        >
          Demo <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
