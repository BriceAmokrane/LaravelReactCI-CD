import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";

export default [
    {
        files: ["**/*.{js,jsx}"],
        plugins: {
            react,
            "jsx-a11y": jsxA11y,
            "react-hooks": reactHooks
        },
        settings: {
            react: {
                version: "detect"
            }
        },
        env: {
            browser: true,
            es2021: true
        },
        rules: {
            "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
            "react/react-in-jsx-scope": "off"
        },
        languageOptions: {
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    }
];
