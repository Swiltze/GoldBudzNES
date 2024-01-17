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
      <input type="text" placeholder="Search...">
      <button class="nes-btn">Go</button>
    </div>
  </div>

<div id="wrapper">
  <nav id="sidebar" :class="{ active: isNavOpen }">
    <button class="nes-btn" id="toggle-btn" @click="toggleNav">Toggle</button>
    <ul class="nes-list is-disc">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
        <!-- Main content section where router views are rendered -->
        <div id="main-content">
  <!-- Video player container -->
  <router-view></router-view>
  </div>
  <!-- Chat bar container -->
<div id="chat-bar">
  <!-- Chat content goes here -->
  <div class="chat-messages">
    <!-- Chat messages will be displayed here -->
  </div>
  <div class="chat-input">
    <input type="text" placeholder="Type a message...">
    <button class="nes-btn">Send</button>
  </div>
</div>
</div>


       
       
  <footer id="footer">
  <p>GB</p>
</footer>

</template>
