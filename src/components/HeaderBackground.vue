<template>
  <div
    class="d-flex flex-column fill-height block align-center background justify-center text-white"
  >
    <h1 class="text-h6 text-sm-h3  text-lg-h2">{{ props.heading || "Plazmet – Profesjonalne usługi cięcia! Cięcie płytek, gresu, obróbka metali!" }}</h1>
    <slot> </slot>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  heading: {
    type: String,
  },
});
</script>
<style>
.v-container {
  padding: 0;
  margin: 0;
  max-width: 100%;
}
.background {
  background-image: url("../assets/background-dark-top.jpg");
  background-attachment: fixed;
  position: relative;
  background-position: top;
  min-height: 500px;
}
img {
  object-fit: contain;
  height: 100%;
  width: 100%;
}
</style>
