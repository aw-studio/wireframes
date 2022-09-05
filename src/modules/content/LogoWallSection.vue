<template>
    <div class="container my-16">
        <h2 v-if="content.headline" class="px-8 mx-auto text-center">
            {{ content.headline }}
        </h2>
        <div class="flex flex-wrap justify-center space-x-5">
            <component
                v-for="item in content.items"
                class="flex items-center self-stretch justify-center w-1/2 p-8 mb-5 bg-white sm:1/3 md:w-1/5"
                :is="getTag(item)"
                :href="item.link?.url"
                :target="item.link?.new_tab ? '_blank' : '_self'"
            >
                <Image
                    :image="item.image"
                    v-if="item.image?.url"
                    overflow
                    class="mix-blend-hard-light"
                />
            </component>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Image from '../../components/Ui/Image.vue';
import { PropType } from 'vue';
import { LogoWall, LogoWallItem } from '../../types/';

const props = defineProps({
    content: {
        type: Object as PropType<LogoWall>,
        required: true,
    },
});

const getTag = (item: LogoWallItem) => {
    return item.link?.url != null ? 'a' : 'div';
};
</script>
