import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Din Din",
  description: "Политика конфиденциальности Din Din",
};

/** Страница политики конфиденциальности (контент будет добавлен позже). */
export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container-page max-w-3xl py-16 md:py-24">
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            Документы
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
            Политика конфиденциальности
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Полный текст политики конфиденциальности появится здесь позже.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex text-sm font-semibold text-brand transition-opacity hover:opacity-80"
          >
            ← На главную
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
