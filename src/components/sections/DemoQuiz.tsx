import { useState } from 'react';
import type { DemoQuiz as DemoQuizType } from '@/data/demoQuizzes';

interface Props {
  quiz: DemoQuizType;
}

const themes: Record<string, { bg: string; bgImage?: string; accent: string; btnBg: string; btnColor: string; labelBg: string; radius: string; maxW: string }> = {
  sigma: { bg: '#ffe2f0', bgImage: '/images/sigma-background.jpg', accent: '#f42d8c', btnBg: '#f42d8c', btnColor: '#ffffff', labelBg: '#eae9ef', radius: '5px', maxW: '1000px' },
  pixel: { bg: '#ffffff', bgImage: '/images/theme-bg.png', accent: '#3A3951', btnBg: '#3A3951', btnColor: '#ffffff', labelBg: '#ffffff', radius: '6px', maxW: '600px' },
  sapience: { bg: '#ffffff', bgImage: '/images/sapience-background.jpg', accent: '#6366f1', btnBg: '#6366f1', btnColor: '#ffffff', labelBg: '#f5f3ff', radius: '8px', maxW: '700px' },
  fortune: { bg: '#fffbeb', bgImage: '/images/fortune-background.jpg', accent: '#b45309', btnBg: '#b45309', btnColor: '#ffffff', labelBg: '#fffbeb', radius: '8px', maxW: '700px' },
  default: { bg: '#ffffff', accent: '#3A3951', btnBg: '#3A3951', btnColor: '#ffffff', labelBg: '#f5f5f5', radius: '6px', maxW: '600px' },
};

export function DemoQuiz({ quiz }: Props) {
  const [current, setCurrent] = useState(-1);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const t = themes[quiz.theme] || themes.default;
  const total = quiz.questions.length;

  const setAnswer = (qIdx: number, optIdx: number) => setAnswers((p) => ({ ...p, [qIdx]: optIdx }));

  const getResult = () => {
    if (!quiz.results || quiz.results.length === 0) return null;
    const counts: Record<number, number> = {};
    Object.values(answers).forEach((optIdx) => { counts[optIdx] = (counts[optIdx] || 0) + 1; });
    const maxIdx = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
    return quiz.results[Number(maxIdx)] || quiz.results[0];
  };

  const start = () => setCurrent(0);
  const next = () => { if (current < total - 1) setCurrent((c) => c + 1); else setShowResult(true); };
  const prev = () => { if (current > 0) setCurrent((c) => c - 1); };
  const reset = () => { setCurrent(-1); setAnswers({}); setShowResult(false); };

  const q = current >= 0 && current < total ? quiz.questions[current] : null;
  const result = getResult();

  return (
    <div style={{
      backgroundColor: t.bg,
      backgroundImage: t.bgImage ? `url('${t.bgImage}')` : undefined,
      backgroundRepeat: 'no-repeat', backgroundPosition: 'top center', backgroundSize: 'contain',
      maxWidth: t.maxW, margin: '0 auto', border: `1px solid ${t.bg}`,
    }}>
      {/* ── Begin ──────────────────────────────── */}
      {current === -1 && !showResult && (
        <div style={{ padding: '30px' }}>
          {quiz.featuredImage && (
            <img src={quiz.featuredImage} alt={quiz.title}
              style={{ maxWidth: '280px', margin: '0 auto 24px', display: 'block', borderRadius: '8px' }} />
          )}
          <h4 style={{ fontSize: '22px', fontWeight: 600, color: '#282760', marginBottom: '12px' }}>
            {quiz.title}
          </h4>
          <p style={{ fontSize: '17px', color: '#5f6577', lineHeight: '32px', marginBottom: '12px' }}>
            {quiz.description}
          </p>
          {quiz.sampleNote && (
            <p style={{ textAlign: 'left' }}>
              <span style={{ color: '#e87474', fontSize: '15px' }}>It&apos;s a Sample Quiz, Your data is not stored</span>
            </p>
          )}
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <button onClick={start} style={{
              backgroundColor: t.btnBg, color: t.btnColor,
              padding: '10px 20px', borderRadius: '3px', fontSize: '16px', fontWeight: 600,
              border: 'none', cursor: 'pointer',
            }}>Start Quiz</button>
          </div>
        </div>
      )}

      {/* ── Questions ──────────────────────────── */}
      {current >= 0 && !showResult && q && (
        <div style={{ padding: '30px' }}>
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '16px', color: '#282760' }}>{current + 1}.&nbsp;</span>
            <span style={{ fontSize: '16px', color: '#282760' }}>{q.text}</span>
          </div>
          <div>
            {q.options.map((opt, i) => {
              const sel = answers[current] === i;
              return (
                <label key={opt} onClick={() => setAnswer(current, i)} style={{
                  display: 'block', padding: '13px', cursor: 'pointer',
                  backgroundColor: sel ? t.accent + '20' : t.labelBg,
                  border: sel ? `2px solid ${t.accent}` : '0px none transparent',
                  borderRadius: t.radius, fontSize: '14px', color: 'rgb(40, 39, 96)',
                  marginBottom: '14px', transition: 'all 0.15s',
                }}>
                  <input type="radio" name={`q-${current}`} checked={sel}
                    onChange={() => setAnswer(current, i)} style={{ display: 'none' }} />
                  {opt}
                </label>
              );
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button onClick={prev} disabled={current <= 0} style={{
              padding: '10px 20px', backgroundColor: t.btnBg, color: t.btnColor,
              border: 'none', borderRadius: '3px', fontSize: '16px', fontWeight: 500,
              cursor: current <= 0 ? 'not-allowed' : 'pointer', opacity: current <= 0 ? 0.5 : 1,
            }}>Previous</button>
            <button onClick={next} style={{
              padding: '10px 20px', backgroundColor: t.btnBg, color: t.btnColor,
              border: 'none', borderRadius: '3px', fontSize: '16px', fontWeight: 500, cursor: 'pointer',
            }}>{current === total - 1 ? 'Submit' : 'Next'}</button>
          </div>
        </div>
      )}

      {/* ── Result with personality ────────────── */}
      {showResult && result && (
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#282760', marginBottom: '16px' }}>
            {result.title}
          </h3>
          <img src={result.image} alt={result.type}
            style={{ maxWidth: '124px', margin: '0 auto 16px', display: 'block' }} />
          <p style={{ fontSize: '17px', color: '#5f6577', lineHeight: '32px', marginBottom: '24px', maxWidth: '500px', marginInline: 'auto' }}>
            {result.description}
          </p>
          <button onClick={reset} style={{
            padding: '10px 20px', backgroundColor: t.btnBg, color: t.btnColor,
            border: 'none', borderRadius: '3px', fontSize: '16px', fontWeight: 600, cursor: 'pointer',
          }}>Retake Quiz</button>
        </div>
      )}

      {/* ── Fallback result ────────────────────── */}
      {showResult && !result && (
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#282760', marginBottom: '12px' }}>Quiz Complete!</h3>
          <p style={{ fontSize: '17px', color: '#5f6577', marginBottom: '24px' }}>
            You answered {Object.keys(answers).length} out of {total} questions.
          </p>
          <button onClick={reset} style={{
            padding: '10px 20px', backgroundColor: t.btnBg, color: t.btnColor,
            border: 'none', borderRadius: '3px', fontSize: '16px', fontWeight: 600, cursor: 'pointer',
          }}>Retake Quiz</button>
        </div>
      )}
    </div>
  );
}
