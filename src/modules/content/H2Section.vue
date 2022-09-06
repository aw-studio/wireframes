<template>
    <div class="container flex justify-center my-10">
        <div
            class="w-full max-w-4xl"
            :class="{ '!max-w-full': content.content_wide }"
        >
            <h2 class="w-full">{{ content.text }}</h2>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { TextFull } from '../../types';

const props = defineProps({
    content: {
        type: Object as PropType<TextFull>,
        required: true,
    },
});
</script>
