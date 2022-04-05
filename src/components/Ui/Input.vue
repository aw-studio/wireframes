<template>
    <label class="w-full">
        <span class="inline-block">{{ label }}</span>
        <div class="py-1.5 px-2 w-full bg-secondary-100">
            <input
                class="placeholder:text-secondary focus:outline-none bg-secondary-100"
                :placeholder="placeholder"
                v-bind="$attrs"
                :value="modelValue"
                type="text"
                @input="$emit('update:modelValue', $event.target.value)"
            />
        </div>
    </label>
</template>

<script lang="ts" setup>
const props = defineProps({
    label: {
        type: String,
        default: null,
    },
    hint: {
        type: String,
        default: null,
    },
    placeholder: {
        type: String,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: String,
    },
});
</script>
