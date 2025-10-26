# Project Context

## Purpose
VotizenKE is a civic engagement platform designed to empower Kenyan youth (ages 18-35) to register to vote, learn about their democratic rights, and mobilize for civic action. The platform combines social media-style engagement with purposeful democratic participation, featuring peer-to-peer mobilization, civic education, community building, and policy awareness. The goal is to significantly increase youth voter registration and participation in Kenya's democratic processes through an addictive, rewarding, and impactful digital experience.

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript 5** - Type-safe development
- **React 19.2** - UI library with React Compiler enabled
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library for smooth transitions
- **shadcn/ui** - Radix UI component library
- **Lucide React** - Icon system
- **Recharts 3** - Data visualization for analytics

### Backend & Database
- **Next.js API Routes** - Serverless backend endpoints
- **Prisma 6** - Type-safe ORM
- **SQLite** - Development database (migrating to MongoDB for production)
- **NextAuth.js v5 (beta)** - Authentication system
- **bcrypt** - Password hashing

### Development Tools
- **ESLint 9** - Code linting
- **PostCSS** - CSS processing
- **babel-plugin-react-compiler** - React optimization

### Planned Production Stack
- **Vercel** - Deployment platform
- **MongoDB Atlas** - Production database

## Project Conventions

### Code Style
- **TypeScript strict mode** - All files use TypeScript with type safety
- **Functional components** - Use React function components with hooks
- **File naming**: 
  - Components: `kebab-case.tsx` (e.g., `activity-feed.tsx`)
  - Pages: `page.tsx` in directory-based routing
  - API routes: `route.ts` in directory-based routing
- **Component organization**:
  - UI primitives in `src/components/ui/`
  - Feature components in `src/components/`
  - Page-specific logic in `src/app/[route]/page.tsx`
- **Styling**: Tailwind utility classes, mobile-first responsive design
- **Color palette**: Kenya flag colors (black: #000000, red: #DC143C, green: #006B3F, white: #FFFFFF)
- **Typography**: Inter font family for modern, readable UI

### Architecture Patterns
- **App Router architecture** (Next.js 13+)
  - File-system based routing in `src/app/`
  - Server Components by default
  - Client Components marked with `"use client"`
- **API Routes pattern**: `src/app/api/[feature]/route.ts`
- **Component composition**: Reusable UI components with Radix UI primitives
- **State management**: React hooks (useState, useEffect) for local state
- **Authentication flow**:
  - NextAuth.js with Prisma adapter
  - Session-based authentication
  - Protected routes via middleware
  - Support for email/password and OAuth (Google)
- **Database access**: Centralized Prisma client in `src/lib/prisma.ts`
- **Utility functions**: Shared helpers in `src/lib/utils.ts`

### Testing Strategy
- **Current**: Manual testing and validation
- **Planned**: Integration tests for API routes, component tests for critical user flows
- **Test checklist**: Documented in `test-checklist.md`

### Git Workflow
- **Main branch**: Production-ready code
- **Feature branches**: Create for new features or significant changes
- **Commit messages**: Descriptive, action-oriented (e.g., "Add voter registration popup")
- **Current status**: Using OpenSpec for spec-driven development with changes tracked in `openspec/changes/`

## Domain Context

### Civic Engagement
- **Target audience**: Kenyan youth aged 18-35
- **Primary goal**: Increase voter registration and civic participation
- **Secondary goals**: Civic education, community building, policy awareness
- **Key user actions**:
  - Register to vote (IEBC integration)
  - Invite friends via WhatsApp (peer-to-peer mobilization)
  - Participate in civic discussions and polls
  - Complete civic education lessons
  - Track personal civic impact and network growth
  - Engage with AI constitution assistant

### Kenyan Context
- **IEBC**: Independent Electoral and Boundaries Commission (official electoral body)
- **Constitution**: 2010 Constitution of Kenya
- **Languages**: English and Swahili (future: local language support)
- **Mobile-first**: High mobile usage, WhatsApp dominance
- **Connectivity**: Plan for offline mode and USSD integration

### Platform Features
- **Social features**: Chat, polls, discussions, live activity
- **Gamification**: Points, badges, leaderboards, streaks, achievements
- **Network effects**: Referral tracking, network visualization, social proof
- **Education**: Civic lessons, constitution bot, policy tracking
- **Community**: Local chapters, events, leadership academy

## Important Constraints

### Technical Constraints
- **Mobile-first mandatory**: Most users access via mobile devices
- **Performance**: Fast load times critical for user retention
- **Offline support**: Plan for intermittent connectivity
- **Database transition**: Currently SQLite (dev), migrating to MongoDB (production)
- **Authentication**: NextAuth v5 is in beta - may have stability issues

### Business Constraints
- **Non-profit/civic mission**: Not revenue-focused, prioritize impact
- **Youth-focused**: Design and content must resonate with 18-35 age group
- **Trust and credibility**: Must be perceived as non-partisan and trustworthy
- **Data privacy**: Sensitive user data (voter registration status, political views)

### Regulatory Constraints
- **IEBC regulations**: Must comply with Kenyan electoral laws
- **Data protection**: Align with Kenya Data Protection Act
- **Political neutrality**: Cannot endorse candidates or parties
- **Youth protection**: Age verification for users under 18

### Resource Constraints
- **Development**: Small team, rapid iteration required
- **Hosting**: Optimize for cost-effective scaling
- **Content moderation**: Manual moderation for community safety

## External Dependencies

### Authentication Services
- **Google OAuth**: For social login (requires CLIENT_ID and CLIENT_SECRET)
- **NextAuth.js**: Session management and authentication flow

### Database
- **MongoDB Atlas**: Production database (connection string required)
- **Prisma**: ORM for database access and migrations

### Third-Party APIs (Current)
- **WhatsApp**: Deep linking for friend invitations and sharing

### Third-Party APIs (Planned)
- **IEBC API**: Direct integration for voter registration verification
- **SMS providers**: Registration reminders and notifications
- **Payment gateways**: For donations (M-PESA integration)
- **AI services**: Enhanced constitution bot (OpenAI, Anthropic, or local models)

### Deployment & Infrastructure
- **Vercel**: Hosting and deployment platform
- **GitHub**: Version control and CI/CD

### Social Media Integration (Planned)
- **Twitter API**: Share civic actions
- **Facebook Graph API**: Social proof and sharing
- **Instagram API**: Content syndication
