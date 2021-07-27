<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script >
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
 mounted(){
      fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:5,
                    products:[]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
  }

});
</script>