import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = [
  "bn",
  "bg",
  "ca",
  "zh",
  "chi",
  "cs",
  "da",
  "nl",
  "fi",
  "fr",
  "de",
  "el",
  "en",
  "hi",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "lt",
  "ms",
  "mr",
  "no",
  "pl",
  "pt-br",
  "ro",
  "ru",
  "sr",
  "sk",
  "es-la",
  "es",
  "sv",
  "tl",
  "th",
  "tr",
  "uk",
  "vi",
];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: true,
});
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
