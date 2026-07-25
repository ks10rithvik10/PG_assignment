import { useState } from 'react';
import { ChevronDown, ChevronUp, Terminal, Sparkles, Target, Scroll, Image as ImageIcon } from 'lucide-react';
import type { BattleCard } from '@/questData';
import { highlightPython } from '@/highlight';

interface BattleCardProps {
  card: BattleCard;
  accentText: string;
  accentBorder: string;
  accentBg: string;
  index: number;
  fxOn: boolean;
}

export function BattleCard({ card, accentText, accentBorder, accentBg, index, fxOn }: BattleCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [showCode, setShowCode] = useState(true);

  const tokens = highlightPython(card.code);
  const delay = `${index * 0.08}s`;

  return (
    <div
      className={`group relative rounded-xl border-2 ${accentBorder} bg-slate-900/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${fxOn ? 'animate-slide-in-up' : ''}`}
      style={fxOn ? { animationDelay: delay, animationFillMode: 'both' } : undefined}
    >
      {/* Question badge */}
      <div className={`flex items-center gap-3 px-4 py-3 ${accentBg} bg-opacity-20`}>
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${accentBg} flex items-center justify-center font-display text-xl text-white text-stroke`}>
          {card.question}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Target className={`w-4 h-4 ${accentText}`} />
            <span className={`font-pixel text-[0.6rem] ${accentText} uppercase tracking-wider`}>Battle {card.id}</span>
          </div>
          <p className="text-sm font-semibold text-white mt-0.5 truncate">{card.aim}</p>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`flex-shrink-0 p-2 rounded-lg ${accentBg} bg-opacity-30 hover:bg-opacity-60 transition-all`}
          aria-label={expanded ? 'Collapse' : 'Expand'}
        >
          {expanded ? <ChevronUp className="w-5 h-5 text-white" /> : <ChevronDown className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Explanation (always visible) */}
      <div className="px-4 py-3 border-b border-slate-700/50">
        <div className="flex items-start gap-2">
          <Scroll className={`w-4 h-4 mt-0.5 ${accentText} flex-shrink-0`} />
          <p className="text-sm text-slate-300 leading-relaxed">{card.explanation}</p>
        </div>
      </div>

      {/* Code + Output (expandable) */}
      {expanded && (
        <div className="p-4 space-y-3 bg-slate-950/50">
          {/* Code */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Terminal className={`w-4 h-4 ${accentText}`} />
                <span className={`font-pixel text-[0.55rem] ${accentText} uppercase tracking-wider`}>Spell Incantation</span>
              </div>
              <button
                onClick={() => setShowCode(!showCode)}
                className={`text-xs ${accentText} hover:underline`}
              >
                {showCode ? 'Show Result' : 'Show Code'}
              </button>
            </div>
            {showCode ? (
              <pre className="code-block bg-slate-950 rounded-lg p-3 border border-slate-700 text-slate-200 max-h-80 overflow-auto">
                <code>
                  {tokens.map((tok, idx) => (
                    <span key={idx} className={`tok-${tok.type}`}>{tok.value}</span>
                  ))}
                </code>
              </pre>
            ) : (
              <div className="bg-slate-950 rounded-lg p-3 border border-slate-700">
                {card.hasImage ? (
                  <div className="flex flex-col items-center gap-3 py-4">
                    <div className="flex items-center gap-2 text-yellow-400">
                      <ImageIcon className="w-5 h-5" />
                      <span className="font-pixel text-[0.55rem] uppercase">Visualization Rendered</span>
                    </div>
                    {/* ASCII bar chart representation */}
                    <div className="w-full space-y-2">
                      {[
                        { label: 'Python', val: 90 },
                        { label: 'Java', val: 82 },
                        { label: 'C++', val: 76 },
                        { label: 'SQL', val: 88 },
                        { label: 'AI', val: 95 },
                      ].map((bar) => (
                        <div key={bar.label} className="flex items-center gap-2">
                          <span className="w-16 text-xs text-slate-400 text-right">{bar.label}</span>
                          <div className="flex-1 h-6 bg-slate-800 rounded overflow-hidden">
                            <div
                              className={`h-full ${accentBg} flex items-center justify-end pr-2 text-xs font-bold text-white`}
                              style={{ width: `${bar.val}%` }}
                            >
                              {bar.val}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 italic mt-2">Matplotlib bar chart — rendered in the notebook</p>
                  </div>
                ) : (
                  <pre className="code-block text-slate-200 max-h-80 overflow-auto">
                    <span className="tok-com">{`>>> Output\n`}</span>
                    {card.output}
                  </pre>
                )}
              </div>
            )}
          </div>

          {/* Output (always show if not image) */}
          {!card.hasImage && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className={`w-4 h-4 ${accentText}`} />
                <span className={`font-pixel text-[0.55rem] ${accentText} uppercase tracking-wider`}>Result</span>
              </div>
              <pre className="code-block bg-black/60 rounded-lg p-3 border border-slate-700 text-green-400 max-h-60 overflow-auto">
                {card.output}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Hover hint when collapsed */}
      {!expanded && (
        <div className="px-4 py-2 bg-slate-950/30">
          <p className="text-xs text-slate-500 italic flex items-center gap-1">
            <ChevronDown className="w-3 h-3" />
            Click to reveal the spell incantation and result
          </p>
        </div>
      )}
    </div>
  );
}
