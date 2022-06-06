<template>
	<Header />
	<main class="mt-[90px] lg:mt-[189px]">
		<Image
			:src="page.attributes.header.url"
			v-if="page.attributes.header.url"
			class="w-full h-64"
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
import Image from '../../components/Ui/Image.vue';

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
