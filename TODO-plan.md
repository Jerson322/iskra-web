# Plan for Task Updates

## Information Gathered

- The "raya rara" (weird line) in "¿Cómo trabajamos en Iskra?" (StepsSection) on mobile is the central vertical line in the timeline. Need to remove it only on mobile.
- "Colaboraciones" title not fully readable on small mobiles; need to adjust font size or text for mobile.
- Parallax in colaboraciones and servicios pages stutters; need to optimize for smooth scrolling.
- Add a "casos reales" section/page with navbar and footer, but no content yet.
- Make logo clickable to home (wrap in Link to "/").

## Plan

1. **Remove weird line on mobile in HowWeWorkSection**: Modify the border class to hide on mobile (e.g., add `hidden md:block` to border).
2. **Fix "Colaboraciones" readability on mobile**: Adjust title font size or text for small screens.
3. **Optimize parallax smoothness in colaboraciones and servicios**: Add `will-change: transform` and possibly other optimizations to motion.div elements.
4. **Add "casos reales" page**: Create `/app/casos-reales/page.tsx` with navbar and footer, placeholder content.
5. **Make logo clickable**: Wrap the logo Image in a Link to "/".

## Dependent Files

- `iskra-web/componets/HowWeWorkSection.tsx`
- `iskra-web/app/colaboraciones/page.tsx`
- `iskra-web/app/servicios/page.tsx`
- `iskra-web/componets/Navbar.jsx`
- New: `iskra-web/app/casos-reales/page.tsx`

## Followup Steps

- Test on mobile for line removal and readability.
- Test parallax smoothness.
- Add content to casos reales page later.
- Run dev server to verify logo link.
