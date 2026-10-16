# Thamizharasan Srinivasan — Personal Portfolio

A fast, responsive, single-page portfolio built with **React 19**, **TypeScript** and **Tailwind CSS v4**. All content lives in plain data files, so updating the site never means touching components.

## Features

- **Single-page layout** with Hero, About, Skills, Experience, Education, Projects, Milestones (awards) and Contact sections
- **Dark and light themes**: remembered between visits, applied before first paint (no flash)
- **Fully responsive**: desktop-first breakpoints, mobile slide-down navigation
- **Scroll spy** header highlighting the section in view, and **scroll-reveal** animations
- **Project modal** with live-preview and repository links per project
- **Contact form** with live validation. It opens the visitor's email app with the subject and message pre-filled
- **Accessible by default**: semantic landmarks, labelled form fields, keyboard-friendly modal with focus return, `prefers-reduced-motion` support
- **Data-driven content** with brand icons for skills and projects

## Tech stack

| Area | Choice |
| --- | --- |
| UI | React 19 |
| Language | TypeScript 7 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (theme tokens in CSS) |
| Icons | react-icons (Lucide, Simple Icons, Font Awesome) |
| Class merging | clsx + tailwind-merge |

## Getting started

Requires **Node.js 20 or newer**.

```bash
npm install
npm run dev        # start the dev server
npm run build      # typecheck + production build (output in dist/)
npm run preview    # preview the production build locally
npm run typecheck  # TypeScript only
```

## Project structure

```text
src/
  main.tsx, App.tsx       Entry point and page composition
  styles/                 index.css (Tailwind entry), tokens.css (colors, fonts, themes), base.css
  data/                   All site content: profile, skills, tech, experience, education,
                          projects, awards, navigation, social links
  types/                  Shared TypeScript types
  hooks/                  useTheme, useActiveSection, useInView, useEscapeKey,
                          useLockBodyScroll, useContactForm
  utils/                  classNames (cx), validation, mailto, date, scroll, experience
  components/
    ui/                   Reusable primitives: Button, IconButton, Clickable, Card, TechList,
                          Eyebrow, Highlight, Icon, Logo, Modal, Reveal, SectionHeading, FormField
    layout/               Container, Section, Header, Footer
  sections/               One folder per section: Hero, About, Skills, Experience, Education,
                          Projects, Milestones, Contact
public/                   Logo, favicons and portrait photo
```

Each component lives in its own folder (`Name/Name.tsx`). Import shared pieces through the barrels: `@/components/ui`, `@/components/layout`, `@/sections`, `@/data` and `@/hooks`.

## Customizing

| What | Where |
| --- | --- |
| Name, intro, about text, quick facts | `src/data/profile.ts` |
| Skills (grouped) and tech icons | `src/data/skills.ts`, `src/data/tech.ts` |
| Work history | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Projects (with `url` and `repoUrl`) | `src/data/projects.ts` |
| Awards | `src/data/awards.ts` (sorted newest first automatically) |
| Social and email links | `src/data/social.ts` |
| Colors, fonts, themes | `src/styles/tokens.css` |
| Logo and favicons | `public/` |

**Adding a technology:** add an entry with its icon to `src/data/tech.ts`, then reference it in `skills.ts` or `projects.ts`.

**Theme tokens as Tailwind classes:** `bg-bg`, `bg-surface`, `text-fg`, `text-muted`, `border-line`, `text-accent`, `font-display`, `font-mono`, `shadow-card`. They switch automatically with the theme.

**Responsive utilities:** the layout is desktop-first, so use `max-tablet:` (under 900px) and `max-phone:` (under 680px).

**Overriding a component:** pass a `className`. Conflicts resolve in your favor through `tailwind-merge`, for example `<Button className="rounded-full" />`.

### Résumé download

The download button in `src/sections/Hero/Hero.tsx` is commented out until a PDF exists. To enable it:

1. Put the PDF in `public/` (for example `public/resume.pdf`).
2. Set `profile.resume.href` to `"/resume.pdf"` in `src/data/profile.ts`.
3. Uncomment the button and add `resume` back to the destructure in `Hero.tsx`.

### Contact form

The form validates as the visitor types and enables **Send email** only when the name, email and message are valid. On submit it opens a `mailto:` link to `profile.email`, with the subject (defaulting to `profile.defaultSubject`) and message body filled in. To send messages without relying on the visitor's mail app, replace the submit logic in `src/hooks/useContactForm.ts` with a call to a form service or your own API.

## Deployment

The site is a static Vite build. Run `npm run build` and deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages and similar).

## Author

**Thamizharasan Srinivasan**: Senior Software Engineer, Chennai, India
