<template>
    <template v-for="(repeatable, key) in rep" :key="key">
        <component
            v-if="repeatable.type in repeatableComponents"
            :is="repeatableComponents[repeatable.type]"
            :rep="repeatable.value"
        />
    </template>
</template>

<script lang="ts" setup>
import { repeatableComponents } from './index';

const props = defineProps({
    rep: {
        type: Object,
        required: true,
    },
});
</script>
