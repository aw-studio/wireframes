<template>
    <component
        :is="tag"
        class="inline-flex items-center justify-center text-xs font-medium transition-colors border-b focus:ring-4 focus:ring-opacity-30 focus:ring-offset-4 focus:ring-primary text-primary hover:text-primary border-primary hover:border-primary"
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
});

const tag = 'href' in attrs ? (props.external ? 'a' : Link) : 'button';
</script>
