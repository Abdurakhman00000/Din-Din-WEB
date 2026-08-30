import { SITE } from "@/constants/site";
import Link from "next/link";

/** Footer — контакты, соцсети и юридические ссылки. */
export function Footer() {
  return (
    <footer id="contacts" className="border-t border-line bg-white py-12 md:py-16">
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-brand">
            {SITE.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Собственная кухня и доставка еды, которой можно доверять.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
            Контакты
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a
                href="mailto:help@teyva.us"
                className="transition-colors hover:text-brand"
              >
                help@teyva.us
              </a>
            </li>
            <li>
              <a
                href="tel:+996559708515"
                className="transition-colors hover:text-brand"
              >
                +996 559 70 85 15
              </a>
            </li>
          </ul>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Социальные сети
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <span className="cursor-default">Instagram</span>
              </li>
              <li>
                <span className="cursor-default">Telegram</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Документы
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-brand"
                >
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <span className="cursor-default">Условия использования</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-line pt-6">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {SITE.name}. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
