<template>
	<v-container class="text-md-h5 ">
		<v-list  variant="plain" class="pb-5 dark">
			<p class="subheader"
				><b
					>Cięcie wodą daje możliwość wycinania z precyzją 0,1mm materiałów:</b
				></p
			>
	
				<div class="wrap-item">
					<v-list-item class="item" v-for="(item, i) in material" :key="i">
					{{ item }}
			
			</v-list-item>
			<v-list-item class="item other-materials">
				Inne materiały – skontaktuj się z nami!
			</v-list-item>
				</div>
		</v-list>
    
		<p class="text-h5 pb-8">
			<a href="tel:+48-732-721-521">+48 732 721 521</a></p
		>
		<p class="text-h5 text-md-h5 pb-8 word-break">
			<a href="mailto:uslugiwoda3d@wp.pl">USLUGIWODA3D@WP.PL</a></p
		>
		<p class="text-red-darken-2"
			>Próbki wycięcia nietypowego materiału wykonamy za darmo</p
		>
	</v-container>
</template>

<script setup>
const material = [
	'Płytki gresowe',
	'Płytki ceramiczne',
	'Kamień naturalny i konglomerat',
	'Stal węglowa',
	'Stal nierdzewna',
	'Metale kolorowe i stopy metali kolorowych',
	'Szkło i poliwęglan',
	'Ceramika',
	'Gres',
	'Guma i tworzywa sztuczne',
	'Drewno i płyty drewnopochodne',
];
</script>

<style scoped>
.wrap-item{
	display: flex;
	flex-direction: column;
	max-width: 100%;
	justify-content: center;
	align-items: center;
}
.v-list-item{
	text-align: left;
	width:100%;
	font-size: 21px;
}
.other-materials{
	color:yellow;
	font-weight: 700;
}
@media screen and (min-width:400px) {
	.v-list-item{
	text-align: left;
	width:600px;
}
}
.subheader{
	font-size: 32px;
	
	color:white;
	width: 100%;
	justify-content: space-around;
	padding-bottom: 20px;
}
.dark{
	background-color: #212121;
	color:white;
	
}

a {
	color: #e25a00;
	
}
</style>
