import type { Metadata } from "next";
import "../globals.css";
import MainLayout from "../../components/Layout/MainLayout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Mffais",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <MainLayout>{children}</MainLayout>
    </NextIntlClientProvider>
  );
}
