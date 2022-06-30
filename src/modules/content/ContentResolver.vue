<template>
    <template v-for="(contentSeciton, key) in contentSections" :key="key">
        <component
            v-if="contentSeciton.type in contentSectionComponents"
            :is="contentSectionComponents[contentSeciton.type]"
            :content="contentSeciton.value"
        />
    </template>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { ContentSections as IContentSections } from '../../types/content';
import { contentSectionComponents } from './index';

const props = defineProps({
    contentSections: {
        type: Object as PropType<IContentSections>,
        required: true,
    },
});
</script>
