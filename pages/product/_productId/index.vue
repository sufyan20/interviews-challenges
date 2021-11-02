<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div class="flex items-center">
              <nuxt-link to="/" class="mr-2 text-sm font-medium text-gray-900">
                Products
              </nuxt-link>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <a href="#" class="mr-2 text-sm font-medium text-gray-900 text-blue-500">
                Details
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div class="mt-6 pb-10 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 pr-10 pl-14">
          <img :src="product.image" alt="Model wearing plain white basic tee." class="w-full h-full object-center object-cover">
        </div>
        <div class="pt-7 pl-3">
          <h1 class="text-2xl  font-bold tracking-tight text-gray-900 sm:text-3xl">
            {{product.title}}
          </h1>
          <h2 class="mb-2 mt-4 text-2xl font-bold">Description</h2>
          <p class="text-3xl text-gray-900 float-right w-1/2" style="text-align: right">
            ${{product.price}}
          </p>
          <div class="space-y-6">
            <p class="text-base text-gray-900">{{product.description}}</p>
          </div>
          <div class="mt-4">
            <p class="text-base text-2xl text-gray-900 text-blue-800">
              {{product.category}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 export default {
   created() {
     this.$store.dispatch('getProduct',this.$route.params.productId)
   },
   computed: {
     product(){
       return this.$store.state.product || {}
     }
   }
 }
</script>
