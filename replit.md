# Portfolio Application

## Overview

This is a full-stack portfolio application built with a modern tech stack featuring React frontend, Express backend, and PostgreSQL database. The application showcases a creative designer and developer's work with a responsive, professional design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: Basic in-memory storage with extensible interface

### Key Design Decisions

1. **Monorepo Structure**: Organized into client, server, and shared directories for clear separation of concerns
2. **Type Safety**: Full TypeScript implementation across frontend, backend, and shared schemas
3. **Component System**: shadcn/ui provides consistent, accessible components with Tailwind CSS
4. **Database Strategy**: Drizzle ORM chosen for type safety and PostgreSQL compatibility
5. **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling between sections
- **Hero**: Landing section with profile image and call-to-action buttons
- **About**: Skills showcase with progress bars and personal introduction
- **Portfolio**: Project gallery with filtering and modal views
- **Contact**: Contact form with social media links and toast notifications
- **Footer**: Simple footer with legal links

### Backend Infrastructure
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Route Registration**: Centralized route management with Express
- **Development Setup**: Vite integration for hot module replacement
- **Error Handling**: Centralized error handling middleware

### Shared Resources
- **Schema Definitions**: Drizzle schema with Zod validation
- **Type Definitions**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Client Requests**: React components use TanStack Query for server communication
2. **API Layer**: Express routes handle HTTP requests and responses
3. **Data Processing**: Storage interface abstracts database operations
4. **Response Handling**: Standardized JSON responses with error handling
5. **State Updates**: TanStack Query manages cache invalidation and updates

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem with Radix UI components
- **Database**: Neon serverless PostgreSQL with connection pooling
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React and React Icons libraries
- **Utilities**: Class variance authority, clsx, and date-fns

### Development Tools
- **Build System**: Vite with React plugin and runtime error overlay
- **Database Management**: Drizzle Kit for migrations and schema management
- **Code Quality**: TypeScript strict mode with comprehensive type checking

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: esbuild bundles server code with external dependencies
3. **Database Setup**: Drizzle migrations ensure schema consistency

### Environment Configuration
- **Development**: Hot reload with Vite dev server and Express middleware
- **Production**: Static file serving with Express and compiled server bundle
- **Database**: Environment variable configuration for PostgreSQL connection

### Hosting Considerations
- **Static Assets**: Frontend builds to standard static files
- **Server Deployment**: Single Node.js process handling both API and static files
- **Database**: PostgreSQL-compatible hosting with connection string configuration

## Changelog

```
Changelog:
- June 29, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```