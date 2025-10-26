# Fix MVP Readiness Issues

## Why
The platform has critical navigation issues and UI problems preventing users from accessing key features. The leadership academy page returns a 404 error, the impact page has visual obstructions, and authenticated users lack direct access to view their network impact. These issues must be resolved before MVP launch to ensure a seamless user experience and proper feature accessibility.

## What Changes
- Fix 404 error for leadership academy page by creating proper page route at `/leadership-academy`
- Remove overlaying transparent backgrounds from impact page that obscure content visibility
- Add "View Network Impact" link in dashboard for authenticated users to easily access their impact metrics
- Ensure all navigation links point to correct routes and work for authenticated users
- Verify complete authentication flow (create account, login, logout) works properly
- Ensure all features are accessible and interactive for logged-in users

## Impact
- Affected specs: `navigation`, `pages`, `user-experience`
- Affected code:
  - `src/app/leadership-academy/` (new page needed)
  - `src/app/dashboard/page.tsx` (add impact link)
  - `src/app/impact/page.tsx` (remove overlay backgrounds)
  - `src/components/navigation.tsx` (verify routes)
- User experience: Significantly improves navigation and feature accessibility
- MVP readiness: Resolves critical blocking issues for launch

## Breaking Changes
None - these are bug fixes and UX improvements that restore intended behavior.

