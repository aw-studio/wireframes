<template>
    <div class="w-full grid grid-cols-1 gap-2.5">
        <Disclosure
            as="div"
            v-for="item in items"
            class="w-full"
            v-slot="{ open }"
        >
            <DisclosureButton
                class="flex items-center justify-between w-full p-5 bg-secondary-100"
            >
                <h3 class="m-0">
                    {{ item.title }}
                </h3>
                <Button secondary square>
                    <div
                        class="text-white duration-200 transform"
                        :class="{
                            ' rotate-180': open,
                        }"
                    >
                        <svg
                            width="24"
                            height="24"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 9L12 15L18 9"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </Button>
            </DisclosureButton>
            <DisclosurePanel class="px-5 border border-secondary-100 py-7">
                <div class="prose" v-html="item.text"></div>
            </DisclosurePanel>
        </Disclosure>
    </div>
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { PropType } from 'vue';
import { AccordionItem } from '.';
import { Button } from '..';

defineProps({
    items: {
        type: Array as PropType<AccordionItem[]>,
        required: true,
    },
});
</script>
