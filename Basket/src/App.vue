<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr>
    <div class="row">

      <product-picture></product-picture>

      <product-add></product-add>

    </div>



    <br><br>
    <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" :style="{width:loadProductPercent+'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
       {{loadProduct}}/10
      </div>
    </div>
    <br><br>
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr>
    <div class="row product-container">
    <product-list :product="product" v-for="product in productList"></product-list>

    </div>

  </div>


</template>

<script>
  import ProductPicture from './ProductPicture'
  import ProductAdd from './ProductAdd'
  import {eventBus} from "./main";
  import ProductList from './ProductList';
  export default {
      components:{
          ProductList,
          ProductAdd,
          'product-picture': ProductPicture,
          'product-add': ProductAdd,
          'product-list': ProductList
      },
    data() {
      return {
        loadProductPercent: 0,
        loadProduct: 0,
        productList: [],
        product : {
            selectedImage: null
        }
      }
    },
    methods: {

    },
     created(){debugger;
          eventBus.$on("productSend", (product)=>{
              if(this.productList.length <10)
                this.productList.push(product);
              else
                  alert("You can add only 10 product");
          })
     },
   watch:{
          productList(value){debugger;
              let size = value.length;
              this.loadProduct = size;
              this.loadProductPercent = size * 10;
          }
   }
  }
</script>

<style>
  body {
    background-color: aliceblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .product-container{
    margin-left: 15px;
  }
  .bg-info{
    background-color:green;
  }

</style>

