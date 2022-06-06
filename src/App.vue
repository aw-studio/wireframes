<template>
    <Page :page="page" />
</template>

<script setup lang="ts">
import Page from './Pages/Pages/Dev.vue';
import { Page as TPage } from './types/resources';

const content = [
    {
        type: 'text',
        value: {
            text: 'foo',
        },
    },
];

const template = 'ExampleTemplate';

const attributes = {
    title: 'Hello World',
};

const page: TPage = {
    id: 1,
    attributes: {
        header: {
            url: null,
        },
    },
    content,
    template,
    created_at: '2022',
    update_at: '2022',
};

const images = [
    {
        id: 0,
        original_url:
            'https://images.unsplash.com/photo-1648598200360-d77ba0fff312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: 1,
        original_url:
            'https://images.unsplash.com/photo-1648602884790-4435152a69db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    {
        id: 2,
        original_url:
            'https://images.unsplash.com/photo-1648598200360-d77ba0fff312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: 3,
        original_url:
            'https://images.unsplash.com/photo-1648602884790-4435152a69db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    {
        id: 4,
        original_url:
            'https://images.unsplash.com/photo-1648598200360-d77ba0fff312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: 5,
        original_url:
            'https://images.unsplash.com/photo-1648602884790-4435152a69db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
];

const image = {
    id: 0,
    original_url:
        'https://images.unsplash.com/photo-1648602884790-4435152a69db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
};

const carouselOptionsX = {
    sm: {
        slidesToScroll: 1,
        speed: 6,
        align: 'start',
        containScroll: 'trimSnaps',
    },
    md: {
        slidesToScroll: 1,
        speed: 6,
        align: 'start',
        containScroll: 'trimSnaps',
    },
    lg: {
        slidesToScroll: 2,
        speed: 6,
        align: 'start',
        containScroll: 'trimSnaps',
    },
    xl: {
        slidesToScroll: 3,
        speed: 6,
        align: 'start',
        containScroll: 'trimSnaps',
    },
    '2xl': {
        slidesToScroll: 4,
        speed: 6,
        align: 'start',
        containScroll: 'trimSnaps',
    },
};
</script>
