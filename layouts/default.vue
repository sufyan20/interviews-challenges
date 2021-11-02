<template>
  <div class="bg-white">
    <cart-sidebar
      :show="viewCart"
      :carts="carts"
      @close="viewCart = false"
    />

    <header class="relative bg-white">
      <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="h-20 flex items-center">
            <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
            <button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden">
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <nuxt-link to="/">
                <span class="sr-only">Workflow</span>
                <img class="h-16 w-auto" src="~assets/logo.png" alt="">
              </nuxt-link>
            </div>

            <div class="ml-auto flex items-center">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
                <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
              </div>

              <!-- Search -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <!-- Heroicon name: outline/search -->
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </a>
              </div>

              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6" @click="viewCart = true">
                <a href="#" class="group -m-2 p-2 flex items-center">
                  <!-- Heroicon name: outline/shopping-bag -->
                  <svg class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{{carts.products ? carts.products.length : 0}}</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <nuxt/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      viewCart: false
    }
  },
  computed: {
    carts(){
      return this.$store.state.carts
    }
  }
}
</script>
