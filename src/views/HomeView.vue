<template>
	<v-container center>
	  <HeaderBackground v-bind:heading="start">

		<p class="text-h6 pa-12">
		  Cięcie materiałów metodą tlenową i wodną (WaterJet) – precyzyjne, szybkie i efektywne rozwiązania.
		</p>
		<p class="text-h6 pa-12">
		 Cięcie oraz zacinanie pod kątem 45° płytek, kamienia i innych!
		</p>

	  </HeaderBackground>
	</v-container>
  
	<v-container class="padding">
	  <p class="text-h6 pa-0 py-12 text-md-h5 pa-sm-12">
		Firma <b>Plazmet</b> specjalizuje się w dostarczaniu kompleksowych usług cięcia tlenem, wodą (waterjet) oraz obróbką stali dla przemysłu oraz klientów indywidualnych. Dzięki innowacyjnym technologiom, nowoczesnym maszynom i zespołowi wykwalifikowanych specjalistów, oferujemy wysokiej jakości usługi cięcia, które spełniają nawet najbardziej wymagające standardy.
	  </p>
  
	  <p class="text-h6 pa-0 py-12">
		Nasze usługi obejmują cięcie szerokiej gamy materiałów, takich jak stal węglowa, stal nierdzewna, tworzywa sztuczne, ceramika, kamień i wiele innych. Nasza oferta to:
	  </p>
  
	  <ul class="text-h6 pa-0 py-12">
		<li><strong>Cięcie tlenowe:</strong> Wysokiej jakości cięcie blach i rur z wykorzystaniem gazu tlenowego. Idealne do cięcia grubych materiałów stalowych.</li>
		<li><strong>Cięcie wodą (WaterJet):</strong> Nowoczesna metoda cięcia materiałów przy użyciu strumienia wody pod wysokim ciśnieniem, doskonała do precyzyjnego cięcia różnych materiałów, w tym kamienia, ceramiki i tworzyw sztucznych.</li>
	  </ul>
  
	  <p class="text-h6 pa-0 py-12">
		Jesteśmy w stanie zaoferować zarówno standardowe usługi cięcia, jak i rozwiązania dostosowane do indywidualnych potrzeb naszych Klientów. Dzięki elastyczności w procesach produkcyjnych, realizujemy projekty w krótkim czasie, zachowując wysoką jakość i precyzję wykonania.
	  </p>
	</v-container>
  
	<v-container class="py-12 px-12 bg-dark">
	  <h2 class="text-h4 text-center text-white">Nasza oferta</h2>
	  <v-row class="text-center">
		<v-col cols="12" sm="6" md="4">
		  <v-card class="mx-auto my-4" color="#994739" dark>
			<v-card-title class="text-h5">Cięcie Tlenowe</v-card-title>
			<v-card-subtitle class="text-h6">Szybkie i wydajne cięcie blach, rur oraz innych materiałów stalowych</v-card-subtitle>
			<v-card-text>
			  Cięcie tlenem jest doskonałą metodą obróbki materiałów metalowych. Umożliwia szybkie i precyzyjne cięcie blach o dużej grubości, przy minimalnym wpływie na strukturę materiału.
			</v-card-text>
			<v-card-actions>
			  <v-btn to="/ciecie-tlenem" text>Dowiedz się więcej</v-btn>
			</v-card-actions>
		  </v-card>
		</v-col>
  
		<v-col cols="12" sm="6" md="4">
		  <v-card class="mx-auto my-4" color="#51515F" dark>
			<v-card-title class="text-h5">Cięcie Wodą</v-card-title>
			<v-card-subtitle class="text-h6">Precyzyjne cięcie materiałów takich jak kamień, ceramika, tworzywa sztuczne</v-card-subtitle>
			<v-card-text>
			  Dzięki metodzie cięcia wodą (waterjet), jesteśmy w stanie ciąć materiały o różnej twardości i grubości, uzyskując perfekcyjne krawędzie bez wytwarzania wysokiej temperatury.
			</v-card-text>
			<v-card-actions>
			  <v-btn to="/waterjet" text>Dowiedz się więcej</v-btn>
			</v-card-actions>
		  </v-card>
		</v-col>
  
		<v-col cols="12" sm="6" md="4">
		  <v-card class="mx-auto my-4" color="#ccc" dark>
			<v-card-title class="text-h5">Usługi na Miary</v-card-title>
			<v-card-subtitle class="text-h6">Indywidualne podejście do każdego projektu</v-card-subtitle>
			<v-card-text>
			  Nasza oferta jest w pełni elastyczna. Dostosowujemy proces cięcia do specyficznych potrzeb klienta, oferując personalizację w zakresie materiałów, kształtów i wymagań technicznych.
			</v-card-text>
			<v-card-actions>
			  <v-btn flat to="/about" text>Skontaktuj się z nami</v-btn>
			</v-card-actions>
		  </v-card>
		</v-col>
	  </v-row>
	</v-container>
  
	<v-container class="padding">
	  <p class="text-h6 pa-0 py-12">
		<b>Plazmet</b> to firma, która stawia na jakość i innowacje. Nasze maszyny do cięcia tlenowego oraz wodnego (waterjet) są wyposażone w najnowsze technologie, które pozwalają na realizację nawet najbardziej skomplikowanych zleceń. Dzięki zaawansowanemu oprogramowaniu i precyzyjnym systemom sterowania, zapewniamy pełną kontrolę nad procesem cięcia i doskonałe rezultaty.
	  </p>
  
	  <p class="text-h6 pa-0 py-12">
		Skontaktuj się z nami już dziś, aby omówić szczegóły współpracy i dowiedzieć się, jak nasze usługi mogą pomóc w realizacji Twojego projektu.
	  </p>
	</v-container>
  

  </template>
  
  <script setup>
	// Komponenty
	import HeaderBackground from '../components/HeaderBackground.vue';
	import {onMounted} from 'vue'
	onMounted(() => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cięcie wodą i tlenem",
    "provider": {
      "@type": "Organization",
      "name": "Plazmet",
      "url": "https://www.plazmet.com.pl"
    },
    "description": "Profesjonalne cięcie materiałów metodą wodną oraz tlenową. Precyzyjne cięcie stali, granitu, drewna i innych materiałów.",
    "areaServed": {
      "@type": "Place",
      "name": "Polska"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Ciesielska 2/lok.12",
      "addressLocality": "Białystok",
      "addressRegion": "Podlaskie",
      "postalCode": "15-542",
      "addressCountry": "PL"
    }
  }

  // Dodanie JSON-LD do nagłówka
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.innerHTML = JSON.stringify(jsonLd)
  document.head.appendChild(script)
})
	const start = 'Plazmet – Profesjonalne usługi cięcia!';
  
	// Przywrócenie wysokości ekranu
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
  </script>
  
  <style lang="scss" scoped>
  .v-card-subtitle{
	word-break: break-normal !important;
	white-space: unset;
	
  }
  .v-card-actions{
	
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: auto;
  }
.v-card-text{
	margin-bottom: 40px;
}
  .v-card{
	
	max-width: 100% !important;
	height: 100%;
  }
  .v-row > *{
	padding-bottom: 50px;
	
  }
  .v-btn{
	font-size: 15px;
	font-weight: 700;
	width: 100%;
  }
	.bg-dark {
	  color: white;
	  background-color: #212121;
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
  
	.v-card {
	  max-width: 400px;
	  margin: 0 auto;
	}
  </style>
  