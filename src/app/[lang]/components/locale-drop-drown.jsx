"use client";

import { useLocaleSelector } from "../hooks/use-locale-selection";
import DEIcon from "./icons/country/de";
import GBIcon from "./icons/country/gb";
import NLIcon from "./icons/country/nl";

import classNames from "classnames";
import Link from "next/link";

const localesData = [
  { code: "en-GB", flag: <GBIcon /> },
  { code: "nl-NL", flag: <NLIcon /> },
  { code: "de-DE", flag: <DEIcon /> },
];

export default function HeaderLocaleSelection() {
  const { isListOpen, setIsListOpen, t, lang, allLocales, redirectedPathName } =
    useLocaleSelector();

  const onSetListOpen = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <div className="rounded-1 flex max-lg:w-full items-center p-1 z-50">
      <div className="inset-y-0 right-0 flex items-center ">
        <div className="relative inline-block text-left">
          <div className="rounded-md shadow-sm ml-16">
            <button
              type="button"
              className="rounded-xs   inline-flex w-full justify-center bg-white px-2 py-2 text-sm font-medium text-slate-600 hover:bg-gray-50 focus:outline-none focus:ring-0 "
              id="locale-selector-button"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={onSetListOpen}
              data-testid="locale-selector-button"
            >
              {isListOpen
                ? null
                : localesData.find((locale) => locale.code === lang)?.flag}
              <span
                className={classNames(
                  {
                    "sr-only": !isListOpen, // Use sr-only class for screen readers to hide the text when the dropdown is not open
                  },
                  "ml-1"
                )}
                data-testid="locale-text"
              >
                {t(lang)}
              </span>
            </button>
          </div>

          <div
            className={classNames(
              {
                hidden: !isListOpen,
              },
              "rounded-xs absolute left-0 mt-2 w- origin-top-right bg-white ring-0"
            )}
            role="menu"
            id="locale-selector"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            data-testid="locale-selector"
          >
            <div className="py-1" data-testid="available-locales">
              {allLocales.locales.map((localeCode) => {
                const locale = localesData.find((l) => l.code === localeCode);
                if (!locale) {
                  return null;
                }
                return (
                  <Link
                    key={locale.code}
                    href={redirectedPathName(locale.code)}
                    data-testid={`locale-option-${locale.code}`}
                    className={classNames(
                      {
                        "bg-gray-100 text-wood-2": lang === locale.code,
                        "text-gray-700 hover:bg-blend-gray-1":
                          lang !== locale.code,
                      },
                      "flex w-full flex-row px-4 py-2 text-left text-sm",
                      "locale-option"
                    )}
                  >
                    {locale.flag}
                    <div className="ml-2" data-testid="locale-code">
                      {t(locale.code)}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
