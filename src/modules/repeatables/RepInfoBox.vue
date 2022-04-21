<template>
    <div>{{ rep.title }}</div>
    <div>{{ rep.text }}</div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { InfoBox } from '../../types/repeatables';

const props = defineProps({
    rep: {
        type: Object as PropType<InfoBox>,
        required: true,
    },
});
</script>
