<template>
    <div class="container flex justify-center py-10">
        <div
            class="w-full max-w-4xl"
            :class="{ '!max-w-full': content.content_wide }"
        >
            <CTA :link="content.link" :veryImportant="content.important" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { CTA as ICTA } from '../../types/content';
import CTA from '../../components/Ui/CTA.vue';

const props = defineProps({
    content: {
        type: Object as PropType<ICTA>,
        required: true,
    },
});
</script>
