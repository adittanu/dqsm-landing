import { useState } from 'react';
import type { DemoQuiz as DemoQuizType } from '@/data/demoQuizzes';

interface Props {
  quiz: DemoQuizType;
}

const themes: Record<string, { bg: string; bgImage?: string; accent: string; btnBg: string; btnColor: string; labelBg: string; labelBorder: string; radius: string; maxW: string }> = {
  sigma: {
    bg: '#ffe2f0',
    bgImage: '/images/sigma-background.jpg',
    accent: '#f42d8c',
    btnBg: '#f42d8c',
    btnColor: '#ffffff',
    labelBg: '#eae9ef',
    labelBorder: 'none',
    radius: '5px',
    maxW: '1000px',
  },
  pixel: {
    bg: '#ffffff',
    bgImage: '/images/theme-bg.png',
    accent: '#3A3951',
    btnBg: '#3A3951',
    btnColor: '#ffffff',
    labelBg: '#ffffff',
    labelBorder: '2px solid #3A3951',
    radius: '6px',
    maxW: '600px',
  },
  sapience: {
    bg: '#ffffff',
    bgImage: '/images/sapience-background.jpg',
    accent: '#6366f1',
    btnBg: '#6366f1',
    btnColor: '#ffffff',
    labelBg: '#f5f3ff',
    labelBorder: '2px solid #e0e7ff',
    radius: '8px',
    maxW: '700px',
  },
  fortune: {
    bg: '#fffbeb',
    bgImage: '/images/fortune-background.jpg',
    accent: '#b45309',
    btnBg: '#b45309',
    btnColor: '#ffffff',
    labelBg: '#fffbeb',
    labelBorder: '2px solid #fbbf24',
    radius: '8px',
    maxW: '700px',
  },
  default: {
    bg: '#ffffff',
    accent: '#3A3951',
    btnBg: '#3A3951',
    btnColor: '#ffffff',
    labelBg: '#f5f5f5',
    labelBorder: '1px solid #e0e0e0',
    radius: '6px',
    maxW: '600px',
  },
};

