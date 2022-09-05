<template>
    <TransitionRoot appear :show="modelValue" as="template">
        <Dialog as="div" @close="close">
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
                            class="fixed inset-0 bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm"
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
                            class="relative inline-block w-full align-middle transition-all transform bg-transparent my-28 md:max-w-xl lg:max-w-4xl"
                        >
                            <slot />

                            <div class="absolute top-0 text-white -right-20">
                                <Button square secondary @click="close(false)">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="-6 -6 24 24"
                                        width="24"
                                        height="24"
                                        preserveAspectRatio="xMinYMin"
                                        class="fill-white"
                                    >
                                        <path
                                            d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"
                                        ></path>
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script lang="ts" setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
} from '@headlessui/vue';
import { Button } from '../Ui';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['close', 'update:modelValue']);

function close(val: Boolean) {
    emit('close', val);
    emit('update:modelValue', val);
}
</script>
