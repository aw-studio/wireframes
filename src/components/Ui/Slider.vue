<template>
    <div class="w-full">
        <input
            class="w-full"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            type="range"
        />
        <div class="flex justify-between w-full mt-2 text-sm text-secondary">
            <span class="inline-block">
                {{ $attrs.min }}
            </span>
            <span class="inline-block">
                {{ $attrs.max }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    modelValue: [String, Number],
});
</script>

<style scoped>
input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
}
input[type='range']:focus {
    outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: var(--color-primary-200);
}
input[type='range']::-webkit-slider-thumb {
    height: 18px;
    width: 18px;
    border-radius: 9999px;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
    background: var(--color-primary-default);
}
input[type='range']:focus::-webkit-slider-runnable-track {
    background: var(--color-primary-200);
}
input[type='range']::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: var(--color-primary-200);
}
input[type='range']::-moz-range-thumb {
    height: 18px;
    width: 18px;
    border-radius: 9999px;
    border: 0;
    cursor: pointer;
    background: var(--color-primary-default);
}
input[type='range']::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
}
input[type='range']::-ms-fill-lower {
    background: var(--color-primary-default);
}
input[type='range']::-ms-fill-upper {
    background: var(--color-primary-default);
}
input[type='range']::-ms-thumb {
    height: 18px;
    width: 18px;
    border-radius: 9999px;
    background: var(--color-primary-default);
    cursor: pointer;
}
input[type='range']:focus::-ms-fill-lower {
    background: var(--color-primary-200);
}
input[type='range']:focus::-ms-fill-upper {
    background: var(--color-primary-200);
}
</style>
