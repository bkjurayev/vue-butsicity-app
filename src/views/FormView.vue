<template>
  <div class="grido">
    <VHeader />

    <div class="contact-top">
      <div class="container">
        <div class="contact-top__body">
          <div class="contact-top__left">
            <img
              src="../assets/imgs/contact.webp"
              alt=""
              class="contact-top__left__img"
            />
            <h1 class="contact-top__left__title">CONTACT</h1>
          </div>
          <div class="contact-top__right">
            <h4 class="contact-top__right__subtitle">let's talk</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="container">
        <div class="contact__body">
          <!-- <h1 class="contact__title">Say Hello</h1> -->
          <form action="" class="contact__form">
            <div class="contact__form__name">
              <input type="text" placeholder="Phone" v-model="phone" />
            </div>
            <div class="contact__form__email">
              <input
                type="email"
                placeholder="Telegram nickname"
                v-model="nickname"
              />
            </div>
            <!-- <div class="contact__form__website">
              <input type="website" placeholder="Website" />
            </div> -->
            <!-- <div class="contact__form__message">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div> -->
            <!-- <div class="contact__form__btn">SEND</div> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
  
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import VHeader from "../components/v-header.vue";

const phone = ref(null);
const nickname = ref(null);

// Пример данных, которые будут отправлены
const selectedRegions = ref({
  phone,
  nickname,
}); // Замените это на вашу структуру данных

const sendDataToTelegram = () => {
  Telegram.WebApp.sendData(JSON.stringify(selectedRegions.value));
};

onMounted(() => {
  // Установите обработчик события нажатия на mainButton
  Telegram.WebApp.onEvent("mainButtonClicked", sendDataToTelegram);

  // Покажите mainButton, если он скрыт
  Telegram.WebApp.MainButton.show();
});

onBeforeUnmount(() => {
  // Удалите обработчик события нажатия на mainButton перед размонтированием компонента
  Telegram.WebApp.offEvent("mainButtonClicked", sendDataToTelegram);
});
</script>
  
  
  
  
<style lang="scss" scoped>
.contact-top {
  margin-bottom: 70px;
  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(#191a1f, #222328);
    border: 1px solid #313237;
    padding: 7px 7px 8px;
    border-radius: 50px;
  }
  &__left {
    display: flex;
    align-items: center;
    &__img {
      padding-right: 20px;
    }
    &__title {
      // text-align: center;
      font-size: 30px;
      font-weight: 380;
      color: #d8d8d8;
    }
  }
  &__right {
    &__subtitle {
      font-size: 17px;
      font-weight: 350;
      color: #d8d8d8;
      position: relative;
      &:after {
        content: "";
        width: 7px;
        height: 7px;
        position: absolute;
        display: block;
        background-color: blue;
        border-radius: 50%;
        top: 10px;
        left: -20px;
      }
    }
  }
}
.contact {
  &__body {
    background-color: #111217;
    border: 1px solid #313237;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  &__title {
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 20px;
    color: #d8d8d8;
  }
  &__form {
    &__name {
      input {
        width: 100%;
        height: 30px;
        border: 1px solid #292a2f;
        background-color: #111217;
        border-radius: 20px;
        padding: 25px;
        color: white;
        margin-bottom: 20px;
        &:focus {
          outline: none;
          border: 1px solid blue;
        }
      }
      input::placeholder {
        font-size: 15px;
        font-weight: 400;
        // opacity: 0.5;
        color: #d8d8d8;
      }
    }
    &__email {
      input {
        width: 100%;
        height: 30px;
        border: 1px solid #292a2f;
        background-color: #111217;
        border-radius: 20px;
        padding: 25px;
        color: white;
        margin-bottom: 20px;
        &:focus {
          outline: none;
          border: 1px solid blue;
        }
      }
      input::placeholder {
        font-size: 15px;
        font-weight: 400;
        // opacity: 0.5;
        color: #d8d8d8;
      }
    }
    &__website {
      input {
        width: 100%;
        height: 30px;
        border: 1px solid #292a2f;
        background-color: #111217;
        border-radius: 20px;
        padding: 25px;
        color: white;
        margin-bottom: 20px;
        &:focus {
          outline: none;
          border: 1px solid blue;
        }
      }
      input::placeholder {
        font-size: 15px;
        font-weight: 400;
        // opacity: 0.5;
        color: #d8d8d8;
      }
    }
    &__message {
      textarea {
        width: 100%;
        height: 200px;
        border: 1px solid #292a2f;
        background-color: #111217;
        border-radius: 20px;
        padding: 25px;
        color: white;
        margin-bottom: 20px;
        &:focus {
          outline: none;
          border: 1px solid blue;
        }
      }
      textarea::placeholder {
        font-size: 15px;
        font-weight: 400;
        // opacity: 0.5;
        color: #d8d8d8;
      }
    }
    &__btn {
      font-size: 20px;
      font-weight: 300;
      margin-left: auto;
      width: max-content;
      border-radius: 10px;
      padding: 10px 40px;
      color: white;
      background-color: #0064d8;
    }
  }
}
</style>
  