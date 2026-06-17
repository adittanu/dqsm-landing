import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { docCategories } from '@/data/docs';

export function DocArticle() {
  const { categorySlug, articleSlug } = useParams<{ categorySlug: string; articleSlug: string }>();

  const category = docCategories.find((c) => c.id === categorySlug);
  const article = category?.articles.find((a) => a.slug === articleSlug || a.id === articleSlug);

  if (!category || !article) {
    return (
      <section className="bg-hero-gradient py-24">
        <div className="container-x text-center">
          <h1 className="text-3xl font-bold text-ink-900">Article not found</h1>
          <p className="mt-3 text-ink-500">The documentation article you are looking for does not exist.</p>
          <Link to="/docs" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 font-semibold text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Docs
          </Link>
        </div>
      </section>
    );
  }

  // Get other articles in same category
  const siblings = category.articles.filter((a) => a.id !== article.id);

  return (
    <section className="py-16">
      <div className="container-x max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-ink-400">
          <Link to="/docs" className="hover:text-brand-600">Docs</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to={`/docs#${category.id}`} className="hover:text-brand-600">{category.title}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink-700">{article.title}</span>
        </nav>

        {/* Article header */}
        <h1 className="text-3xl font-bold text-ink-900 font-display lg:text-4xl">{article.title}</h1>
        <p className="mt-4 text-lg text-ink-500">{article.excerpt}</p>

        {/* Article body */}
        {article.body && article.body.length > 0 && (
          <div className="prose prose-ink mt-10 max-w-none">
            {article.body.map((block, i) => {
              if (block.startsWith('## ')) {
                return <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-ink-900">{block.replace('## ', '')}</h2>;
              }
              if (block.startsWith('### ')) {
                return <h3 key={i} className="mt-8 mb-3 text-xl font-semibold text-ink-900">{block.replace('### ', '')}</h3>;
              }
              if (block.startsWith('- ')) {
                return (
                  <ul key={i} className="my-4 list-disc pl-6 space-y-2 text-ink-600">
                    {block.split('\n').filter(l => l.startsWith('- ')).map((li, j) => (
                      <li key={j}>{li.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (block.startsWith('```')) {
                const code = block.replace(/```\w*\n?/, '').replace(/```$/, '');
                return (
                  <pre key={i} className="my-4 rounded-xl bg-ink-900 p-4 text-sm text-ink-100 overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                );
              }
              return <p key={i} className="my-4 leading-relaxed text-ink-600">{block}</p>;
            })}
          </div>
        )}

        {/* Related articles */}
        {siblings.length > 0 && (
          <div className="mt-16 border-t border-ink-100 pt-10">
            <h2 className="text-xl font-bold text-ink-900 mb-6">More in {category.title}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {siblings.slice(0, 4).map((s) => (
                <Link
                  key={s.id}
                  to={`/docs/${category.id}/${s.id}`}
                  className="rounded-xl border border-ink-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-brand-200 transition-all"
                >
                  <h3 className="font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 line-clamp-2">{s.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to docs */}
        <div className="mt-10">
          <Link to="/docs" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
            <ArrowLeft className="h-4 w-4" /> Back to Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}
