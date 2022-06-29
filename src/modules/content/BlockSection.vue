<template>
    <template v-for="(block, key) in content" :key="key">
        <component
            v-if="block.type in contentSectionComponents"
            :is="contentSectionComponents[block.type]"
            :content="block.value"
        />
    </template>
</template>

<script lang="ts" setup>
import { contentSectionComponents } from './index';

const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});
</script>
