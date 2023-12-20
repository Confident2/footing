"use client";

import Image from "next/image";
import { navLinks } from "../../../constants";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import HeaderLocaleSelection from "./locale-drop-drown";

const Nav = () => {
  const { t } = useTranslation("common");
  return (
    <header className="padding-x py-8  z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/" legacyBehavior>
          <h1 className="text-2xl font-semibold">{t("title")}</h1>
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {t(`navLinks.${item.label}`)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex max-lg:gap-2 sm:gap-1 text-lg items-center leading-normal font-medium font-montserrat  wide:mr-24">
          <div className="z-50">
            <HeaderLocaleSelection />
          </div>
          <div className="max-lg:hidden">
            <Link href="/login">{t("signIn")}</Link>
            <span> / </span>
            <Link href="/">{t("explore")}</Link>
          </div>
        </div>
        <div className="hidden max-lg:block">
          <Image
            src={"/hamburger.svg"}
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
