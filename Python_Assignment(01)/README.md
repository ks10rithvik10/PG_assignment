# 🐍 Syntaxia: Rise of the Debugger

> An animated, manga/game-styled retelling of a Python programming lab assignment — turned into a 10-level quest, where every experiment is a boss fight and every line of code is a spell.

>### 🌐 Live Website
https://python-quest-manga-web-project.vercel.app/ 

![Status](https://img.shields.io/badge/Quest-Complete-yellow)
![Levels](https://img.shields.io/badge/Levels-10-blue)
![Battle Cards](https://img.shields.io/badge/Battle%20Cards-69-orange)

---

## What this is

Instead of handing in ten plain notebooks, this project renders the entire assignment as a single scrollable, animated web page:

- 🗺️ **World map of 10 levels** (experiments), each with its own boss, lore, and unlockable "power"
- ⚔️ **69 battle cards** — one per lab question — each showing the real aim, explanation, Python code, and actual output from the notebook
- 📊 **Live HUD** that tracks progress (level / XP) as you scroll, plus a side world-map nav for quick jumps between levels
- 🎉 **Finale sequence** with a stat recap and confetti burst once the final boss (data visualization) is cleared
- ♿ **Accessibility**: respects `prefers-reduced-motion`, and includes an in-page FX on/off toggle

All content is **100% real**: every "spell incantation" is the actual code submitted for the lab, every "result" is the actual program output.

---

## The 10 Levels

| Level | Realm | Boss | Power Unlocked |
|-------|-------|------|----------------|
| 1 | Genesis Plains | The Null Sentinel | Awakening |
| 2 | Arithmetic Arena | The Calculator Colossus | Computation |
| 3 | Forked Crossroads | The Bifurcation Wraith | Decision |
| 4 | Infinite Spiral | The Eternal Recursor | Iteration |
| 5 | Glyph Library | The Lexicon Weaver | Textcraft |
| 6 | Collection Vault | The Archive Titan | Data Binding |
| 7 | Function Forge | The Modular Dragon | Reusability |
| 8 | Abyssal Storage | The Void Handler | Resilience |
| 9 | Class Citadel | The Inheritance Overlord | Abstraction |
| 10 | Data Nexus | The Oracle of Insight | Mastery |

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Lucide React** (icons)
- Custom CSS animations (float, glitch, scan-line, confetti, boss aura)
- Custom Python syntax highlighter (no external library)

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## Enabling GitHub Pages

To host this as a live story page on GitHub Pages:

1. Build the project: `npm run build`
2. The `dist/` folder contains the static site
3. Push to your `main` branch
4. In your repo settings → Pages → set source to `main` / `dist`
5. Your live story will be available at `https://<username>.github.io/<repo>/`

---

## Features

- **Scroll-driven progression**: levels unlock as you scroll, simulating a quest
- **Battle cards**: each question is a card with expandable code + output
- **Syntax highlighting**: custom Python tokenizer colors keywords, strings, numbers, comments, and function calls
- **Boss aura animation**: each boss arena pulses with its realm's accent color
- **Confetti finale**: 80-piece confetti burst on quest completion
- **FX toggle**: turn all animations off for reduced-motion accessibility
- **Responsive**: works on mobile, tablet, and desktop

---

## Student

- **Name:** KS RITHVIK
- **SAP ID:** 590030656
- **Course:** MCA (AI & ML)
- **University:** UPES, Dehradun

---

## License

This project is part of an academic assignment. The code and story are original work.
