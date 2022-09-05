<template>
    <component
        :is="tag"
        class="font-semibold inline-flex items-center focus:outline-none focus:ring-4 focus:ring-primary-200 justify-center py-2.5 border-2"
        :class="{
            'px-5': !square,
            'px-2.5': square,
            'pointer-events-none border-secondary-100': disabled,
            'text-white border-secondary bg-secondary': !outline,
            'text-secondary border-secondary bg-transparent': outline,
        }"
        :target="target"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';

const attrs = useAttrs();
const props = defineProps({
    external: {
        type: Boolean,
        default: false,
    },
    target: {
        type: String,
        default: null,
    },
    square: {
        type: Boolean,
        default: false,
    },
    outline: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const tag = 'href' in attrs ? (props.external ? 'a' : Link) : 'button';
</script>
