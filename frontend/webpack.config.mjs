import path from "path"

export default {
    entry: ["./src/index.mjs"],
    output: {
        filename: "webpack_bundle.mjs",
        path: path.resolve("./public/")
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use:
                {
                    loader: "babel-loader",
                    options:
                    {
                        presets: ["@babel/preset-react"]
                    }
                }
            }
        ]
    },
    devtool: "source-map",
    cache: false,
    experiments: {
        topLevelAwait: true
    }
}