<template>
  <div class="grido">
    <VHeader />

    <div class="work-top">
      <div class="container">
        <div class="work-top__body">
          <div class="work-top__left">
            <img
              src="../assets/imgs/komputer.webp"
              alt=""
              class="work-top__left__img"
            />
            <h1 class="work-top__left__title" @click="onSendData()">
              BUTSALAR
            </h1>
          </div>
          <div class="work-top__right">
            <h4 class="work-top__right__subtitle">eng saralari</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="work">
      <div class="container">
        <div class="work__body">
          <div class="work__columns">
            <VProduct v-for="item in products" :key="item.id" :product="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, onBeforeUnmount } from "vue";
import VHeader from "../components/v-header.vue";
import VProduct from "../components/v-product.vue";
import useProducts from "../composables/products";

//Send product's info to tg bot
const token = "7274542930:AAF5DXbWx795NBuPj1NqAv-tFWKqcOwjB8Q";
const chat_id = "383213241";

const { products } = useProducts();

// Пример данных, которые будут отправлены
const onSendData = async () => {
  const data = {
    products: ["addedItems", "secondproduct"],
    totalPrice: 1200,
    queryId: window.Telegram.WebApp.initDataUnsafe?.query_id,
  };
  await axios
    .post("http://45.130.148.152:8000/web-data", {
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// Пример данных, которые будут отправлены
// const selectedRegions = ref(products); // Замените это на вашу структуру данных

// const sendDataToTelegram = () => {
//   Telegram.WebApp.sendData(JSON.stringify(selectedRegions.value));
// };

onMounted(() => {
  // Установите обработчик события нажатия на mainButton
  Telegram.WebApp.onEvent("mainButtonClicked", onSendData);

  // Покажите mainButton, если он скрыт
  Telegram.WebApp.MainButton.show();
});

onBeforeUnmount(() => {
  // Удалите обработчик события нажатия на mainButton перед размонтированием компонента
  Telegram.WebApp.offEvent("mainButtonClicked", onSendData);
});
</script>