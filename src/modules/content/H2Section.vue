<template>
    <div
        class="container flex my-10"
        :class="{ 'justify-center': content.centered }"
    >
        <div class="w-full max-w-4xl">
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
