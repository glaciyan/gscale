const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
    [
        [optimizedImages, {}],

        // your other plugins here
    ],
    {
        future: {
            webpack5: true,
        },
    }
);
