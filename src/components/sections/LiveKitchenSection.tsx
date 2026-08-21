import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

/** Live Kitchen — философия прозрачной кухни Din Din. */
export function LiveKitchenSection() {
  return (
    <section id="live-kitchen" className="section-soft py-20 md:py-28">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="max-w-xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
              <span className="live-dot inline-block h-2 w-2 rounded-full bg-white" />
              Live
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl md:text-[2.75rem]">
              Мы не скрываем, как готовим
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Следите за нашей кухней в прямом эфире и убедитесь в чистоте и
              качестве приготовления.
            </p>
          </div>
        </Reveal>

        <Reveal delayClassName="reveal-delay-2">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-gradient-to-br from-brand-soft via-white to-brand-mist p-6 shadow-[0_24px_60px_rgba(18,40,28,0.1)] sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-brand/10 blur-3xl"
            />
            <div className="relative flex flex-col items-center">
              <div className="absolute top-0 left-0 z-10 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  <span className="live-dot h-1.5 w-1.5 rounded-full bg-white" />
                  LIVE
                </span>
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
                  Кухня Din Din
                </span>
              </div>

              <div className="phone-shadow relative mt-8 w-[min(100%,280px)] sm:w-[min(100%,320px)]">
                <Image
                  src="/images/din-din-phone.png"
                  alt="Прямой эфир кухни Din Din в приложении"
                  width={425}
                  height={879}
                  unoptimized
                  className="h-auto w-full bg-transparent select-none"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
