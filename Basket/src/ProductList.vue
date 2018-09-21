<template>

        <div class="col-md-2 card"  >
            <img class="card-img-top" :src="product.image" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <small>
                    <strong>Adet :  </strong> {{product.number}}
                </small>
                <br>
                <small>
                    <strong>Fiyat : </strong>  {{product.price}}
                </small>
                <br>
                <small>
                    <strong>Tutar : </strong> {{product.amount}}
                </small>
            </div>
        </div>


</template>

<script>
    export default {
        name: "ProductList",
        props:["product"],
        data(){
            return{
                productList: [],
            }
        },
    }
</script>

<style scoped>
    .card{
        margin-right: 5px;
        margin-bottom: 5px;
    }

    .card:last-child{
        margin-right: 0px;
    }

    .col-md-2{
        max-width: 25.666667%!important;
    }


</style>