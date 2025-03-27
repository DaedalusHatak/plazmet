<template>
	<v-container center>
	  <HeaderBackground v-bind:heading="start"></HeaderBackground>
	</v-container>
  
	<v-container>
	  <v-row>
		<!-- Iteracja po zdjęciach w galerii -->
		<v-col
		  v-for="(image, index) in images"
		  :key="index"
		  cols="12"
		  sm="6"
		  md="4"
		>
		  <v-card>
			<!-- Miniatura zdjęcia -->
			<v-img
			  :src="image.src"
			  alt="Zdjęcie maszyny/elementów"
			  height="300px"
			  @click="openDialog(index)"
			>
			  <v-hover>
				<template v-slot:default="{ isHovering, props }">
				  <v-card-title v-bind="props" v-if="isHovering">
					<span class="white--text">{{ image.title }}</span>
				  </v-card-title>
				</template>
			  </v-hover>
			</v-img>
		  </v-card>
		</v-col>
	  </v-row>
  
	  <!-- Dialog do wyświetlania większej wersji zdjęcia -->
	  <v-dialog v-model="dialog" max-width="800px">
		<v-card>
		  <v-carousel v-model="selectedIndex" cycle>
			<!-- Iteracja po zdjęciach w karuzeli -->
			<v-carousel-item
			  v-for="(image, index) in images"
			  :key="index"
			>
			  <v-img :src="image.src" alt="Selected Image" />
			</v-carousel-item>
		  </v-carousel>
  
		  <!-- Przycisk zamknięcia -->
		  <v-btn
			icon
			class="close-btn"
			@click="closeDialog"
			absolute
			top
			right
		  >
			<v-icon>mdi-close</v-icon>
		  </v-btn>
		</v-card>
	  </v-dialog>
	</v-container>
  </template>
  
  <script setup>
  // Komponenty
  import HeaderBackground from '../components/HeaderBackground.vue';
  
  import { ref } from 'vue';
  
  const dialog = ref(false); // Kontrolowanie stanu dialogu (otwarty/zamknięty)
  const selectedIndex = ref(0); // Indeks aktualnie wybranego zdjęcia
  const images = ref([
	{
	  src: '../assets/1.webp',
	  title: 'Image 1',
	},
	{
	  src: '../assets/1.webp',
	  title: 'Image 2',
	},
	{
	  src: '../assets/1.webp',
	  title: 'Image 3',
	},
	{
	  src: '../assets/1.webp',
	  title: 'Image 4',
	},
	{
	  src: '../assets/1.webp',
	  title: 'Image 5',
	},
	{
	  src: '../assets/1.webp',
	  title: 'Image 6',
	},
  ]);
  
  // Funkcja otwierająca dialog z większą wersją zdjęcia
  const openDialog = (index) => {
	selectedIndex.value = index;
	dialog.value = true;
  };
  
  // Funkcja zamykająca dialog
  const closeDialog = () => {
	dialog.value = false;
  };
  
  const start = 'Galeria';
  
  // Przywrócenie wysokości ekranu
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  </script>
  
  <style lang="scss" scoped>
  .v-img {
	cursor: pointer;
  }
  
  .close-btn {
	background: rgba(0, 0, 0, 0.5);
	color: white;
  }
  
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
  