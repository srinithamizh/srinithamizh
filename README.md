# Thamizharasan Srinivasan — Personal Portfolio

A fast, responsive, single-page portfolio built with React, TypeScript and Tailwind CSS. All content lives in plain data files, so updating the site never means touching components.

## Features

- **Single-page layout** with Hero, About, Skills, Experience, Education, Projects, Milestones (awards) and Contact sections
- **Dark and light themes**: remembered between visits, applied before first paint (no flash)
- **Fully responsive**: desktop-first breakpoints, mobile slide-down navigation
- **Scroll spy** header highlighting the section in view, and **scroll-reveal** animations
- **Project modal** with live-preview and repository links per project
- **Contact form** with live validation. It opens the visitor's email app with the subject and message pre-filled
- **Accessible by default**: semantic landmarks, labelled form fields, keyboard-friendly modal, `prefers-reduced-motion` support
- **Data-driven content** with brand icons for skills and projects

## Tech stack

| Area | Choice |
| --- | --- |
| UI | React 19 |
| Language | TypeScript 7 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Icons | react-icons |
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
  styles/                 Tailwind entry, theme tokens (colors, fonts), base styles
  data/                   All site content: profile, skills, tech, experience, education,
                          projects, awards, navigation, social links
  types/                  Shared TypeScript types
  hooks/                  useTheme, useActiveSection, useInView, useEscapeKey,
                          useLockBodyScroll, useContactForm
  utils/                  classNames, validation, mailto, date, scroll, experience
  components/
    ui/                   Reusable primitives: Button, IconButton, Card, TechList, Modal,
                          Reveal, SectionHeading, FormField, and more
    layout/               Container, Section, Header, Footer
  sections/               One folder per section: Hero, About, Skills, Experience, Education,
                          Projects, Milestones, Contact
public/                   Logo, favicons and portrait photo
```

## Author

**Thamizharasan Srinivasan**: Senior Software Engineer, Chennai, India
