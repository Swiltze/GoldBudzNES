<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const isNavOpen = ref(true); // Reactive state to control the visibility of the nav

function toggleNav() {
  isNavOpen.value = !isNavOpen.value; // Toggle the state
}

</script>

<template>
  <div id="nescss" class="main-container">
    <!-- Side navigation menu and Main content area including header and router view -->
    <div class="nav-and-content" :style="{ 'padding-top': '5rem' }">
      <nav class="side-nav" v-show="isNavOpen">
        <div class="nav-brand">
          <a href="/">
            <h1><i class="snes-jp-logo brand-logo"></i>NES.css</h1>
          </a>
        </div>
        <ul class="nav-links">
          <li><router-link to="/home" class="nes-btn">Home</router-link></li>
          <li><router-link to="/about" class="nes-btn">About</router-link></li>
          <li><router-link to="/contact" class="nes-btn">Contact</router-link></li>
        </ul>
        <!-- Add more navigation links as needed -->
      </nav>

      <div class="content-area">
        <!-- Header section -->
        <header class="header">
          <div class="nes-field is-inline">
            <input type="text" id="name_field" class="nes-input" placeholder="Search...">
          </div>
          <div class="profile-container">
            <button class="nes-btn is-primary">Profile</button>
            <!-- Dropdown menu content -->
            <div class="dropdown-content">
              <a href="#" class="nes-btn">My Account</a>
              <a href="#" class="nes-btn">Settings</a>
              <a href="#" class="nes-btn">Logout</a>
            </div>
          </div>
        </header>
        
        <!-- Main content section where router views are rendered -->
        <main class="main-content">
          <router-view></router-view>
        </main>
      </div>
    

            <!-- Footer section -->
    
           </div>
           <footer>
      <p>GoldBudz</p>
    </footer>
   </div>

</template>
<style>
/* You can add global styles here */
body {
  font-family: 'Press Start 2P', cursive; /* NES.css recommends this font */
  margin: 0; /* Remove default margin */
}

.nav-and-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  /* Apply padding-top here if needed */
}

/* Main container with flexbox layout */
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

/* Side navigation styles */
.side-nav {
  flex: 0 0 200px; /* Adjust width as needed */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align buttons to the start */
  padding: 1rem;
  gap: 0.5rem;
  background: #fff; /* Set a background color for the side nav */
  height: calc(100vh - 5rem);
  overflow-y: auto; 
}

/* Content area including header, main content, and footer */
.content-area {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
}

.flex-container {
  display: flex;
  width: 100%;
}

/* New Header styles with NES.css */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  height: 5rem;
}

/* Profile dropdown styles */
.profile-container {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #fff;
  z-index: 1;
}

.profile-container:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  display: block;
  margin: 0.5rem 0;
}
/* Main content styles */
.main-content {
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Scrollable content */
}

/* Toggle button styles */
.toggle-nav-btn {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  /* Add more styles as needed */
}

/* Navigation links styles */
.nav-links {
  list-style: none; /* Remove default list styling */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
}

.nav-links li {
  margin-bottom: 1rem; /* Space between items */
}

.nav-links li a {
  text-decoration: none; /* Remove underline from links */
  color: inherit; /* Use the current text color */
  display: block; /* Make links fill the list item */
  padding: 0.5rem 1rem; /* Add padding for clickability */
}

/* Change link styles on hover */
.nav-links li a:hover {
  background-color: #f0f0f0; /* Light background on hover */
}

/* Style for the active route */
.router-link-active {
  background-color: #e0e0e0; /* Highlight the active link */
}
/* Footer styles */
footer {
  padding: 1rem;
  text-align: center;
  flex-shrink: 0;
}
</style>
