const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                md: '40px',
                DEFAULT: '20px',
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: 'white',
            black: 'black',
            success: 'rgb(var(--color-success) / <alpha-value>)',
            warning: 'rgb(var(--color-warning) / <alpha-value>)',
            danger: 'rgb(var(--color-danger) / <alpha-value>)',
            section: 'rgb(var(--color-section) / <alpha-value>)',
            primary: {
                DEFAULT: 'rgb(var(--color-primary-default) / <alpha-value>)',
                100: 'rgb(var(--color-primary-100) / <alpha-value>)',
                200: 'rgb(var(--color-primary-200) / <alpha-value>)',
                300: 'rgb(var(--color-primary-300) / <alpha-value>)',
                400: 'rgb(var(--color-primary-400) / <alpha-value>)',
                500: 'rgb(var(--color-primary-500) / <alpha-value>)',
                600: 'rgb(var(--color-primary-600) / <alpha-value>)',
                700: 'rgb(var(--color-primary-700) / <alpha-value>)',
                800: 'rgb(var(--color-primary-800) / <alpha-value>)',
                900: 'rgb(var(--color-primary-900) / <alpha-value>)',
            },
            secondary: {
                DEFAULT: 'rgb(var(--color-secondary-default) / <alpha-value>)',
                100: 'rgb(var(--color-secondary-100) / <alpha-value>)',
                200: 'rgb(var(--color-secondary-200) / <alpha-value>)',
                300: 'rgb(var(--color-secondary-300) / <alpha-value>)',
                400: 'rgb(var(--color-secondary-400) / <alpha-value>)',
                500: 'rgb(var(--color-secondary-500) / <alpha-value>)',
                600: 'rgb(var(--color-secondary-600) / <alpha-value>)',
                700: 'rgb(var(--color-secondary-700) / <alpha-value>)',
                800: 'rgb(var(--color-secondary-800) / <alpha-value>)',
                900: 'rgb(var(--color-secondary-900) / <alpha-value>)',
            },
        },
        fontSize: {
            xs: ['14px', '20px'],
            sm: ['15px', '25px'],
            base: ['16px', '22px'],
            lg: ['20px', '27px'],
            xl: ['24px', '33px'],
            '2xl': ['32px', '38px'],
        },
        extend: {},
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                body: {
                    '@apply text-secondary-900 text-base': {},
                },
                'h1, h2, h3, h4, p': {
                    maxWidth: '56rem',
                    '@apply mb-8': {},
                },
                'h1, h2, h3, h4': {
                    paddingRight: '10%',
                },
                'p + h1, p + h2, p + h3, p + h4': {
                    '@apply pt-8': {},
                },
                'h1, .h1': {
                    '@apply text-2xl font-semibold': {},
                },
                'h2, .h2': {
                    '@apply text-xl font-semibold': {},
                },
                'h3, .h3': {
                    '@apply text-lg font-semibold': {},
                },
                'h4, .h4': {
                    '@apply text-base font-semibold': {},
                },
                p: {
                    '@apply text-base leading-7 font-light': {},
                },
            });
        }),
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '100%',
                    },
                    '@screen md': {
                        maxWidth: '100%',
                    },
                    '@screen lg': {
                        maxWidth: '100%',
                    },
                    '@screen xl': {
                        maxWidth: '1260px',
                    },
                },
            });
        },
    ],
};
