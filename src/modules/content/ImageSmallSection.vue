<template>
    <div class="container flex" :class="{ 'justify-center': content.centered }">
        <Image
            :image="content.image"
            v-if="content.image"
            class="w-full my-10 md:max-w-4xl"
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
