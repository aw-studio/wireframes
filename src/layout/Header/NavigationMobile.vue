<template>
    <div class="lg:hidden">
        <button @click="menuOpen = !menuOpen" class="relative w-6 h-5">
            <span
                :class="{ 'top-1/2 rotate-45': menuOpen, 'top-0': !menuOpen }"
                class="inline-block bg-secondary-900 transition-all duration-300 w-full h-0.5 absolute left-0"
            ></span>
            <span
                :class="{ 'opacity-0': menuOpen, 'opacity-1': !menuOpen }"
                class="inline-block bg-secondary-900 transition-opacity duration-300 w-full h-0.5 absolute left-0 top-1/2"
            ></span>
            <span
                :class="{
                    'top-1/2 -rotate-45': menuOpen,
                    'top-full': !menuOpen,
                }"
                class="inline-block bg-secondary-900 transition-all duration-300 w-full h-0.5 absolute left-0"
            ></span>
        </button>
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
        >
            <div
                v-if="menuOpen"
                class="fixed z-50 bg-secondary-100 py-10 overflow-y-auto top-[90px] left-0 w-screen"
                style="height: calc(100vh - 90px)"
            >
                <ul class="container flex flex-col gap-8">
                    <li v-for="entry in navigation">
                        <a v-if="!hasChildren(entry)" :href="entry.link">
                            {{ entry.name }}
                        </a>
                        <Disclosure v-slot="{ open }" v-if="hasChildren(entry)">
                            <DisclosureButton
                                class="flex items-center justify-between gap-4"
                            >
                                <span>
                                    {{ entry.name }}
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-5 -8 24 24"
                                    width="16"
                                    fill="currentColor"
                                    class="transition-transform duration-300"
                                    :class="{ 'rotate-180': open }"
                                >
                                    <path
                                        d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
                                    ></path>
                                </svg>
                            </DisclosureButton>
                            <DisclosurePanel>
                                <ul class="flex flex-col gap-8 mt-8 ml-8">
                                    <li v-for="child in entry.children">
                                        <a :href="child.link">
                                            {{ entry.name }}
                                        </a>
                                    </li>
                                </ul>
                            </DisclosurePanel>
                        </Disclosure>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const props = defineProps({
    navigation: {
        type: Object,
    },
});

const menuOpen = ref(false);

const hasChildren = (entry: any) => {
    if (!entry.children || entry.children.length <= 0) {
        return false;
    }
    return true;
};

watch(menuOpen, () => {
    if (menuOpen.value) {
        document.querySelector('body')?.classList.add('overflow-y-hidden');
    }
    if (!menuOpen.value) {
        document.querySelector('body')?.classList.remove('overflow-y-hidden');
    }
});
</script>

<style></style>
