<template>
    <div v-html="rep.text" class="container my-16"></div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { RepTextFull } from '../../types/repeatables';

const props = defineProps({
    rep: {
        type: Object as PropType<RepTextFull>,
        required: true,
    },
});
</script>
