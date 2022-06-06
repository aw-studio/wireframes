<template>
    <div class="container">
        <Accordion :items="rep.items" />
    </div>
</template>

<script lang="ts" setup>
import { Accordion as AccordionRepeatable } from "@app/types/repeatables";
import { PropType } from "vue";
import { Accordion } from "../../components/Ui/Accordion";

const props = defineProps({
    rep: {
        type: Object as PropType<AccordionRepeatable>,
        required: true,
    },
});
</script>
