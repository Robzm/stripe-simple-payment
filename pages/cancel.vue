<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <div class="text-red-500 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Pago cancelado</h1>
      <p class="text-gray-600 mb-6">No se completó tu compra. Si fue un error, puedes intentarlo nuevamente.</p>
      <NuxtLink to="/" class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
        Volver a la tienda
      </NuxtLink>
    </div>
  </div>
</template>