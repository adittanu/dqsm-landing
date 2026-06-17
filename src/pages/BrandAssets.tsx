import { Download, Image as ImageIcon, FileText } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const assets = [
  { id: 'logo-pack', name: 'Logo Pack', description: 'DQSM logos in SVG, PNG, and dark/light variants.', size: '2.4 MB', icon: ImageIcon, format: 'ZIP' },
  { id: 'brand-guide', name: 'Brand Guide', description: 'Colors, typography, voice, and usage guidelines.', size: '5.1 MB', icon: FileText, format: 'PDF' },
  { id: 'screenshot-bundle', name: 'Screenshots', description: 'Product screenshots for press and reviews.', size: '18 MB', icon: ImageIcon, format: 'ZIP' },
];

export function BrandAssets() {
  return (
    <>
      <section className="bg-hero-gradient py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Brand assets"
            title="Logos, screenshots, and guidelines"
            description="Everything you need to write about DQSM, in one place."
          />
        </div>
      </section>
      <section className="py-16">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {assets.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.id} className="card flex flex-col">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{a.name}</h3>
                <p className="mt-2 text-sm text-ink-500">{a.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
                  <span>{a.format} · {a.size}</span>
                  <button className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700">
                    <Download className="h-3 w-3" /> Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
