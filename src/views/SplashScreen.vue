<template>
  <div class="splash-screen">
    <button class="enter-button" @click="enterHome"></button>
  </div>
</template>

<script>
export default {
  name: 'SplashScreen',
  methods: {
    enterHome() {
      this.$emit('enter-home');
    }
  }
}
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100%; 
  background-image: url('/login-screen.png'); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
}

.enter-button { 
  background: transparent;
  padding: 4vh 2vw;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 6px;
  top: 123px;
}

.enter-button:hover {
  background: transparent;
}
</style>