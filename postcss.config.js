module.exports = {
    plugins: [
      require("autoprefixer")(
        {
            overrideBrowserslist: ["last 2 versions"]
        }
      ),
      require("cssnano")(
        {
            preset: [
                "default", {
                    discardComments: {
                        removeAll: true
                    }
                }
            ]
        }
      )
    ]
}