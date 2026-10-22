# Screen-reader semantics audit — 22 October 2026

## Findings

**Critical: 0 missing names, image alternatives, or form labels found in the rendered pages.**

### Warnings addressed
- **Page-change focus — `src/components/SiteLayout.tsx`:** focus could stay on a removed link or the previous heading. The layout now waits for the router's rendered-page event before focusing the new heading. Initial page loads do not steal focus.
- **Mobile navigation — `src/components/SiteLayout.tsx`:** selecting the current page could hide the focused link. It now focuses the page heading; Escape closes the menu and returns focus to its toggle.
- **Reading order — `src/routes/index.tsx`:** the carousel and its controls preceded the page's identifying heading. The heading now appears first in both visible and screen-reader order.
- **Focus visibility — `src/styles.css`:** card shadows and shared button utilities could override the two-tone focus treatment. The global rule now takes precedence.
- **Language — `src/routes/__root.tsx`:** English not-found and error text was marked as Dutch. Those messages are now Dutch.
- **Arrow-key behavior — `src/components/Slider.tsx`:** handled arrows could also perform browser scrolling. Their default action is now prevented.

### Announcement improvements
- Previous/next controls identify themselves as photo controls.
- Photo selectors expose their pressed state in addition to the existing current-photo marker and underline.
- The polite live region announces the entire photo number and caption atomically.
- Navigation already exposes the current page; the menu already exposes expanded/collapsed state. No redundant page live region was added.

## Verification

Browser accessibility-tree and keyboard checks passed for all six top-level pages, a course-detail flow, back navigation, the skip link, carousel updates, missing-page recovery, and mobile-menu interactions. Current-page and pressed/expanded states were read back from the rendered UI. No browser runtime errors were observed. Existing routing tests passed, and preview build logs reported success.

**Limitation:** this environment does not provide NVDA, JAWS, or VoiceOver. Actual speech output and live-announcement timing in those products remain unverified; this was an accessibility-tree and keyboard audit, not a native screen-reader listening session.