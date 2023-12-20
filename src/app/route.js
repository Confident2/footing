import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

const i18nConfig = () => import("../../i18n.json").then((m) => m.default);

export async function GET(request = NextRequest) {
  // Corrected parameter name from NextRequest to request
  const i18n = await i18nConfig();
  const userPreferredLanguage =
    request.headers.get("accept-language")?.split(",")?.[0] ??
    i18n.defaultLocale;

  if (i18n.locales.length === 1 && i18n.locales[0] === "*") {
    i18n.locales = ["en-GB"];
  }

  const lang = i18n.locales.includes(userPreferredLanguage)
    ? userPreferredLanguage
    : i18n.defaultLocale;

  return redirect(`/${lang}${request.nextUrl.pathname.toLowerCase()}`);
}
