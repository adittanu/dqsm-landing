import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/types';
import { useAccordion } from '@/hooks/useAccordion';

interface Props {
  items: FaqItem[];
  initialOpenId?: string;
}

export function Accordion({ items, initialOpenId }: Props) {
  const { openId, toggle } = useAccordion(initialOpenId);

  return (
    <div className="divide-y divide-ink-100 rounded-3xl border border-ink-100 bg-white shadow-soft">
      {items.map((item) => {
        const open = openId === item.id;
        return <FaqRow key={item.id} item={item} open={open} onToggle={() => toggle(item.id)} />;
      })}
    </div>
  );
}

function FaqRow({ item, open, onToggle }: { item: FaqItem; open: boolean; onToggle: () => void }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-semibold text-ink-900">{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand-600 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <p className="px-6 pb-6 text-ink-500 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
