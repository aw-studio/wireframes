<template>
    <label class="flex items-center cursor-pointer max-w-max">
        <input
            @input="check()"
            type="checkbox"
            :checked="checked"
            :id="fieldId"
            class="absolute mr-2 opacity-0"
            v-bind="$attrs"
        />
        <div
            class="z-0 flex items-center text-primary justify-center flex-shrink-0 w-[17px] h-[17px] mr-2 border-2 border-primary-200"
        >
            <svg
                :class="checked ? 'block' : 'hidden'"
                class="z-0 w-2 h-2 pointer-events-none fill-current text-primary"
                viewBox="0 0 17 12"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.576.414a1.386 1.386 0 010 1.996l-9.404 9.176A1.461 1.461 0 016.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 010-1.996 1.47 1.47 0 012.046 0l3.68 3.59L14.53.414a1.47 1.47 0 012.046 0z"
                    fill="currentColor"
                    fill-rule="nonzero"
                />
            </svg>
        </div>
        <div class="pl-1 cursor-pointer">
            <slot>
                {{ label ?? value }}
            </slot>
        </div>
    </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    value: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    fieldId: {
        type: String,
    },
    modelValue: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const checked = computed(() => props.modelValue.includes(props.value));

const check = () => {
    let updatedNames = [...props.modelValue];
    // remove name if checked, else add name
    if (checked.value) {
        updatedNames.splice(updatedNames.indexOf(props.value), 1);
    } else {
        updatedNames.push(props.value);
    }
    // emit the updated names
    emit('update:modelValue', updatedNames);
};
</script>

<style scoped>
input:focus + div {
    box-shadow: 0px 0 0 2px var(--color-primary-200);
}
</style>
