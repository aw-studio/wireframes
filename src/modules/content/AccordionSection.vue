<template>
    <section class="container flex justify-center my-16">
        <div
            class="w-full max-w-4xl"
            :class="{ '!max-w-full': content.content_wide }"
        >
            <h2 v-if="content.headline">
                {{ content.headline }}
            </h2>
            <Accordion :items="content.items" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Accordion as IAccordion } from '@/types/';
import { PropType } from 'vue';
import { Accordion } from '../../components/Ui/Accordion';

const props = defineProps({
    content: {
        type: Object as PropType<IAccordion>,
        required: true,
    },
});
</script>
