<template>
    <div class="container flex justify-center">
        <Image
            :image="content.image"
            v-if="content.image"
            class="w-full max-w-4xl my-10"
            :class="{ 'md:!max-w-full': content.content_wide }"
        />
    </div>
</template>

<script lang="ts" setup>
import Image from '../../components/Ui/Image.vue';
import { PropType } from 'vue';
import { ImageSmall } from '../../types';

const props = defineProps({
    content: {
        type: Object as PropType<ImageSmall>,
        required: true,
    },
});
</script>
