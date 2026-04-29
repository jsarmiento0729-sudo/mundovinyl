<template>
  <div class="container mx-auto px-6 py-24">
    <div class="flex items-center gap-x-4 mb-12">
      <router-link to="/" class="text-orange-600 hover:underline">Inicio</router-link>
      <span class="text-gray-400">/</span>
      <span class="text-blue-900 font-bold capitalize">{{ categorySlug.replace(/-/g, ' ') }}</span>
    </div>
    
    <h1 class="text-4xl font-extrabold text-blue-950 mb-8 capitalize">
      {{ categorySlug.replace(/-/g, ' ') }}
    </h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <p class="text-gray-500">Cargando productos de esta categoría...</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const categorySlug = route.params.id;
</script>