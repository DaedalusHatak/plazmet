<template>
	<v-row class="mx-auto bg-central">
		<v-col
			class="pl-sm-8 px-0 my-auto text-sm-h5 text-h6 d-flex flex-row align-center"
			cols="12"
		>
			<v-container class="py-10 text-center text-sm-left">
				<slot></slot>
				<p class="text-body-1">Ciesielska 2/lok. 12</p>
				<p><b>15-542 Białystok</b></p>
				<div>
					<p class="pt-4 mt-4">Cięcie tlenowe/plazmowe:</p>
					<p class="py-2 links my-2">
						<a :href="`tel:${plazmet[0]}`">{{ plazmet[0] }}</a>
					</p>
					<p class="py-2 links">
						<a class="mail" :href="`mailto:${plazmet[1]}`"
							>{{ plazmet[1].toUpperCase() }}
						</a></p
					>
				</div>
				<div>
					<p class="pt-4 mt-4">Cięcie wodą:</p>
					<p class="py-2 links my-2">
						<a :href="`tel:${waterjet[0]}`">{{ waterjet[0] }}</a>
					</p>
					<p class="py-2 links">
						<a class="mail" :href="`mailto:${waterjet[1]}`"
							>{{ waterjet[1].toUpperCase() }}
						</a></p
					>
				</div>
				<p class="pt-sx-8 pb-sx-12"
					><v-img
						class="d-sm-none d-flex"
						eager
						contain
						:src="'../assets/' + img"
						alt="logo"
					></v-img
				></p>
			</v-container>
			<v-container class="d-none d-sm-block">
				<v-img eager contain alt="logo" :src="'../assets/' + img"></v-img>
			</v-container>
		</v-col>

		<v-col cols="12" id="map" class="bordered pa-0 map text-center">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1693.103229578381!2d23.200386988458174!3d53.120793355667246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2183805b999e118f%3A0xe04798992d766d9a!2sPlazmet%20Ciecie%20i%20obr%C3%B3bka%20CNC%20metali!5e0!3m2!1spl!2spl!4v1742387436391!5m2!1spl!2spl"
				width="90%"
				height="600px"
				style="border: 0"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</v-col>
	</v-row>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	plazmet: {
		type: String,
	},
	waterjet: {
		type: String,
	},
	firm: {
		type: String,
	},
	img: {
		type: Image,
	},
});
</script>
<style scoped lang="scss">
.links {
	display: flex;
	flex-direction: column;
	font-size: 1.1rem;
}
.mail {
	word-break: break-all;
}
.bordered {
	
	border-top: 2px solid #212121;
}
div {
	padding-right: 0 !important;
	margin: auto !important;
}
.v-row {
	max-width: 1260px;
	min-height: 500px;
	.v-img {
		max-height: 300px !important;
	}
}
a {
	color: #e25a00;
}
</style>
