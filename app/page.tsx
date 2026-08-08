"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { links } from "@/app/data/links";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center px-4 pt-16 pb-8">

      {/* Floating theme switcher in the top-right corner. */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      {/* Profile/logo area. */}
      <div className="mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer animate-[popIn_0.9s_ease-out]">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.08)] bg-zinc-950 flex items-center justify-center">
          <Image
            src="/ays-logo.jpg"
            alt="AysArt Logo"
            width={112}
            height={112}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-1 tracking-tight text-foreground/95">AysArt</h1>
      <p className="text-muted-foreground text-base mb-10 font-medium text-center max-w-75">
        Yirmili yaşlarda, kendi halinde; biraz çizer, biraz sudoku delisi, biraz suç düşkünü birisi 🕵🏻‍♀️
      </p>

      {/* Render the social link buttons. */}
      <div className="flex flex-col gap-4 w-full max-w-95">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Button
              key={link.id}
              asChild
              className={`min-h-14 rounded-xl bg-white/5 backdrop-blur-sm border ${link.borderColor} text-foreground/90 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 w-full px-6 ${link.hoverBorder} ${link.hoverShadow}`}
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="relative flex items-center w-full">
                <Icon className={`absolute left-6 w-5 h-5 mr-3 ${link.iconColor}`} />
                <span className="text-base font-medium whitespace-normal">{link.title}</span>
              </a>
            </Button>
          );
        })}
      </div>

      <footer className="mt-auto pt-12 text-xs text-muted-foreground">
        © {new Date().getFullYear()} AysArt
      </footer>
    </main>
  );
}