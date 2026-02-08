import type { Config } from "prismic-ts-codegen";

const config: Config = {
  output: "./prismic-next/prismicio-types.d.ts",
  models: [
    "./prismic-next/customtypes/**/index.json",
    "./prismic-next/src/slices/**/model.json",
  ],
};

export default config;