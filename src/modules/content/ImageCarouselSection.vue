<template>
    <section class="container my-16">
        <Carousel>
            <Slide v-for="item in content.items">
                <Image :image="item.image" />
            </Slide>
        </Carousel>
    </section>
</template>

<script lang="ts" setup>
import Carousel from '@/components/Ui/Carousel/Carousel.vue';
import Slide from '@/components/Ui/Carousel/Slide.vue';
import Image from '@/components/Ui/Image.vue';
import { PropType } from 'vue';
import { ImageCarousel } from '../../types/';

const props = defineProps({
    content: {
        type: Object as PropType<ImageCarousel>,
        required: true,
    },
});
</script>
