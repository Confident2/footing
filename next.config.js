/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "*",
      },
    ],
  },
};

module.exports = nextTranslate({
  ...nextConfig,
});
const conf = nextTranslate(nextConfig);

conf.i18n = undefined;

module.exports = conf;
