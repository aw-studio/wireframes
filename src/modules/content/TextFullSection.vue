<template>
    <div v-html="content.text" class="container my-16"></div>
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
