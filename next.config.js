const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins(
    [
        [optimizedImages, {}],
        [withBundleAnalyzer],

        // your other plugins here
    ],
    {
        future: {
            webpack5: true,
        },
    }
);