export function DemoQuiz({ quiz }: Props) {
  const [current, setCurrent] = useState(-1);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [showResult, setShowResult] = useState(false);

  const t = themes[quiz.theme] || themes.default;
  const total = quiz.questions.length;
  const progress = current >= 0 ? ((current + 1) / total) * 100 : 0;
  const q = current >= 0 ? quiz.questions[current] : null;

  const setAnswer = (idx: number, val: string) => setAnswers((p) => ({ ...p, [idx]: val }));
  const toggleCheck = (idx: number, opt: string) => {
    const cur = (answers[idx] as string[]) || [];
    setAnswers((p) => ({ ...p, [idx]: cur.includes(opt) ? cur.filter((o) => o !== opt) : [...cur, opt] }));
  };

  const next = () => { if (current < total - 1) setCurrent((c) => c + 1); else setShowResult(true); };
  const prev = () => { if (current > 0) setCurrent((c) => c - 1); };
  const reset = () => { setCurrent(-1); setAnswers({}); setShowResult(false); };

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
        padding: '30px',
        minHeight: '480px',
      }}
    >
      {/* ── Begin ───────────────────────── */}
      {current === -1 && !showResult && (
        <div style={{ padding: '15px 0', textAlign: 'center' }}>
          {quiz.featuredImage && (
            <img
              src={quiz.featuredImage}
              alt={quiz.title}
              style={{ maxWidth: '320px', margin: '0 auto 24px', display: 'block', borderRadius: '12px' }}
            />
          )}
          <h2 style={{ fontSize: '26px', fontWeight: 500, color: '#101010', lineHeight: 1.3 }}>
            {quiz.title}
          </h2>
          <p style={{ fontSize: '16px', color: '#666', marginTop: '10px', lineHeight: 1.6, maxWidth: '500px', marginInline: 'auto' }}>
            {quiz.description}
          </p>
          <button
            onClick={() => setCurrent(0)}
            style={{
              marginTop: '24px', backgroundColor: t.btnBg, color: t.btnColor,
              padding: '12px 32px', borderRadius: t.radius, fontSize: '16px', fontWeight: 600,
              border: 'none', cursor: 'pointer',
            }}
          >
            Start the Quiz
          </button>
        </div>
      )}

      {/* ── Questions ────────────────────── */}
      {current >= 0 && !showResult && q && (
        <div>
          <div style={{ height: '4px', backgroundColor: '#E5E5E5', borderRadius: '2px', marginBottom: '20px' }}>
            <div style={{ height: '100%', width: `${progress}%`, backgroundColor: t.accent, borderRadius: '2px', transition: 'width 0.4s' }} />
          </div>

          <div style={{ padding: '15px 0' }}>
            <p style={{ fontSize: '12px', color: '#AAA', marginBottom: '8px' }}>
              Question {current + 1} of {total}
            </p>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '16px', lineHeight: 1.5 }}>
              {q.text}
            </p>

            {/* Radio */}
            {q.type === 'radio' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {q.options.map((opt) => {
                  const sel = answers[current] === opt;
                  return (
                    <label
                      key={opt}
                      onClick={() => setAnswer(current, opt)}
                      style={{
                        display: 'block', padding: '13px', cursor: 'pointer',
                        backgroundColor: sel ? t.accent + '18' : t.labelBg,
                        border: sel ? `2px solid ${t.accent}` : t.labelBorder,
                        borderRadius: t.radius, fontSize: '14px', color: '#333',
                        transition: 'all 0.15s',
                      }}
                    >
                      {opt}
                    </label>
                  );
                })}
              </div>
            )}

            {/* Checkbox */}
            {q.type === 'checkbox' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {q.options.map((opt) => {
                  const checked = ((answers[current] as string[]) || []).includes(opt);
                  return (
                    <label
                      key={opt}
                      onClick={() => toggleCheck(current, opt)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '13px', cursor: 'pointer',
                        backgroundColor: checked ? t.accent + '18' : t.labelBg,
                        border: checked ? `2px solid ${t.accent}` : t.labelBorder,
                        borderRadius: t.radius, fontSize: '14px', color: '#333',
                      }}
                    >
                      <span style={{
                        width: '18px', height: '18px', borderRadius: '3px',
                        border: `2px solid ${checked ? t.accent : '#CCC'}`,
                        backgroundColor: checked ? t.accent : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        {checked && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        )}
                      </span>
                      {opt}
                    </label>
                  );
                })}
              </div>
            )}

            {/* Select */}
            {q.type === 'select' && (
              <select
                value={(answers[current] as string) || ''}
                onChange={(e) => setAnswer(current, e.target.value)}
                style={{
                  width: '100%', padding: '12px 16px', border: t.labelBorder,
                  borderRadius: t.radius, fontSize: '14px', color: '#333', backgroundColor: '#FFF', outline: 'none',
                }}
              >
                <option value="">Please select your answer</option>
                {q.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            )}

            {/* Text / Short / Matching */}
            {(q.type === 'text' || q.type === 'matching') && (
              <input
                type="text"
                value={(answers[current] as string) || ''}
                onChange={(e) => setAnswer(current, e.target.value)}
                placeholder="Type your answer..."
                style={{
                  width: '100%', padding: '12px 16px', border: t.labelBorder,
                  borderRadius: t.radius, fontSize: '14px', color: '#333', outline: 'none',
                }}
              />
            )}

            {/* Number */}
            {q.type === 'number' && (
              <input
                type="number"
                value={(answers[current] as string) || ''}
                onChange={(e) => setAnswer(current, e.target.value)}
                placeholder="Enter a number..."
                style={{
                  width: '100%', padding: '12px 16px', border: t.labelBorder,
                  borderRadius: t.radius, fontSize: '14px', color: '#333', outline: 'none',
                }}
              />
            )}

            {/* Slider */}
            {q.type === 'slider' && (
              <div style={{ padding: '8px 0' }}>
                <input
                  type="range" min={0} max={100}
                  value={(answers[current] as string) || '50'}
                  onChange={(e) => setAnswer(current, e.target.value)}
                  style={{ width: '100%', accentColor: t.accent }}
                />
                <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '14px', fontWeight: 600, color: t.accent }}>
                  {(answers[current] as string) || '50'}
                </p>
              </div>
            )}

            {/* Fill in the blank */}
            {q.type === 'fillblank' && (
              <p style={{ fontSize: '16px', color: '#555', lineHeight: 2 }}>
                {q.text.replace(/_+/, '')}{' '}
                <input
                  type="text"
                  value={(answers[current] as string) || ''}
                  onChange={(e) => setAnswer(current, e.target.value)}
                  placeholder="____"
                  style={{
                    width: '140px', padding: '6px 12px', border: 'none',
                    borderBottom: `2px solid ${t.accent}`, fontSize: '16px',
                    color: t.accent, outline: 'none', backgroundColor: 'transparent',
                  }}
                />
              </p>
            )}

            {/* Date */}
            {q.type === 'date' && (
              <input
                type="date"
                value={(answers[current] as string) || ''}
                onChange={(e) => setAnswer(current, e.target.value)}
                style={{
                  width: '100%', padding: '12px 16px', border: t.labelBorder,
                  borderRadius: t.radius, fontSize: '14px', color: '#333', outline: 'none',
                }}
              />
            )}

            {/* HTML */}
            {q.type === 'html' && (
              <div style={{ padding: '16px', backgroundColor: '#FFF8E1', border: '1px solid #FFE082', borderRadius: '8px' }}>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>{q.text}</p>
              </div>
            )}

            {/* File */}
            {q.type === 'file' && (
              <div style={{ border: '2px dashed #D0D0D0', borderRadius: '8px', padding: '32px', textAlign: 'center' }}>
                <p style={{ fontSize: '14px', color: '#888', marginBottom: '12px' }}>Drag and drop or</p>
                <label style={{
                  display: 'inline-block', padding: '8px 20px', backgroundColor: t.btnBg,
                  color: t.btnColor, borderRadius: t.radius, fontSize: '14px', cursor: 'pointer',
                }}>
                  Choose File
                  <input type="file" style={{ display: 'none' }} />
                </label>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #F0F0F0', marginTop: '8px' }}>
            <button
              onClick={prev}
              disabled={current === 0}
              style={{
                padding: '10px 20px', backgroundColor: 'transparent',
                border: `1px solid ${current === 0 ? '#E0E0E0' : '#CCC'}`,
                borderRadius: t.radius, fontSize: '14px',
                color: current === 0 ? '#CCC' : '#888',
                cursor: current === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              Previous
            </button>
            <button
              onClick={next}
              style={{
                padding: '10px 24px', backgroundColor: t.btnBg, color: t.btnColor,
                border: 'none', borderRadius: t.radius, fontSize: '14px', fontWeight: 600, cursor: 'pointer',
              }}
            >
              {current === total - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      )}

      {/* ── Result ───────────────────────── */}
      {showResult && (
        <div style={{ padding: '15px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 500, color: '#101010', marginBottom: '8px' }}>
            Quiz Complete!
          </h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
            You answered {answeredCount} out of {total} questions.
          </p>
          <p style={{ fontSize: '48px', fontWeight: 700, color: t.accent, lineHeight: 1 }}>
            {Math.round((answeredCount / total) * 100)}%
          </p>
          <p style={{ fontSize: '14px', color: '#AAA', marginTop: '4px' }}>Completion Rate</p>
          <button
            onClick={reset}
            style={{
              marginTop: '24px', padding: '12px 32px', backgroundColor: t.btnBg,
              color: t.btnColor, border: 'none', borderRadius: t.radius,
              fontSize: '16px', fontWeight: 600, cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
