<template>
    <div class="py-16 bg-primary-200">
        <div class="container">
            <h2 v-if="rep.headline">
                {{ rep.headline }}
            </h2>
            <div class="grid grid-cols-12 gap-5">
                <div
                    v-for="item in rep.items"
                    class="col-span-12 p-8 bg-white rounded sm:col-span-6 md:col-span-4"
                >
                    <div class="mb-8 -mx-8 -mt-8" v-if="item.image?.url">
                        <Image :src="item.image.url" />
                    </div>

                    <h3>
                        {{ item.title }}
                    </h3>
                    <p>
                        {{ item.text }}
                    </p>
                    <div v-if="item.link?.url" class="pt-4">
                        <Button :href="item.link.url">
                            <template v-if="item.link.text">
                                {{ item.link.text }}
                            </template>
                            <template v-else> Weiter </template>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Image from '../../components/Ui/Image.vue';
import Button from '../../components/Ui/Button.vue';
import { PropType } from 'vue';
import { Cards } from '../../types/repeatables';

const props = defineProps({
    rep: {
        type: Object as PropType<Cards>,
        required: true,
    },
});
</script>
