import { Footer, Header } from "@/components/layout";
import { navItems, profile, sectionIds } from "@/data";
import { useActiveSection, useTheme } from "@/hooks";
import { About, Contact, Education, Experience, Hero, Milestones, Projects, Skills } from "@/sections";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="overflow-hidden">
      <Header
        name={profile.name}
        items={navItems}
        activeId={activeId}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Milestones />
        <Contact />
      </main>
      <Footer name={profile.name} />
    </div>
  );
}
