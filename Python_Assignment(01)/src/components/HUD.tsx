import { useEffect, useState } from 'react';
import { Zap, Heart, Trophy, Map as MapIcon, X, Menu } from 'lucide-react';
import type { Level } from '@/questData';
import { ACCENT_COLORS } from '@/highlight';

interface HUDProps {
  levels: Level[];
  totalCards: number;
  completedLevels: number[];
  fxOn: boolean;
  onToggleFx: () => void;
}

export function HUD({ levels, totalCards, completedLevels, fxOn, onToggleFx }: HUDProps) {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [hp, setHp] = useState(100);
  const [navOpen, setNavOpen] = useState(false);
  const [showHUD, setShowHUD] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const winH = window.innerHeight;

      // Show HUD after scrolling past hero
      setShowHUD(scrollY > winH * 0.5);

      // Determine current level
      let active = 1;
      let totalXp = 0;
      for (const level of levels) {
        const el = document.getElementById(`level-${level.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < winH * 0.4) {
            active = level.id;
            if (completedLevels.includes(level.id)) {
              totalXp += level.cards.length * 100;
            }
          }
        }
      }
      setCurrentLevel(active);
      setXp(totalXp);

      // HP based on progress
      const progress = Math.min(scrollY / (document.body.scrollHeight - winH), 1);
      setHp(Math.max(20, 100 - Math.round(progress * 30)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [levels, completedLevels]);

  const xpPercent = Math.round((xp / (totalCards * 100)) * 100);

  const jumpTo = (id: number) => {
    const el = document.getElementById(`level-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: fxOn ? 'smooth' : 'auto', block: 'start' });
    }
    setNavOpen(false);
  };

  return (
    <>
      {/* Top HUD bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showHUD ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-slate-950/90 backdrop-blur-md border-b-2 border-indigo-500/50">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
            {/* Left: Level + Title */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors"
                aria-label="Toggle world map"
              >
                {navOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
              <div>
                <div className="font-pixel text-[0.55rem] text-indigo-400 uppercase tracking-wider">
                  Level {currentLevel} / 10
                </div>
                <div className="text-sm font-bold text-white truncate max-w-[200px]">
                  {levels[currentLevel - 1]?.name || ''}
                </div>
              </div>
            </div>

            {/* Center: XP bar */}
            <div className="flex-1 max-w-md hidden md:block">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-600">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-500 rounded-full"
                    style={{ width: `${xpPercent}%` }}
                  />
                </div>
                <span className="font-pixel text-[0.5rem] text-yellow-400 whitespace-nowrap">
                  {xp} XP
                </span>
              </div>
            </div>

            {/* Right: HP + FX toggle */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span className="font-pixel text-[0.5rem] text-rose-400">{hp}%</span>
              </div>
              <button
                onClick={onToggleFx}
                className={`px-2 py-1 rounded text-[0.6rem] font-pixel uppercase transition-colors ${
                  fxOn
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-700 text-slate-400'
                }`}
                title="Toggle animations & FX"
              >
                FX {fxOn ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Side world map nav */}
      <div
        className={`fixed top-16 left-0 z-40 transition-transform duration-300 ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-slate-950/95 backdrop-blur-md border-r-2 border-b-2 border-indigo-500/50 rounded-br-2xl p-4 w-64 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <MapIcon className="w-5 h-5 text-indigo-400" />
            <h3 className="font-pixel text-[0.6rem] text-indigo-400 uppercase tracking-wider">World Map</h3>
          </div>
          <div className="space-y-2">
            {levels.map((level) => {
              const colors = ACCENT_COLORS[level.accent];
              const isCompleted = completedLevels.includes(level.id);
              const isCurrent = currentLevel === level.id;
              return (
                <button
                  key={level.id}
                  onClick={() => jumpTo(level.id)}
                  className={`w-full text-left p-2 rounded-lg border transition-all ${
                    isCurrent
                      ? `${colors.border} bg-slate-800 scale-105`
                      : 'border-slate-700 bg-slate-900 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{level.realmEmoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className={`text-xs font-bold truncate ${isCurrent ? colors.text : 'text-slate-300'}`}>
                        L{level.id}: {level.name}
                      </div>
                      <div className="text-[0.65rem] text-slate-500 truncate">
                        {isCompleted ? `${level.cards.length} battles cleared` : `${level.cards.length} battles`}
                      </div>
                    </div>
                    {isCompleted && (
                      <Trophy className={`w-4 h-4 flex-shrink-0 ${colors.text}`} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Progress summary */}
          <div className="mt-4 pt-4 border-t border-slate-700">
            <div className="font-pixel text-[0.55rem] text-slate-400 uppercase mb-2">Quest Progress</div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-300">Levels</span>
              <span className="font-bold text-white">{completedLevels.length}/10</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-slate-300">Battles</span>
              <span className="font-bold text-white">
                {completedLevels.reduce((sum, id) => {
                  const lvl = levels.find((l) => l.id === id);
                  return sum + (lvl?.cards.length || 0);
                }, 0)}/{totalCards}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
