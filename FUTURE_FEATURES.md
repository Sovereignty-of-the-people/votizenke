# Future Features - VotizenKE

These features are planned for future releases and are temporarily hidden from the MVP.

## 🔮 Predictive Analytics (Phase 2)
**Route:** `/predictive`
**Status:** Built but hidden for MVP

### Features:
- Election outcome predictions based on historical data
- Voter turnout forecasting using demographics and weather
- Policy impact modeling
- Trend analysis for civic engagement

### Implementation Notes:
- Page exists at `src/app/predictive/page.tsx`
- Navigation links commented out
- To re-enable: Uncomment navigation links and test thoroughly

---

## 🎯 Campaign Tools (Phase 2)
**Route:** `/campaign`
**Status:** Built but hidden for MVP

### Features:
- Create and manage civic campaigns
- Track campaign progress and impact
- Recruit volunteers
- Set goals and milestones
- Share campaign updates

### Implementation Notes:
- Page exists at `src/app/campaign/page.tsx`
- Removed from main navigation for simplicity
- To re-enable: Add back to navigation and test campaign creation flow

---

## 🏘️ Local Chapters (Phase 2)
**Route:** `/chapters`
**Status:** Built but hidden for MVP

### Features:
- Find local civic chapters
- Join chapter meetings
- Organize local events
- Connect with nearby activists
- Chapter-specific discussions

### Implementation Notes:
- Page exists at `src/app/chapters/page.tsx`
- Removed from primary toolkit to focus on core features
- To re-enable: Add to navigation and ensure geolocation features work

---

## Re-enabling Hidden Features

### Steps to Re-enable:
1. **Update Navigation** (`src/components/navigation.tsx`)
   - Uncomment the feature links in both desktop and mobile sections
   
2. **Update Dashboard** (`src/app/dashboard/page.tsx`)
   - Add feature cards back to the toolkit section
   
3. **Test Thoroughly**
   - Verify all links work
   - Test feature functionality
   - Ensure mobile responsiveness
   - Check authentication requirements

### Code Locations:
```typescript
// Navigation links (desktop)
<Link href="/predictive">
  <Button>Predictive</Button>
</Link>
<Link href="/campaign">
  <Button>Campaign</Button>
</Link>
<Link href="/chapters">
  <Button>Chapters</Button>
</Link>

// Dashboard toolkit cards
<Card>
  <CardTitle>Chapters</CardTitle>
  <Link href="/chapters">
    <Button>Find a Chapter</Button>
  </Link>
</Card>
```

---

## Priority Order for Re-introduction:
1. **Local Chapters** - High community value
2. **Campaign Tools** - Empowers organizers
3. **Predictive Analytics** - Advanced feature for engaged users

