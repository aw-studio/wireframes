<template>
    <div class="container">
        <Infobox
            :title="rep.title"
            :link="rep.link.url"
            :link-text="rep.link.text"
        >
            {{ rep.text }}
        </Infobox>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Infobox as TInfobox } from '../../types/repeatables';
import Infobox from '../../components/Ui/Infobox.vue';

const props = defineProps({
    rep: {
        type: Object as PropType<TInfobox>,
        required: true,
    },
});
</script>
