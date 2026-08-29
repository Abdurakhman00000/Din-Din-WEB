import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

/** Hero — главный экран с мокапом приложения Teyva. */
export function HeroSection() {
  return (
    <section id="hero" className="hero-glow relative overflow-hidden pt-24 md:pt-28">
      <div className="container-page grid items-center gap-12 pb-16 pt-6 md:grid-cols-12 md:gap-10 md:pb-24 md:pt-10 lg:gap-8">
        <div className="md:col-span-6 lg:col-span-5">
          <Reveal>
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-brand uppercase">
              Teyva
            </p>
            <h1 className="font-display text-[2.35rem] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
              Вкусно. Чисто. Вовремя.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Заказывайте свежие блюда из собственной кухни и следите за
              процессом приготовления прямо в приложении.
            </p>
            <div className="mt-8">
              <a
                href="#why"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(30,122,74,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_16px_36px_rgba(30,122,74,0.34)]"
              >
                Узнать больше
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative md:col-span-6 lg:col-span-7">
          <Reveal
            delayClassName="reveal-delay-2"
            className="relative mx-auto w-full max-w-[420px] md:max-w-none"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(30,122,74,0.18)_0%,rgba(30,122,74,0)_70%)] blur-2xl"
            />
            <div className="phone-shadow animate-float relative mx-auto w-[min(100%,180px)] sm:w-[min(100%,200px)] md:ml-auto md:w-[min(100%,220px)] lg:w-[250px]">
              <Image
                src="/images/teyva-screen-hero.png"
                alt="Мокап мобильного приложения Teyva"
                width={386}
                height={945}
                priority
                unoptimized
                className="h-auto w-full bg-transparent select-none"
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 250px"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
