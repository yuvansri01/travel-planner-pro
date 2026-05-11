# TravelSmart — Smart Web-Based Travel Planner

A beginner-friendly college project travel planner built with React + Vite + Bootstrap. No backend or database required.

## Run & Operate

- `pnpm --filter @workspace/travel-planner run dev` — run the travel planner (served at `/`)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 18 + Vite
- Styling: Bootstrap 5 + React Bootstrap
- Data: Local JSON/TypeScript data (no backend)

## Where things live

- `artifacts/travel-planner/src/` — all React components and data
- `artifacts/travel-planner/src/data/travelData.ts` — all local JSON data (destinations, hotels, itineraries, tips)
- `artifacts/travel-planner/src/components/` — one file per component

## File Structure

```
src/
  App.tsx                    ← main app (state & logic)
  main.tsx                   ← entry point
  index.css                  ← global styles
  data/
    travelData.ts            ← all local data (hotels, destinations, itineraries)
  components/
    Navbar.tsx
    Hero.tsx
    SearchForm.tsx
    HotelCards.tsx
    Itinerary.tsx
    BudgetSummary.tsx
    PopularDestinations.tsx
    TravelTips.tsx
    Footer.tsx
```

## Product

- Homepage with hero section and stats
- Destination search form (destination, budget, days)
- Hotel recommendations with ratings, prices, amenities
- Day-by-day travel itinerary planner
- Budget summary with progress bar and breakdown
- Popular destinations grid (clickable)
- Travel tips section
- Responsive footer

## User preferences

- Keep code beginner-friendly and simple
- Use Bootstrap for styling (not Tailwind)
- Local JSON data only — no backend or database
- Simple folder structure with minimal files

## Gotchas

- Bootstrap is imported in App.tsx (both CSS and JS bundle)
- All data lives in `src/data/travelData.ts` — easy to extend
