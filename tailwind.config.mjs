/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: '#E60033', // Araishu (洗朱) inspired
                    light: '#FF3366',
                    dark: '#B30027',
                },
                navy: {
                    DEFAULT: '#2C3A4B', // Shionando (深納戸) inspired
                    light: '#4A5D73',
                    dark: '#1A2430',
                },
                cream: '#F8F9FA',
                'light-gray': '#EEF0F2',
                kinari: '#F9F8F1', // Kinari (生成り)
                shionando: '#2C3A4B',
                araishu: '#E60033',
            },
            fontFamily: {
                sans: ['Noto Sans JP', 'sans-serif'],
                display: ['Zen Old Mincho', 'serif'],
                serif: ['Zen Old Mincho', 'serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.4s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'sakura-fall': 'sakuraFall 8s linear infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                sakuraFall: {
                    '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '1' },
                    '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
                },
            },
            boxShadow: {
                card: '0 4px 20px rgba(0,0,0,0.08)',
                'card-hover': '0 12px 40px rgba(0,0,0,0.15)',
            },
        },
    },
    plugins: [],
};
