import type { NavLink } from '@/types';

export const mainNav: NavLink[] = [
  { label: 'Demos', href: '/demos' },
  { label: 'Addons', href: '/addons' },
  { label: 'Themes', href: '/themes' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blogs', href: '/blogs' },
];

export const promoMessage = {
  prefix: 'Save 15% on orders over $99',
  coupon: 'SAVE15',
  href: '/pricing',
};
