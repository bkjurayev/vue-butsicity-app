<template>
  <div class="grido">
    <button class="my-btn" @click="onClose()">Close</button>
    <button @click="onToggleButton()">Toggle</button>
    <button @click="sendUserName()">Send User Name</button>
    <button @click="sendUserName2()">Send User Name 2</button>
    <h1>{{ tg.initDataUnsafe?.user?.username }}</h1>

    <VHeader />

    <div class="blog">
      <div class="container">
        <div class="blog__body">
          <div class="blog__left">
            <RouterLink to="/products">
              <img src="../assets/imgs/gif-boots.gif" alt="" />
              <div class="blog__left__footer">
                <h1 class="blog__left__footer__title">Butsalar</h1>
                <h4 class="blog__left__footer__subtitle">Nike & Adidass</h4>
              </div>
            </RouterLink>
          </div>
          <div class="blog__columns">
            <div class="blog__col">
              <h4 class="blog__col__subtitle">muhimlari</h4>
              <img
                src="../assets/imgs/BLOG-IMAGE.jpg"
                alt=""
                class="blog__col__img"
              />
              <h3 class="blog__col__title">BLOG</h3>
            </div>
            <div class="blog__col">
              <h5 class="blog__col__subtitle">Bizning xizmatlar</h5>
              <div class="blog__col__center">
                <img
                  src="../assets/imgs/service1.webp"
                  alt=""
                  class="blog__col__center__img"
                />
                <img
                  src="../assets/imgs/service2.webp"
                  alt=""
                  class="blog__col__center__img"
                />
                <img
                  src="../assets/imgs/service3.webp"
                  alt=""
                  class="blog__col__center__img"
                />
              </div>
              <h3 class="blog__col__title">XIZMATLAR</h3>
            </div>
            <div class="blog__col">
              <h5 class="blog__col__subtitle">eng saralari</h5>
              <img
                src="../assets/imgs/boots-png.png"
                alt=""
                class="blog__col__img1"
              />
              <h4 class="blog__col__title">BUTSALAR</h4>
            </div>
            <div class="blog__col">
              <h5 class="blog__col__subtitle">biz bilan bog'laning</h5>
              <img
                src="../assets/imgs/col 3.webp"
                alt=""
                class="blog__col__img2"
              />
              <h3 class="blog__col__title">ALOQA</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup>
import axios from "axios";
import { onMounted } from "vue";
import VHeader from "../components/v-header.vue";
import { ref } from "vue";

const tg = window.Telegram.WebApp;
const userName = ref(window.Telegram.WebApp.initDataUnsafe?.user);
const data = ref("Form data");

const token = "7274542930:AAF5DXbWx795NBuPj1NqAv-tFWKqcOwjB8Q";
const chat_id = "383213241";

const onClose = () => {
  tg.close();
};
const sendUserName = async () => {
  await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
    chat_id: chat_id,
    text: JSON.stringify(tg.initDataUnsafe),
  });
};
const sendUserName2 = async () => {
  await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
    chat_id: chat_id,
    text: JSON.stringify(userName.value),
  });
};
const onToggleButton = () => {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.show();
  }
};
// btn.addEventListener("click", alert);
window.Telegram.WebApp.onEvent("mainButtonClicked", onClose);
// onMounted(
//   tg.MainButton.setParams({
//     text: "Отправить данные",
//   })
// );
</script>




<style lang="scss" scoped>
button {
  width: 100px;
  height: 30px;
  color: #fff;
}
</style>
