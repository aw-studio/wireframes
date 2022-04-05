<template>
    <TransitionRoot appear :show="modelValue" as="template">
        <Dialog as="div" :open="modelValue" @close="close">
            <div class="fixed inset-0 z-50 overflow-y-auto">
                <div class="min-h-screen px-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay
                            class="fixed inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm"
                        />
                    </TransitionChild>

                    <span
                        class="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <div
                            class="inline-block w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded shadow-xl"
                            :class="{
                                'max-w-full': !size_,
                                'max-w-3xl': size_ == 'lg',
                                'max-w-2xl': size_ == 'md',
                                'max-w-xl': size_ == 'sm',
                            }"
                        >
                            <slot />
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
} from '@headlessui/vue';
import { getSize, sizes } from './props/size';

const emit = defineEmits(['close', 'update:modelValue']);
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    ...sizes,
});

const size_ = getSize(props, { DEFAULT: null });

const close = (val: any) => {
    emit('close', val);
    emit('update:modelValue', val);
};
</script>
