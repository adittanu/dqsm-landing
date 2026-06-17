import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mainNav } from '@/data/navigation';
import { LinkButton } from '@/components/ui/Button';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: Props) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition ${
        open ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-ink-900/60 transition-opacity ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
          <img src="/images/logo.png" alt="DQSM" className="h-7" />
          <button onClick={onClose} aria-label="Close menu" className="rounded-full p-2 text-ink-700 hover:bg-ink-100">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-5">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-100"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="rounded-xl px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-100"
            onClick={onClose}
          >
            Login
          </Link>
          <LinkButton to="/pricing" variant="primary" className="mt-3 w-full justify-center" onClick={onClose}>
            Get Started
          </LinkButton>
        </nav>
        <div className="mt-auto px-5 pb-6 text-xs text-ink-400">© 2026 DQSM — Quiz And Survey Master</div>
      </aside>
    </div>
  );
}
