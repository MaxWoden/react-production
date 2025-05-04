import path from "path";
import webpack from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    public: "",
    src: path.resolve(__dirname, "..", "..", "src"),
    locales: path.resolve(__dirname, "..", "..", "public", "locales"),
    buildLocales: path.resolve(__dirname, "..", "", "public", "locales"),
  };

  config.resolve = {
    modules: [paths.src],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "..", "..", "src"),
    },
  };

  config.module = {
    rules: [
      buildCssLoader(true),
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  };

  config.plugins = [
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify("http://localhost:8000"),
      __PROJECT__: JSON.stringify("storybook"),
    }),
  ];

  const imageRule = config.module!.rules!.find((rule) => {
    const test = (rule as { test: RegExp }).test;

    if (!test) {
      return false;
    }

    return test.test(".svg");
  }) as { [key: string]: any };

  imageRule.exclude = /\.svg$/;

  return config;
};
