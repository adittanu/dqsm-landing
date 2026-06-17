import { useState } from 'react';

const accentColor = '#3A3951';
const questionColor = '#808080';

interface Question {
  id: number;
  type: 'radio-h-img' | 'checkbox' | 'radio-img' | 'select' | 'slider' | 'optin' | 'date' | 'number' | 'short' | 'matching' | 'fillblank' | 'file' | 'html';
  question: string;
  options?: { label: string; img?: string }[];
  min?: number;
  max?: number;
  html?: string;
}

const questions: Question[] = [
  {
    id: 1,
    type: 'radio-h-img',
    question: 'What is the fastest bird in the world?',
    options: [
      { label: 'Bald Eagle', img: '/images/Mask-Group.png' },
      { label: 'Peregrine Falcon', img: '/images/Mask-Group-1.png' },
    ],
  },
  {
    id: 2,
    type: 'checkbox',
    question: 'Which of the following are primary colors?',
    options: [
      { label: 'Red' },
      { label: 'Green' },
      { label: 'Blue' },
      { label: 'Yellow' },
    ],
  },
  {
    id: 3,
    type: 'radio-img',
    question: 'What is the national game of France?',
    options: [
      { label: 'Football', img: '/images/Mask-Group-4.png' },
      { label: 'Rugby', img: '/images/Mask-Group-5.png' },
      { label: 'Tennis', img: '/images/Mask-Group-6.png' },
    ],
  },
  {
    id: 4,
    type: 'select',
    question: 'Which country are the Giza Pyramids in?',
    options: [
      { label: 'India' },
      { label: 'Egypt' },
      { label: 'Sri Lanka' },
      { label: 'Bhutan' },
      { label: 'Nepal' },
    ],
  },
  {
    id: 5,
    type: 'slider',
    question: "What percentage of the Earth's surface is covered by water?",
    min: 10,
    max: 100,
  },
  {
    id: 6,
    type: 'optin',
    question: 'This is a demonstration of opt-in question type, confirm if you agree',
  },
  {
    id: 7,
    type: 'date',
    question: 'What is the Date of Birth of Mahatma Gandhi?',
  },
  {
    id: 8,
    type: 'number',
    question: 'How many continents are there? Enter the number below',
  },
  {
    id: 9,
    type: 'short',
    question: 'Who invented the first computer?',
  },
  {
    id: 10,
    type: 'matching',
    question: 'How many battles of Panipat was fought and between whom?',
  },
  {
    id: 11,
    type: 'fillblank',
    question: 'The largest planet in our solar system is _____.',
  },
  {
    id: 12,
    type: 'file',
    question: 'Confirming your identity with a photo of your ID and a selfie',
  },
  {
    id: 13,
    type: 'html',
    question: 'Did You Know?',
    html: 'Fun fact: Honey never spoils! Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.',
  },
];

