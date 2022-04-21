<template>
    <div>{{ rep.text }}</div>
    <div>{{ rep.image }}</div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { TextImage } from '../../types/repeatables';

const props = defineProps({
    rep: {
        type: Object as PropType<TextImage>,
        required: true,
    },
});
</script>
