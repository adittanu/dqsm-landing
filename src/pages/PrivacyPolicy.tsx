import { StubPage } from '@/components/ui/StubPage';

export function PrivacyPolicy() {
  return (
    <StubPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="This is a demo privacy policy for the DQSM clone. It explains what data we collect, how we use it, and your rights."
    >
      <div className="mx-auto mt-10 max-w-3xl space-y-4 rounded-2xl border border-ink-100 bg-white p-6 text-left text-sm text-ink-500 shadow-soft">
        <h3 className="text-base font-semibold text-ink-900">1. Data we collect</h3>
        <p>We collect only the data you voluntarily submit through forms, quizzes, and surveys created with DQSM.</p>
        <h3 className="text-base font-semibold text-ink-900">2. How we use it</h3>
        <p>Data is used to deliver quiz functionality, generate reports, and improve the product.</p>
        <h3 className="text-base font-semibold text-ink-900">3. Your rights</h3>
        <p>You can request export or deletion of your data at any time by contacting support.</p>
      </div>
    </StubPage>
  );
}
