<template>
	<v-container  center>
	  <HeaderBackground v-bind:heading="start">
		<p class="text-h6 mt-16 pt-16">
		  Cięcie materiału metodą tlenowego cięcia maszyną ECKERT.
		</p>
		<p class="text-h6 pa-12">
		  Cięcie blach, rur i innych elementów stalowych przy użyciu gazu tlenowego.
		</p>
	  </HeaderBackground>
	</v-container>
  
	<v-container class="padding">
	  <p class="text-h6 pa-0 py-12 text-md-h5 pa-sm-12">
		Nasza firma specjalizuje się w świadczeniu kompleksowych usług cięcia tlenem za pomocą maszyn ECKERT. Dzięki zaawansowanej technologii oraz doświadczeniu w branży, zapewniamy wysoką jakość, precyzyjność i efektywność wykonania każdego zlecenia. Usługi cięcia tlenem charakteryzują się:
	  </p>
  
	  <ul class="text-h6 pa-0 py-12">
		<li><strong>Precyzyjnym cięciem:</strong> Gwarantujemy dokładność cięcia i minimalizowanie błędów, co zmniejsza potrzebę dalszej obróbki materiału.</li>
		<li><strong>Wysoką wydajnością:</strong> Cięcie tlenem pozwala na szybkie przetwarzanie dużych ilości materiałów przy zachowaniu wysokiej jakości krawędzi cięcia.</li>
		<li><strong>Optymalizacją kosztów:</strong> Dzięki efektywnym procesom cięcia, zminimalizowane są koszty związane z materiałami i czasem produkcji.</li>
		<li><strong>Wszechstronnością:</strong> Maszyny ECKERT umożliwiają cięcie szerokiej gamy materiałów, w tym stali węglowej, stali nierdzewnej i innych stopów metali.</li>
	  </ul>
  
	  <p class="text-h6 pa-0 py-12">
		Cięcie tlenem to idealne rozwiązanie dla przedsiębiorstw poszukujących efektywnej i precyzyjnej technologii, szczególnie w przypadku cięcia grubszych materiałów, takich jak blachy o dużej grubości. Nasze maszyny ECKERT zapewniają nie tylko jakość cięcia, ale także oszczędności związane z zużyciem gazów i energii.
	  </p>
  
	  <p class="text-h6 pa-0 py-12">
		Dzięki zastosowaniu najnowszych technologii, cięcie tlenem pozwala na szybkie uzyskiwanie skomplikowanych kształtów i detali, co jest szczególnie istotne w przemyśle konstrukcji stalowych oraz produkcji maszyn.
	  </p>
  
	  <p class="text-h6 pa-0 py-12">
		Skorzystaj z naszych usług cięcia tlenem i zaufaj doświadczeniu w obróbce metali, które pozwala osiągnąć najlepsze rezultaty w krótszym czasie!
	  </p>
	</v-container>
  
  </template>
  
  <script setup>
	// Komponenty
	import HeaderBackground from '../components/HeaderBackground.vue';
	import MaterialList from '../components/MaterialList.vue';
  
	const start = 'Profesjonalne cięcie tlenem!';
  
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
  