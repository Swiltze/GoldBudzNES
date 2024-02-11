<template>
    <div class="index">
      <section class="nes-container with-title is-centered">
        <h1 class="title">Welcome!</h1>
        <div class="nes-field">
          <label for="username_field">Username</label>
          <input type="text" id="username_field" class="nes-input" placeholder="Username">
        </div>
        <div class="nes-field">
          <label for="password_field">Password</label>
          <input type="password" id="password_field" class="nes-input" placeholder="Password">
        </div>
        <button type="button" class="nes-btn is-primary">Login</button>
      </section>
  
      <section class="nes-container with-title is-centered">
        <h1 class="title">Register</h1>
        <div class="nes-field">
          <label for="new_username_field">Username</label>
          <input type="text" id="new_username_field" class="nes-input" placeholder="Username">
        </div>
        <div class="nes-field">
          <label for="new_email_field">Email</label>
          <input type="email" id="new_email_field" class="nes-input" placeholder="Email">
        </div>
        <div class="nes-field">
          <label for="new_password_field">Password</label>
          <input type="password" id="new_password_field" class="nes-input" placeholder="Password">
        </div>
        <XButton success>Login</XButton>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  // Your script setup here
  </script>
  
  <style scoped>
  .index {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
  }
  
  .nes-container {
    width: 100%;
    max-width: 500px;
    margin-bottom: 20px;
  }
  
  .title {
    text-align: center;
  }
  </style>
  