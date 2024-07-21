<template>
  <div class="grido">
    <VHeader />

    <div class="about-top">
      <div class="container">
        <div class="about-top__body">
          <div class="about-top__left">
            <img
              src="../assets/imgs/img 1.webp"
              alt=""
              class="about-top__left__img"
            />
            <h1 class="about-top__left__title">ABOUT</h1>
          </div>
          <div class="about-top__right">
            <h4 class="about-top__right__subtitle">biography & abilities</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="product">
      <div class="container">
        <div class="product__body">
          <div class="product__left">
            <h1 class="product__left__title">{{ product.title }}</h1>
            <h4 class="product__left__subtitle">€ {{ product.price }}</h4>
            <img :src="product.img" alt="" class="product__left__img" />
          </div>
          <div class="product__right">
            <img
              src="../assets/imgs/circle.webp"
              alt=""
              class="product__right__img"
            />
            <p class="product__right__description">
              {{ product.description }}
            </p>

            <div class="product__right__colors">
              <h3 class="product__right__colors__title">Ranglar</h3>
              <ul class="product__right__colors__column">
                <li
                  class="product__right__colors__col"
                  :class="
                    isSelectColor != null && isSelectColor == color
                      ? '_active'
                      : ''
                  "
                  v-for="(color, index) in product.colors"
                  :key="index"
                  @click="
                    (el) => {
                      onSelectColor(color, el);
                    }
                  "
                >
                  {{ color }}
                </li>
              </ul>
            </div>

            <div class="product__right__sizes">
              <h3 class="product__right__sizes__title">O'lchamlar</h3>
              <ul class="product__right__sizes__column">
                <li
                  class="product__right__sizes__col"
                  :class="
                    isSelectSize != null && isSelectSize == size
                      ? '_active'
                      : ''
                  "
                  v-for="(size, index) in product.sizes"
                  :key="index"
                  @click="onSelectSize(size)"
                >
                  {{ size }}
                </li>
              </ul>
            </div>
            <!-- <div class="product__right__btn">
              <div class="product__right__btn__cart">Savatga qo'shish</div>
            </div> -->
            <div class="product__right__btn-buy" @click="onClickSendToTg()">
              Bir clickda sotib olish
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="tools">
      <div class="container">
        <div class="tools__body">
          <h1 class="tools__title">Tools And Softwares</h1>
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="container">
        <div class="menu__body">
          <div class="menu__itemlist">
            <div class="menu__item">
              <img
                src="../assets/imgs/webflow.webp"
                alt=""
                class="menu__item__img"
              />
              <h2 class="menu__item__wchrcipf">WEBFLOW</h2>
            </div>
            <div class="menu__item">
              <img
                src="../assets/imgs/css3.webp"
                alt=""
                class="menu__item__img"
              />
              <h2 class="menu__item__wchrcipf">CSS3</h2>
            </div>
            <div class="menu__item">
              <img
                src="../assets/imgs/html5.webp"
                alt=""
                class="menu__item__img"
              />
              <h2 class="menu__item__wchrcipf">HTML5</h2>
            </div>
            <div class="menu__item">
              <img
                src="../assets/imgs/react.webp"
                alt=""
                class="menu__item__img"
              />
              <h2 class="menu__item__wchrcipf">REACT</h2>
            </div>
            <div class="menu__item">
              <img
                src="../assets/imgs/chatgpt.webp"
                alt=""
                class="menu__item__img"
              />
              <h2 class="menu__item__wchrcipf">CHATGPT</h2>
            </div>
            <div class="menu__item">
              <img
                src="../assets/imgs/illustrator.webp"
                alt=""
                class="menu__item__img"
              />
              <h2 class="menu__item__wchrcipf">ILLUSTRATOR</h2>
            </div>
            <div class="menu__item">
              <img
                src="../assets/imgs/photoshop.webp"
                alt=""
                class="menu__item__img"
              />
              <h2 class="menu__item__wchrcipf">PHOTOSHOP</h2>
            </div>
            <div class="menu__item">
              <img
                src="../assets/imgs/figma.webp"
                alt=""
                class="menu__item__img"
              />
              <h2 class="menu__item__wchrcipf">FIGMA</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="awards">
      <div class="container">
        <div class="awards__body">
          <h1 class="awards__title">Awards</h1>
          <div class="awards__columns">
            <div class="awards__col">
              <h1 class="awards__col__title">BEST DESIGNER</h1>
              <h5 class="awards__col__subtitle">
                Top-tier award for exceptional innovation and creative designs
              </h5>
              <h2 class="awards__col__rotate">2023</h2>
            </div>
            <div class="awards__col">
              <h1 class="awards__col__title">ART OF THE WEEK</h1>
              <h5 class="awards__col__subtitle">
                Weekly Highlight: Inspiring Artworks for Your Enjoyment.
              </h5>
              <h2 class="awards__col__rotate">2022</h2>
            </div>
            <div class="awards__col">
              <h1 class="awards__col__title">CREATIVE POSTER AWARD</h1>
              <h5 class="awards__col__subtitle">
                Creative Poster Excellence: Recognizing <br />
                Outstanding Artistry.
              </h5>
              <h2 class="awards__col__rotate">2021</h2>
            </div>
            <div class="awards__col">
              <h1 class="awards__col__title">WEBSITE OF THE MONTH</h1>
              <h5 class="awards__col__subtitle">
                Website Showcase: Honoring Exceptional <br />
                Online Creativity.
              </h5>
              <h2 class="awards__col__rotate">2020</h2>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>


