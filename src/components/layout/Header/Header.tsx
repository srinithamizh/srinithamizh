import { useState } from "react";
import { IconButton, Logo } from "@/components/ui";
import { cx } from "@/utils/classNames";
import { scrollToTop } from "@/utils/scroll";
import type { NavItem, Theme } from "@/types";

interface HeaderProps {
  name: string;
  items: NavItem[];
  activeId: string;
  theme: Theme;
  onToggleTheme: () => void;
}

const navBase =
  "flex h-full items-center gap-8 " +
  // Mobile: slide-down panel
  "max-tablet:fixed max-tablet:inset-x-0 max-tablet:top-(--header-height) max-tablet:h-auto max-tablet:flex-col max-tablet:items-start max-tablet:gap-[21px] max-tablet:border-b max-tablet:border-line max-tablet:bg-bg max-tablet:px-[5vw] max-tablet:pt-[25px] max-tablet:pb-8 max-tablet:transition-[transform,visibility] max-tablet:duration-300";

const linkBase =
  "relative text-xs font-medium text-muted transition-colors duration-200 hover:text-fg " +
  // Active underline
  "after:absolute after:right-full after:-bottom-[11px] after:left-0 after:h-0.5 after:rounded-sm after:bg-accent after:transition-[right] after:duration-200 " +
  "max-tablet:font-display max-tablet:text-[17px] max-tablet:after:hidden";

export default function Header({ name, items, activeId, theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <header className="fixed inset-x-0 top-0 z-50 grid h-(--header-height) grid-cols-[1fr_auto_1fr] items-center border-b border-[color-mix(in_srgb,var(--line)_75%,transparent)] bg-header px-[max(5vw,24px)] backdrop-blur-[18px] max-tablet:grid-cols-[1fr_auto] max-phone:px-5">
      <Logo
        label={`${name}, home`}
        onClick={(event) => {
          closeMenu();
          scrollToTop(event);
        }}
      />

      <nav
        className={cx(
          navBase,
          menuOpen ? "max-tablet:visible max-tablet:translate-y-0" : "max-tablet:invisible max-tablet:-translate-y-[130%]",
        )}
        aria-label="Main navigation"
      >
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cx(linkBase, isActive && "text-fg after:right-0")}
              aria-current={isActive ? "location" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="flex items-center gap-2.5 justify-self-end">
        <IconButton
          icon={theme === "dark" ? "sun" : "moon"}
          label={`Switch to ${nextTheme} mode`}
          onClick={onToggleTheme}
        />
        <button
          type="button"
          className="hidden size-10 cursor-pointer border-0 bg-transparent p-0 max-tablet:block [&>span]:mx-auto [&>span]:my-1.5 [&>span]:block [&>span]:h-px [&>span]:w-[21px] [&>span]:bg-fg"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
