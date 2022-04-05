<template>
    <div class="w-full grid grid-cols-1 gap-2.5">
        <Disclosure
            as="div"
            v-for="item in content"
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-5 -8 24 24"
                        width="24"
                        fill="currentColor"
                        :class="{ 'rotate-180': open }"
                    >
                        <path
                            d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
                        ></path>
                    </svg>
                </Button>
            </DisclosureButton>
            <DisclosurePanel class="px-5 border border-secondary-100 py-7">
                <!-- TODO: Block Interpreter later -->
                <div v-html="item.content"></div>
            </DisclosurePanel>
        </Disclosure>
    </div>
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Button } from './';

const props = defineProps({
    content: {
        type: Object,
    },
});
</script>
