# BookSaaS - Programming Ebook Subscription Platform

A modern SaaS platform that delivers curated programming ebooks to subscribers
on a monthly basis. Built with Next.js 15, featuring authentication, Stripe
payments, and a clean dashboard experience.

## 🚀 Features

- **Monthly Ebook Delivery**: Subscribers receive one curated programming ebook
  per month
- **User Authentication**: Secure login/registration system with NextAuth.js
- **Stripe Integration**: Seamless payment processing and subscription
  management
- **Responsive Dashboard**: Clean interface for users to access their monthly
  content
- **Subscription Management**: Easy subscription cancellation and management
- **Modern UI**: Built with Tailwind CSS and Radix UI components

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Tailwind CSS Animate
- **UI Components**: Radix UI (Dialog, Dropdown Menu, Label, Slot)
- **Authentication**: NextAuth.js v5
- **Database**: PostgreSQL with Prisma ORM
- **Payments**: Stripe
- **Icons**: Lucide React, React Icons
- **Utilities**: clsx, class-variance-authority, tailwind-merge

## 📁 Project Structure

```
livroSaas/
├── app/                          # Next.js app directory
│   ├── (auth)/                  # Authentication routes
│   │   ├── cadastro/            # Registration
│   │   ├── login/               # Login
│   │   └── (logout)/            # Logout
│   ├── (checkout)/              # Checkout routes
│   ├── api/                     # API routes
│   │   ├── auth/                # NextAuth configuration
│   │   └── checkout/            # Stripe checkout
│   ├── dashboard/               # User dashboard
│   └── assets/                  # Images and logos
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components
│   ├── pricing-card.tsx         # Subscription pricing display
│   └── payment-button.tsx       # Stripe payment integration
├── lib/                         # Utility libraries
│   ├── db.ts                    # Database configuration
│   ├── stripe.ts                # Stripe integration
│   └── user.ts                  # User management
└── prisma/                      # Database schema and migrations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Stripe account
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd livroSaas
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** Create a `.env.local` file with:

   ```env

    DATABASE_URL="neon db url"

    AUTH_SECRET="auth token"
    AUTH_URL="website url"

    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="publishable key"
    STRIPE_SECRET_KEY="secret key"
    STRIPE_PRICE_ID="price id"
    STRIPE_CUSTOMER_PORTAL_URL="customer portal url"
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser** Navigate to
   [http://localhost:3000](http://localhost:3000)

## 💳 Subscription Model

- **Plan**: Pro Premium VIP
- **Price**: R$29/month
- **Features**:
  - 1 curated programming ebook per month
  - Special curation service
  - Unlimited access
  - Cancel anytime

## 🔐 Authentication

The platform uses NextAuth.js with credentials provider for user authentication.
Users can:

- Register with email and password
- Login with existing credentials
- Access protected dashboard routes
- Manage their subscription status

## 💰 Payment Processing

Stripe integration handles:

- Subscription creation
- Payment processing
- Subscription status tracking
- Customer management
- Cached subscription data for performance

## 📱 User Experience

- **Landing Page**: Clean, conversion-focused design with pricing information
- **Dashboard**: Simple interface for accessing monthly ebooks
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Navigation**: Intuitive menu system with mobile support

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

## 🤝 Contributing

This is a study project built with modern web technologies. Feel free to explore
the codebase and learn from the implementation.

## 👨‍💻 Author

Built with ❤️ by [CRZ](https://crzweb.vercel.app/)

---

**Note**: This is a study project demonstrating modern SaaS development
practices with Next.js, Stripe, and Prisma.
