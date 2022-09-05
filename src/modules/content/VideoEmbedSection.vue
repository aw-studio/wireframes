<template>
    <div
        class="container flex my-16"
        :class="{ 'justify-center': content.centered }"
    >
        <div class="w-full max-w-4xl">
            <div style="padding: 56% 0 0 0; position: relative">
                <iframe
                    :src="
                        'https://player.vimeo.com/video/' +
                        content.id +
                        '?dnt=1'
                    "
                    style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    "
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { VideoEmbed } from '../../types/';

const props = defineProps({
    content: {
        type: Object as PropType<VideoEmbed>,
        required: true,
    },
});
</script>
