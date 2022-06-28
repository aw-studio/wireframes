<template>
    <section class="container my-16">
        <h2 v-if="rep.headline">
            {{ rep.headline }}
        </h2>
        <Accordion :items="rep.items" />
    </section>
</template>

<script lang="ts" setup>
import { RepAccordion } from '@/types/repeatables';
import { PropType } from 'vue';
import { Accordion } from '../../components/Ui/Accordion';

const props = defineProps({
    rep: {
        type: Object as PropType<RepAccordion>,
        required: true,
    },
});
</script>
