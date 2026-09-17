import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { SITE } from "@/constants/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Удаление аккаунта и данных",
  description: `Как удалить аккаунт в приложении ${SITE.name}`,
  openGraph: {
    title: `Удаление аккаунта и данных | ${SITE.name}`,
    description: `Как удалить аккаунт в приложении ${SITE.name}`,
  },
};

const COMPANY = "ОсОО «Азия Миг»";
const EMAIL = "help@teyva.us";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>
      <div className="text-muted mt-3 space-y-3 text-sm leading-relaxed sm:text-base">
        {children}
      </div>
    </section>
  );
}

/** Удаление аккаунта и данных — требование Google Play/App Store: страница
 * должна работать без установки приложения. */
export default function AccountDeletionPage() {
  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container-page max-w-3xl py-16 md:py-24">
          <p className="text-brand mb-3 text-sm font-semibold tracking-[0.16em] uppercase">
            Документы
          </p>
          <h1 className="font-display text-foreground text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Удаление аккаунта и данных
          </h1>
          <p className="text-muted mt-5 text-sm leading-relaxed sm:text-base">
            Эта страница объясняет, как удалить аккаунт в приложении {SITE.name}{" "}
            и связанные с ним данные — как из самого приложения, так и по
            запросу без его установки.
          </p>

          <Section title="Способ 1. Удаление из приложения">
            <ol className="list-decimal space-y-1 pl-5">
              <li>Откройте приложение {SITE.name}.</li>
              <li>Перейдите в раздел «Профиль».</li>
              <li>Выберите «Удалить аккаунт».</li>
              <li>Подтвердите удаление.</li>
            </ol>
          </Section>

          <Section title="Способ 2. Удаление по запросу (без приложения)">
            <p>
              Отправьте письмо на{" "}
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  "Удаление аккаунта",
                )}`}
                className="text-brand font-semibold hover:opacity-80"
              >
                {EMAIL}
              </a>{" "}
              со следующими данными:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Тема письма: «Удаление аккаунта»</li>
              <li>
                Номер телефона, на который зарегистрирован аккаунт (в формате
                +996 XXX XXX XXX)
              </li>
              <li>
                Текст: «Прошу удалить мой аккаунт и связанные данные в
                приложении {SITE.name}»
              </li>
            </ul>
            <p>
              Мы можем связаться с вами по указанному номеру, чтобы подтвердить,
              что запрос исходит от владельца аккаунта. После подтверждения
              аккаунт удаляется.
            </p>
          </Section>

          <Section title="Что удаляется">
            <p>
              Номер телефона и учётные данные, имя и данные профиля, сохранённые
              адреса доставки, токены push-уведомлений, содержание обращений в
              поддержку (по истечении срока хранения), привязка истории заказов
              к вашей личности.
            </p>
          </Section>

          <Section title="Что сохраняется и почему">
            <p>
              Документы и записи по совершённым заказам и платежам (в
              обезличенном по возможности виде) — 5 лет, в соответствии с
              требованиями законодательства Кыргызской Республики о
              бухгалтерском учёте и налогообложении. Данные, необходимые для
              разрешения незавершённого спора — до его разрешения. Эти данные не
              используются ни для каких иных целей.
            </p>
          </Section>

          <Section title="Сроки">
            <p>
              Запрос из приложения обрабатывается автоматически; данные
              удаляются в срок до 30 дней. Запрос по электронной почте
              обрабатывается в срок до 30 дней с момента подтверждения владельца
              аккаунта.
            </p>
          </Section>

          <Section title="Важно">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Удаление аккаунта необратимо. История заказов и адреса
                восстановлению не подлежат.
              </li>
              <li>
                Нельзя удалить аккаунт при наличии активного (неисполненного)
                заказа — дождитесь его завершения или обратитесь в поддержку.
              </li>
              <li>
                После удаления вы сможете зарегистрироваться заново на тот же
                номер как новый пользователь.
              </li>
            </ul>
          </Section>

          <Section title="Контакты">
            <p>
              {EMAIL}
              <br />
              {COMPANY}, Кыргызская Республика, г. Бишкек, 5 мкр, д. 57, кв. 27
              <br />
              Телефон: +996 508 181 205
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
