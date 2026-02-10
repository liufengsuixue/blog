<template>
  <div class="splash-screen">
    <div class="splash-content">
      <button class="enter-button" @click="enterHome">进入博客</button>
    </div>
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
  width: 100%;
  height: 100%;
  background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20blog%20background%20with%20soft%20colors%20and%20subtle%20patterns&image_size=landscape_16_9');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.splash-content {
  text-align: center;
}

.enter-button {
  padding: 12px 24px;
  font-size: 1.2em;
  background-color: rgba(52, 152, 219, 0.8);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.enter-button:hover {
  background-color: rgba(52, 152, 219, 1);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}
</style>