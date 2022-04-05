<template>
    <component
        :is="getTag()"
        :href="routeUrl"
        class="font-semibold inline-flex items-center focus:outline-none focus:ring-4 focus:ring-primary-200 justify-center py-2.5 border-2"
        :class="{
            'px-5': !square,
            'px-2.5': square,
            'pointer-events-none border-secondary-100': disabled,
            'text-white border-primary bg-primary':
                variant_ == 'primary' && !secondary && !disabled,
            'text-white bg-secondary-100':
                variant_ == 'primary' && !secondary && disabled,
            'text-primary border-primary bg-white':
                variant_ == 'secondary' && !primary && !disabled,
            'text-secondary-100 border-secondary-100 bg-transparent':
                variant_ == 'secondary' && !primary && disabled,
        }"
    >
        <slot />
    </component>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue';

const props = defineProps({
    disabled: {
        default: false,
        type: Boolean,
    },
    primary: {
        type: Boolean,
        default: false,
    },
    secondary: {
        type: Boolean,
        default: false,
    },
    route: {
        type: String,
        default: null,
    },
    square: {
        default: false,
        type: Boolean,
    },
});

const getVariant = (props: any) => {
    return computed(() => {
        if (props.primary) {
            return 'primary';
        }
        if (props.secondary) {
            return 'secondary';
        }
        return 'primary';
    });
};

const variant_ = getVariant(props);

const attrs = useAttrs();

const tag = 'href' in attrs ? 'a' : 'button';
const getTag = () => {
    if ('href' in attrs || props.route) {
        if (attrs.target == '_blank') {
            return 'a';
        }
        return 'a';
    }
    return 'button';
};

const routeUrl = computed(() => {
    if (props.route) {
        return props.route;
    }
});
</script>
