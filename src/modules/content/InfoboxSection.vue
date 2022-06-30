<template>
    <div class="container my-16 flex justify-center">
        <Infobox
            :title="content.title"
            :link="content.link.url"
            :link-text="content.link.text"
        >
            {{ content.text }}
        </Infobox>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Infobox as IInfoBox } from '../../types/content';
import Infobox from '../../components/Ui/Infobox.vue';

const props = defineProps({
    content: {
        type: Object as PropType<IInfoBox>,
        required: true,
    },
});
</script>
