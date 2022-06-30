<template>
    <div class="container my-16">
        <h2 v-if="content.headline" class="text-center px-8 mx-auto">
            {{ content.headline }}
        </h2>
        <div class="flex flex-wrap space-x-5">
            <ImageGallery
                :images="content.items.map(item => item.image)"
                :title="content.headline"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ImageGallery from '../../components/Media/ImageGallery.vue';
import { PropType } from 'vue';
import { GridGallery } from '../../types/content';

const props = defineProps({
    content: {
        type: Object as PropType<GridGallery>,
        required: true,
    },
});
</script>
