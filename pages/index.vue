<template>
    <!-- Hero -->
    <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900">🎮 Explora Nuestros Juegos Más Vendidos</h1>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Mejora tu colección con los videojuegos mejor valorados
            para todas las plataformas. Envío gratis en pedidos superiores a S/ 50.</p>

    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-7xl mx-auto">

        <!-- card -->
        <div v-for="product in products" :key="product.id"
            class="bg-white shadow-lg hover:shadow-2xl transition group w-[200px]">
            <div class="relative h-[250px] overflow-hidden">
                <img :src="product.images[0] || 'https://via.placeholder.com/300x400'" :alt="product.name"
                    class="object-cover group-hover:scale-105 transition-transform" />
                <span class="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">NEW</span>
            </div>
            <div class="p-4">
                <h3 class="text-base font-bold text-gray-900 mb-1">{{ product.name }}</h3>
                <p class="text-sm text-gray-500 mb-2">Xbox Series X|S · Pre-Orden</p>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-base font-semibold text-green-600">S/ {{ (product.default_price?.unit_amount /
                        100).toFixed(2) || '--.--' }}</span>
                    <button
                    @click="handleCheckout(product.default_price?.id)"
                        class="bg-black text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 text-sm cursor-pointer">Comprar</button>
                </div>
            </div>
        </div>




    </div>
</template>


<script setup>


const { data: products } = await useFetch('/api/stripe-products')

const handleCheckout = async (priceId) => {
  if (!priceId) {
    console.error('No price ID for this product');
    return;
  }

  try {
    const { url } = await $fetch('/api/checkout-session', {
      method: 'POST',
      body: { priceId }
    });
    
    
    window.location.href = url;
  } catch (error) {
    console.error('Error:', error);
    
  }
};



</script>
<style lang="">

</style>