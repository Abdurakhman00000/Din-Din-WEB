import { Reveal } from "@/components/ui/Reveal";

const ADVANTAGES = [
  {
    title: "Собственная кухня",
    text: "Готовим сами — без чужих ресторанов и случайного качества.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path
          d="M4 20h16M6 20V9l6-4 6 4v11"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 20v-5h5v5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Чистота и контроль",
    text: "Прозрачный процесс и халяль-стандарты на каждом этапе.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path
          d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 12.2 11 14l3.8-3.8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Заказ заранее",
    text: "Планируйте обед или ужин — мы приготовим к нужному времени.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 8v4.2l2.8 1.8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Собственная доставка",
    text: "Курьеры Teyva — предсказуемые сроки и аккуратная подача.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path
          d="M3 7h11v9H3V7Zm11 2h4.2L21 12.2V16h-7V9Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
] as const;

/** Why Teyva — ключевые преимущества бренда. */
export function WhyDinDinSection() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-brand uppercase">
              Почему Teyva
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl md:text-[2.75rem]">
              Больше, чем доставка еды
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {ADVANTAGES.map((item, index) => (
            <Reveal
              key={item.title}
              delayClassName={`reveal-delay-${(index % 4) + 1}`}
            >
              <article className="group h-full rounded-[1.35rem] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_18px_40px_rgba(18,40,28,0.08)]">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
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
