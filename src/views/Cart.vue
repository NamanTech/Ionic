<template>
  <ion-page>
    <ion-header class="nav" translucent>
      <div class="head" >My-Store</div>
       <h2 style="padding-top: 20px; padding-left: 40px">Shopping-Cart</h2>
    </ion-header>
  </ion-page>
</template>

<script >


import {
  IonHeader,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonHeader,
    IonPage,
  },
  data() {
    return {
      cartlist: []
     
    };
  },
  mounted(){
      fetch('https://fakestoreapi.com/carts/1')
            .then(res=>res.json())
            .then(json=>this.cartlist=json)
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
