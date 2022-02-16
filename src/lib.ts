import Test from './test.vue'

export default {
  install(app: any) {
    app.component('vue-test', Test)
  }
}