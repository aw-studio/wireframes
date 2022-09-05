<template>
    <div class="mb-20 bg-section">
        <div class="container flex py-10">
            <div class="grid max-w-4xl grid-cols-12 gap-10 mx-auto">
                <div class="order-1 col-span-full lg:col-span-6 lg:order-0">
                    <div class="prose" v-html="content.text"></div>
                    <ButtonSignal
                        v-if="content.link"
                        :external="content.link.external"
                        :href="content.link.url"
                        :target="content.link.new_tab ? '_blank' : ''"
                    >
                        {{ content.link.text ?? 'Mehr erfahren' }}
                    </ButtonSignal>
                </div>

                <div class="col-span-full lg:col-span-6 order-0 lg:order-1">
                    <Image :image="content.image" v-if="content.image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { ButtonSignal } from '@/components/Ui';
import { InfoSection } from '../../types/';
import Image from '../../components/Ui/Image.vue';

const props = defineProps({
    content: {
        type: Object as PropType<InfoSection>,
        required: true,
    },
});
</script>
