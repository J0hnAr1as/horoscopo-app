<template>
  <div class="p-6 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Consulta tu Horóscopo</h1>

    <input
      v-model="fecha"
      @input="controller.validarFecha(fecha)"
      type="text"
      placeholder="DD-MM-AAAA"
      class="border p-2 w-full mb-2"
    />

    <button
      :disabled="!controller.estado.botonActivo"
      @click="consultar"
      class="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
    >
      Consultar
    </button>

    <transition name="fade">
      <div
        v-if="controller.estado.mostrarMensaje"
        class="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded"
      >
        {{ controller.estado.mensaje }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import HoroscopeController from '../controllers/HoroscopeController.js';

const fecha = ref('');
const controller = HoroscopeController(reactive({}));
const consultar = () => controller.consultarHoroscopo(fecha.value);
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>
