<template>
    <div class="container flex justify-center my-16">
        <div class="w-full max-w-4xl">
            <div v-html="content.text"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { TextFull } from '../../types/';

const props = defineProps({
    content: {
        type: Object as PropType<TextFull>,
        required: true,
    },
});
</script>
