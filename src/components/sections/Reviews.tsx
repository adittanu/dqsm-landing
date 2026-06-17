import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { reviews } from '@/data/reviews';

export function Reviews() {
  return (
    <section className="bg-ink-100/40 py-20">
      <div className="container-x">
        {/* Heading with rating badge */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 leading-tight">
            Customer Reviews
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-sun-300 bg-sun-50 px-5 py-2">
            <div className="flex items-center gap-0.5 text-sun-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold text-ink-800">4.9 / 5</span>
            <span className="text-sm text-ink-500">rating</span>
          </div>
        </div>

        {/* Swiper carousel */}
        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-12"
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id} className="h-auto">
                <ReviewCard review={r} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Link to all reviews */}
        <div className="mt-6 text-center">
          <Link
            to="/testimonials"
            className="text-sm font-semibold text-brand-600 hover:underline"
          >
            See all Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
      <Quote className="h-6 w-6 text-brand-400" />
      <h4 className="mt-3 text-base font-semibold text-ink-900">
        &ldquo;{review.title}&rdquo;
      </h4>
      <p className="mt-3 flex-1 text-sm text-ink-500 leading-relaxed">
        {review.quote}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
        <div className="flex items-center gap-1 text-sun-500">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
        <p className="text-sm font-semibold text-ink-700">{review.author}</p>
      </div>
    </div>
  );
}
