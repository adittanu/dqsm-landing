const brands = [
  { name: 'Global Brand 1', logo: '/images/global-logo-img-001.png' },
  { name: 'Global Brand 2', logo: '/images/global-logo-img-002.png' },
  { name: 'Global Brand 3', logo: '/images/global-logo-img-003.png' },
  { name: 'Global Brand 4', logo: '/images/global-logo-img-004.png' },
  { name: 'Global Brand 5', logo: '/images/global-logo-img-005.png' },
  { name: 'Global Brand 6', logo: '/images/global-logo-img-006.png' },
];

export function BrandLogos() {
  return (
    <section className="border-y border-ink-100 bg-white py-12">
      <div className="container-x">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-ink-500">Trusted by Global Brands</p>
        <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((b) => (
            <div key={b.name} className="flex items-center justify-center">
              <img
                src={b.logo}
                alt={b.name}
                className="h-12 w-auto max-w-[160px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
