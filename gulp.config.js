module.exports = {
    // appConfig: JSON.parse(JSON.stringify(config)),

    dest: "./dist",

    src: {
        html: "./src/index.pug",
        styles: "./src/styles.styl",
        // sitemap: "./src/sitemap.xml",
        // main_js: "./src/main.jsx",
        // js: ["./src/**/*.js", "./src/**/*.jsx"],
        assets: [
            // "./src/assets/icons/**/*",
            // "./darch/assets/**/*"
        ],
        images: [
            "./src/assets/images/**/*",
            // "./src/assets/images/favicon.png",
            // "./src/assets/images/logo_400x88.png",
        ],
        // i18n: ["./src/assets/i18n/**/*"]
    },

    vendor: {
        css: [
            "./node_modules/uikit/dist/css/uikit.min.css"
        ],
        js: [
            "./node_modules/jquery/dist/jquery.min.js",
            "./node_modules/uikit/dist/js/uikit.min.js",
            "./node_modules/uikit/dist/js/uikit-icons.min.js",
        ]
    }
};
