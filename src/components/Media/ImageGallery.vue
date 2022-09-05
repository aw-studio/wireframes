<template>
    <div v-if="images.length > 0" class="my-16">
        <h3 v-if="title">{{ title }}</h3>
        <div class="hidden md:grid md:grid-cols-12 md:gap-5">
            <button
                v-for="(image, index) in images"
                :key="index"
                @click="toggleGallery(image.url, index)"
                class="relative col-span-12 transition-all duration-300 cursor-pointer md:col-span-6 lg:col-span-4 xl:col-span-3 focus:outline-none focus:ring focus:ring-primary"
            >
                <Image class="w-full" :image="image" />
            </button>
        </div>
        <ImageGalleryModal v-model="openModal">
            <div
                :id="`${image.url}_${index}`"
                v-for="(image, index) in images"
                :key="index"
                class="mb-20"
            >
                <Image :image="image" class="w-full" />
            </div>
        </ImageGalleryModal>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref, nextTick } from 'vue';
import { ImageGalleryModal } from './';

import Image from '../Ui/Image.vue';
import { Image as TImage } from '../../types/content';

defineProps({
    images: {
        type: Array as PropType<TImage[]>,
        default: () => [],
    },
    title: {
        type: String as PropType<String>,
        default: null,
    },
});
const openModal = ref(false);

const toggleGallery = (url: string, index: number): void => {
    openModal.value = true;

    nextTick(() => {
        const scrollElement = document.getElementById(`${url}_${index}`);
        setTimeout(() => {
            scrollElement?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }, 100);
    });
};
</script>
