<template>
    <div
        class="relative flex flex-shrink-0 pl-8"
        :style="`width: ${slideWidth}%`"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import {
    computed,
    nextTick,
    onBeforeUnmount,
    onMounted,
    PropType,
    ref,
} from 'vue';
import { onResize, isBetween, breakpoints } from './carousel';

interface SlideWidth {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
}

const props = defineProps({
    /**
     * Amount of slides that should be visible at the same time per breakpoint
     */
    slidesInView: {
        type: Object as PropType<SlideWidth>,
        default: () => ({
            sm: 1,
            md: 1,
            lg: 1,
            xl: 1,
            '2xl': 1,
        }),
    },
});

onMounted(() => {
    nextTick(() => {
        window.addEventListener('resize', onResize);
    });
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
});

/**
 * Width of each individual slide according to the breakpoints
 */
const slideWidth = computed(() => {
    if (props.slidesInView.sm && isBetween(0, breakpoints.sm - 1)) {
        return 100 / props.slidesInView.sm;
    }
    if (
        props.slidesInView.md &&
        isBetween(breakpoints.sm, breakpoints.md - 1)
    ) {
        return 100 / props.slidesInView.md;
    }
    if (
        props.slidesInView.lg &&
        isBetween(breakpoints.md, breakpoints.lg - 1)
    ) {
        return 100 / props.slidesInView.lg;
    }
    if (
        props.slidesInView.xl &&
        isBetween(breakpoints.lg, breakpoints.xl - 1)
    ) {
        return 100 / props.slidesInView.xl;
    }
    if (props.slidesInView['2xl'] && isBetween(breakpoints.xl, 5000)) {
        return 100 / props.slidesInView['2xl'];
    }
    return 100;
});
</script>
