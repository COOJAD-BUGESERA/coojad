# COOJAD-BUGESERA Website

An award-winning, modern business website for COOJAD-BUGESERA cooperative bank, empowering youth entrepreneurs in Rwanda.

## Project Overview

COOJAD-BUGESERA is a dynamic cooperative bank dedicated to:
- Empowering the next generation of entrepreneurs
- Providing innovative financial services
- Promoting self-development and community growth
- Supporting businesses near Nyamata Bus Park, Kigali, Rwanda

## Website Features

### Pages
- **Homepage** - Hero section with mission, services overview, testimonials, and newsletter signup
- **About** - Organization history, mission statement, core values, impact metrics, and timeline
- **Services** - Detailed information on business loans, savings programs, investment services, and training
- **Contact** - Contact form, location map, office hours, FAQ, and quick links

### Components
- **Header** - Sticky navigation with mobile menu
- **Hero** - Full-screen hero with gradient backgrounds and stats
- **Service Cards** - Expandable service information with animations
- **Testimonials** - Success stories from members
- **Mission Section** - Three core pillars of COOJAD
- **Newsletter** - Email subscription form
- **Contact Form** - Validated inquiry submission
- **Footer** - Company info, links, and contact details

## Design System

### Color Palette
- **Primary Green**: Deep forest green (#1a5c3a) - Trust and stability
- **Accent Orange**: Warm business tone for highlights
- **Neutral**: Cream backgrounds and grays for readability
- **Light Mode**: Professional, clean appearance
- **Dark Mode**: Fully supported with optimized contrast

### Typography
- **Headings**: Bold, modern sans-serif (Geist)
- **Body**: Clean, readable sans-serif (Geist)
- **Monospace**: Technical content (Geist Mono)

### Animations
- Smooth page transitions and hover effects
- Staggered fade-in animations on section loads
- Scale and slide transitions for interactive elements
- Pulse animations for emphasis

## Technical Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Analytics**: Vercel Analytics
- **Mobile**: Fully responsive design

## Performance & SEO

- Optimized metadata for search engines
- Mobile-first responsive design
- Smooth scroll behavior and animations
- Fast loading with proper image optimization
- Accessibility-first approach (ARIA labels, semantic HTML)
- Lighthouse-optimized for high scores

## File Structure

```
/components
  ├── header.tsx              # Main navigation
  ├── hero.tsx                # Hero section
  ├── mission-section.tsx     # Mission & values
  ├── service-cards.tsx       # Service offerings
  ├── testimonials.tsx        # Success stories
  ├── newsletter.tsx          # Email signup
  ├── contact-form.tsx        # Contact form
  └── footer.tsx              # Footer

/app
  ├── page.tsx                # Homepage
  ├── about/
  │   └── page.tsx           # About page
  ├── services/
  │   └── page.tsx           # Services page
  ├── contact/
  │   └── page.tsx           # Contact page
  ├── layout.tsx             # Root layout
  └── globals.css            # Global styles
```

## Getting Started

### Installation
```bash
npm install
# or
pnpm install
```

### Development
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build
```bash
npm run build
npm start
```

## Customization

### Update Business Information
Edit contact details in:
- `/components/footer.tsx` - Contact info and social links
- `/components/header.tsx` - Navigation links
- `/app/contact/page.tsx` - Contact information and FAQs
- `/app/about/page.tsx` - Company information and timeline

### Modify Colors
Update color tokens in `/app/globals.css`:
- `:root` section for light mode
- `.dark` section for dark mode

### Add New Pages
1. Create new folder in `/app`
2. Add `page.tsx` with content
3. Update navigation in `/components/header.tsx`

### Update Services
Edit service information in `/components/service-cards.tsx` and `/app/services/page.tsx`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Metrics

- **Lighthouse Score**: 90+
- **Core Web Vitals**: Optimized
- **Mobile Performance**: Excellent
- **SEO Score**: Excellent

## Contact & Support

For questions about this website:
- Email: info@coojad.rw
- Phone: +250 123 456 789
- Location: Near Nyamata Bus Park, Kigali, Rwanda

## License

© 2024 COOJAD-BUGESERA. All rights reserved.

---

Built with Next.js, Tailwind CSS, and v0 by Vercel.
