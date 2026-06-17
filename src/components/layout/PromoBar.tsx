import { Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { promoMessage } from '@/data/navigation';

export function PromoBar() {
  return (
    <div className="w-full bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 text-white text-sm">
      <Link
        to={promoMessage.href}
        className="container-x flex items-center justify-center gap-4 py-2.5 hover:opacity-90"
      >
        <span className="hidden sm:inline font-medium">{promoMessage.prefix}</span>
        <span className="sm:hidden font-medium">Save 15% — code: SAVE15</span>
        <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide">
          <Tag className="h-3 w-3" /> Coupon: {promoMessage.coupon}
        </span>
      </Link>
    </div>
  );
}
