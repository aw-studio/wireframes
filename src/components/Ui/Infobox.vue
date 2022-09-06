<template>
    <div class="w-full max-w-4xl p-8 bg-gray-100">
        <div
            v-if="title"
            v-html="title"
            class="mb-6 text-lg font-semibold"
        ></div>
        <slot />
        <div v-if="link" class="pt-4">
            <Button :href="link">
                <template v-if="linkText">
                    {{ linkText }}
                </template>
                <template v-else> Weiter </template>
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from './Button.vue';
const props = defineProps({
    title: {
        type: String,
        default: null,
    },
    link: {
        type: String,
        default: null,
    },
    linkText: {
        type: String,
        default: null,
    },
});
</script>
