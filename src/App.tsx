import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { Contact } from "@/components/site/contact";
import { FoundingNote } from "@/components/site/founding-note";
import { Industries } from "@/components/site/industries";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { Terms } from "@/components/site/terms";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export function App() {
  return (
    <>
      <SiteNav />
      <main className="rl-page">
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
        <Services />
        <Process />
        <Terms />
        <Industries />
        <FoundingNote />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
