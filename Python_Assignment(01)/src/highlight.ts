const KEYWORDS = new Set([
  'def', 'class', 'import', 'from', 'as', 'if', 'elif', 'else', 'for', 'while',
  'return', 'break', 'continue', 'pass', 'in', 'not', 'and', 'or', 'is', 'None',
  'True', 'False', 'try', 'except', 'finally', 'with', 'lambda', 'global',
  'nonlocal', 'yield', 'raise', 'assert', 'del', 'self', 'print',
]);

const BUILTINS = new Set([
  'int', 'float', 'str', 'bool', 'list', 'tuple', 'dict', 'set', 'len', 'sum',
  'range', 'input', 'open', 'enumerate', 'map', 'sorted', 'abs', 'round',
  'type', 'isinstance', 'max', 'min', 'format',
]);

interface Token {
  type: 'kw' | 'str' | 'num' | 'com' | 'fn' | 'builtin' | 'plain';
  value: string;
}

export function highlightPython(code: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < code.length) {
    const ch = code[i];

    // Comments
    if (ch === '#') {
      let end = i;
      while (end < code.length && code[end] !== '\n') end++;
      tokens.push({ type: 'com', value: code.slice(i, end) });
      i = end;
      continue;
    }

    // Strings (single, double, triple)
    if (ch === '"' || ch === "'") {
      const quote = ch;
      let triple = code.slice(i, i + 3) === quote.repeat(3);
      let end = i + (triple ? 3 : 1);
      while (end < code.length) {
        if (triple) {
          if (code.slice(end, end + 3) === quote.repeat(3)) {
            end += 3;
            break;
          }
        } else {
          if (code[end] === quote) {
            end++;
            break;
          }
        }
        if (code[end] === '\\') end++;
        end++;
      }
      tokens.push({ type: 'str', value: code.slice(i, end) });
      i = end;
      continue;
    }

    // Numbers
    if (/[0-9]/.test(ch)) {
      let end = i;
      while (end < code.length && /[0-9._eE+\-jJ]/.test(code[end])) end++;
      tokens.push({ type: 'num', value: code.slice(i, end) });
      i = end;
      continue;
    }

    // Identifiers / keywords
    if (/[a-zA-Z_]/.test(ch)) {
      let end = i;
      while (end < code.length && /[a-zA-Z0-9_]/.test(code[end])) end++;
      const word = code.slice(i, end);

      // Check if followed by ( => function call
      let nextNonSpace = end;
      while (nextNonSpace < code.length && code[nextNonSpace] === ' ') nextNonSpace++;

      if (KEYWORDS.has(word)) {
        tokens.push({ type: 'kw', value: word });
      } else if (BUILTINS.has(word)) {
        tokens.push({ type: 'builtin', value: word });
      } else if (code[nextNonSpace] === '(') {
        tokens.push({ type: 'fn', value: word });
      } else {
        tokens.push({ type: 'plain', value: word });
      }
      i = end;
      continue;
    }

    // Default: plain text (operators, punctuation, whitespace)
    let end = i;
    while (
      end < code.length &&
      !/[a-zA-Z_0-9"']/.test(code[end]) &&
      code[end] !== '#'
    ) {
      end++;
    }
    if (end === i) end++;
    tokens.push({ type: 'plain', value: code.slice(i, end) });
    i = end;
  }

  return tokens;
}

export const ACCENT_COLORS: Record<string, { bg: string; text: string; border: string; glow: string; gradient: string }> = {
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500', glow: 'rgba(16,185,129,0.5)', gradient: 'from-emerald-500 to-teal-600' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-400', border: 'border-amber-500', glow: 'rgba(245,158,11,0.5)', gradient: 'from-amber-500 to-orange-600' },
  rose: { bg: 'bg-rose-500', text: 'text-rose-400', border: 'border-rose-500', glow: 'rgba(244,63,94,0.5)', gradient: 'from-rose-500 to-pink-600' },
  cyan: { bg: 'bg-cyan-500', text: 'text-cyan-400', border: 'border-cyan-500', glow: 'rgba(6,182,212,0.5)', gradient: 'from-cyan-500 to-blue-600' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-400', border: 'border-violet-500', glow: 'rgba(139,92,246,0.5)', gradient: 'from-violet-500 to-purple-600' },
  orange: { bg: 'bg-orange-500', text: 'text-orange-400', border: 'border-orange-500', glow: 'rgba(249,115,22,0.5)', gradient: 'from-orange-500 to-red-600' },
  red: { bg: 'bg-red-500', text: 'text-red-400', border: 'border-red-500', glow: 'rgba(239,68,68,0.5)', gradient: 'from-red-500 to-rose-700' },
  blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500', glow: 'rgba(59,130,246,0.5)', gradient: 'from-blue-500 to-indigo-600' },
  fuchsia: { bg: 'bg-fuchsia-500', text: 'text-fuchsia-400', border: 'border-fuchsia-500', glow: 'rgba(217,70,239,0.5)', gradient: 'from-fuchsia-500 to-pink-700' },
  yellow: { bg: 'bg-yellow-500', text: 'text-yellow-400', border: 'border-yellow-500', glow: 'rgba(234,179,8,0.5)', gradient: 'from-yellow-400 to-amber-600' },
};