export function QuizContainer() {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [showResult, setShowResult] = useState(false);

  const totalSlides = questions.length;
  const progress = currentSlide >= 0 ? ((currentSlide + 1) / totalSlides) * 100 : 0;

  const setAnswer = (qid: number, val: string) => setAnswers((p) => ({ ...p, [qid]: val }));

  const toggleCheckbox = (qid: number, opt: string) => {
    const cur = (answers[qid] as string[]) || [];
    setAnswers((p) => ({
      ...p,
      [qid]: cur.includes(opt) ? cur.filter((o) => o !== opt) : [...cur, opt],
    }));
  };

  const startQuiz = () => setCurrentSlide(0);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide((s) => s + 1);
    else setShowResult(true);
  };

  const prevSlide = () => { if (currentSlide > 0) setCurrentSlide((s) => s - 1); };

  const resetQuiz = () => { setCurrentSlide(-1); setAnswers({}); setShowResult(false); };

  const q = currentSlide >= 0 ? questions[currentSlide] : null;
  const answeredCount = Object.keys(answers).length;

  return (
    <section className="relative overflow-hidden">
      <div className="bg-white py-12 lg:py-16">
        <div className="container-x">
          <div
            className="relative"
            style={{
              backgroundColor: '#FFFFFF',
              backgroundImage: `url('/images/theme-bg.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              padding: '30px',
            }}
          >
            <div className="mx-auto" style={{ maxWidth: '600px', minHeight: '480px' }}>

              {/* ── Begin Screen ───────────────────────── */}
              {currentSlide === -1 && !showResult && (
                <div style={{ padding: '15px 0' }}>
                  <img
                    src="/images/Quiz-Maker.png"
                    alt="Quiz Maker"
                    style={{ width: '100%', maxWidth: '400px', margin: '0 auto 24px', display: 'block', borderRadius: '12px' }}
                  />
                  <h2 style={{ fontSize: '26px', fontWeight: 500, color: '#101010', lineHeight: 1.3 }}>
                    Ultimate General Quiz!
                  </h2>
                  <p style={{ fontSize: '18px', color: accentColor, marginTop: '8px', lineHeight: 1.6 }}>
                    Challenge yourself with {totalSlides} questions covering a range of topics. Are you ready to prove your smarts?
                  </p>
                  <button
                    onClick={startQuiz}
                    style={{
                      marginTop: '24px', backgroundColor: accentColor, color: '#FFFFFF',
                      padding: '12px 32px', borderRadius: '6px', fontSize: '16px', fontWeight: 600,
                      border: 'none', cursor: 'pointer',
                    }}
                  >
                    Start the Quiz
                  </button>
                </div>
              )}

              {/* ── Questions ───────────────────────────── */}
              {currentSlide >= 0 && !showResult && q && (
                <div>
                  {/* Progress */}
                  <div style={{ height: '4px', backgroundColor: '#E5E5E5', borderRadius: '2px', marginBottom: '20px' }}>
                    <div style={{ height: '100%', width: `${progress}%`, backgroundColor: accentColor, borderRadius: '2px', transition: 'width 0.4s ease' }} />
                  </div>

                  <div style={{ padding: '15px 0' }}>
                    <p style={{ fontSize: '12px', color: '#AAAAAA', marginBottom: '8px' }}>
                      Question {currentSlide + 1} of {totalSlides}
                    </p>
                    {q.type !== 'fillblank' && (
                      <p style={{ fontSize: '16px', color: questionColor, fontWeight: 400, marginBottom: '16px', lineHeight: 1.5 }}>
                        {q.question}
                      </p>
                    )}

                    {/* ── Radio Horizontal with Images ─── */}
                    {q.type === 'radio-h-img' && (
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        {q.options?.map((opt) => {
                          const sel = answers[q.id] === opt.label;
                          return (
                            <label
                              key={opt.label}
                              onClick={() => setAnswer(q.id, opt.label)}
                              style={{
                                flex: '1 1 45%', minWidth: '200px', cursor: 'pointer', textAlign: 'center',
                                border: `2px solid ${sel ? accentColor : '#E0E0E0'}`,
                                borderRadius: '8px', overflow: 'hidden', transition: 'border-color 0.2s',
                              }}
                            >
                              {opt.img && (
                                <img src={opt.img} alt={opt.label} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                              )}
                              <div style={{ padding: '10px', fontSize: '14px', fontWeight: sel ? 600 : 400, color: accentColor, backgroundColor: sel ? '#F5F5FF' : '#FFF' }}>
                                {opt.label}
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    )}

                    {/* ── Radio with Images (vertical) ─── */}
                    {q.type === 'radio-img' && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                        {q.options?.map((opt) => {
                          const sel = answers[q.id] === opt.label;
                          return (
                            <label
                              key={opt.label}
                              onClick={() => setAnswer(q.id, opt.label)}
                              style={{
                                cursor: 'pointer', textAlign: 'center',
                                border: `2px solid ${sel ? accentColor : '#E0E0E0'}`,
                                borderRadius: '8px', overflow: 'hidden', transition: 'border-color 0.2s',
                              }}
                            >
                              {opt.img && (
                                <img src={opt.img} alt={opt.label} style={{ width: '100%', height: '80px', objectFit: 'cover' }} />
                              )}
                              <div style={{ padding: '8px', fontSize: '13px', fontWeight: sel ? 600 : 400, color: accentColor, backgroundColor: sel ? '#F5F5FF' : '#FFF' }}>
                                {opt.label}
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    )}

                    {/* ── Checkbox ─────────────────────── */}
                    {q.type === 'checkbox' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {q.options?.map((opt) => {
                          const checked = ((answers[q.id] as string[]) || []).includes(opt.label);
                          return (
                            <label
                              key={opt.label}
                              onClick={() => toggleCheckbox(q.id, opt.label)}
                              style={{
                                display: 'flex', alignItems: 'center', gap: '12px',
                                padding: '12px 16px', backgroundColor: '#FFFFFF',
                                border: `2px solid ${checked ? accentColor : '#3A3951'}`,
                                borderRadius: '6px', cursor: 'pointer', fontSize: '14px', color: accentColor,
                              }}
                            >
                              <span style={{
                                width: '18px', height: '18px', borderRadius: '4px',
                                border: `2px solid ${checked ? accentColor : '#CCCCCC'}`,
                                backgroundColor: checked ? accentColor : 'transparent',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                              }}>
                                {checked && (
                                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                )}
                              </span>
                              {opt.label}
                            </label>
                          );
                        })}
                      </div>
                    )}

                    {/* ── Select ────────────────────────── */}
                    {q.type === 'select' && (
                      <select
                        value={(answers[q.id] as string) || ''}
                        onChange={(e) => setAnswer(q.id, e.target.value)}
                        style={{
                          width: '100%', padding: '12px 16px', border: `2px solid ${accentColor}`,
                          borderRadius: '6px', fontSize: '14px', color: accentColor, backgroundColor: '#FFF', outline: 'none',
                        }}
                      >
                        <option value="">Please select your answer</option>
                        {q.options?.map((opt) => <option key={opt.label} value={opt.label}>{opt.label}</option>)}
                      </select>
                    )}

                    {/* ── Slider ────────────────────────── */}
                    {q.type === 'slider' && (
                      <div style={{ padding: '8px 0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#AAAAAA', marginBottom: '4px' }}>
                          <span>{q.min}</span>
                          <span>{q.max}</span>
                        </div>
                        <input
                          type="range" min={q.min} max={q.max}
                          value={(answers[q.id] as string) || String(q.min)}
                          onChange={(e) => setAnswer(q.id, e.target.value)}
                          style={{ width: '100%', accentColor }}
                        />
                        <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '14px', fontWeight: 600, color: accentColor }}>
                          {(answers[q.id] as string) || String(q.min)}
                        </p>
                      </div>
                    )}

                    {/* ── Opt-in ────────────────────────── */}
                    {q.type === 'optin' && (
                      <label
                        onClick={() => setAnswer(q.id, answers[q.id] === 'yes' ? '' : 'yes')}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '12px',
                          padding: '12px 16px', border: `2px solid ${answers[q.id] === 'yes' ? accentColor : '#E0E0E0'}`,
                          borderRadius: '6px', cursor: 'pointer', fontSize: '14px', color: accentColor,
                        }}
                      >
                        <span style={{
                          width: '18px', height: '18px', borderRadius: '4px',
                          border: `2px solid ${answers[q.id] === 'yes' ? accentColor : '#CCCCCC'}`,
                          backgroundColor: answers[q.id] === 'yes' ? accentColor : 'transparent',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                          {answers[q.id] === 'yes' && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        {q.question}
                      </label>
                    )}

                    {/* ── Date ──────────────────────────── */}
                    {q.type === 'date' && (
                      <input
                        type="date"
                        value={(answers[q.id] as string) || ''}
                        onChange={(e) => setAnswer(q.id, e.target.value)}
                        style={{
                          width: '100%', padding: '12px 16px', border: `2px solid ${accentColor}`,
                          borderRadius: '6px', fontSize: '14px', color: accentColor, outline: 'none',
                        }}
                      />
                    )}

                    {/* ── Number ────────────────────────── */}
                    {q.type === 'number' && (
                      <input
                        type="number"
                        value={(answers[q.id] as string) || ''}
                        onChange={(e) => setAnswer(q.id, e.target.value)}
                        placeholder="Enter a number..."
                        style={{
                          width: '100%', padding: '12px 16px', border: `2px solid ${accentColor}`,
                          borderRadius: '6px', fontSize: '14px', color: accentColor, outline: 'none',
                        }}
                      />
                    )}

                    {/* ── Short answer ──────────────────── */}
                    {q.type === 'short' && (
                      <input
                        type="text"
                        value={(answers[q.id] as string) || ''}
                        onChange={(e) => setAnswer(q.id, e.target.value)}
                        placeholder="Type your answer..."
                        style={{
                          width: '100%', padding: '12px 16px', border: `2px solid ${accentColor}`,
                          borderRadius: '6px', fontSize: '14px', color: accentColor, outline: 'none',
                        }}
                      />
                    )}

                    {/* ── Matching ──────────────────────── */}
                    {q.type === 'matching' && (
                      <input
                        type="text"
                        value={(answers[q.id] as string) || ''}
                        onChange={(e) => setAnswer(q.id, e.target.value)}
                        placeholder="Type your answer..."
                        style={{
                          width: '100%', padding: '12px 16px', border: `2px solid ${accentColor}`,
                          borderRadius: '6px', fontSize: '14px', color: accentColor, outline: 'none',
                        }}
                      />
                    )}

                    {/* ── Fill in the blank ─────────────── */}
                    {q.type === 'fillblank' && (
                      <p style={{ fontSize: '16px', color: accentColor, lineHeight: 2 }}>
                        The largest planet in our solar system is{' '}
                        <input
                          type="text"
                          value={(answers[q.id] as string) || ''}
                          onChange={(e) => setAnswer(q.id, e.target.value)}
                          placeholder="____"
                          style={{
                            width: '140px', padding: '6px 12px', border: 'none',
                            borderBottom: `2px solid ${accentColor}`, fontSize: '16px',
                            color: accentColor, outline: 'none', backgroundColor: 'transparent',
                          }}
                        />
                        .
                      </p>
                    )}

                    {/* ── File upload ───────────────────── */}
                    {q.type === 'file' && (
                      <div style={{ border: '2px dashed #D0D0D0', borderRadius: '8px', padding: '32px', textAlign: 'center' }}>
                        <p style={{ fontSize: '14px', color: '#888', marginBottom: '12px' }}>
                          Drag and drop your files here or
                        </p>
                        <label style={{
                          display: 'inline-block', padding: '8px 20px', backgroundColor: accentColor,
                          color: '#FFF', borderRadius: '6px', fontSize: '14px', cursor: 'pointer',
                        }}>
                          Choose File
                          <input type="file" style={{ display: 'none' }} />
                        </label>
                      </div>
                    )}

                    {/* ── HTML section ───────────────────── */}
                    {q.type === 'html' && (
                      <div style={{ textAlign: 'center', padding: '20px' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: 600, color: accentColor, marginBottom: '12px' }}>
                          {q.question}
                        </h2>
                        <p style={{ fontSize: '18px', color: '#666', lineHeight: 1.6 }}>
                          {q.html}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Navigation */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #F0F0F0', marginTop: '8px' }}>
                    <button
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      style={{
                        padding: '10px 20px', backgroundColor: 'transparent',
                        border: `1px solid ${currentSlide === 0 ? '#E0E0E0' : '#CCCCCC'}`,
                        borderRadius: '6px', fontSize: '14px',
                        color: currentSlide === 0 ? '#CCCCCC' : '#888',
                        cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
                      }}
                    >
                      Previous
                    </button>
                    <button
                      onClick={nextSlide}
                      style={{
                        padding: '10px 24px', backgroundColor: accentColor, color: '#FFFFFF',
                        border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                      }}
                    >
                      {currentSlide === totalSlides - 1 ? 'Submit' : 'Next'}
                    </button>
                  </div>
                </div>
              )}

              {/* ── Result Screen ─────────────────────── */}
              {showResult && (
                <div style={{ padding: '15px 0', textAlign: 'center' }}>
                  <h2 style={{ fontSize: '26px', fontWeight: 500, color: '#101010', marginBottom: '8px' }}>
                    Quiz Complete!
                  </h2>
                  <p style={{ fontSize: '18px', color: accentColor, marginBottom: '24px' }}>
                    You answered {answeredCount} out of {totalSlides} questions.
                  </p>
                  <p style={{ fontSize: '48px', fontWeight: 700, color: accentColor, lineHeight: 1 }}>
                    {Math.round((answeredCount / totalSlides) * 100)}%
                  </p>
                  <p style={{ fontSize: '14px', color: '#AAAAAA', marginTop: '4px' }}>Completion Rate</p>
                  <button
                    onClick={resetQuiz}
                    style={{
                      marginTop: '24px', padding: '12px 32px', backgroundColor: accentColor,
                      color: '#FFFFFF', border: 'none', borderRadius: '6px',
                      fontSize: '16px', fontWeight: 600, cursor: 'pointer',
                    }}
                  >
                    Try Again
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
