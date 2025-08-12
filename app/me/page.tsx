'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import people from '@/data/people';

const Me = () => {
  return (
    <section className="min-h-screen bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900 flex items-center justify-center">
      <div className="max-w-4xl px-6 py-16 lg:py-24">

        <div className="mb-1">
          <Link
            href="/"
            className="inline-flex items-center text-xs text-slate-400 hover:text-teal-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to portfolio
          </Link>

          <h1 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4">
            People I Admire
          </h1>
          <p className="text-slate-400 leading-relaxed text-sm max-w-2xl">
            Behind every successful person is a list of people they admire (and some they mildly obsess over).
            Meet the crew who keep me striving and occasionally procrastinating.
          </p>
        </div>


        <div className="divide-y divide-slate-700">
          {people.map((person, i) => (
            <a
              key={i}
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 text-sm text-slate-300 hover:text-teal-400 hover:underline transition-colors"
            >
              {person.link}
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex justify-center items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-xs text-slate-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

      </div>
    </section>

  );
};

export default Me;