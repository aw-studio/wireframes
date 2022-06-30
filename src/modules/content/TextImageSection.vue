<template>
    <div class="container grid grid-cols-12 gap-10 my-16">
        <div class="col-span-6">
            <p>{{ content.text }}</p>
        </div>
        <div class="col-span-6">
            <Image :src="content.image.url" v-if="content.image?.url" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { TextImage } from '../../types/';
import Image from '../../components/Ui/Image.vue';

const props = defineProps({
    content: {
        type: Object as PropType<TextImage>,
        required: true,
    },
});
</script>
