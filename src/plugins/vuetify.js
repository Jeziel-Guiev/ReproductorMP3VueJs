import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify,{
    theme: {
        primary: '#b71c1c',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
});

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
      },
});
