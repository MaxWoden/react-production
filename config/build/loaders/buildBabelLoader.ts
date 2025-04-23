import babelRemovePlugin from "../babel/babelRemovePropsPlugin";
import { BuildOptions } from "./../types/config";

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}

export function buildBabelLoader(props: BuildBabelLoaderProps) {
  const { isDev, paths, isTsx } = props;

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          isDev && require.resolve("react-refresh/babel"),
          [
            "i18next-extract",
            {
              locales: ["ru", "en"],
              keyAsDefaultValue: true,
              outputPath: `${paths.public}/locales/{{locale}}/{{ns}}.json`,
            },
          ],
          [
            "@babel/plugin-transform-typescript",
            {
              isTsx,
            },
          ],
          "@babel/plugin-transform-runtime",
          isTsx && [
            babelRemovePlugin(),
            {
              props: ["data-testid"],
            },
          ],
        ].filter(Boolean),
      },
    },
  };
}
