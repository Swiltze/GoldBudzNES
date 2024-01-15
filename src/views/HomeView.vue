<template>
    <div class="grid-container">
      <!-- Video player column -->
      <div class="video-container">
        <!-- Responsive video embed -->
        <div class="video-embed-container">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Chat column -->
      <div class="chat-container">
    <!-- Chat messages area -->
    <div class="messages">
      <!-- Example of a message balloon from the user -->
      <div class="message -right">
        <div class="nes-balloon from-right">
          <p>Hello!</p>
        </div>
      </div>
      <!-- Example of a message balloon from another person -->
      <div class="message -left">
        <div class="nes-balloon from-left">
          <p>damn ur plants r looking good</p>
        </div>
      </div>
      <div class="message -left">
        <div class="nes-balloon from-left">
          <p>L bozo</p>
        </div>
      </div>
      <div class="message -left">
        <div class="nes-balloon from-left">
          <p>clown</p>
        </div>
      </div>
      <div class="message -right">
        <div class="nes-balloon from-right">
          <p>D:</p>
        </div>
      </div>
      <!-- Add more messages here -->
    </div>
    <!-- Chat input area -->
    <div class="message-input">
      <input type="text" class="nes-input" placeholder="Type a message..." />
      <button type="button" class="nes-btn is-primary send-btn">Send</button>
    </div>
  </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.grid-container {
  display: flex;
  max-height: calc(100vh - 1rem); /* Adjusted to account for any header/footer outside this container */
  margin: 0;
  padding: 0;
}



.menu {
  display: flex; /* Aligns the menu items horizontally */
  justify-content: center; /* Centers the menu in the container */
  margin-top: 1rem; /* Adds some space above the menu */
}

.menu .nes-btn {
  margin: 0 0.5rem; /* Adds horizontal margin between buttons */
}

/* First and last button margin adjustment for cleaner look */
.menu .nes-btn:first-child {
  margin-left: 0;
}

.menu .nes-btn:last-child {
  margin-right: 0;
}

.video-container {
  flex: 3;
  max-width: 1280px;
}

.video-embed-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
}

.video-embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.chat-container {
  flex:1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 1rem);
  margin: 0;
  padding: 0;
}

.messages {
  overflow-y: auto;
  padding: 0.5rem;
  margin-bottom: 0;
}

.message {
  display: flex;
  margin-bottom: 0.5rem;
}

.message.-right {
  justify-content: flex-end;
}

.message.-left {
  justify-content: flex-start;
}

.message-input {
  position: relative;
  padding: 0.5rem;
}

.message-input .nes-input {
  flex: 1;
  margin-right: 0.5rem;
}

.message-input .send-btn {
  position: absolute; /* Position the send button absolutely within the message-input container */
  right: 0.5rem; /* Position the button from the right */
  top: 45%; /* Align the button vertically */
  transform: translateY(-50%); /* Center the button vertically */
  border-radius: 0; /* Optional: remove border-radius if you want the button to look more integrated */
}


/* Responsive layout for smaller screens */
@media (max-width: 768px) {
  .video-container,
  .chat-container {
    max-width: 100%;
  }
  .menu {
    flex-direction: column; /* Stacks the menu items vertically */
    align-items: center; /* Aligns the buttons centrally */
  }

  .menu .nes-btn {
    margin: 0.5rem 0; /* Adds vertical margin between buttons */
  }

  /* Remove specific horizontal margins for smaller screens */
  .menu .nes-btn:first-child,
  .menu .nes-btn:last-child {
    margin-left: 0;
    margin-right: 0;
  }
}


</style>
