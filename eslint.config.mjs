import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint is effectively disabled by setting all rules to "off"
const eslintConfig = [
  {
    ignores: ["**/*"], // Ignore all files
  },
];

export default eslintConfig;
