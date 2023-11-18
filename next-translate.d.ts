// Assuming you have TypeScript support in your project, you can use this JavaScript code.

const { Paths, I18n, Translate } = require("next-translate");

// Define interface for translation keys
const commonPaths = require("./locales/en/common.json");
const homePaths = require("./locales/en/home.json");

/**
 * @type {TranslationsKeys}
 */
const translationsKeys = {
  common: Paths(commonPaths),
  home: Paths(homePaths),
};

/**
 * @template {keyof TranslationsKeys} Namespace
 * @typedef {Omit<I18n, 't'> & {
 *   t: {
 *     (key: TranslationsKeys[Namespace], ...rest: Tail<Parameters<Translate>>): string;
 *     <T extends string>(template: TemplateStringsArray): string;
 *   };
 * }} TypeSafeTranslate
 */

/**
 * @module next-translate/useTranslation
 * @param {keyof TranslationsKeys} namespace
 * @returns {TypeSafeTranslate<Namespace>}
 */
function useTranslation(namespace) {
  return {
    ...I18n,
    t: function (key, ...rest) {
      return Translate(key, ...rest);
    },
  };
}

module.exports = useTranslation;
