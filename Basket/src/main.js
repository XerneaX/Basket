import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods:{
      sendImageUrl(imageUrl){
        this.$emit("imageUrlSend", imageUrl);
      },
      sendProduct(product){
        this.$emit("productSend", product);
      }
    }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
