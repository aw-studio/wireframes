<template>
    <section class="my-16 bg-section">
        <div class="container py-16">
            <h2 v-if="content.headline">
                {{ content.headline }}
            </h2>
            <div class="grid grid-cols-12 gap-5">
                <div
                    v-for="item in content.items"
                    class="col-span-12 p-8 bg-white rounded md:col-span-6 lg:col-span-4"
                >
                    <div class="mb-8 -mx-8 -mt-8" v-if="item.image?.url">
                        <Image :image="item.image" />
                    </div>

                    <h3>
                        {{ item.title }}
                    </h3>
                    <p>
                        {{ shorten(item.text, 250) }}
                    </p>
                    <div v-if="item.link?.url" class="pt-4">
                        <Button
                            :href="item.link.url"
                            :target="item.link.new_tab ? '_blank' : ''"
                        >
                            <template v-if="item.link.text">
                                {{ item.link.text }}
                            </template>
                            <template v-else> Weiter </template>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import Image from '../../components/Ui/Image.vue';
import Button from '../../components/Ui/Button.vue';
import { PropType } from 'vue';
import { Cards } from '../../types/content';

const props = defineProps({
    content: {
        type: Object as PropType<Cards>,
        required: true,
    },
});

const shorten = (text: string, length: number) => {
    var trimmedString = text.substr(0, length);

    return (
        trimmedString.substr(
            0,
            Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
        ) + '...'
    );
};
</script>
