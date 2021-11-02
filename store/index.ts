import { GetterTree, ActionTree, MutationTree } from 'vuex'
interface Product {
  id: number,
  title: string,
  category: string,
  description: string,
  image: string,
  price: object
}
interface Cart {
  id:number,
  userId:number,
  date:string,
  products: Array<string>
}

export const state = () => ({
  product: {} as Product,
  products: [] as Array<Product>,
  carts: {} as Cart,
  categories: [] as Array<string>
})
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_PRODUCTS: (state: any, payload: Array<Product>) => {
    state.products = payload
  },
  SET_CARTS: (state: any, payload: Cart) => {
    state.carts = payload
  },
  SET_CATEGORIES: (state: any, payload: Array<string>) => {
    state.categories = payload
  },
  SET_PRODUCT: (state: any, payload: Product) => {
    state.product = payload
  },
}

export const actions: ActionTree<RootState, RootState> = {
  /**Get products
   *
   * @param commit
   */
  getProducts({commit}){
    this.$axios.get('/products').then(res => {
      commit('SET_PRODUCTS', res.data)
    })
  },

  getProduct({commit},id){
    this.$axios.get(`/products/${id}`).then(res => {
      commit('SET_PRODUCT', res.data)
    })
  },

  /**Get All Categories
   *
   * @param commit
   */
  async getCategories({commit}){
    await this.$axios.get('/products/categories').then(res => {
      commit('SET_CATEGORIES', res.data)
    })
  },

  async filterProducts({commit},category: string){
    await this.$axios.get(`/products/category/${category}`).then(res => {
      commit('SET_PRODUCTS', res.data)
    });
  },

  /**Get All carts
   *
   * @param commit
   */
  async getCarts({commit}){
    await this.$axios.get('/carts/5').then(res => {
      commit('SET_CARTS', res.data)
    })
  }
}

