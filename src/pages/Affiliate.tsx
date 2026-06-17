import { StubPage } from '@/components/ui/StubPage';

export function Affiliate() {
  return (
    <StubPage
      eyebrow="Affiliates"
      title="Earn 30% on every DQSM referral"
      description="Join the DQSM affiliate program. Get a unique link, real-time tracking, and monthly payouts."
    >
      <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3 text-left text-sm">
        <AffiliateStat label="Commission" value="30%" />
        <AffiliateStat label="Cookie window" value="60 days" />
        <AffiliateStat label="Avg payout" value="$120" />
      </div>
    </StubPage>
  );
}

function AffiliateStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
      <p className="text-xs uppercase tracking-wider text-ink-500">{label}</p>
      <p className="mt-1 text-2xl font-extrabold text-ink-900">{value}</p>
    </div>
  );
}
