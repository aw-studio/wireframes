<template>
     <div v-html="rep.text" >
     </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { TextFull } from '../../types/repeatables';

const props = defineProps({
    rep: {
        type: Object as PropType<TextFull>,
        required: true,
    },
});
</script>
