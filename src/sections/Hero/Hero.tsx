import { Button, Eyebrow, Highlight, Icon, IconButton, Reveal } from "@/components/ui";
import { Container } from "@/components/layout";
import { emailLink, profile, socialLinks } from "@/data";
import HeroPortrait from "./HeroPortrait";

export default function Hero() {
  // Add `resume` back to this destructure when you re-enable the download button below.
  const { hero, name } = profile;
  // Highlight the name wherever it appears in the intro text.
  const [beforeName, ...afterName] = hero.intro.split(name);
  const links = [...socialLinks, emailLink];

  return (
    <section id="hero" aria-labelledby="hero-heading">
      <Container className="relative grid min-h-svh grid-cols-[minmax(0,7fr)_minmax(300px,4fr)] items-center gap-[9%] pt-[138px] pb-[90px] before:pointer-events-none before:absolute before:top-[10%] before:-right-[420px] before:-z-1 before:size-[620px] before:rounded-full before:bg-[radial-gradient(circle,var(--accent-soft),transparent_68%)] max-tablet:grid-cols-[1.2fr_.8fr] max-tablet:gap-[45px] max-phone:grid-cols-1 max-phone:content-center max-phone:pt-[120px]">
        <Reveal immediate className="relative max-phone:order-2">
          <div className="mb-[30px] flex w-fit items-center gap-[9px] rounded-lg border border-line bg-[color-mix(in_srgb,var(--surface)_75%,transparent)] px-3 py-2 font-mono text-[11px] leading-none font-medium tracking-[.07em] text-muted">
            <span aria-hidden="true" className="size-[7px] rounded-full bg-success shadow-[0_0_0_4px_rgba(74,222,128,.1)]" /> {hero.availability}
          </div>
          <Eyebrow>{hero.kicker}</Eyebrow>
          <h1 id="hero-heading" className="mt-[18px] mb-[25px] max-w-[760px] font-display text-[clamp(50px,6.3vw,82px)] leading-[1.01] font-semibold tracking-[-.055em] max-tablet:text-[clamp(47px,7vw,67px)] max-phone:text-[clamp(43px,13vw,60px)]">
            {hero.headingLead} <Highlight>{hero.headingAccent}</Highlight>
          </h1>
          <p className="max-w-[620px] text-base leading-[1.75] text-muted max-phone:text-[15px]">{afterName.length > 0 ? (
              <>
                {beforeName}
                <strong className="font-semibold text-accent">{name}</strong>
                {afterName.join(name)}
              </>
            ) : (
              hero.intro
            )}
          </p>

          <div className="mt-[34px] flex flex-wrap gap-3">
            <Button href="#projects">
              View projects <Icon name="arrow" />
            </Button>
            {/* Re-enable once the PDF exists: put it in /public, set profile.resume in src/data/profile.ts
            <Button variant="secondary" href={resume.href} download={resume.fileName}>
              <Icon name="download" /> Download resume
            </Button>
            */}
          </div>

          <div className="mt-6 flex gap-2.5 max-phone:justify-center" aria-label="Social profiles">
            {links.map((link) => (
              <IconButton
                key={link.id}
                size="sm"
                icon={link.icon}
                label={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              />
            ))}
          </div>
        </Reveal>

        <Reveal immediate className="max-phone:order-1 max-phone:mx-auto max-phone:w-[72%]">
          <HeroPortrait {...hero.portrait}/>
        </Reveal>

        <a className="absolute bottom-[30px] left-0 flex items-center gap-2.5 font-mono text-[9px] font-medium tracking-[.12em] text-muted max-phone:hidden" href="#about">
          <span>SCROLL TO KNOW MORE ABOUT ME</span>
          <Icon name="chevron" className="animate-bounce-soft text-accent" />
        </a>
      </Container>
    </section>
  );
}
