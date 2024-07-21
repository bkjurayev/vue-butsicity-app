<template>
    <div class="work__col">
        <RouterLink :to="{ name: 'product', params: { id: product.id } }">
            <h2 class="work__col__title">{{product.title}}</h2>
            <h5 class="work__col__subtitle">€ {{product.price}}</h5>
            <img :src="product.img" alt="">
        </RouterLink>
    </div>
</template>


<script setup>
import ProductView from "../views/ProductView.vue";


const { product } = defineProps(['product'])



</script>