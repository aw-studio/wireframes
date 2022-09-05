<template>
    <Image :image="content.image" v-if="content.image?.url" class="my-10" />
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
