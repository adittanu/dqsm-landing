import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      navigate('/account');
    }, 600);
  };

  return (
    <section className="bg-hero-gradient py-20">
      <div className="container-x max-w-md">
        <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-brand">
          <div className="text-center">
            <img src="/images/logo.png" alt="DQSM" className="mx-auto h-9" />
            <h1 className="mt-6 text-2xl font-bold text-ink-900 font-display">Welcome back</h1>
            <p className="mt-1 text-sm text-ink-500">Sign in to your DQSM account</p>
          </div>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-ink-700">Email</span>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-3 focus-within:border-brand-500">
                <Mail className="h-4 w-4 text-ink-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-transparent py-2.5 text-sm focus:outline-none"
                />
              </div>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-ink-700">Password</span>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-3 focus-within:border-brand-500">
                <Lock className="h-4 w-4 text-ink-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-transparent py-2.5 text-sm focus:outline-none"
                />
              </div>
            </label>
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-ink-600">
                <input type="checkbox" className="h-4 w-4 accent-brand-600" /> Remember me
              </label>
              <Link to="/contact" className="font-medium text-brand-600 hover:underline">Forgot password?</Link>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-semibold text-white shadow-brand hover:bg-brand-700 disabled:opacity-60"
            >
              {submitting ? 'Signing in…' : (<><LogIn className="h-4 w-4" /> Sign in</>)}
            </button>
            <p className="text-center text-sm text-ink-500">
              Don't have an account? <Link to="/pricing" className="font-semibold text-brand-600 hover:underline">Get started</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
