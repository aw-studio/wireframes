<template>
    <RadioGroup
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
    >
        <!-- <RadioGroupLabel>Plan</RadioGroupLabel> -->
        <RadioGroupOption
            as="template"
            class="mb-3 rounded focus:outline-none max-w-max"
            v-for="option in options"
            :key="optionValue(option)"
            v-slot="{ checked, disabled }"
            :value="optionValue(option)"
            :disabled="isDisabled(option)"
        >
            <div class="flex gap-2">
                <div class="flex">
                    <div
                        class="flex items-center focus:ring-4 cursor-pointer focus:ring-primary-200 justify-center bg-white w-[17px] h-[17px] border-2 rounded-lg"
                        :class="{
                            'border-primary-200': !disabled,
                            'border-secondary-100': disabled,
                        }"
                    >
                        <div
                            class="w-2 h-2 rounded-full"
                            :class="{
                                'bg-primary': checked,
                                'bg-white': !checked,
                            }"
                        ></div>
                    </div>
                </div>
                <RadioGroupLabel
                    as="span"
                    class="flex-1 leading-none cursor-pointer"
                    :class="{ 'text-gray-500': disabled }"
                >
                    {{ optionLabel(option) }}
                </RadioGroupLabel>
            </div>
        </RadioGroupOption>
    </RadioGroup>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';

export default defineComponent({
    components: { RadioGroup, RadioGroupLabel, RadioGroupOption },
    props: {
        labelKey: {
            type: String,
            default: null,
        },
        valueKey: {
            type: String,
            default: null,
        },
        disabledKey: {
            type: String,
            default: null,
        },
        options: {
            type: Array,
            default: () => [],
        },
        modelValue: {
            type: [String, Number],
            default: null,
        },
    },

    setup(props, { attrs }) {
        const optionValue = (option) => {
            if (props.valueKey === null) {
                return option;
            }

            return option[props.valueKey];
        };

        const optionLabel = (option) => {
            if (props.labelKey === null) {
                return option;
            }

            return option[props.labelKey];
        };

        const isDisabled = (option) => {
            if (props.disabledKey === null) {
                return false;
            }

            return option[props.disabledKey] == true;
        };

        return { optionValue, optionLabel, isDisabled };
    },
});
</script>
