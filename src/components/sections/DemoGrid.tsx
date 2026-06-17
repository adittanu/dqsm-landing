import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { demos } from '@/data/demos';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function DemoGrid() {
  return (
    <section className="bg-ink-100/40 py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Live demos"
          title="See DQSM in Action"
          description="Explore real quizzes and surveys built with DQSM. Click any card to try the demo."
        />
        <div className="mt-12 hidden md:grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {demos.map((d) => (
            <DemoCard key={d.id} {...d} />
          ))}
        </div>
        <div className="mt-12 md:hidden">
          <Swiper
            modules={[Grid, Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2.1 } }}
            className="!pb-10"
          >
            {demos.map((d) => (
              <SwiperSlide key={d.id}>
                <DemoCard {...d} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/demos"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 shadow-soft hover:text-brand-600"
          >
            Explore Demos →
          </Link>
        </div>
      </div>
    </section>
  );
}

function DemoCard({ title, image, href }: { title: string; image: string; href: string }) {
  return (
    <Link
      to={href}
      className="group block overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-brand"
    >
      <div className="aspect-[4/3] overflow-hidden bg-ink-100">
        <img src={image} alt={title} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm font-semibold text-ink-800 group-hover:text-brand-600">{title}</h3>
      </div>
    </Link>
  );
}
