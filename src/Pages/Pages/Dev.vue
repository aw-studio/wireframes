<template>
    <Header />
    <main class="mt-[90px] lg:mt-[189px]">
        <Image
            :src="page.attributes.header.url"
            v-if="page.attributes.header.url"
            class="w-full h-64"
        />

        <div class="container">
            <h1>
                {{ page.attributes.h1 }}
            </h1>
        </div>
        <Repeatables :repeatables="page.content" />

        <Accordion :items="accordionItems" />
        <!-- <Map :zoom="4" :lat="10" :lng="52" /> -->
        <!-- 
        <div class="w-full">
            <Slider v-model="slider" min="0" max="100" />
            {{ slider }}
        </div>
        <div class="w-full">
            <Button @click="modal = true"> Open Modal </Button>
            <Modal lg v-model="modal"> Test </Modal>
        </div>

        <BackgroundSection>
            <h2>Background Section</h2>
            <div class="w-full">
                <Slider v-model="slider" min="0" max="100" />
                {{ slider }}
            </div>
        </BackgroundSection>
        <div class="container w-full my-16">
            <div class="w-full mb-10 lg:w-1/2">
                <Image :image="image" />
            </div>
            <div class="w-full mb-10 lg:w-1/2">
                <VideoEmbed :video="video" />
            </div>
            <div class="w-full mb-10">
                <ImageGallery :images="images" />
            </div>
        </div>
        <div class="container w-full my-16">
            <Carousel
                v-model="carouselCurrent"
                :autoplay="{
                    active: true,
                    timePerSlide: 6000,
                }"
                overflowHidden
                v-if="images.length > 0"
                dots
            >
                <Slide v-for="image in images">
                    <div class="h-[400px] w-full">
                        <Image :image="image" />
                    </div>
                </Slide>
            </Carousel>
        </div>
        <div class="container w-full my-16">
            <Carousel
                v-model="carouselCurrent"
                overflowHidden
                v-if="images.length > 0"
                dots
            >
                <Slide v-for="image in images">
                    <div class="h-[400px] w-full">
                        <Image :image="image" />
                    </div>
                </Slide>
            </Carousel>
        </div>
        <div class="container w-full my-16">
            <Carousel :options="carouselOptionsX" v-if="images.length > 0" dots>
                <Slide
                    :slidesInView="{
                        sm: 1,
                        md: 1,
                        lg: 2,
                        xl: 3,
                        '2xl': 4,
                    }"
                    v-for="image in images"
                >
                    <div
                        class="h-[400px] w-full shadow-lg bg-white rounded p-6"
                    >
                        Test
                    </div>
                </Slide>
            </Carousel>
        </div> -->
    </main>
    <Footer />
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Footer, Header } from '../../layout';
import { Page } from '../../types/resources';
import { Repeatables } from '../../modules/repeatables';
import Image from '../../components/Ui/Image.vue';
import Map from '../../components/Map/Map.vue';
import { Accordion } from '../../components/Ui';
import Slider from '../../components/Ui/Slider.vue';
import Button from '../../components/Ui/Button.vue';
import Modal from '../../components/Ui/Modal.vue';
import BackgroundSection from '../../layout/Container/BackgroundSection.vue';
import VideoEmbed from '../../components/Media/VideoEmbed.vue';
import ImageGallery from '../../components/Media/ImageGallery.vue';
import Carousel from '../../components/Ui/Carousel/Carousel.vue';
import Slide from '../../components/Ui/Carousel/Slide.vue';
import { AccordionItem } from '../../components/Ui/Accordion';

const props = defineProps({
    page: {
        required: true,
        type: Object as PropType<Page>,
    },
});

const accordionItems: AccordionItem[] = [
    {
        title: 'Foo',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione reiciendis ipsum distinctio eligendi quaerat, aperiam cupiditate facilis ea vero molestiae. Pariatur suscipit expedita ratione voluptates quisquam excepturi nam ipsum.',
    },
];
</script>

<style>
#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
