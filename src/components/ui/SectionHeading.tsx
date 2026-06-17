import { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 leading-tight">{title}</h2>
      {description && <p className="mt-4 text-ink-500 text-base sm:text-lg">{description}</p>}
    </div>
  );
}
