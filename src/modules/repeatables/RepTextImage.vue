<template>
    <div class="container grid grid-cols-12 gap-10">
        <div class="col-span-6" v-html="rep.text"></div>
        <div class="col-span-6">
            <img :src="rep.image.url" alt="" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { TextImage } from "../../types/repeatables";

const props = defineProps({
    rep: {
        type: Object as PropType<TextImage>,
        required: true,
    },
});
</script>
