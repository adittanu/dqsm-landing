import { useState, FormEvent } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section className="bg-hero-gradient py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="We'd love to hear from you"
          description="Questions, feedback, or feature requests — drop us a line and we will get back within one business day."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-3xl border border-ink-100 bg-white p-6 shadow-soft">
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-ink-700">Name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1.5 w-full rounded-xl border border-ink-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink-700">Email</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1.5 w-full rounded-xl border border-ink-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink-700">Message</span>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="mt-1.5 w-full rounded-xl border border-ink-200 px-3 py-2.5 text-sm focus:border-brand-500 focus:outline-none" />
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-semibold text-white shadow-brand hover:bg-brand-700">
                <Send className="h-4 w-4" /> Send message
              </button>
              {sent && <p className="text-sm text-emerald-600">Thanks! We will reply shortly.</p>}
            </div>
          </form>
          <div className="space-y-4">
            <Info icon={Mail} title="Email" body="support@quizandsurveymaster.local" />
            <Info icon={MessageSquare} title="Live chat" body="Available Mon-Fri, 9am-6pm UTC" />
            <Info icon={Send} title="Status" body="All systems operational" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, body }: { icon: typeof Mail; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-3 text-sm font-semibold text-ink-900">{title}</h3>
      <p className="mt-1 text-sm text-ink-500">{body}</p>
    </div>
  );
}
