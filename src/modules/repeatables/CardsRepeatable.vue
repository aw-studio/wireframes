<template>
    <Repeatables :repeatables="rep.cards" />
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { TextFull } from '../../types/repeatables';
import Repeatables from './Repeatables.vue';

const props = defineProps({
    rep: {
        type: Object,
        required: true,
    },
});
</script>
