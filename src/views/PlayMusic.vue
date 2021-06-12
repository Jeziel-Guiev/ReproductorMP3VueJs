<template>
<v-app>


  <v-card
    color="grey lighten-4"
    
    
    tile
  >
    <v-toolbar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">

        
      </v-app-bar-nav-icon>

      <v-toolbar-title>MuskVue</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>



  </v-card>



<!-- Toogle-->
  <section>
<v-sheet    
    class="overflow-hidden" 
>
  <div class="fondoback">
      <v-container >
     <div  style="width:100%">
              <v-flex >
                <v-layout justify-center>
                  <v-img
                    lazy-src="../assets/Views/JGlogo.png"
                    max-height="200"
                    max-width="200"
                    src="../assets/Views/JGlogo.png"
                  ></v-img>
                </v-layout>
              </v-flex>
          </div>


          <!-- Aqui entra el reproductor comopoenente-->
          <playermusic/>
    </v-container>

    
    <section>
         <v-card elevation="0" height="200px" style="background:transparent; border:none">
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
           

              <v-divider></v-divider>

              <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Desarollado por Jeziel Guiev</strong>
              </v-card-text>
            </v-card>
          </v-footer>

   
        </v-card>
    </section>
  </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/Views/JGlogo.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content class="">
          <v-list-item-title>MuskVue</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          href="https://github.com/Jeziel-Guiev"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
  </section>



    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Hola me llamo Jeziel Guiev
        </v-card-title>
        <v-card-text>
         Me encanta me encanta la música y esa fue la idea de este proyecto que si bien es open source y falta desarrollar 
          la idea es crear una plataforma para poder consumir apis de plataformas de música libre para que no nos ca.. Copyright. 
          si quieres aportar al proyecto no dudes en comunicarte conmigo soy un apasionado de la programación.

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
        
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>



</v-app>
</template>
<script>
import playermusic from '../components/Reproductor.vue'
  export default {
    name:'Play',
    components:{
      playermusic
    },
    data () {
      return {
        icons: [
        {logo:'mdi-github',color:'white',links:'https://github.com/Jeziel-Guiev'},
        {logo:'mdi-facebook',color:'blue',links:'https://github.com/Jeziel-Guiev2'},
        {logo:'mdi-youtube',color:'red',links:'https://youtube.com/channel/UCKGV92eoCMV8HyWYALLLzdw'},
        
      ],
        dialog: true,
        drawer: null,
        items: [
          { title: 'IoT', icon: 'mdi-view-dashboard' },
          { title: 'MENV', icon: 'mdi-github'},
        ],
      }
    },
  }
</script>

<style scoped>
.fondoback{
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(148,153,163,0.639093137254902) 76%, rgba(182,168,175,1) 100%);
}
</style>