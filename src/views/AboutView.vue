<template>
	<v-container>
		<HeaderBackground v-bind:heading="start"></HeaderBackground
	></v-container>
	<v-container class="bg-grey-lighten-2">
		<ContactView
		 	v-model="theme.global.name.value"
			v-bind:on-change="watching()"
		v-bind:plazmet="plazmet"
			v-bind:waterjet="waterjet"
			v-bind:img="theme.global.name.value == 'dark' ? img=img1 : img=img2"
		></ContactView>
	</v-container>
</template>

<script setup>
import HeaderBackground from '../components/HeaderBackground.vue';
import ContactView from '../components/ContactView.vue';
import { useTheme } from 'vuetify';
import { watch } from 'vue';
const start = 'Kontakt';

const waterjet = ['+48 732 721 521', 'uslugiwoda3d@wp.pl'];
const plazmet = ['+48 602 615 104', 'plazmetbialystok@o2.pl'];
const theme = useTheme();
let img;
const img1 ='plazmet.png';
const img2 = 'plazmet.png';
watch(watching);

function watching()
{
	if(theme.global.name.value==='dark'){
	img=img1;
	
}
else{
	img=img2;
}
console.log(theme.global.name.value);
}
</script>
