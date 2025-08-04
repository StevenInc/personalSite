# Overview

This is a modern full-stack portfolio website built with React and Express showcasing Steven Benjamin, a Senior Full Stack Developer with 20+ years of experience. The application features a comprehensive portfolio with sections for about, skills, experience, projects, and contact functionality. It serves as both a professional showcase and a functional web application demonstrating modern development practices.

## Recent Changes (August 2025)
- **Email Integration**: Successfully implemented Resend email service for contact form functionality
- **Domain Setup**: Custom domain stevenbenjamin.com configured and working
- **Favicon Resolution**: Fixed favicon display issues by rebuilding production assets and configuring Express static middleware
- **Production Build**: All production assets properly serve custom favicon.ico instead of SVG references

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI with shadcn/ui component library for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for dark theme and portfolio-specific colors
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for smooth animations and transitions

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API endpoints with structured error handling
- **Request Logging**: Custom middleware for API request/response logging
- **Storage**: In-memory storage implementation with interface for future database integration

## Build and Development Tools
- **Build Tool**: Vite for fast development and optimized production builds
- **Bundling**: ESBuild for server-side bundling
- **Development**: Hot module replacement and runtime error handling
- **Type Checking**: TypeScript compiler with strict mode enabled

## Database and Schema Design
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema**: Shared schema definitions between client and server using Zod for validation
- **Tables**: Users table for authentication and contact_submissions table for form data
- **Validation**: Runtime validation with Zod schemas derived from database schema

## Styling and Design System
- **Design Tokens**: CSS custom properties for consistent theming
- **Component System**: shadcn/ui components with Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Dark Theme**: Portfolio uses a dark theme by default with custom color palette
- **Typography**: Inter font family for modern, readable typography

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database adapter
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form handling with validation
- **wouter**: Lightweight React router
- **framer-motion**: Animation library for React components

## UI and Component Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management for components
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel component for project showcases

## Development and Build Tools
- **vite**: Fast build tool and development server
- **esbuild**: Fast JavaScript bundler for production
- **typescript**: Static type checking
- **@replit/vite-plugin-***: Replit-specific development plugins

## Validation and Schema
- **zod**: Runtime type validation and schema definition
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation
- **@hookform/resolvers**: Form validation resolvers for React Hook Form

## Utilities
- **date-fns**: Date manipulation utilities
- **clsx**: Conditional className utility
- **nanoid**: Unique ID generation
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)