<template>
    <Header />
    <main class="mt-[90px] lg:mt-[189px]">
        <div class="container flex flex-wrap gap-5 py-20">
            <Repeatables :repeatables="page.content" />

            <!--<Map :zoom="4" :lat="10" :lng="52" />-->
            <!-- <Accordion :content="content" />
            <Input v-model="test" label="Label" placeholder="placeholder" />
            {{ test }}
            <div>
                <RadioGroup
                    v-model="radioSelected"
                    :options="radio"
                    labelKey="label"
                    valueKey="value"
                />
                {{ radioSelected }}
            </div>
            <div>
                <Checkbox
                    v-model="checkboxSelected"
                    value="10"
                    label="Wert 10"
                />
                <Checkbox
                    v-model="checkboxSelected"
                    value="12"
                    label="Wert 12"
                />
                <Checkbox
                    v-model="checkboxSelected"
                    value="14"
                    label="Wert 14"
                />
                {{ checkboxSelected }}
            </div>
            <div class="w-full">
                <Select v-model="select" label="Select" :items="selectItems" />
                {{ select.value }}
            </div>
            <div class="w-full">
                <Slider v-model="slider" min="0" max="100" />
                {{ slider }}
            </div>
            <div class="w-full">
                <Button @click="modal = true"> Open Modal </Button>
                <Modal lg v-model="modal"> Test </Modal>
            </div>
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
            </Carousel> -->
        </div>
    </main>
    <Footer />
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Footer, Header } from '../../layout';
import { PageResource } from '../../types/resources';
import { Repeatables } from '../../modules/repeatables';

const props = defineProps({
    page: {
        required: true,
        type: Object as PropType<PageResource>,
    },
});
</script>

<style>
#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
