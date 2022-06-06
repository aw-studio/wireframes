<template>
    <Carousel>
        <Slide v-for="item in rep.items">
            <Image :src="item.image.url" />
        </Slide>
    </Carousel>
</template>

<script lang="ts" setup>
import Carousel from "@app/components/Ui/Carousel/Carousel.vue";
import Slide from "@app/components/Ui/Carousel/Slide.vue";
import Image from "@app/components/Ui/Image.vue";

const props = defineProps({
    rep: {
        type: Object,
        required: true,
    },
});
</script>
