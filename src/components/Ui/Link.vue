<template>
    <a href="" class="font-semibold underline text-primary">
        <slot />
    </a>
</template>

<script lang="ts" setup>
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>
