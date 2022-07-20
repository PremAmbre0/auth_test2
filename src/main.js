import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMPP_K4OcGeBE_KCflGAnSWdi3F6_3IXY",
    authDomain: "test-auth-37580.firebaseapp.com",
    projectId: "test-auth-37580",
    storageBucket: "test-auth-37580.appspot.com",
    messagingSenderId: "990331050196",
    appId: "1:990331050196:web:fdfd511a3f437e5f71c341"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
