<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- SiteLayout owns page-change focus: focus the new heading after pathname changes, preserve initial-load focus, and repair focus when the mobile menu closes on the current page; this keeps navigation understandable without duplicate live announcements.
- Carousel controls use the shared Button primitive with explicit selection state and one atomic polite announcement; this keeps names, keyboard behavior, and photo updates accessible.
- Keep the global two-tone focus rule outside CSS layers so utility shadows and outlines cannot override it.
