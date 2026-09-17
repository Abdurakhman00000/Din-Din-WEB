import { SITE } from "@/constants/site";
import Link from "next/link";

/** Footer — контакты, соцсети и юридические ссылки. */
export function Footer() {
  return (
    <footer
      id="contacts"
      className="border-line border-t bg-white py-12 md:py-16"
    >
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-brand text-2xl font-semibold tracking-tight">
            {SITE.name}
          </p>
          <p className="text-muted mt-3 max-w-xs text-sm leading-relaxed">
            Собственная кухня и доставка еды, которой можно доверять.
          </p>
        </div>

        <div>
          <h3 className="text-foreground text-sm font-semibold tracking-wide uppercase">
            Контакты
          </h3>
          <ul className="text-muted mt-4 space-y-2 text-sm">
            <li>
              <a
                href="mailto:help@teyva.us"
                className="hover:text-brand transition-colors"
              >
                help@teyva.us
              </a>
            </li>
            <li>
              <a
                href="tel:+996508181205"
                className="hover:text-brand transition-colors"
              >
                +996 508 181 205
              </a>
            </li>
          </ul>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="text-foreground text-sm font-semibold tracking-wide uppercase">
              Социальные сети
            </h3>
            <ul className="text-muted mt-4 space-y-2 text-sm">
              <li>
                <span className="cursor-default">Instagram</span>
              </li>
              <li>
                <span className="cursor-default">Telegram</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground text-sm font-semibold tracking-wide uppercase">
              Документы
            </h3>
            <ul className="text-muted mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-brand transition-colors"
                >
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link
                  href="/account-deletion"
                  className="hover:text-brand transition-colors"
                >
                  Удаление аккаунта
                </Link>
              </li>
              <li>
                <span className="cursor-default">Условия использования</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-page border-line mt-10 border-t pt-6">
        <p className="text-muted text-xs">
          © {new Date().getFullYear()} {SITE.name}. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
