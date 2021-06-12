<template>
  <v-app>
    <div class="fondoback">
        <v-container>
          <div  style="width:100%">
              <v-flex >
                <v-layout justify-center>
                  <v-img
                    lazy-src="../../assets/Views/JGlogo.png"
                    max-height="400"
                    max-width="400"
                    src="../../assets/Views/JGlogo.png"
                  ></v-img>
                </v-layout>
              </v-flex>
          </div>
        <div class="display-2 text-center">Bienvenido</div>
         <div class="display-1 text-center">A tu reproductor de música <strong>V.0.0.1</strong> con <div class="text-success" style="text-color:white">MuskVue</div></div>
    </v-container>
    </div>

   <!-- Contenedor-->
    <section class="mt-5" style="margin-bottom:40px">
      <v-main>
       <v-flex>
         <v-layout justify-center>
            <v-btn @click="iniciar" large elevation="12">Iniciar</v-btn>
         </v-layout>
       </v-flex>
      </v-main>
    </section>

    <!-- Footer-->
    
     <v-card height="200px">
          <v-footer
          padless
          absolute
          >
            <v-card
              flat
              tile
              width="100%"
              class="indigo darken-1 lighten-1 text-center"
            >
              <v-card-text>
                <v-btn
                  v-for="icon in icons"
                  :key="icon.id"
                  class="mx-4"
                  icon
                  :color="icon.color"
                  :href="icon.links"
                >
                  <v-icon   size="27px">
                    {{ icon.logo }}
                  </v-icon>
                </v-btn>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Desarollado por Jeziel Guiev</strong>
              </v-card-text>
            </v-card>
          </v-footer>

   
        </v-card>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        {logo:'mdi-github',color:'white',links:'https://github.com/Jeziel-Guiev'},
        {logo:'mdi-instagram',color:'blue',links:'https://instagram.com/jeziel_guiev'},
        {logo:'mdi-youtube',color:'red',links:'https://youtube.com/channel/UCKGV92eoCMV8HyWYALLLzdw'},
        
      ],
    }),
    computed: {
   
    },
    methods:{
      iniciar(){
        this.$router.push('/home/about');
       
      }
    }
  }
</script>

<style scope>
.fondoback{
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(148,153,163,0.639093137254902) 76%, rgba(182,168,175,1) 100%);
}
</style>