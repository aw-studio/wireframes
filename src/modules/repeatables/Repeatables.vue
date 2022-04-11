<template>
    <div>
        <template v-for="(repeatable, key) in repeatables" :key="key"/>
            <component
                v-if="repeatable.type in repeatableComponents"
                :is="repeatableComponents[repeatable.type]"
                :rep="repeatable.value"
            />
        </template>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Repeatables } from '../../types/repeatables';
import { repeatableComponents } from './index';

const props = defineProps({
    repeatables: {
        type: Object as PropType<Repeatables>,
        required: true,
    },
});
</script>
