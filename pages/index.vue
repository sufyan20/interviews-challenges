<template>
  <div class="bg-white">
    <div>
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="products-heading" class="pt-6 pb-24">
          <h2 id="products-heading" class="sr-only">Products</h2>
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
            <categories-filter
            />
            <!-- products list -->
            <products-list/>
            <!-- /End Products list -->
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getCategories')
  }
}
</script>
