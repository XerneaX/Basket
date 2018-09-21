<template>
    <div class="col-md-5">
        <div class="col-md-11 card">
            <div class="card-body">
                <div class="form-group">
                    <label>Ürün Adı</label>
                    <input type="text" class="form-control" v-model="product.name" placeholder="adını giriniz">
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label>Ürün Adeti</label>
                        <input type="text" class="form-control" v-model="product.number" placeholder="adetini giriniz">
                    </div>
                    <div class="form-group col-md-6">
                        <label>Ürün Fiyatı</label>
                        <input type="text" class="form-control" v-model="product.price" placeholder="fiyatını giriniz">
                    </div>
                </div>
                <button class="btn btn-outline-info btn-block" @click="addProduct(product)">Ekle!</button>
            </div>
        </div>
    </div>

</template>

<script>
    import {eventBus} from "./main";

    export default {
        name: "ProductAdd",
        data() {
            return {
               product:{
                   name: "",
                   number: "",
                   price: "",
                   image: null,
                   amount: "",
               },
               imageUrl: null
            }
        },
        methods:{
            addProduct(product){
                this.product = product;
                this.product.image = this.imageUrl;
                this.calculateAmount(this.product);
                eventBus.sendProduct(product);
            },
            calculateAmount(product){
               product.amount = product.number * product.price;
            }
        },
        created(){
            eventBus.$on("imageUrlSend", (imageUrl)=>{
               this.imageUrl = imageUrl;
            })
        }

    }
</script>

<style scoped>

</style>