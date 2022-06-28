<template>
    <section class="container my-16">
        <Carousel>
            <Slide v-for="item in rep.items">
                <Image :src="item.image.url" />
            </Slide>
        </Carousel>
    </section>
</template>

<script lang="ts" setup>
import Carousel from '@/components/Ui/Carousel/Carousel.vue';
import Slide from '@/components/Ui/Carousel/Slide.vue';
import Image from '@/components/Ui/Image.vue';
import { PropType } from 'vue';
import { RepImageCarousel } from '../../types/repeatables';

const props = defineProps({
    rep: {
        type: Object as PropType<RepImageCarousel>,
        required: true,
    },
});
</script>
