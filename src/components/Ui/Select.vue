<template>
    <div class="mb-2">
        <div class="z-20 mb-1 whitespace-nowrap">
            {{ label }}
        </div>
        <Listbox v-model="selectedItem">
            <div class="relative w-full">
                <ListboxButton
                    class="relative z-10 w-full h-10 px-2.5 text-xs text-left bg-secondary-100 cursor-default focus:outline-none focus:ring-2 focus:ring-primary-200"
                >
                    <span
                        :class="
                            modelValue.value == ''
                                ? 'text-secondary'
                                : 'text-secondary-900'
                        "
                        class="block truncate"
                        >{{ modelValue.preview }}</span
                    >
                    <span
                        class="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-primary"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-5 -8 24 24"
                            width="24"
                            fill="currentColor"
                        >
                            <path
                                d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
                            ></path>
                        </svg>
                    </span>
                </ListboxButton>

                <ListboxOptions
                    class="absolute z-30 w-full overflow-auto text-xs bg-white border-2 border-secondary-100 max-h-56 focus:outline-none"
                >
                    <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="item in items"
                        :key="item"
                        :value="item.value"
                        @click="updateValue(item)"
                        as="template"
                    >
                        <li
                            :class="[
                                active
                                    ? 'text-secondary-900 bg-secondary-100'
                                    : 'text-secondary',
                                'cursor-default select-none relative mb-1',
                            ]"
                        >
                            <span
                                :class="[
                                    selected
                                        ? 'text-secondary-900 bg-secondary-100'
                                        : 'text-secondary',
                                    'block truncate py-1 px-2',
                                ]"
                                >{{ item.preview }}</span
                            >
                            <span
                                v-if="selected"
                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary"
                            >
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </div>
        </Listbox>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue';
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue';

const emit = defineEmits(['filter', 'update:modelValue']);

const props = defineProps({
    label: {
        type: String,
    },
    modelValue: Object as PropType<{ value: string; preview: string }>,
    items: {
        type: Array as PropType<string[]>,
    },
    required: {
        type: Boolean,
        default: false,
    },
});
const items = props.items ?? [];
const selectedItem = ref(items[0]);

const updateValue = (value: Object) => {
    emit('update:modelValue', value);
    emit('filter');
};
</script>
