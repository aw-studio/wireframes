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
            success: 'var(--color-success)',
            warning: 'var(--color-warning)',
            danger: 'var(--color-danger)',
            section: 'var(--color-section)',
            primary: {
                DEFAULT: 'var(--color-primary-default)',
                100: 'var(--color-primary-100)',
                200: 'var(--color-primary-200)',
                300: 'var(--color-primary-300)',
                400: 'var(--color-primary-400)',
                500: 'var(--color-primary-500)',
                600: 'var(--color-primary-600)',
                700: 'var(--color-primary-700)',
                800: 'var(--color-primary-800)',
                900: 'var(--color-primary-900)',
            },
            secondary: {
                DEFAULT: 'var(--color-secondary-default)',
                100: 'var(--color-secondary-100)',
                200: 'var(--color-secondary-200)',
                300: 'var(--color-secondary-300)',
                400: 'var(--color-secondary-400)',
                500: 'var(--color-secondary-500)',
                600: 'var(--color-secondary-600)',
                700: 'var(--color-secondary-700)',
                800: 'var(--color-secondary-800)',
                900: 'var(--color-secondary-900)',
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
                    maxWidth: '700px',
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
