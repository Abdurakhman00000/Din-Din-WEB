import { Reveal } from "@/components/ui/Reveal";

/** Финальный CTA — доверительный закрывающий блок без ссылок на сторы. */
export function FinalCtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-center text-white shadow-[0_28px_60px_rgba(30,122,74,0.28)] sm:px-10 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -bottom-20 h-56 w-56 rounded-full bg-brand-dark/40 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-[2.6rem]">
                Teyva — еда, которой можно доверять
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Собственная кухня, прозрачный процесс приготовления и доставка
                до вашей двери.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
