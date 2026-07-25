import { useState, useRef, useEffect } from 'react';
import { Swords, Lock, Unlock, Zap, MapPin, ChevronDown } from 'lucide-react';
import type { Level } from '@/questData';
import { ACCENT_COLORS } from '@/highlight';
import { BattleCard } from './BattleCard';

interface LevelSectionProps {
  level: Level;
  index: number;
  isUnlocked: boolean;
  fxOn: boolean;
  onUnlock: () => void;
}

export function LevelSection({ level, index, isUnlocked, fxOn, onUnlock }: LevelSectionProps) {
  const [showCards, setShowCards] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const colors = ACCENT_COLORS[level.accent];

  useEffect(() => {
    if (!isUnlocked) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCards(true);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isUnlocked]);

  return (
    <section
      ref={ref}
      id={`level-${level.id}`}
      className="relative min-h-screen py-20 px-4 md:px-8"
      style={{ ['--accent-glow' as string]: colors.glow }}
    >
      {/* Level divider */}
      <div className="max-w-5xl mx-auto">
        {/* Level header banner */}
        <div className={`relative mb-8 ${fxOn ? 'animate-slide-in-up' : ''}`}>
          <div className={`flex items-center gap-3 mb-4`}>
            <div className={`font-pixel text-xs ${colors.text} bg-slate-900 px-3 py-1 rounded-full border ${colors.border}`}>
              LEVEL {level.id} / 10
            </div>
            <div className="flex items-center gap-1 text-slate-400 text-sm">
              <MapPin className="w-4 h-4" />
              {level.realmEmoji} {level.realm}
            </div>
          </div>

          <h2 className="font-display text-5xl md:text-7xl text-white text-stroke leading-none mb-2">
            {level.name}
          </h2>
          <p className={`text-lg ${colors.text} font-semibold`}>{level.title}</p>
        </div>

        {/* Boss arena */}
        <div className={`relative rounded-2xl border-2 ${colors.border} bg-gradient-to-br from-slate-900 to-slate-950 p-6 md:p-8 mb-8 overflow-hidden ${fxOn && isUnlocked ? 'animate-boss-aura' : ''}`}>
          {/* Scan line effect */}
          {fxOn && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className={`absolute left-0 right-0 h-1 ${colors.bg} opacity-20 animate-scan-line`} />
            </div>
          )}

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Boss avatar */}
            <div className={`relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-7xl ${fxOn ? 'animate-float' : ''}`}>
              <span className="text-stroke">{level.bossEmoji}</span>
              {/* Boss name plate */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black px-3 py-1 rounded-full border-2 border-white">
                <span className="font-pixel text-[0.5rem] text-white whitespace-nowrap">BOSS</span>
              </div>
            </div>

            {/* Boss info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Swords className={`w-5 h-5 ${colors.text}`} />
                <span className={`font-pixel text-[0.6rem] ${colors.text} uppercase tracking-wider`}>Boss Encounter</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-white text-stroke mb-3">
                {level.boss}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">{level.lore}</p>

              {/* Power unlock */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border ${colors.border}`}>
                <Zap className={`w-4 h-4 ${colors.text}`} />
                <span className="text-sm text-white">
                  <span className="text-slate-400">Power Unlocked: </span>
                  <span className="font-bold">{level.powerEmoji} {level.power}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Battle count */}
          <div className="mt-6 flex items-center justify-between flex-wrap gap-2">
            <div className={`flex items-center gap-2 text-sm ${colors.text}`}>
              <span className="font-pixel text-[0.55rem]">{level.cards.length} BATTLES</span>
            </div>
            {!isUnlocked ? (
              <button
                onClick={onUnlock}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${colors.bg} text-white font-bold text-sm hover:scale-105 transition-transform ${fxOn ? 'animate-pulse-glow' : ''}`}
              >
                <Lock className="w-4 h-4" />
                Enter Realm
              </button>
            ) : (
              <div className={`flex items-center gap-2 text-sm ${colors.text}`}>
                <Unlock className="w-4 h-4" />
                <span className="font-pixel text-[0.55rem]">REALM ACTIVE</span>
              </div>
            )}
          </div>
        </div>

        {/* Battle cards */}
        {isUnlocked && (
          <div className="space-y-4">
            {/* Cards header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-2xl text-white text-stroke">
                Battle Log
              </h3>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <ChevronDown className={`w-4 h-4 ${fxOn ? 'animate-bounce' : ''}`} />
                <span>Scroll to engage</span>
              </div>
            </div>

            {/* Grid of cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {showCards &&
                level.cards.map((card, idx) => (
                  <BattleCard
                    key={card.id}
                    card={card}
                    accentText={colors.text}
                    accentBorder={colors.border}
                    accentBg={colors.bg}
                    index={idx}
                    fxOn={fxOn}
                  />
                ))}
            </div>

            {/* Level complete stamp */}
            <div className="flex justify-center mt-8">
              <div className={`relative px-8 py-4 border-4 ${colors.border} rounded-xl bg-slate-900 ${fxOn ? 'animate-scale-in' : ''}`}>
                <div className="font-display text-2xl text-white text-stroke">
                  LEVEL {level.id} CLEARED
                </div>
                <div className={`text-sm ${colors.text} mt-1`}>
                  +{level.cards.length * 100} XP | Power: {level.powerEmoji} {level.power}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
