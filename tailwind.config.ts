import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                oswald: ["Oswald", "sans-serif"],
                old_standard: ["Old Standard TT", "serif"],
            },
            colors: {
                "primary-200": "#F0D0B3",
                "primary-400": "#DBB690",
                "primary-600": "#A68660",
                "primary-700": "#9B7856",
                "heading-black": "#2C2217",
                "subheading-black": "#222222",
                "paragraph-grey": "#BABABA",
                "text-black": "#646464",
                "bg-primary": "#FFFFFF",
                "bg-secondary": "#fffcf9",
                "bg-tertiary": "#fefbf7",
                "border-btn-primary": "#CACACA",
            },
        },
    },
    plugins: [],
} satisfies Config;
