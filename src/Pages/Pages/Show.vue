<template>
	<Header />
	<main class="mt-[90px] lg:mt-[189px]">
		<img
			v-if="page.attributes.header"
			:src="page.attributes.header.url"
			class="object-cover w-full h-auto max-h-64"
		/>
		<div class="container">
			<h1>
				{{ page.attributes.h1 }}
			</h1>
		</div>
		<Repeatables :repeatables="page.content" />
	</main>
	<Footer />
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Footer, Header } from '../../layout';
import { Page } from '../../types/resources';
import { Repeatables } from '../../modules/repeatables';

const props = defineProps({
	page: {
		required: true,
		type: Object as PropType<Page>,
	},
});
</script>

<style>
#app {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>
