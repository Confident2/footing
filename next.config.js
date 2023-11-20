/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

const nextConfig = {
  images: {
    domains: ["images.pexels.com", "plus.unsplash.com", "images.unsplash.com"],
  },
};

module.exports = nextTranslate({
  ...nextConfig,
});
const conf = nextTranslate(nextConfig);

conf.i18n = undefined;

module.exports = conf;
