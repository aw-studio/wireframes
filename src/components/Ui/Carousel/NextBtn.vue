<template>
    <Button sqaure secondary :disabled="!enabled">
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
</template>

<script lang="ts" setup>
import { Button } from '../';
const props = defineProps({
    enabled: Boolean,
});
</script>
