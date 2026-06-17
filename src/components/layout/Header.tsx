import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { mainNav } from '@/data/navigation';
import { LinkButton } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b border-transparent bg-white/80 backdrop-blur transition-all ${
          scrolled ? 'border-ink-100 shadow-soft' : ''
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6">
          <Link to="/" aria-label="DQSM home" className="shrink-0">
            <img src="/images/logo.png" alt="DQSM" className="h-8" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {mainNav.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium hover:text-brand-600 ${
                    isActive ? 'text-brand-600' : 'text-ink-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-sm font-medium hover:text-brand-600 ${isActive ? 'text-brand-600' : 'text-ink-700'}`
              }
            >
              Login
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <LinkButton to="/pricing" variant="primary" className="hidden md:inline-flex">
              Get Started
            </LinkButton>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden rounded-xl p-2 text-ink-700 hover:bg-ink-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
