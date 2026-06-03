import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Palette from "@/components/sections/Palette";
import Typography from "@/components/sections/Typography";
import Components from "@/components/sections/Components";
import Tokens from "@/components/sections/Tokens";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Palette />
        <Typography />
        <Components />
        <Tokens />
      </main>
      <footer className="border-t border-border py-10 text-center text-sm text-text-muted">
        prism — built with Next.js, TypeScript &amp; Tailwind.
      </footer>
    </>
  );
}
