export default {
    plugins: {
        "@csstools/postcss-global-data": {
            files: ["src/styles/global/media-queries.css"],
        },
        "postcss-import": {},
        "postcss-custom-media": {},
    },
    autoprefixer: {},
    cssnano: {},
};
