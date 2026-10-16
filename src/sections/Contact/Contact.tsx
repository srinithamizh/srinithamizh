import { Highlight, Icon, Reveal, SectionHeading } from "@/components/ui";
import { Section } from "@/components/layout";
import { profile, socialLinks } from "@/data";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact() {
  return (
    <Section id="contact" tone="surface" labelledBy="contact-heading" contentClassName="grid grid-cols-2 gap-[10%] max-tablet:gap-[6%] max-phone:grid-cols-1 max-phone:gap-[60px]">
      <div>
        <SectionHeading
          id="contact-heading"
          className="mb-8"
          eyebrow="CONTACT"
          title={
            <>
              Have an idea?
              <br />
              <Highlight>Let's make it happen.</Highlight>
            </>
          }
          description="I'm always interested in meaningful work and thoughtful conversations. Tell me what you're building."
        />
        <Reveal>
          <a className="flex w-fit items-center gap-[15px] border-b border-accent pb-[7px] text-[15px] font-semibold" href={`mailto:${profile.email}`}>
            {profile.email} <Icon name="arrow" />
          </a>
          <div className="mt-[50px] flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex gap-1.5 text-[11px] text-muted transition-colors duration-200 hover:text-accent"
              >
                {link.label} <Icon name="external" size={14} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <ContactForm />
      </Reveal>
    </Section>
  );
}
