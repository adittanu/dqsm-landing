import { Hero } from '@/components/sections/Hero';
import { QuizContainer } from '@/components/sections/QuizContainer';
import { DemoGrid } from '@/components/sections/DemoGrid';
import { FeatureRowSection } from '@/components/sections/FeatureRow';
import { Features } from '@/components/sections/Features';
import { Themes } from '@/components/sections/Themes';
import { AddonsHighlight } from '@/components/sections/AddonsHighlight';
import { Reviews } from '@/components/sections/Reviews';
import { Faq } from '@/components/sections/Faq';
import { FooterCta } from '@/components/sections/FooterCta';
import { featureRows } from '@/data/features';

export function Home() {
  return (
    <>
      <Hero />
      <QuizContainer />
      <DemoGrid />
      {featureRows.map((row) => (
        <FeatureRowSection key={row.id} row={row} />
      ))}
      <Features />
      <Themes />
      <AddonsHighlight />
      <Reviews />
      <Faq />
      <FooterCta />
    </>
  );
}
