import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    step: "01",
    title: "Выберите блюдо",
    text: "Откройте меню и найдите то, что хочется прямо сейчас.",
  },
  {
    step: "02",
    title: "Оформите заказ",
    text: "Укажите адрес, время и детали — всё за пару касаний.",
  },
  {
    step: "03",
    title: "Мы приготовим",
    text: "Собственная кухня Din Din готовит свежо и аккуратно.",
  },
  {
    step: "04",
    title: "Курьер доставит",
    text: "Собственная доставка привезёт заказ вовремя к двери.",
  },
] as const;

/** How It Works — простой путь пользователя от заказа до доставки. */
export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-brand uppercase">
              Как это работает
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl md:text-[2.75rem]">
              Четыре простых шага
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          <div
            aria-hidden
            className="pointer-events-none absolute top-[2.35rem] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-brand/25 to-transparent lg:block"
          />

          {STEPS.map((item, index) => (
            <Reveal
              key={item.step}
              delayClassName={`reveal-delay-${(index % 4) + 1}`}
            >
              <article className="relative h-full rounded-[1.35rem] bg-brand-mist/70 p-6 transition-transform duration-300 hover:-translate-y-1">
                <span className="font-display text-4xl font-semibold tracking-tight text-brand/25">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
