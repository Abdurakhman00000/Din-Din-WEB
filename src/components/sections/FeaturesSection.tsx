import { Reveal } from "@/components/ui/Reveal";
import type { ReactNode } from "react";

const FEATURES: {
  title: string;
  text: string;
  icon: ReactNode;
}[] = [
  {
    title: "Удобное меню",
    text: "Категории и быстрый доступ к любимым блюдам.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path
          d="M4 7h16M4 12h16M4 17h10"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Просмотр блюд",
    text: "Понятные карточки с акцентом на свежесть и халяль.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path
          d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m4.5 15.5 4.2-4.2a1.5 1.5 0 0 1 2.1 0L16 16.5M14 12.5l1.2-1.2a1.5 1.5 0 0 1 2.1 0l2.2 2.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Заказ еды",
    text: "Оформление заказа в один тап — без лишних шагов.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path
          d="M8 8h11l-1.2 7.2a2 2 0 0 1-2 1.7H10a2 2 0 0 1-2-1.6L7 5H4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="19" r="1.2" fill="currentColor" />
        <circle cx="16.5" cy="19" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Планирование заказа",
    text: "Выберите время заранее и получите еду к нужному моменту.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <rect
          x="3.75"
          y="5"
          width="16.5"
          height="15"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8 3.5v3M16 3.5v3M3.75 9.5h16.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Отслеживание заказа",
    text: "Следите за статусом от кухни до вашей двери.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path
          d="M12 21s6-4.4 6-10a6 6 0 1 0-12 0c0 5.6 6 10 6 10Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
];

/** Возможности приложения — временные карточки без мокапов. */
export function FeaturesSection() {
  return (
    <section id="features" className="overflow-hidden py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-brand uppercase">
              Возможности
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl md:text-[2.75rem]">
              Приложение, в котором всё под контролем
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              От меню до доставки — всё в одном приложении Din Din.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 xl:grid-cols-5">
          {FEATURES.map((feature, index) => (
            <Reveal
              key={feature.title}
              delayClassName={`reveal-delay-${(index % 4) + 1}`}
            >
              <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-line bg-gradient-to-br from-white via-white to-brand-mist/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_20px_44px_rgba(18,40,28,0.08)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand/5 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="relative text-lg font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {feature.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
