<template>
    <Image :src="rep.image.url" v-if="rep.image?.url" class="my-16" />
</template>

<script lang="ts" setup>
import Image from '../../components/Ui/Image.vue';
import { PropType } from 'vue';
import { RepImageFull } from '../../types/repeatables';

const props = defineProps({
    rep: {
        type: Object as PropType<RepImageFull>,
        required: true,
    },
});
</script>
