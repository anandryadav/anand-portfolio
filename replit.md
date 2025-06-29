# Portfolio Application

## Overview

This is a full-stack portfolio application built with a modern tech stack featuring React frontend, Express backend, and PostgreSQL database. The application showcases Anand Yadav's work as a Principal Software Engineer with 12+ years of experience in AI-driven software solutions, FinTech platforms, and scalable architecture.

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
- **Database**: SQLite with better-sqlite3 driver for local storage
- **Session Management**: SQLite storage with extensible interface
- **File Serving**: Resume download endpoint with Express static file serving

### Key Design Decisions

1. **Monorepo Structure**: Organized into client, server, and shared directories for clear separation of concerns
2. **Type Safety**: Full TypeScript implementation across frontend, backend, and shared schemas
3. **Component System**: shadcn/ui provides consistent, accessible components with Tailwind CSS
4. **Database Strategy**: Drizzle ORM chosen for type safety and PostgreSQL compatibility
5. **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling between sections
- **Hero**: Landing section showcasing Principal Software Engineer expertise
- **About**: Technical skills showcase with progress bars and professional background
- **Portfolio**: Project gallery featuring FinTech platforms, microservices, and cloud solutions
- **Contact**: Contact form with professional contact information and LinkedIn profile
- **Footer**: Simple footer with copyright information

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
- June 29, 2025. Updated portfolio content for Anand Yadav:
  * Changed from creative designer to Principal Software Engineer
  * Updated hero section with 12+ years experience in AI-driven solutions
  * Modified skills to focus on Java, Python, Cloud Architecture, Microservices
  * Replaced design projects with FinTech platform, ETL pipelines, cloud infrastructure
  * Updated contact information with real email and phone from resume
  * Added LinkedIn profile link from resume
  * Changed location to Delhi, India
- June 29, 2025. Added SQLite database and resume download functionality:
  * Migrated from PostgreSQL to SQLite using better-sqlite3
  * Added contacts table to store form submissions
  * Implemented contact form API endpoints with real database storage
  * Added resume download endpoint serving PDF file
  * Added download resume buttons to hero and contact sections
  * Updated storage interface to support contact CRUD operations
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```