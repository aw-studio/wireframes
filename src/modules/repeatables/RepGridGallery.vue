<template>
    <div class="container my-16">
        <h2 v-if="rep.headline" class="text-center px-8 mx-auto">
            {{ rep.headline }}
        </h2>
        <div class="flex flex-wrap space-x-5">
            <ImageGallery
                :images="rep.items.map(item => item.image)"
                :title="rep.headline"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ImageGallery from '../../components/Media/ImageGallery.vue';
import { PropType } from 'vue';
import { RepGridGallery } from '../../types/repeatables';

const props = defineProps({
    rep: {
        type: Object as PropType<RepGridGallery>,
        required: true,
    },
});
</script>
