import { StubPage } from '@/components/ui/StubPage';

export function RefundPolicy() {
  return (
    <StubPage
      eyebrow="Legal"
      title="Refund Policy"
      description="We offer a 14-day money-back guarantee on all paid plans. No questions asked."
    >
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-ink-100 bg-white p-6 text-left text-sm text-ink-500 shadow-soft">
        <p>If you are not satisfied with your purchase, contact us within 14 days of the original purchase date and we will refund 100% of the price. Refunds are processed within 5-7 business days.</p>
      </div>
    </StubPage>
  );
}
