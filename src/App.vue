<template>
    <Header />
    <main class="mt-[90px] lg:mt-[189px]">
        <div class="container flex flex-wrap gap-5 py-20">
            <Button href="/test" primary> Lorem </Button>
            <Button secondary> Lorem </Button>
            <Button primary disabled> Lorem </Button>
            <Button secondary disabled> Lorem </Button>
            <Button primary square>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-8 -5 24 24"
                    width="24"
                    fill="currentColor"
                >
                    <path
                        d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"
                    ></path>
                </svg>
            </Button>
            <Button secondary square>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-8 -5 24 24"
                    width="24"
                    fill="currentColor"
                >
                    <path
                        d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"
                    ></path>
                </svg>
            </Button>
            <Link href="/test"> Test </Link>
            <!--<Map :zoom="4" :lat="10" :lng="52" />-->
            <Accordion :content="content" />
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
        </div>
    </main>
    <Footer />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BackgroundSection } from './components/Container';
import {
    Button,
    Accordion,
    Link,
    Input,
    RadioGroup,
    Checkbox,
    Carousel,
    Slide,
    Select,
    Slider,
    Modal,
} from './components/Ui';
import {
    Image,
    ImageGallery,
    VideoEmbed,
    ImageInterface,
} from './components/Media';
import { Footer, Header } from './layout';

const test = ref('');
const radioSelected = ref();
const checkboxSelected = ref([]);
const modal = ref(false);
const select = ref({ value: null, preview: 'placeholder' });
const slider = ref(50);
const carouselCurrent = ref(0);

const carouselOptionsX = {
    sm: {
        slidesToScroll: 1,
        speed: 6,
        align: 'start',
        containScroll: 'trimSnaps',
    },
    md: {
        slidesToScroll: 1,
        speed: 6,
        align: 'start',
        containScroll: 'trimSnaps',
    },
    lg: {
        slidesToScroll: 2,
        speed: 6,
        align: 'start',
        containScroll: 'trimSnaps',
    },
    xl: {
        slidesToScroll: 3,
        speed: 6,
        align: 'start',
        containScroll: 'trimSnaps',
    },
    '2xl': {
        slidesToScroll: 4,
        speed: 6,
        align: 'start',
        containScroll: 'trimSnaps',
    },
};

const image: ImageInterface = {
    id: 0,
    original_url:
        'https://images.unsplash.com/photo-1648602884790-4435152a69db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
};
const images = [
    {
        id: 0,
        original_url:
            'https://images.unsplash.com/photo-1648598200360-d77ba0fff312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: 1,
        original_url:
            'https://images.unsplash.com/photo-1648602884790-4435152a69db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    {
        id: 2,
        original_url:
            'https://images.unsplash.com/photo-1648598200360-d77ba0fff312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: 3,
        original_url:
            'https://images.unsplash.com/photo-1648602884790-4435152a69db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    {
        id: 4,
        original_url:
            'https://images.unsplash.com/photo-1648598200360-d77ba0fff312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: 5,
        original_url:
            'https://images.unsplash.com/photo-1648602884790-4435152a69db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
];
const video =
    '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>';

const selectItems = [
    {
        value: 10,
        preview: 'Wert 10',
    },
    {
        value: 11,
        preview: 'Wert 11',
    },
    {
        value: 12,
        preview: 'Wert 12',
    },
];

const radio = [
    {
        label: 'Option 1',
        value: 1,
    },
    {
        label: 'Option 2',
        value: 2,
    },
    {
        label: 'Option 3',
        value: 3,
    },
];
radioSelected.value = radio[0].value;

const content = [
    {
        title: 'Item 1',
        content: 'lorem ipsum dolor sit amet, consectetur',
    },
    {
        title: 'Item 2',
        content: 'lorem ipsum dolor sit amet, consectetur',
    },
    {
        title: 'Item 3',
        content: 'lorem ipsum dolor sit amet, consectetur',
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
