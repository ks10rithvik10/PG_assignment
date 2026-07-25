import { useEffect, useState, useRef } from 'react';
import { Trophy, Zap, Heart, Star, Sparkles, Swords, Github, RotateCcw } from 'lucide-react';
import { STUDENT, LEVELS, TOTAL_CARDS } from '@/questData';

interface FinaleProps {
  fxOn: boolean;
  onRestart: () => void;
}

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

const CONFETTI_COLORS = ['#fbbf24', '#f472b6', '#34d399', '#60a5fa', '#a78bfa', '#fb7185'];

export function Finale({ fxOn, onRestart }: FinaleProps) {
  const [visible, setVisible] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (fxOn) {
            const pieces: ConfettiPiece[] = Array.from({ length: 80 }, (_, i) => ({
              id: i,
              left: Math.random() * 100,
              delay: Math.random() * 2,
              duration: 2 + Math.random() * 3,
              color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
              size: 6 + Math.random() * 8,
            }));
            setConfetti(pieces);
          }
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [fxOn]);

  const totalXp = TOTAL_CARDS * 100;

  return (
    <section
      ref={ref}
      id="finale"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Confetti */}
      {fxOn && visible && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {confetti.map((piece) => (
            <div
              key={piece.id}
              className="absolute top-0 rounded-sm"
              style={{
                left: `${piece.left}%`,
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                backgroundColor: piece.color,
                animation: `confetti-fall ${piece.duration}s linear ${piece.delay}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* Radial glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-900/20 via-transparent to-transparent pointer-events-none" />

      <div className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        {/* Trophy */}
        <div className={`text-8xl mb-4 ${fxOn ? 'animate-float' : ''}`}>🏆</div>

        {/* Title */}
        <div className="font-pixel text-[0.7rem] text-yellow-400 uppercase tracking-widest mb-2">
          Quest Complete
        </div>
        <h2 className="font-display text-6xl md:text-8xl text-white text-stroke leading-none mb-4">
          <span className="text-yellow-400">SYNTAXIA</span> SAVED
        </h2>
        <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
          The Oracle of Insight has fallen. All 10 realms are liberated. The Python
          engine hums with infinite power — and you, Debugger, are its master.
        </p>

        {/* Stat recap card */}
        <div className="bg-slate-900/90 backdrop-blur-md border-2 border-yellow-500/50 rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="font-display text-3xl text-white text-stroke mb-6">Final Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox icon={<Swords className="w-6 h-6 text-rose-400" />} value="10" label="Bosses Defeated" />
            <StatBox icon={<Sparkles className="w-6 h-6 text-indigo-400" />} value={String(TOTAL_CARDS)} label="Battles Won" />
            <StatBox icon={<Zap className="w-6 h-6 text-yellow-400" />} value={totalXp.toLocaleString()} label="Total XP" />
            <StatBox icon={<Star className="w-6 h-6 text-emerald-400" />} value="10" label="Powers Unlocked" />
          </div>

          {/* Powers list */}
          <div className="mt-6 pt-6 border-t border-slate-700">
            <div className="font-pixel text-[0.55rem] text-slate-400 uppercase mb-3">Powers Mastered</div>
            <div className="flex flex-wrap justify-center gap-2">
              {LEVELS.map((level) => (
                <span
                  key={level.id}
                  className="px-3 py-1 rounded-full bg-slate-800 border border-slate-600 text-sm text-white"
                >
                  {level.powerEmoji} {level.power}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Student card */}
        <div className="bg-slate-900/80 border border-indigo-500/30 rounded-xl p-4 mb-8 inline-block">
          <div className="text-xs text-slate-400 uppercase mb-1">Quest Hero</div>
          <div className="text-xl font-bold text-white">{STUDENT.name}</div>
          <div className="text-sm text-slate-400">{STUDENT.course} · {STUDENT.university}</div>
          <div className="text-xs text-slate-500 mt-1">SAP ID: {STUDENT.sapId}</div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white font-bold transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            Play Again
          </button>
          <a
            href={`https://${STUDENT.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl text-white font-bold transition-colors"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-xs text-slate-600">
          Built with React + Vite + Tailwind CSS · All code and outputs are real, submitted for the Python Lab assignment.
        </div>
      </div>
    </section>
  );
}

function StatBox({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="font-display text-2xl text-white">{value}</div>
      <div className="text-[0.65rem] text-slate-400 uppercase tracking-wide mt-1">{label}</div>
    </div>
  );
}
