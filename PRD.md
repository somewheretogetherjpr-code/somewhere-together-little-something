# Somewhere Together — PRD

## Original Problem Statement
Create a mobile-first interactive landing page for the brand **Somewhere Together** ("Where connections begin, stories unfold."), reached by scanning a QR code on a physical card. Feeling: "Someone quietly left a little bit of kindness here for me." Warm, minimal, premium, human — not a business website. Palette: bg #FAF7F0, text #3D382F, muted #81796E, borders #E7E0D5. Fonts: Playfair Display (headings), DM Sans (body/UI). Hero: logo + "A little something for you." + subtitle + CTA. Interaction: exactly 5 moments in fixed category order (A Reminder → A Tiny Pause → A Connection → A Mood Shift → Something Silly), ~8 messages per category, one at a time, 5-dot progress, no repeats per session. Ending screen + restart with fresh randomized session. Subtle calm animations. Mobile first, no horizontal scroll.

## Architecture
- Pure frontend React app (no backend, user-confirmed).
- `/app/frontend/src/App.js` — phase state machine (hero → journey → done), session randomization, Lenis smooth scroll.
- `/app/frontend/src/components/Hero.js` — masked line-by-line reveal, floating logo with mouse parallax.
- `/app/frontend/src/components/MomentScreen.js` — progress dots (active expands to pill), category badge, message crossfade.
- `/app/frontend/src/components/Ending.js` — climax screen + slow editorial marquee.
- `/app/frontend/src/data/moments.js` — 5 categories × 8 messages, pickSession (avoids repeating previous session's pick).
- `/app/frontend/public/logo-lockup.png`, `logo-mark.png` — extracted transparent PNGs from user's attached logo (favicon too).
- framer-motion (all animation), lenis (momentum scroll), Google Fonts.

## User Personas
- QR card scanner: a stranger holding a physical card, on a phone, expecting a quiet moment of warmth.

## Core Requirements (static)
- Mobile-first, no horizontal scroll, full-viewport hero, easy tap targets.
- Fixed 5-category order, one message per moment, dots progress, restart with fresh random messages.
- Logo blended into hero composition (no card/background).

## Implemented
- 2026-07 (build date): full hero with masked line reveal + parallax float logo; 5-step journey with 40 original messages; animated pill progress dots; ending screen with restart and slow marquee; film grain overlay; reduced-motion support; favicon from brand mark; all required data-testids.

## Verified
- Full click-through (hero → 5 moments → ending → restart) via Playwright; no duplicate messages in a session; restart serves new messages; no horizontal scroll at 390px; no console errors.

## Backlog / Next
- P1: share/copy a moment as an image card
- P2: gentle ambient sound toggle
- P2: collectible "cards left behind" map or counter (needs backend)

## Test Credentials
- None — no auth, no backend.
