import Container from "../Container/Container";
import { Icon, Logo } from "@/components/ui";
import { scrollToTop } from "@/utils/scroll";

interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  return (
    <Container
      as="footer"
      className="grid min-h-[108px] grid-cols-[1fr_auto_1fr] items-center max-phone:grid-cols-[1fr_auto] max-phone:gap-3 max-phone:py-[34px]"
    >
      <Logo label={`${name}, home`} />
      <p className="text-[10px] text-muted max-phone:col-span-2 max-phone:col-start-1 max-phone:row-start-2">
        © {new Date().getFullYear()} {name}. Built with care.
      </p>
      <a
        className="flex items-center gap-[11px] justify-self-end font-mono text-[9px] font-medium tracking-[.09em] text-muted transition-colors duration-200 hover:text-accent"
        href="#hero"
        onClick={scrollToTop}
      >
        BACK TO TOP
        <span className="-rotate-90 text-accent">
          <Icon name="arrow" />
        </span>
      </a>
    </Container>
  );
}
