<template>
  <div>
    <v-system-bar
      window
      dark
      
    >
      <v-icon>mdi-music</v-icon>
      <span>Panel de musicas</span>
      <v-spacer></v-spacer>
     
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
            
    </v-system-bar>

    <section class="mt-3">
        <div>
            <v-flex>
 
                <v-layout justify-center align-center>
                   <v-btn class="mx-2" fab dark color="teal">
                        <v-icon dark>
                           mdi-music-note-quarter
                        </v-icon>
                    </v-btn>
                        <v-btn class="mx-2" large fab dark :color="colorsonido">
                        <v-icon dark>
                            {{iconmusic}}
                        </v-icon>
                        </v-btn>
                    <v-btn class="mx-2" fab dark color="teal">
                        <v-icon dark>
                            mdi-music-note-quarter
                        </v-icon>
                        </v-btn>
                </v-layout>
   
            </v-flex>
        </div>
    </section>
    <section class="mt-5">
        <div>
            <v-flex>
                <v-layout justify-center>
                    <v-simple-table dark style="width:600px">
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">
                                    Nombre
                                </th>
                                <th class="text-left">
                                    Duracion
                                </th>
                                <th class="text-left">
                                    Function
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                v-for="item in desserts"
                                :key="item.name"
                                style="margin-top:90px"
                                >
                                <td style="margin-top:90px">{{ item.Nombre }}</td>
                                <td>{{ ((item.Duracion)/60).toFixed(2) }}</td>
                                <td>
                                  <v-btn small @click="reproducir(item)" class="mx-2" fab dark color="teal">
                                    <v-icon dark>
                                        mdi-play
                                    </v-icon>
                                    
                                  </v-btn>
                                  <v-btn small @click="detener(item)" class="mx-2" fab dark color="red">
                                    <v-icon dark>
                                        mdi-stop
                                    </v-icon>
                                    
                                  </v-btn>
                                </td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                </v-layout>
            </v-flex>
        </div>
    </section>

  </div>
</template>

<script>
 //import {Howl, Howler} from 'howler';
 import {Howl,Howler} from 'howler'

export default {
    data () {
      return {
        colorsonido:'cyan',
        iconmusic:'mdi-music-off',
          icons: [
        {logo:'mdi-github',color:'white',links:'https://github.com/Jeziel-Guiev'},
        {logo:'mdi-instagram',color:'blue',links:'https://instagram.com/jeziel_guiev'},
        {logo:'mdi-youtube',color:'red',links:'https://youtube.com/channel/UCKGV92eoCMV8HyWYALLLzdw'},
        
      ],
   desserts: [
          
        ],
      }
    },
   async mounted(){
   const arraymusic=[
     {title:'Cigarettesaftersexaffection.mp3'},
     {title:'loveyou.mp3'},
   ]  

   arraymusic.forEach(async (data)=>{
     let music=await new Howl({
       src:[require(`./playlist/${data.title}`)]

     })
       let info={
          cancion:music,
          Nombre:music._src,
          Duracion:music._duration
        }
        this.desserts.push(info);
   })

//fs.readFile(require('./playlist/hola.txt'),(err,data)=>{
 // console.log(data);

//});
 

//  sound.play();
    },
    methods:{
      reproducir(data){
        Howler.stop();
        this.colorsonido='green'
        this.iconmusic='mdi-music';
        data.cancion.play();
      },
      detener(data){
        
        this.colorsonido='red'
        data.cancion.stop();
      }
    }
  
  }
</script>