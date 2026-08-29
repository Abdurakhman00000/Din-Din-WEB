import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

/** Live Kitchen — философия прозрачной кухни Teyva. */
export function LiveKitchenSection() {
  return (
    <section id="live-kitchen" className="section-soft py-20 md:py-28">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="max-w-xl">
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
          <div className="phone-shadow relative mx-auto w-[min(100%,200px)] sm:w-[min(100%,220px)] md:w-[min(100%,250px)] lg:ml-auto lg:w-[270px]">
            <Image
              src="/images/teyva-screen-kitchen.png"
              alt="Кухня Teyva в приложении"
              width={536}
              height={1111}
              unoptimized
              className="h-auto w-full bg-transparent select-none"
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 250px, 270px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
