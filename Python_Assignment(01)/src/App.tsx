import { useState, useEffect, useCallback } from 'react';
import { HeroIntro } from '@/components/HeroIntro';
import { HUD } from '@/components/HUD';
import { LevelSection } from '@/components/LevelSection';
import { Finale } from '@/components/Finale';
import { LEVELS, TOTAL_CARDS } from '@/questData';

function App() {
  const [fxOn, setFxOn] = useState(true);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [started, setStarted] = useState(false);

  // Auto-unlock levels as user scrolls into them
  useEffect(() => {
    if (!started) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const levelNum = parseInt(id.replace('level-', ''), 10);
            if (!isNaN(levelNum)) {
              setCompletedLevels((prev) =>
                prev.includes(levelNum) ? prev : [...prev, levelNum]
              );
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '-10% 0px -10% 0px' }
    );

    LEVELS.forEach((level) => {
      const el = document.getElementById(`level-${level.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [started]);

  // Detect reduced motion preference on mount
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) setFxOn(false);
  }, []);

  const handleStart = useCallback(() => {
    setStarted(true);
    setTimeout(() => {
      const el = document.getElementById('level-1');
      if (el) el.scrollIntoView({ behavior: fxOn ? 'smooth' : 'auto', block: 'start' });
    }, 100);
  }, [fxOn]);

  const handleUnlock = useCallback((levelId: number) => {
    setCompletedLevels((prev) =>
      prev.includes(levelId) ? prev : [...prev, levelId]
    );
  }, []);

  const handleRestart = useCallback(() => {
    window.scrollTo({ top: 0, behavior: fxOn ? 'smooth' : 'auto' });
    setCompletedLevels([]);
  }, [fxOn]);

  return (
    <div className={`relative min-h-screen bg-[#0a0a1a] text-white ${fxOn ? '' : 'fx-off'}`}>
      {/* Persistent background layers */}
      <div className="fixed inset-0 bg-grid pointer-events-none" />
      <div className="fixed inset-0 bg-stars pointer-events-none opacity-50" />

      {/* HUD (fixed) */}
      <HUD
        levels={LEVELS}
        totalCards={TOTAL_CARDS}
        completedLevels={completedLevels}
        fxOn={fxOn}
        onToggleFx={() => setFxOn(!fxOn)}
      />

      {/* Hero */}
      <HeroIntro onStart={handleStart} fxOn={fxOn} />

      {/* Level sections */}
      <main className="relative z-10">
        {LEVELS.map((level, index) => {
          // A level is unlocked if it's level 1, or the previous level is completed
          const isUnlocked = level.id === 1 || completedLevels.includes(level.id - 1);
          return (
            <LevelSection
              key={level.id}
              level={level}
              index={index}
              isUnlocked={isUnlocked}
              fxOn={fxOn}
              onUnlock={() => handleUnlock(level.id)}
            />
          );
        })}

        {/* Finale — only show after last level cleared */}
        {completedLevels.includes(10) && (
          <Finale fxOn={fxOn} onRestart={handleRestart} />
        )}
      </main>
    </div>
  );
}

export default App;
