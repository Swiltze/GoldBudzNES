<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const isNavOpen = ref(true); // Reactive state to control the visibility of the nav

function toggleNav() {
  isNavOpen.value = !isNavOpen.value; // Toggle the state
}




</script>

<template>
    <div id="top-bar">
        <div class="search-container">
            <input id="input-search" name="input-search" placeholder="Search..." type="text">
            <button class="nes-btn" type="submit">Go</button>
        </div>
    </div>

    <div id="wrapper" :class="{ active: isNavOpen }">
        <nav id="sidebar">
            <button @click="toggleNav()" type="button">Collapse</button>
            <ul class="nes-list is-disc">
                <li><router-link to="/">Login</router-link></li>
                <li><router-link to="/home">Home</router-link></li>
                <li><router-link to="#">placeholder</router-link></li>
                <li><router-link to="#">placeholder</router-link></li>
              </ul>
        </nav>
        <div id="main-content">
            <router-view></router-view>
        </div>
        <div id="chat-bar">
            <div class="chat-messages">
            </div>
            <div class="chat-input">
            <input type="text" placeholder="Type a message...">
            <button class="nes-btn">Send</button>
            </div>
        </div>
    </div>

    <div id="footer">
        <p>kiss mi pis</p>
    </div>
    
       
  <footer id="footer">
  <p>kiss mi pis</p>
</footer>

</template>
