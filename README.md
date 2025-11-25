# ClipSon User Funnel

A modern, conversion-optimized homepage for ClipSon - a platform for content creators (clippers) to monetize their short-form video content.

## Features

- **Hero Section**: Compelling headline and CTAs to drive sign-ups
- **Value Proposition**: Addresses creator pain points with clear solutions
- **How It Works**: 4-step process explanation with visual timeline
- **Features & Benefits**: 6 key features highlighting platform advantages
- **Testimonials**: Social proof from satisfied creators
- **Final CTA**: Strong conversion-focused call-to-action
- **Responsive Design**: Mobile-first, works on all devices
- **Modern UI/UX**: Clean design with ClipSon green branding

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-friendly layouts

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section with main CTA
│   │   ├── ValueProposition.jsx # Problem/solution section
│   │   ├── HowItWorks.jsx      # 4-step process
│   │   ├── Features.jsx        # Key features grid
│   │   ├── Testimonials.jsx    # Social proof
│   │   ├── FinalCTA.jsx        # Final conversion section
│   │   └── Footer.jsx          # Footer with links
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
└── package.json              # Dependencies
```

## Design Principles

- **Green Color Palette**: Uses ClipSon's brand green (#10B981) for CTAs and accents
- **Clear Hierarchy**: Bold headlines, readable body text, strategic use of whitespace
- **Conversion Focused**: Multiple CTAs throughout the page
- **Trust Building**: Testimonials, social proof, and transparency messaging
- **Creator-Centric**: All content focused on creator benefits and earnings

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  'clipson-green': '#10B981',
  'clipson-green-dark': '#059669',
  'clipson-green-light': '#34D399',
}
```

### Content

All copy and content can be edited directly in the component files in `src/components/`.

## Next Steps

- Connect CTAs to actual sign-up flow
- Add real testimonials and user photos
- Integrate with backend API
- Add analytics tracking
- Implement A/B testing for CTAs
- Add FAQ section
- Create earnings calculator component

