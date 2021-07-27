<template>
  <ion-page>
    <ion-header class="nav" translucent>
      <div class="head" >My-Store</div>
      <ion-button class="cart" size="small"><router-link to="/Cart">Cart({{ cart }})</router-link> </ion-button>
    </ion-header>
    <ion-content fullscreen>
      <ion-card class="card">
        <img
          :src="item.image"
          class="card-img"
          style="width: 100%"
          alt="image"
        />
        <ion-card-header>
          <ion-card-subtitle style="font-size: 30px; "> ${{ item.price }}</ion-card-subtitle>
          <ion-card-title> {{ item.title }}</ion-card-title>
        </ion-card-header>
        <ion-button> Buy </ion-button>
        <ion-button color="warning" @click="addTocart()"
          >Add TO Cart</ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script >
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
  data() {
    return {
      cart: 0,
      item: {},
    };
  },
  mounted() {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => (this.item = json));
  },
  methods: {
    addTocart() {
      this.cart = this.cart + 1;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  overflow: scroll;
}
.head{
font-size: 30px; 
color: antiquewhite;
margin-top: 13px;
margin-left: 20px;
}
.nav {
  display: inline-block;
  color: rgb(255, 255, 255);
  background-color: rgb(85, 69, 69);
  height: 60px;
}
.log-btn {
  position: fixed;
  font-size: 15px;

  display: inline-block;
}
.cart {
  color: rgb(255, 255, 255);
  padding: 1px 2px;
  font-size: 16px;
  position: relative;
  margin-left: 330px;
  top: -35px;
}
.card-img {
  height: 300px;
}
.card {
  background-color: rgb(49 179 147 / 64%);

  height: 480px;
  top: 60px;

  margin-bottom: 40px;
  border-color: black;
  border-radius: 10px rgb(87, 187, 137);
}
.product {
  background-color: rgb(110, 209, 188);
}
.app {
  top: 5%;
  margin-right: 22px;
}
</style>
