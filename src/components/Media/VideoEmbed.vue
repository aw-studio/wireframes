<template>
    <div
        class="relative w-full"
        :class="{
            'aspect-square': getAspectRatio == '1/1',
            'aspect-video': getAspectRatio == '16/9',
            'aspect-[4/3]': getAspectRatio == '4/3',
            'aspect-[21/9]': getAspectRatio == '21/9',
        }"
    >
        <div
            v-if="video"
            v-html="video"
            class="absolute top-0 left-0 w-full h-full video"
        ></div>
        <div
            v-else
            class="absolute top-0 left-0 flex items-center justify-center w-full h-full border-2 border-gray"
        >
            <div
                class="flex items-center justify-center w-8 h-8 border-2 border-gray-900 rounded-full"
            >
                <svg
                    width="24"
                    height="24"
                    stroke-width="2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-0.5"
                >
                    <path
                        d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032L6.906 4.537Z"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';

type AspectRatio = [number, number];

const props = defineProps({
    video: {
        type: String as PropType<String>,
        default: '',
    },
    aspectRatio: {
        type: String,
    },
});

const getAspectRatio = computed(() => {
    if (props.aspectRatio == '16/9') {
        return '16/9';
    }
    if (props.aspectRatio == '4/3') {
        return '4/3';
    }
    if (props.aspectRatio == '21/9') {
        return '21/9';
    }
    if (props.aspectRatio == '1/1') {
        return '1/1';
    }
    return '16/9';
});
</script>

<style>
.video iframe {
    width: 100%;
    height: 100%;
}
</style>
