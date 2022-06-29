<template>
    <Image :src="content.image.url" v-if="content.image?.url" class="my-16" />
</template>

<script lang="ts" setup>
import Image from '../../components/Ui/Image.vue';
import { PropType } from 'vue';
import { ImageFull } from '../../types/';

const props = defineProps({
    content: {
        type: Object as PropType<ImageFull>,
        required: true,
    },
});
</script>
