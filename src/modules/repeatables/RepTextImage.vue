<template>
    <div class="container grid grid-cols-12 gap-10 my-16">
        <div class="col-span-6">
            <p>{{ rep.text }}</p>
        </div>
        <div class="col-span-6">
            <Image :src="rep.image.url" v-if="rep.image?.url" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { RepTextImage } from '../../types/repeatables';
import Image from '../../components/Ui/Image.vue';

const props = defineProps({
    rep: {
        type: Object as PropType<RepTextImage>,
        required: true,
    },
});
</script>
