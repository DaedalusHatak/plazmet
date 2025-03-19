<template>
	<v-container center>
		<HeaderBackground  v-bind:heading="start">
			<p class="text-h6 mt-16 pt-16">
				Cięcie materiału metodą Abrasive WaterJet(AWJ).
			</p>
			<p class="text-h6 pa-12"
				>Cięcie metalu, płytek, granitu, drewna, tworzyw sztucznych o grubości
				nie przekraczającej 200mm.</p
			></HeaderBackground
		></v-container
	>

  
	<v-container class="padding">
	  <p class="text-h6 pa-0 py-12 text-md-h5 pa-sm-12">
		Nasza firma specjalizuje się w świadczeniu kompleksowych usług cięcia
		strumieniem wody (abrasive waterjet), oferując rozwiązania najwyższej
		jakości. Dzięki innowacyjnym technologiom i doświadczonemu zespołowi,
		gwarantujemy precyzyjne, szybkie i efektywne wykonanie każdego zlecenia,
		niezależnie od stopnia skomplikowania. Nasza usługa charakteryzuje się:
	  </p>
  
	  <ul class="text-h6 pa-0 py-12">
		<li><strong>Wysoką jakością:</strong> zapewniamy dokładność i czystość cięcia, co minimalizuje potrzebę dalszej obróbki.</li>
		<li><strong>Skróconym czasem realizacji:</strong> efektywność naszych procesów pozwala na terminową realizację projektów.</li>
		<li><strong>Konkurencyjnymi cenami:</strong> oferujemy korzystne warunki współpracy bez kompromisów na jakości.</li>
	  </ul>
  
	  <p class="text-h6 pa-0 py-12">
		Dzięki elastyczności i nowoczesnemu sprzętowi, jesteśmy w stanie dostarczyć
		rozwiązania dostosowane do indywidualnych potrzeb naszych Klientów.
	  </p>
  
	  <p class="text-h6 pa-0 py-12">
		Zaufaj profesjonalistom i skorzystaj z naszych usług, by osiągnąć najlepsze
		rezultaty!
	  </p>
	</v-container>
  
	<v-container class="py-12 bg-dark">
	  <MaterialList />
	</v-container>
  
	<!-- <v-container fluid class="bg-dark pa-0">
	  <h1 class="pt-5">Nasza galeria:</h1>
	  <CarouselImage />
	</v-container> -->
  </template>
  
  <script setup>
  // Komponenty
  import HeaderBackground from '../components/HeaderBackground.vue';
  import CarouselImage from '../components/CarouselImage.vue';
  import MaterialList from '../components/MaterialList.vue';
  
  const start = 'Profesjonalne cięcie wodą!';
  
  // Przywrócenie wysokości ekranu
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  </script>
  
  <style lang="scss" scoped>
  .bg-dark {
	color: white;
	background-color: #212121;
  }

  .word-break {
	word-break: break-all;
  }
  
  .v-container {
	overflow: hidden;
	padding: 0;
	margin: 0;
	max-width: 100%;
  }
  
  ul {
	list-style-type: none;
	padding-left: 0;
  }
  
  ul li {
	margin-bottom: 10px;
  }
  </style>
  