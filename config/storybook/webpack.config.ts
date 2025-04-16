import webpack from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

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

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push(".ts", ".tsx");
  config.module!.rules!.push(buildCssLoader(true));

  config.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(""),
      __PROJECT__: JSON.stringify("storybook"),
    })
  );

  const imageRule = config.module!.rules!.find((rule) => {
    const test = (rule as { test: RegExp }).test;

    if (!test) {
      return false;
    }

    return test.test(".svg");
  }) as { [key: string]: any };

  imageRule.exclude = /\.svg$/;

  config.module!.rules!.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};
