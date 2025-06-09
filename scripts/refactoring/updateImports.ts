import { Project } from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const isAbsolute = (value: string) => {
  const layers = ["app", "pages", "widgets", "features", "entities", "shared"];

  return layers.some((layer) => value.startsWith(layer));
};

const files = project.getSourceFiles();

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
  });

  project.save();
});
