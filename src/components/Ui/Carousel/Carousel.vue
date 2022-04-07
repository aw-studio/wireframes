<template>
    <div class="relative embla">
        <div
            ref="container"
            class="embla__viewport"
            :class="{ 'overflow-hidden': overflowHidden }"
        >
            <div v-bind="$attrs" class="embla__container">
                <slot></slot>
            </div>
        </div>
        <div
            class="z-20 items-center justify-between hidden gap-6 mt-6 md:flex"
        >
            <Button
                v-if="embla && buttons"
                @click="embla?.scrollPrev()"
                square
                secondary
                :disabled="!prevBtnEnabled"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-8 -5 24 24"
                    width="24"
                    fill="currentColor"
                >
                    <path
                        d="M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z"
                    ></path>
                </svg>
            </Button>
            <div
                v-if="dots && scrollSnaps.length > 1"
                class="flex embla__dots gap-3.5"
            >
                <button
                    v-for="(slide, i) in scrollSnaps"
                    @click="embla?.scrollTo(i)"
                    class="w-3.5 h-3.5 rounded-full embla__dot"
                    :class="{
                        'bg-primary': i === selectedScrollSnap,
                        'bg-primary-200': i !== selectedScrollSnap,
                    }"
                ></button>
            </div>
            <Button
                v-if="embla && buttons"
                @click="embla?.scrollNext()"
                square
                secondary
                :disabled="!nextBtnEnabled"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-8 -5 24 24"
                    width="24"
                    fill="currentColor"
                >
                    <path
                        d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"
                    ></path>
                </svg>
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, Ref, ref, toRef, watch } from 'vue';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '../';
import { isBetween, breakpoints } from './carousel';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    options: {
        type: Object,
        default: () => ({
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
                slidesToScroll: 1,
                speed: 6,
                align: 'start',
                containScroll: 'trimSnaps',
            },
            xl: {
                slidesToScroll: 1,
                speed: 6,
                align: 'start',
                containScroll: 'trimSnaps',
            },
            '2xl': {
                slidesToScroll: 1,
                speed: 6,
                align: 'start',
                containScroll: 'trimSnaps',
            },
        }),
    },
    autoplay: {
        type: Object,
        default: () => ({
            active: false,
            timePerSlide: 5000,
        }),
    },
    buttons: {
        type: Boolean,
        default: true,
    },
    overflowHidden: {
        type: Boolean,
        default: false,
    },
    dots: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: Number,
        default: 0,
    },
});

const embla: Ref<EmblaCarouselType | null> = ref(null);
const scrollSnaps: Ref<number[]> = ref([]);
const selectedScrollSnap = ref(0);
const prevBtnEnabled = ref(false);
const nextBtnEnabled = ref(true);

const container: Ref<HTMLElement | null> = ref(null);

/**
 * when carousel is resized update carousel with dots and scroll to first slide
 */
const onResize = () => {
    embla.value?.reInit(options.value);
    scrollSnaps.value = embla.value?.scrollSnapList() as number[];
    embla.value?.scrollTo(0);
};

/**
 * Function gets called when autoplay propis set to active
 */
const autoplay = Autoplay(
    { delay: props.autoplay.timePerSlide, stopOnInteraction: false },
    (emblaRoot) => emblaRoot.parentElement
);

/**
 * Check weither or not the autoplay function should be added to the carousel plugins
 */
const hasAutoplay = computed(() => {
    if (props.autoplay.active) {
        return [autoplay];
    }
    return [];
});

/**
 * update selected index and modelValue for syncing
 */
const onSelect = () => {
    selectedScrollSnap.value = embla.value.selectedScrollSnap();
    prevBtnEnabled.value = embla.value.canScrollPrev();
    nextBtnEnabled.value = embla.value.canScrollNext();
    emit('update:modelValue', selectedScrollSnap.value);
    embla.value.scrollTo(selectedScrollSnap.value);
};

/**
 * Width of each individual slide according to the breakpoints
 */
const options = computed(() => {
    if (props.options.sm && isBetween(0, breakpoints.sm - 1)) {
        return props.options.sm;
    }
    if (props.options.md && isBetween(breakpoints.sm, breakpoints.md - 1)) {
        return props.options.md;
    }
    if (props.options.lg && isBetween(breakpoints.md, breakpoints.lg - 1)) {
        return props.options.lg;
    }
    if (props.options.xl && isBetween(breakpoints.lg, breakpoints.xl - 1)) {
        return props.options.xl;
    }
    if (props.options['2xl'] && isBetween(breakpoints.xl, 9999)) {
        return props.options['2xl'];
    }
    return props.options.sm;
});

onMounted(() => {
    embla.value = EmblaCarousel(
        container.value,
        options.value,
        hasAutoplay.value
    ) as EmblaCarouselType;
    embla.value.on('select', onSelect);
    embla.value.on('resize', onResize);
    scrollSnaps.value = embla.value.scrollSnapList();
    selectedScrollSnap.value = props.modelValue;
    onSelect();
});

/**
 * Watch carousel options for changes and update carousel
 */
watch(props.options, () => {
    embla.value?.reInit(options.value);
    scrollSnaps.value = embla.value?.scrollSnapList() as number[];
});

/**
 * watch the current prop for changes and jump to slide (used for syncing carousels)
 */
const currentRef = toRef(props, 'modelValue');
watch(currentRef, () => {
    embla.value?.scrollTo(currentRef.value);
});
</script>

<style>
.embla {
    position: relative;
}

/* .embla__viewport {
    overflow: hidden;
} */

.embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
}

.embla__viewport.is-dragging {
    cursor: grabbing;
}

.embla__container {
    display: flex;
    will-change: transform;
    margin-left: -2rem;
}
</style>
