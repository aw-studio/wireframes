<template>
    <div class="container my-16">
        <h2 v-if="content.headline" class="text-center px-8 mx-auto">
            {{ content.headline }}
        </h2>
        <div class="flex flex-wrap space-x-5 justify-center">
            <component
                v-for="item in content.items"
                class="w-1/2 sm:1/3 md:w-1/5 p-8 bg-white self-stretch flex items-center justify-center mb-5"
                :is="getTag(item)"
                :href="item.link?.url"
                :target="item.link?.new_tab ? '_blank' : '_self'"
            >
                <Image
                    :src="item.image.url"
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
