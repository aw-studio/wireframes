<template>
    <div class="flex justify-start max-w-4xl">
        <div v-if="link" class="">
            <ButtonSecondary
                v-if="!veryImportant"
                class="font-semibold"
                :href="link.url"
                :external="link.external"
                :target="link.new_tab ? '_blank' : ''"
            >
                <template v-if="link.text">
                    {{ link.text }}
                </template>
                <template v-else> Weiter </template>
            </ButtonSecondary>
            <ButtonSignal
                v-if="veryImportant"
                class="font-semibold"
                :href="link.url"
                :external="link.external"
                :target="link.new_tab ? '_blank' : ''"
            >
                <template v-if="link.text">
                    {{ link.text }}
                </template>
                <template v-else> Weiter </template>
            </ButtonSignal>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ButtonSecondary from './ButtonSecondary.vue';
import ButtonSignal from './ButtonSignal.vue';
import { Link } from '@/types';
import { PropType } from 'vue';
const props = defineProps({
    link: {
        type: Object as PropType<Link>,
        default: null,
    },
    veryImportant: {
        type: Boolean,
        default: false,
    },
});
</script>
