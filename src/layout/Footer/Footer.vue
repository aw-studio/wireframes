<template>
    <footer class="w-screen py-12 mt-auto bg-secondary-100">
        <div class="container">
            <h3>
                <span class="inline-block">E-Mail</span> <br />
                <span class="inline-block">Telefon</span>
            </h3>
            <div>
                <span class="inline-block">Firma XYZ</span> <br />
                <span class="inline-block">Straße XYZ</span> <br />
                <span class="inline-block">PLZ/ Stadt XYZ</span> <br />
            </div>
            <ul class="flex items-center justify-end gap-10 pt-10">
                <li v-for="entry in navigation">
                    <a :href="entry.link" class="font-semibold text-primary">
                        {{ entry.name }}
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { usePage } from '@inertiajs/inertia-vue3';
import { computed } from 'vue';

const navigation = computed(() => {
    let nav: any = usePage().props.value?.nav;

    return nav?.footer?.data?.items || [];
});
</script>
