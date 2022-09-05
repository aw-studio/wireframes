<template>
    <div
        class="container flex my-16"
        :class="{ 'justify-center': content.centered }"
    >
        <div class="flex justify-center w-full max-w-4xl">
            <Infobox
                :title="content.title"
                :link="content.link.url"
                :link-text="content.link.text"
            >
                {{ content.text }}
            </Infobox>
        </div>
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
