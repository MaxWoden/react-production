import { BuildOptions } from "./../types/config";

export function buildBabelLoader(options: BuildOptions) {
  const { isDev, paths } = options;

  return {
    test: /\.(js|jsx|tsx)$/,
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
        ].filter(Boolean),
      },
    },
  };
}
