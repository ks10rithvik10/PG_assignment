import { useEffect, useState } from 'react';
import { ChevronDown, Github, BookOpen, Swords, Sparkles } from 'lucide-react';
import { STUDENT, TOTAL_CARDS, TOTAL_LEVELS } from '@/questData';

interface HeroIntroProps {
  onStart: () => void;
  fxOn: boolean;
}

export function HeroIntro({ onStart, fxOn }: HeroIntroProps) {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTextVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid bg-stars">
      {/* Floating decorative emojis */}
      {fxOn && (
        <>
          <div className="absolute top-20 left-10 text-6xl animate-float-slow opacity-30">🐍</div>
          <div className="absolute top-40 right-20 text-5xl animate-float opacity-30" style={{ animationDelay: '1s' }}>⚔️</div>
          <div className="absolute bottom-32 left-20 text-5xl animate-float-slow opacity-30" style={{ animationDelay: '2s' }}>📜</div>
          <div className="absolute bottom-20 right-10 text-6xl animate-float opacity-30" style={{ animationDelay: '0.5s' }}>🏆</div>
          <div className="absolute top-1/3 left-1/2 text-4xl animate-float-slow opacity-20" style={{ animationDelay: '1.5s' }}>✨</div>
        </>
      )}

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-900/30 via-transparent to-transparent pointer-events-none" />

      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/60 border border-indigo-500 mb-6">
          <BookOpen className="w-4 h-4 text-indigo-400" />
          <span className="font-pixel text-[0.55rem] text-indigo-300 uppercase tracking-wider">
            Python Lab Assignment — Manga Edition
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-7xl md:text-9xl text-white text-stroke leading-none mb-2">
          <span className="text-yellow-400">🐍 SYNTAXIA</span>
        </h1>
        <h2 className="font-display text-4xl md:text-6xl text-white text-stroke leading-none mb-6">
          Rise of the Debugger
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          An animated, manga/game-styled retelling of a Python programming lab —
          turned into a <span className="text-indigo-400 font-bold">10-level quest</span>,
          where every experiment is a <span className="text-rose-400 font-bold">boss fight</span>
          {' '}and every line of code is a <span className="text-yellow-400 font-bold">spell</span>.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 border border-indigo-500/50">
            <Swords className="w-6 h-6 text-rose-400" />
            <div className="text-left">
              <div className="font-display text-2xl text-white">{TOTAL_LEVELS}</div>
              <div className="text-xs text-slate-400 uppercase">Levels</div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 border border-indigo-500/50">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <div className="text-left">
              <div className="font-display text-2xl text-white">{TOTAL_CARDS}</div>
              <div className="text-xs text-slate-400 uppercase">Battle Cards</div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 border border-indigo-500/50">
            <span className="text-2xl">🏆</span>
            <div className="text-left">
              <div className="font-display text-2xl text-white">10</div>
              <div className="text-xs text-slate-400 uppercase">Bosses</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onStart}
          className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-indigo-500/50"
        >
          <span className="flex items-center gap-2">
            Begin the Quest
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </span>
        </button>

        {/* Student info */}
        <div className="mt-10 flex items-center justify-center gap-4 text-sm text-slate-400 flex-wrap">
          <span>by <span className="text-white font-bold">{STUDENT.name}</span></span>
          <span className="text-slate-600">|</span>
          <span>{STUDENT.course}</span>
          <span className="text-slate-600">|</span>
          <span>SAP: {STUDENT.sapId}</span>
          <span className="text-slate-600">|</span>
          <a
            href={`https://${STUDENT.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub Repo
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      {fxOn && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-indigo-400" />
        </div>
      )}
    </section>
  );
}
