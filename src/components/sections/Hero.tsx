import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const words = ['Quizzes', 'Surveys', 'Forms', 'Exams'];

function useTypewriter(wordList: string[], typeSpeed = 120, deleteSpeed = 80, pauseMs = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = wordList[wordIndex];
    // When we finish typing a word, start deleting after pause
    if (!isDeleting && text === currentWord) {
      const timer = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(timer);
    }

    const delay = !isDeleting ? typeSpeed : deleteSpeed;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
      } else {
        const next = currentWord.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % wordList.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, wordList, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}

const floatingIcons = [
  { src: '/images/quiz.svg', alt: 'Quiz', className: 'top-16 left-8 lg:left-16 w-16 h-16 lg:w-20 lg:h-20 animate-vert-move' },
  { src: '/images/exams-2.svg', alt: 'Exams', className: 'top-32 right-8 lg:right-16 w-14 h-14 lg:w-18 lg:h-18 animate-vert-move-one' },
  { src: '/images/survey.svg', alt: 'Survey', className: 'bottom-32 left-12 lg:left-24 w-14 h-14 lg:w-16 lg:h-16 animate-vert-move-four' },
  { src: '/images/forms-2.svg', alt: 'Forms', className: 'bottom-16 right-12 lg:right-24 w-16 h-16 lg:w-20 lg:h-20 animate-vert-move' },
];

export function Hero() {
  const typedText = useTypewriter(words);

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center py-20 lg:py-28">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/images/BG.svg')`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
        }}
      />
      {/* Floating SVG icons — hidden on mobile */}
      {floatingIcons.map((icon) => (
        <img
          key={icon.alt}
          src={icon.src}
          alt={icon.alt}
          className={`absolute hidden md:block opacity-70 pointer-events-none select-none ${icon.className}`}
          loading="lazy"
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 container-x text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight">
          Create{' '}
          <span className="text-brand-600 typing-cursor">
            {typedText}
          </span>{' '}
          For
        </h2>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight mt-1">
          That People Love
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-ink-500 max-w-2xl mx-auto">
          Best WordPress Quiz and Survey Maker Plugin
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            to="/pricing"
            className="btn-primary text-lg px-10 py-4"
          >
            Get Started
          </Link>
        </div>

        {/* Rating / trust strip */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <img
            src="/images/new-banner-rating-img.webp"
            alt="User ratings"
            className="h-10 w-auto"
            loading="lazy"
          />

          <div className="flex items-center gap-3 text-ink-700">
            <img
              src="/images/img-wordpress-logo.png"
              alt="WordPress"
              className="h-6 w-6"
              loading="lazy"
            />
            <span className="font-semibold text-sm">4.9 / 5</span>
            <img
              src="/images/Star.svg"
              alt="Star"
              className="h-4 w-4"
              loading="lazy"
            />
          </div>

          <p className="text-sm text-ink-400">
            Over 1 million downloads in WordPress
          </p>
        </div>
      </div>
    </section>
  );
}
