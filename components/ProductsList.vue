<template>
  <div class="lg:col-span-3">
     <div class="bg-white">
    <div class="max-w-2xl mx-auto py-0 px-2 sm:py-1 sm:px-3 lg:max-w-7xl lg:px-0">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
        Latest Products
      </h2>
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative cursor-pointer" @click="$router.push(`/product/${product.id}`)">
          <div class="w-full min-h-90 aspect-w-1 aspect-h-1 rounded-md  overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img :src="product.image" :alt="product.title">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a>
                  <span aria-hidden="true" class="absolute inset-0"></span>
                   {{product.title}}
                </a>
              </h3>
              <p class="mt-2 text-sm font-bold text-gray-500">
                <span class="float-left capitalize">{{product.category}}</span>
                <span class="float-right">${{product.price}}</span>
              </p>
            </div>
          </div>
        </div>
        <!-- More products... -->
      </div>
    </div>
  </div>
  </div>
</template>
<script lang="ts">
 export default {
   computed: {
     products(): Object{
       return this.$store.state.products
     }
   }
 }
</script>
