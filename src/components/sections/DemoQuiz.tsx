import { useState } from 'react';
import type { DemoQuiz as DemoQuizType } from '@/data/demoQuizzes';

interface Props {
  quiz: DemoQuizType;
}

const themes: Record<string, { bg: string; bgImage?: string; accent: string; btnBg: string; btnColor: string; labelBg: string; radius: string; maxW: string; colCount: string }> = {
  sigma: {
    bg: '#ffe2f0',
    bgImage: '/images/sigma-background.jpg',
    accent: '#f42d8c',
    btnBg: '#f42d8c',
    btnColor: '#ffffff',
    labelBg: '#eae9ef',
    radius: '5px',
    maxW: '1000px',
    colCount: '1',
  },
  pixel: {
    bg: '#ffffff',
    bgImage: '/images/theme-bg.png',
    accent: '#3A3951',
    btnBg: '#3A3951',
    btnColor: '#ffffff',
    labelBg: '#ffffff',
    radius: '6px',
    maxW: '600px',
    colCount: '1',
  },
  sapience: {
    bg: '#ffffff',
    bgImage: '/images/sapience-background.jpg',
    accent: '#6366f1',
    btnBg: '#6366f1',
    btnColor: '#ffffff',
    labelBg: '#f5f3ff',
    radius: '8px',
    maxW: '700px',
    colCount: '1',
  },
  fortune: {
    bg: '#fffbeb',
    bgImage: '/images/fortune-background.jpg',
    accent: '#b45309',
    btnBg: '#b45309',
    btnColor: '#ffffff',
    labelBg: '#fffbeb',
    radius: '8px',
    maxW: '700px',
    colCount: '1',
  },
  default: {
    bg: '#ffffff',
    accent: '#3A3951',
    btnBg: '#3A3951',
    btnColor: '#ffffff',
    labelBg: '#f5f5f5',
    radius: '6px',
    maxW: '600px',
    colCount: '1',
  },
};

export function DemoQuiz({ quiz }: Props) {
  const [current, setCurrent] = useState(0); // 0 = begin, 1..n = questions, n+1 = result
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [showResult, setShowResult] = useState(false);

  const t = themes[quiz.theme] || themes.default;
  const total = quiz.questions.length;

  const setAnswer = (idx: number, val: string) => setAnswers((p) => ({ ...p, [idx]: val }));

  const handleSubmit = () => {
    if (current === 0) {
      setCurrent(1);
    } else {
      setShowResult(true);
    }
  };

  const next = () => {
    if (current < total) setCurrent((c) => c + 1);
    else setShowResult(true);
  };

  const prev = () => {
    if (current > 1) setCurrent((c) => c - 1);
  };

  const reset = () => { setCurrent(0); setAnswers({}); setShowResult(false); };

  const q = current > 0 && current <= total ? quiz.questions[current - 1] : null;
  const answeredCount = Object.keys(answers).length;

  return (
    <div
      style={{
        backgroundColor: t.bg,
        backgroundImage: t.bgImage ? `url('${t.bgImage}')` : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'contain',
        maxWidth: t.maxW,
        margin: '0 auto',
        border: `1px solid ${t.bg}`,
      }}
    >
      {/* ── Begin Screen ───────────────────────── */}
      {current === 0 && !showResult && (
        <div style={{ padding: '30px' }}>
          {quiz.featuredImage && (
            <img
              src={quiz.featuredImage}
              alt={quiz.title}
              style={{ maxWidth: '280px', margin: '0 auto 24px', display: 'block', borderRadius: '8px' }}
            />
          )}
          <h4 style={{ fontSize: '22px', fontWeight: 600, color: '#282760', marginBottom: '12px' }}>
            {quiz.title}
          </h4>
          <p style={{ fontSize: '17px', color: '#5f6577', lineHeight: '32px', marginBottom: '12px' }}>
            {quiz.description}
          </p>
          <p style={{ textAlign: 'left' }}>
            <span style={{ color: '#e87474', fontSize: '15px' }}>
              It&apos;s a Sample Quiz, Your data is not stored
            </span>
          </p>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <button
              onClick={() => setCurrent(1)}
              style={{
                backgroundColor: t.btnBg, color: t.btnColor,
                padding: '10px 20px', borderRadius: '3px', fontSize: '16px', fontWeight: 600,
                border: 'none', cursor: 'pointer', width: 'auto',
              }}
            >
              Start Quiz
            </button>
          </div>
        </div>
      )}

      {/* ── Questions ───────────────────────────── */}
      {current > 0 && !showResult && q && (
        <div style={{ padding: '30px' }}>
          {/* Question number + text */}
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '16px', color: '#282760', fontWeight: 400 }}>
              {current}.&nbsp;
            </span>
            <span style={{ fontSize: '16px', color: '#282760', fontWeight: 400 }}>
              {q.text}
            </span>
          </div>

          {/* Options grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${t.colCount}, 1fr)`,
            gap: '0',
          }}>
            {q.options.map((opt, i) => {
              const sel = answers[current - 1] === opt;
              return (
                <label
                  key={opt}
                  onClick={() => setAnswer(current - 1, opt)}
                  style={{
                    display: 'block', padding: '13px', cursor: 'pointer',
                    backgroundColor: sel ? t.accent + '20' : t.labelBg,
                    border: sel ? `2px solid ${t.accent}` : '0px none transparent',
                    borderRadius: t.radius, fontSize: '14px',
                    color: 'rgb(40, 39, 96)',
                    marginBottom: '14px',
                    transition: 'all 0.15s',
                  }}
                >
                  <input
                    type="radio"
                    name={`q-${current}`}
                    checked={sel}
                    onChange={() => setAnswer(current - 1, opt)}
                    style={{ display: 'none' }}
                  />
                  {opt}
                </label>
              );
            })}
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button
              onClick={prev}
              disabled={current <= 1}
              style={{
                padding: '10px 20px', backgroundColor: t.btnBg, color: t.btnColor,
                border: 'none', borderRadius: '3px', fontSize: '16px', fontWeight: 500,
                cursor: current <= 1 ? 'not-allowed' : 'pointer',
                opacity: current <= 1 ? 0.5 : 1,
              }}
            >
              Previous
            </button>
            <button
              onClick={next}
              style={{
                padding: '10px 20px', backgroundColor: t.btnBg, color: t.btnColor,
                border: 'none', borderRadius: '3px', fontSize: '16px', fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* ── Result ───────────────────────────────── */}
      {showResult && (
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <h4 style={{ fontSize: '22px', fontWeight: 600, color: '#282760', marginBottom: '12px' }}>
            Quiz Complete!
          </h4>
          <p style={{ fontSize: '17px', color: '#5f6577', marginBottom: '24px' }}>
            You answered {answeredCount} out of {total} questions.
          </p>
          <p style={{ fontSize: '48px', fontWeight: 700, color: t.accent, lineHeight: 1 }}>
            {Math.round((answeredCount / total) * 100)}%
          </p>
          <p style={{ fontSize: '14px', color: '#AAA', marginTop: '4px' }}>Completion Rate</p>
          <button
            onClick={reset}
            style={{
              marginTop: '24px', padding: '10px 20px', backgroundColor: t.btnBg,
              color: t.btnColor, border: 'none', borderRadius: '3px',
              fontSize: '16px', fontWeight: 600, cursor: 'pointer',
            }}
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
}
