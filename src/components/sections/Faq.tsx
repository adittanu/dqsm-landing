import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { faqs } from '@/data/faqs';

export function Faq() {
  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="We have put together some commonly asked questions"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqs} initialOpenId={faqs[0]?.id} />
        </div>
      </div>
    </section>
  );
}