<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import VHeader from "../components/v-header.vue";
import VProduct from "../components/v-product.vue";
import useProducts from "../composables/products";

const route = useRoute();
const id = ref(route.params.id);
const { products } = useProducts();

const isSelectSize = ref(null);
const isSelectColor = ref(null);
const userId = ref(window.Telegram.WebApp.initDataUnsafe?.user?.id);

const product = products.value.find((el) => {
  return el.id == id.value;
});

const onSelectColor = (val, el) => {
  isSelectColor.value = val;
  document
    .querySelectorAll(".product__right__colors__col")
    .forEach((li) => (li.style.backgroundColor = "#1a1b20"));
  el.target.style.backgroundColor = val;
};
const onSelectSize = (val) => {
  isSelectSize.value = val;
};

//Send product's info to tg bot
const token = "7274542930:AAF5DXbWx795NBuPj1NqAv-tFWKqcOwjB8Q";
const chat_id = "383213241";

const onClickSendToTg = async () => {
  if (isSelectColor.value == null) {
    return alert("Ranglardan birini tanlashingiz kerak.");
  }
  if (isSelectSize.value == null) {
    return alert("Razmerlardan birini tanlashingiz kerak.");
  } else {
    const selectProductInfo = {
      user_id: userId.value,
      title: product.title,
      price: product.price,
      color: isSelectColor.value,
      size: isSelectSize.value,
    };
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chat_id,
      text: `Tovar: ${selectProductInfo.title} \n\nNarxi: ${selectProductInfo.price} \n\nRangi: ${selectProductInfo.color} \n\nRazmeri: ${selectProductInfo.size}`,
    });
    window.location.assign("/");
  }
};
</script>





<style lang="scss" scoped>
.product {
  &__left {
    &__title {
      position: relative;
      &::after {
        bottom: -20px;
      }
    }
  }
  &__right {
    &__colors {
      margin-bottom: 30px;
      &__title {
        font-size: 24px;
      }
      &__column {
        display: flex;
        justify-content: flex-start;
      }
      &__col {
        margin: 10px 0;
        padding: 4px 6px;
        cursor: pointer;
        margin-right: 10px;
        font-size: 20px;
        font-weight: 300;
        line-height: 25px;
        border: 1px solid #3a3a3a;
        &._active {
          background-color: #00b305;
        }
      }
    }
    &__sizes {
      margin-bottom: 30px;
      &__title {
        font-size: 24px;
      }
      &__column {
        display: flex;
        justify-content: flex-start;
      }
      &__col {
        cursor: pointer;
        padding: 8px;
        margin: 10px 0;
        font-size: 20px;
        margin-right: 10px;
        font-weight: 300;
        background-color: #000;
        border: 1px solid #fff;
        box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 30%);
        &._active {
          background-color: #00b305;
        }
      }
    }
    &__btn {
      display: flex;
      margin-bottom: 30px;
      &__cart {
        font-size: 24px;
        cursor: pointer;
        margin-right: 20px;
        padding: 12px 40px;
        align-items: center;
        display: inline-flex;
        color: #fff !important;
        background-color: #000;
      }
      &__favorite {
        display: flex;
        cursor: pointer;
        padding: 0 12px;
        align-items: center;
        border: 1px solid #000;
      }
    }
    &__btn-buy {
      font-size: 24px;
      cursor: pointer;
      margin-right: 20px;
      padding: 12px 40px;
      align-items: center;
      display: inline-flex;
      color: #fff !important;
      background-color: #000;
    }
  }
}
</style>