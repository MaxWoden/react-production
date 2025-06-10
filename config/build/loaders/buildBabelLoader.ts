import babelRemovePlugin from "../babel/babelRemovePropsPlugin";
import { BuildOptions } from "./../types/config";

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}

export function buildBabelLoader(props: BuildBabelLoaderProps) {
  const { isDev, isTsx } = props;

  const isProd = !isDev;

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        cacheDirectory: true,
        plugins: [
          isDev && require.resolve("react-refresh/babel"),
          [
            "@babel/plugin-transform-typescript",
            {
              isTsx,
            },
          ],
          "@babel/plugin-transform-runtime",
          isTsx &&
            isProd && [
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
