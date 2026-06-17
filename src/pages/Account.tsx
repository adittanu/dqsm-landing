import { Link } from 'react-router-dom';
import { LogOut, Settings, BarChart2, Layers } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Account() {
  return (
    <>
      <section className="bg-hero-gradient py-16">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Account"
                title="Welcome back, demo user"
                description="Manage your DQSM license, addons, and sites from one place."
              />
            </div>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-800 hover:border-ink-300"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-x grid gap-6 md:grid-cols-3">
          <Tile icon={Layers} label="Active sites" value="3" />
          <Tile icon={BarChart2} label="Quizzes created" value="47" />
          <Tile icon={Settings} label="Addons installed" value="12" />
        </div>
      </section>
      <section className="py-10">
        <div className="container-x rounded-3xl border border-ink-100 bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink-900">Recent activity</h2>
          <ul className="mt-4 divide-y divide-ink-100 text-sm">
            <ActivityRow title="Quiz 'Ultimate General Quiz' was updated" meta="2 hours ago" />
            <ActivityRow title="Addon 'Google Sheets Connect' was activated" meta="Yesterday" />
            <ActivityRow title="License renewed for 3 sites" meta="3 days ago" />
            <ActivityRow title="Theme 'Midnight' installed" meta="1 week ago" />
          </ul>
        </div>
      </section>
    </>
  );
}

function Tile({ icon: Icon, label, value }: { icon: typeof Layers; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-3 text-3xl font-extrabold text-ink-900">{value}</p>
      <p className="mt-1 text-sm text-ink-500">{label}</p>
    </div>
  );
}

function ActivityRow({ title, meta }: { title: string; meta: string }) {
  return (
    <li className="flex items-center justify-between py-3">
      <span className="text-ink-800">{title}</span>
      <span className="text-xs text-ink-400">{meta}</span>
    </li>
  );
}
