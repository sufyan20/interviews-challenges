<template>
  <div class="bg-white">
    <div :class="cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'" class="fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300">
      <div class="flex items-center justify-between">
        <h3 class="text-2xl font-medium text-gray-700">Your cart</h3>
        <button @click="cartOpen = !cartOpen" class="text-gray-600 focus:outline-none">
          <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      <hr class="my-3">
      <div class="flex justify-between mt-6">
        <div class="flex">
          <img class="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="">
          <div class="mx-3">
            <h3 class="text-sm text-gray-600">Mac Book Pro</h3>
            <div class="flex items-center mt-2">
              <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
              <span class="text-gray-700 mx-2">2</span>
              <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
            </div>
          </div>
        </div>
        <span class="text-gray-600">20$</span>
      </div>
      <div class="flex justify-between mt-6">
        <div class="flex">
          <img class="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="">
          <div class="mx-3">
            <h3 class="text-sm text-gray-600">Mac Book Pro</h3>
            <div class="flex items-center mt-2">
              <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
              <span class="text-gray-700 mx-2">2</span>
              <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
            </div>
          </div>
        </div>
        <span class="text-gray-600">20$</span>
      </div>
      <div class="flex justify-between mt-6">
        <div class="flex">
          <img class="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="">
          <div class="mx-3">
            <h3 class="text-sm text-gray-600">Mac Book Pro</h3>
            <div class="flex items-center mt-2">
              <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
              <span class="text-gray-700 mx-2">2</span>
              <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
            </div>
          </div>
        </div>
        <span class="text-gray-600">20$</span>
      </div>
      <div class="mt-8">
        <form class="flex items-center justify-center">
          <input class="form-input w-48" type="text" placeholder="Add promocode">
          <button class="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <span>Apply</span>
          </button>
        </form>
      </div>
      <a class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
        <span>Chechout</span>
        <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </a>
    </div>
    <main class="my-8">
      <div class="container mx-auto px-6">
        <h3 class="text-gray-700 text-2xl font-medium">Checkout</h3>
        <div class="flex flex-col lg:flex-row mt-8">
          <div class="w-full lg:w-1/2 order-2">
            <div class="flex items-center">
              <button class="flex text-sm text-blue-500 focus:outline-none"><span class="flex items-center justify-center text-white bg-blue-500 rounded-full h-5 w-5 mr-2">1</span> Contacts</button>
              <button class="flex text-sm text-gray-700 ml-8 focus:outline-none"><span class="flex items-center justify-center border-2 border-blue-500 rounded-full h-5 w-5 mr-2">2</span> Shipping</button>
              <button class="flex text-sm text-gray-500 ml-8 focus:outline-none" disabled><span class="flex items-center justify-center border-2 border-gray-500 rounded-full h-5 w-5 mr-2">3</span> Payments</button>
            </div>
            <form class="mt-8 lg:w-3/4">
              <div>
                <h4 class="text-sm text-gray-500 font-medium">Delivery method</h4>
                <div class="mt-6">
                  <button class="flex items-center justify-between w-full bg-white rounded-md border-2 border-blue-500 p-4 focus:outline-none">
                    <label class="flex items-center">
                      <input type="radio" class="form-radio h-5 w-5 text-blue-600" checked><span class="ml-2 text-sm text-gray-700">MS Delivery</span>
                    </label>

                    <span class="text-gray-600 text-sm">$18</span>
                  </button>
                  <button class="mt-6 flex items-center justify-between w-full bg-white rounded-md border p-4 focus:outline-none">
                    <label class="flex items-center">
                      <input type="radio" class="form-radio h-5 w-5 text-blue-600"><span class="ml-2 text-sm text-gray-700">DC Delivery</span>
                    </label>

                    <span class="text-gray-600 text-sm">$26</span>
                  </button>
                </div>
              </div>
              <div class="mt-8">
                <h4 class="text-sm text-gray-500 font-medium">Delivery address</h4>
                <div class="mt-6 flex">
                  <label class="block w-3/12">
                    <select class="form-select text-gray-700 mt-1 block w-full">
                      <option>NY</option>
                      <option>DC</option>
                      <option>MH</option>
                      <option>MD</option>
                    </select>
                  </label>
                  <label class="block flex-1 ml-3">
                    <input type="text" class="form-input mt-1 block w-full text-gray-700" placeholder="Address">
                  </label>
                </div>
              </div>
              <div class="mt-8">
                <h4 class="text-sm text-gray-500 font-medium">Date</h4>
                <div class="mt-6 flex">
                  <label class="block flex-1">
                    <input type="date" class="form-input mt-1 block w-full text-gray-700" placeholder="Date">
                  </label>
                </div>
              </div>
              <div class="flex items-center justify-between mt-8">
                <button class="flex items-center text-gray-700 text-sm font-medium rounded hover:underline focus:outline-none">
                  <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                  <span class="mx-2">Back step</span>
                </button>
                <button class="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <span>Payment</span>
                  <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </form>
          </div>
          <div class="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
            <div class="flex justify-center lg:justify-end">
              <div class="border rounded-md max-w-md w-full px-4 py-3" v-if="this.products.length">
                <div class="flex items-center justify-between">
                  <h3 class="text-gray-700 font-medium">Order total (2)</h3>
                  <span class="text-gray-600 text-sm">Edit</span>
                </div>
                <div v-for="p in cart.products" class="flex justify-between mt-6">
                  <div class="flex">
                    <img class="h-20 w-20 object-cover rounded" :src="products.find(pro => pro.id === p.productId).image" alt="">
                    <div class="mx-3">
                      <h3 class="text-sm text-gray-600">{{products.find(pro => pro.id === p.productId).title}}</h3>
                      <div class="flex items-center mt-2">
                        <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                          <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </button>
                        <span class="text-gray-700 mx-2">2</span>
                        <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                          <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <span class="text-gray-600">20$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  computed: {
    cart(){
      return this.$store.state.carts
    },
    products(){
      return this.$store.state.products
    }
  },
  created() {
    if (this.products.length === 0){
      this.$store.dispatch('getProducts')
    }
  }
}
</script>
