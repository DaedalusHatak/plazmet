<template>
	<v-table class="maximum border mx-auto w-100  bg-central" theme="dark">
		<thead>
			<tr>
				<th class="text-center">Usługa</th>
				<th class="text-center"> Cena </th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in priceTags" :key="item.name">
				<td>{{ item.name }}</td>
				<td>{{ item.price }}</td>
			</tr>
		</tbody>
	</v-table>
</template>


<script setup>
const priceTags = [
	{ name: 'Cięcie płytek 1m.b. (kąt prosty)', price: '20zł' },
	{ name: 'Cięcie płytek 1m.b. (kąt 45st)', price: '40zł' },
	{ name: 'Minuta cięcia (inny materiał)', price: '7zł' },
	{ name: 'Przygotowanie projektu', price: 'indywidualna' },
];
</script>

<style scoped>
.maximum {
	max-width: 1000px !important;
}
</style>
