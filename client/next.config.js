const webpack = require("webpack");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withImages = require("next-images");
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "user-images.githubusercontent.com",
      "images.unsplash.com",
      "icons.iconarchive.com",
      "fallinasia.com",
      "api.fallinasia.com",
      "img.icons8.com",
      "fall-in-asia.s3.ap-northeast-2.amazonaws.com",
    ],
  },
  compress: true,
  optimization: {
    minimize: true,
  },
  webpack(config) {
    const prod = process.env.NODE_ENV === "production";
    const plugins = [...config.plugins];
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval",
      plugins: plugins,
    };
  },
};

module.exports = withPlugins([[withImages], [withBundleAnalyzer]], nextConfig);
