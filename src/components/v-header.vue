<template>
    <div class="header">
        <div class="container">
            <div class="header__body">
                <div class="header__logo">
                    <h1 class="header__logo__title">
                        <RouterLink to="/">Butsi City</RouterLink>
                    </h1>
                </div>
                <ul class="header__menu">
                    <RouterLink to="/">
                        <li class="header__menu__item active">Asosiy</li>
                    </RouterLink>
                    <RouterLink to="/products">
                        <li class="header__menu__item">Butsa</li>
                    </RouterLink>
                    <RouterLink to="/services">
                        <li class="header__menu__item">Xizmat</li>
                    </RouterLink>
                    <RouterLink to="/blog">
                        <li class="header__menu__item">Blog</li>
                    </RouterLink>
                    <RouterLink to="/team">
                        <li class="header__menu__item">Jamoa</li>
                    </RouterLink>
                    <RouterLink to="/contact">
                        <li class="header__menu__item">Aloqa</li>
                    </RouterLink>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";


</script>