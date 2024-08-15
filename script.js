// // script.js
// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router'
// import store from './store'
// import Vue from 'vue'
// import VueSocketIO from 'vue-socket.io-extended';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5500');
// const app = createApp(App);
// app.use(router);
// app.use(store);
// app.use(new VueSocketIO({
    
//     debug: true,
//     connection: socket
//     }));

// app.mount('#app');

// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// Script for shopping cart



// Script for adding shadow on scroll
window.addEventListener('scroll', () => {

    if (window.scrollY > 200) {

        document.getElementById('navbar').classList.add('shadow');

    } else {

        document.getElementById('navbar').classList.remove('shadow');

    }

})

// Script for removing shadow on scroll


// Script for hamburger menu


// Script for image slider


// Script for image change on hover


// Script for image change on click
