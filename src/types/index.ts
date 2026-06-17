export interface NavLink {
  label: string;
  href: string;
}

export interface Review {
  id: string;
  title: string;
  quote: string;
  author: string;
  rating: number;
}

export type AddonCategory = 'free' | 'premium';

export interface Addon {
  id: string;
  name: string;
  description: string;
  category: AddonCategory;
  price: number | 'free';
  group: 'analytics' | 'integration' | 'design' | 'logic' | 'export';
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  yearlyPrice: number;
  lifetimePrice: number;
  sites: number;
  features: string[];
  recommended?: boolean;
  allInclusive?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export interface Demo {
  id: string;
  title: string;
  image: string;
  href: string;
}

export interface Feature {
  title: string;
  body: string;
}

export interface FeatureRow {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
