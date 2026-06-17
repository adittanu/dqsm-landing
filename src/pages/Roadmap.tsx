import { StubPage } from '@/components/ui/StubPage';

export function Roadmap() {
  return (
    <StubPage
      eyebrow="Roadmap"
      title="What we're shipping next"
      description="See what's planned, in progress, and recently shipped for DQSM."
    >
      <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left text-sm">
        <RoadmapRow status="shipped" title="AI quiz generator" body="Generate quiz questions from a topic with one click." />
        <RoadmapRow status="progress" title="Notion integration" body="Sync quiz responses to Notion databases." />
        <RoadmapRow status="progress" title="Advanced conditional logic v2" body="Drag-and-drop builder for branching logic." />
        <RoadmapRow status="planned" title="Multilingual results page" body="Translate result pages per quiz language." />
      </div>
    </StubPage>
  );
}

function RoadmapRow({ status, title, body }: { status: 'shipped' | 'progress' | 'planned'; title: string; body: string }) {
  const color =
    status === 'shipped' ? 'bg-emerald-50 text-emerald-600' :
    status === 'progress' ? 'bg-amber-50 text-amber-600' :
    'bg-ink-100 text-ink-500';
  const label = status === 'shipped' ? 'Shipped' : status === 'progress' ? 'In progress' : 'Planned';
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-4 shadow-soft flex items-start gap-4">
      <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${color}`}>{label}</span>
      <div>
        <h3 className="text-base font-semibold text-ink-900">{title}</h3>
        <p className="mt-1 text-ink-500">{body}</p>
      </div>
    </div>
  );
}
