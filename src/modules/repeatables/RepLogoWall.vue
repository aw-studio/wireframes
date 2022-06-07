<template>
    <div class="container">
        <div class="grid grid-cols-12 gap-5">
            <component
                v-for="item in rep.items"
                class="col-span-12 p-8 bg-white rounded sm:col-span-6 md:col-span-4"
                :is="getTag(item)"
                :href="item.link?.url"
                :target="item.link?.new_tab ? '_blank' : '_self'"
            >
                <Image :src="item.image.url" v-if="item.image?.url" />
            </component>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Image from "../../components/Ui/Image.vue";
import { PropType } from "vue";
import { LogoWall, LogoWallItem } from "../../types/repeatables";

const props = defineProps({
    rep: {
        type: Object as PropType<LogoWall>,
        required: true,
    },
});

const getTag = (item: LogoWallItem) => {
    return item.link?.url != null ? "a" : "div";
};
</script>
