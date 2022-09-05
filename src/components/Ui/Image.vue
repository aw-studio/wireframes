<template>
    <div
        class="relative"
        :class="{
            'overflow-hidden': !overflow,
        }"
    >
        <img
            :src="thumb"
            class="max-w-full max-h-full lazyload lazyload-animation"
            :class="{
                'object-cover h-full w-full': cover,
                'object-contain h-auto': !cover,
            }"
            data-sizes="auto"
            :data-srcset="srcset"
            :srcset="srcset"
            :alt="image?.alt ?? alt"
            :title="image?.title ?? title"
        />
    </div>
</template>

<script lang="ts" setup>
import { Image } from '@/types';
import 'lazysizes';
import { computed, PropType } from 'vue';

const props = defineProps({
    image: {
        type: Object as PropType<Image>,
        required: true,
    },
    sizes: {
        type: Array as PropType<Number[]>,
        default: () => {
            return [10, 300, 500, 900, 1400];
        },
    },
    cover: {
        type: Boolean,
        default: true,
    },
    overflow: {
        type: Boolean,
        default: false,
    },
    alt: {
        type: String,
    },
    title: {
        type: String,
    },
});

const thumb = computed(() => {
    let w = Math.min.apply(Math, props.sizes as number[]);
    return `${props.image?.url}?w=${w}`;
});

const srcset = computed(() => {
    let srcset = '';
    props.sizes.forEach(size => {
        srcset += `${props.image?.url}?w=${size} ${size}w, `;
    });
    return srcset;
});
</script>

<style>
.lazyload,
.lazyloading {
    filter: blur(20px);
}
.lazyloaded {
    filter: blur(0px);
}
.lazyload-animation {
    transition: 0.25s filter ease;
}
</style>
