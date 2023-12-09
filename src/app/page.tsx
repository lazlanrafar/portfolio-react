import { FadeIn } from "@/components/atoms/fade-in";
import { AnimatedName } from "@/components/molecules/animated-name";
import { siteConfig } from "@/constants";

export default function Home() {
  return (
    <section className="h-full flex items-center">
      <FadeIn>
        <div className="space-y-4">
          <header className="relative">
            <p className="text-muted-foreground text-lg font-extralight">
              Hi all. I am
            </p>
            <AnimatedName />
            <h2 className="text-muted-foreground md:text-2xl sm:text-xl text-base">
              <span className="animate-pulse">&gt; </span>
              Software developer
            </h2>

            <div className="absolute w-full h-1/2 bg-muted-foreground/10 blur-2xl top-0 left-0 -z-10 rounded-full animate-pulse" />
          </header>

          <div className="space-y-2 sm:text-sm text-xs">
            <p className="text-muted-foreground">{`// you can also see it on my Github page`}</p>
            <p className="text-muted-foreground">
              <span className="text-purple">const</span>{" "}
              <span className="text-green">githubLink</span> ={" "}
              <a
                target="_blank"
                href={siteConfig.links.github}
                className="text-light-brown hover:underline hover:text-foreground transition-colors"
                data-umami-event="GitHub link"
              >
                &apos;{siteConfig.links.github}&apos;
              </a>
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
