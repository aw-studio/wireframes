<template>
    <footer class="bg-secondary-100 mt-auto w-screen py-12">
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
            <ul class="flex justify-end pt-10 items-center gap-10">
                <li v-for="entry in navigation">
                    <a :href="entry.link" class="text-primary font-semibold">
                        {{ entry.name }}
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { usePage } from "@inertiajs/inertia-vue3";
import { computed } from "vue";

const navigation = computed(() => {
    return usePage().props.value?.nav?.footer?.data?.items || [];
});
</script>
