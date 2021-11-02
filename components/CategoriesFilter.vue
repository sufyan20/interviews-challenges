<template>
  <!-- Filters -->
  <form class="hidden lg:block">
    <h3 class="sr-only">Filter by categories</h3>
    <div class="py-6">
      <h3 class="-my-3 flow-root">
        <!-- Expand/collapse section button -->
        <button type="button" class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
          <span class="font-medium text-gray-900">
            Filter by categories
          </span>
        </button>
      </h3>
      <!-- Filter section, show/hide based on section state. -->
      <div class="pt-6" id="filter-section-1">
        <div class="space-y-4">
          <div  class="flex items-center">
            <input id="category" v-model="selectedCategory" name="category[]" value="all" type="radio" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
            <label for="category" class="ml-3 text-sm text-gray-600 capitalize">
              All
            </label>
          </div>
          <div v-for="category in categories" :key="category" class="flex items-center">
            <input :id="category" v-model="selectedCategory" name="category[]" :value="category" type="radio" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
            <label :for="category" class="ml-3 text-sm text-gray-600 capitalize">
              {{category}}
            </label>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script lang="ts">
export default {
  data(){
    return {
      selectedCategory: 'all'
    }
  },
  computed:{
    categories(): Object{
      return this.$store.state.categories
    }
  },
  watch: {
    selectedCategory: function (val: string){
      if (val === 'all')
        this.$store.dispatch('getProducts')
      else
        this.$store.dispatch('filterProducts',val)
    }
  }
}
</script>
