<template>
    <div class="container my-10">
        <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div
                v-for="entry in shownEntries"
                class="flex flex-col p-6 border border-gray-300 lg:hidden"
            >
                <div class="mb-4 text-lg font-semibold font-roboto-slab h5">
                    {{ entry.title }}
                </div>
                <TextLink
                    class="mt-auto w-fit"
                    :external="entry.link?.external"
                    :target="entry.link?.new_tab ? '_blank' : ''"
                    :href="entry.link?.url"
                >
                    {{ entry.link?.text ?? 'Mehr erfahren' }}
                </TextLink>
            </div>
            <div
                v-for="entry in content.items"
                class="flex-col hidden p-6 border border-gray-300 lg:flex"
            >
                <div class="mb-4 text-lg font-semibold font-roboto-slab h5">
                    {{ entry.title }}
                </div>
                <TextLink
                    class="mt-auto w-fit"
                    :external="entry.link?.external"
                    :target="entry.link?.new_tab ? '_blank' : ''"
                    :href="entry.link?.url"
                >
                    {{ entry.link?.text ?? 'Mehr erfahren' }}
                </TextLink>
            </div>
            <div
                v-if="content.items.length > 3"
                class="flex items-center justify-center lg:hidden text-darkgreen col-span-full"
            >
                <TextLink @click="open = !open">Alle anzeigen</TextLink>
                <svg
                    width="24"
                    height="24"
                    class="scale-90"
                    :class="{ 'rotate-180': open }"
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
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref, computed } from 'vue';
import { TeaserBoxes } from '../../types/';
import { TextLink } from '@/components/Ui';

const props = defineProps({
    content: {
        type: Object as PropType<TeaserBoxes>,
        required: true,
    },
});

const open = ref(false);

const shownEntries = computed(() => {
    if (props.content.items.length > 3 && !open.value) {
        return props.content.items.slice(0, 3);
    }
    return props.content.items;
});
</script>
