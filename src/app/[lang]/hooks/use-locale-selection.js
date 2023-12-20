"use client";

import useTranslation from "next-translate/useTranslation";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";

const i18n = import("../../../../i18n.json").then((m) => m.default);

export const useLocaleSelector = () => {
  const pathName = usePathname();
  const [isListOpen, setIsListOpen] = useState(false);
  const { t, lang } = useTranslation("common");

  const persistLocaleCookie = () => {
    if (typeof window === "undefined") {
      return;
    }
    const date = new Date();
    const expireMs = 100 * 24 * 60 * 60 * 1000; // 100 days
    date.setTime(date.getTime() + expireMs);
    document.cookie = `NEXT_LOCALE=${lang};expires=${date.toUTCString()};path=/`;
  };

  const redirectedPathName = (locale) => {
    if (!pathName) {
      return "/";
    }
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const allLocales = use(i18n);

  useEffect(persistLocaleCookie, [lang]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const targetParentClasses = event?.target?.parentNode?.classList;

      const targetClasses = event?.target?.classList;
      if (
        !(
          (targetParentClasses &&
            targetParentClasses.contains("locale-option")) ||
          (targetClasses && targetClasses?.contains("locale-option"))
        )
      ) {
        setIsListOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isListOpen,
    setIsListOpen,
    t,
    lang: lang,
    allLocales,
    redirectedPathName,
  };
};
