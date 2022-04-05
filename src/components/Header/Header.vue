<template>
    <header
        :class="{ '-translate-y-[90px] lg:-translate-y-[189px]': !showNavbar }"
        class="fixed z-40 top-0 transition-transform duration-200 left-0 w-screen h-[90px] lg:h-[189px] bg-secondary-100 text-primary"
    >
        <div class="container flex items-center justify-between w-full h-full">
            <Logo />
            <NavigationDesktop
                class="hidden lg:flex"
                :navigation="navigation"
            />
            <NavigationMobile class="lg:hidden" :navigation="navigation" />
        </div>
    </header>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import Logo from './Logo.vue';
import NavigationDesktop from './NavigationDesktop.vue';
import NavigationMobile from './NavigationMobile.vue';

const navigation = [
    {
        name: 'Test 1',
        link: '/',
        children: [
            {
                name: 'Child 1 lorem ipsum dolor',
                link: '/',
                children: [
                    {
                        name: 'Sub Child 1',
                        link: '/',
                        children: null,
                    },
                    {
                        name: 'Sub Child 2',
                        link: '/',
                        children: null,
                    },
                ],
            },
            {
                name: 'Child 2',
                link: '/',
                children: [
                    {
                        name: 'Sub Child 1',
                        link: '/',
                        children: null,
                    },
                    {
                        name: 'Sub Child 2',
                        link: '/',
                        children: null,
                    },
                ],
            },
        ],
    },
    {
        name: 'Test 2',
        link: '/',
        children: null,
    },
    {
        name: 'Test 3',
        link: '/',
        children: [
            {
                name: 'Child 1 lorem ipsum dolor',
                link: '/',
                children: [
                    {
                        name: 'Sub Child 1',
                        link: '/',
                        children: null,
                    },
                    {
                        name: 'Sub Child 2',
                        link: '/',
                        children: null,
                    },
                ],
            },
            {
                name: 'Child 2',
                link: '/',
                children: [
                    {
                        name: 'Sub Child 1',
                        link: '/',
                        children: null,
                    },
                    {
                        name: 'Sub Child 2',
                        link: '/',
                        children: null,
                    },
                ],
            },
        ],
    },
    {
        name: 'Test 4',
        link: '/',
        children: null,
    },
    {
        name: 'Test 5',
        link: '/',
        children: [
            {
                name: 'Child 1 lorem ipsum dolor',
                link: '/',
                children: null,
            },
            {
                name: 'Child 2',
                link: '/',
                children: null,
            },
        ],
    },
];

const showNavbar = ref(true);
const lastScrollPosition = ref(0);

const onScroll = () => {
    const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
    if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 100) {
        return;
    }
    // Here we determine whether we need to show or hide the navbar
    showNavbar.value = currentScrollPosition < lastScrollPosition.value;
    // Set the current scroll position as the last scroll position
    lastScrollPosition.value = currentScrollPosition;
};

onMounted(() => {
    window.addEventListener('scroll', onScroll);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
});
</script>
