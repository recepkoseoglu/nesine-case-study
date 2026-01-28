# Nesine Case Study - Sports Betting Application

A modern Next.js application for browsing and managing sports bets. Built with TypeScript, Redux Toolkit for state management, and Tailwind CSS for styling.

## What's Inside

### Project Structure

```
app/                          # Next.js app directory (React Server Components)
├── page.tsx                  # Home page with navigation
├── layout.tsx                # Global layout wrapper
├── bets/
│   └── page.tsx              # Bets browsing page
└── globals.css               # Global styles

src/
├── components/
│   ├── BetsList.tsx          # Paginated table of grouped bets (infinite scroll)
│   ├── Betslip.tsx           # Bet slip/cart component
│   └── ...
├── store/
│   ├── index.ts              # Redux store configuration
│   ├── hooks.ts              # Custom Redux hooks
│   └── betslip/
│       └── betslipSlice.ts   # Betslip reducer logic
└── providers/
    └── ReduxProvider.tsx     # Redux provider wrapper
```

### Key Features

- **Bet Browsing**: View sports events grouped by date and league
- **Infinite Scroll**: Automatically loads more groups (15 per batch) as you scroll down
- **Betslip Management**: Add bets to your slip and manage selections
- **Redux State**: Global state management for betslip
- **TypeScript**: Fully typed for type safety
- **Tailwind CSS**: Modern, responsive styling
- **ESLint + Prettier**: Code quality and formatting

## Technology Stack

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript
- **State**: Redux Toolkit 1.9.5 + React-Redux 9.2.0
- **Styling**: Tailwind CSS 4.1.18
- **Linting**: ESLint 9.39.1
- **Formatting**: Prettier 10.0.8
- **React**: 19.2.4

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Available Scripts

- **`npm run dev`** – Start development server (hot reload enabled)
- **`npm run build`** – Build for production
- **`npm run start`** – Run production build
- **`npm run lint`** – Run ESLint on all files
- **`npm run linter`** – Run ESLint with auto-fix
- **`npm run format`** – Format code with Prettier
- **`npm run type-check`** – Run TypeScript type checking

## How to Use

### 1. Browse Bets

Navigate to the **Browse Bets** page from the home screen. The page displays:

- A table of sports events grouped by date and league
- Odds for various bet types (1, X, 2, Under/Over, etc.)
- **Initially 15 groups are shown**
- **Additional groups load automatically as you scroll down**

### 2. Add Bets to Your Slip

Click on any bet row to add it to your betslip. The selected bet appears in the Betslip component.

### 3. Manage Your Betslip

View and manage selected bets in the betslip sidebar. Remove bets as needed before placing your wager.

### 4. Infinite Scroll Behavior

- As you scroll down past the visible bets, an IntersectionObserver triggers loading of the next 15 groups
- The component displays "Loading more…" while additional data is being prepared
- This continues until all groups are loaded

## Environment Variables

The app expects the following in `.env.local`:

```
NEXT_PUBLIC_API_URL=<your_api_url>
```

This is used for API calls to fetch bet data.

## Code Quality

### TypeScript

- Full type safety across components and Redux store
- Strict mode enabled in `tsconfig.json`

### Linting & Formatting

```bash
npm run lint        # Check for issues
npm run linter      # Fix issues automatically
npm run format      # Format all files
```

## Performance Optimizations

- **Server Components**: Leverages Next.js 16 Server Components where possible
- **Memoization**: `useMemo` prevents unnecessary group recalculation
- **Intersection Observer**: Efficient infinite scroll without performance overhead
- **Code Splitting**: Automatic chunk optimization by Next.js

## Notes

- The BetsList component groups bets by date (`D`) and league (`LN`)
- Infinite scroll loads **15 groups at a time** (configurable in `BetsList.tsx`)
- Redux persists betslip selections during the session
- All styling uses Tailwind CSS utility classes
