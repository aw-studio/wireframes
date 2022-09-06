<template>
    <div class="container flex justify-center my-16">
        <div
            class="grid max-w-4xl grid-cols-12 gap-10"
            :class="{ '!max-w-full': content.content_wide }"
        >
            <div class="col-span-6">
                <div class="prose" v-html="content.text"></div>
                <ButtonPrimary
                    v-if="content.link"
                    :external="content.link.external"
                    :href="content.link.url"
                    :target="content.link.new_tab ? '_blank' : ''"
                    outline
                >
                    {{ content.link.text ?? 'Mehr erfahren' }}
                </ButtonPrimary>
            </div>
            <div class="col-span-6">
                <Image :image="content.image" v-if="content.image?.url" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { TextImage } from '../../types/';
import { ButtonPrimary } from '@/components/Ui';
import Image from '../../components/Ui/Image.vue';

const props = defineProps({
    content: {
        type: Object as PropType<TextImage>,
        required: true,
    },
});
</script>
