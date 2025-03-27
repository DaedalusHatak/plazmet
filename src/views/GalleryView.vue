<template>
    <v-container center>
      <HeaderBackground v-bind:heading="start"></HeaderBackground>
    </v-container>
  
    <v-container class="py-8 px-4">
      <v-row>
        <!-- Iteracja po zdjęciach w galerii -->
        <v-col v-for="(image, index) in images" :key="index" cols="12" sm="6" md="4">
          <v-card>
            <!-- Miniatura zdjęcia -->
            <v-img
              :src="image.src"
               alt="Zdjęcie maszyny/elementów"
              height="400px" 
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
      <v-dialog v-model="dialog" max-width="1200px" min-height="80%">
        <v-card>
          <v-carousel v-model="selectedIndex">
            <!-- Iteracja po zdjęciach w karuzeli -->
            <v-carousel-item v-for="(image, index) in images" :key="index">
              <v-img :src="image.src" alt="Selected Image" class="carousel-image" />
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
      src: '../assets/2.webp',
      title: 'Image 2',
    },
    {
      src: '../assets/3.webp',
      title: 'Image 3',
    },
    {
      src: '../assets/4.webp',
      title: 'Image 4',
    },
    {
      src: '../assets/5.webp',
      title: 'Image 5',
    },
    {
      src: '../assets/Woda3D-turbiny.webp',
      title: 'Image 6',
    },
    {
      src: '../assets/Woda3D-szklo.webp',
      title: 'Image 7',
    },
    {
      src: '../assets/Woda3D-turbiny2.webp',
      title: 'Image 8',
    },
    {
      src: '../assets/600x600c_sterownik_cnc.webp',
      title: 'Image 9',
    },
    {
      src: '../assets/IMG_20200129_110014.webp',
      title: 'Image 10',
    },
    {
      src: '../assets/IMG_20200129_110209.webp',
      title: 'Image 11',
    },
    {
      src: '../assets/IMG_20200129_110229.webp',
      title: 'Image 12',
    },
    {
      src: '../assets/IMG_20200129_110703.webp',
      title: 'Image 13',
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
  .v-carousel {
    height: max-content !important;
  }
  
  .v-img {
    width: auto;
    height: 100%;
    object-fit: contain; /* This ensures the image maintains its aspect ratio and fits within its container */
    cursor: pointer;
  }
  
  .carousel-image {
    width: 100%;
    height: 80vh; /* Ensures that the image will not exceed 80% of the viewport height */
    object-fit: contain; /* Prevents overflow while maintaining aspect ratio */
  }
  
  .close-btn {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    position: absolute;
    height: 50px;
    right: 0;
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
  