<template>
    <img :src="rep.image.url" v-if="rep.image.url" />
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { ImageFull } from '../../types/repeatables';

const props = defineProps({
    rep: {
        type: Object as PropType<ImageFull>,
        required: true,
    },
});
</script>
