<template>
  <div class="home-page">
    <SplashScreen v-if="showSplash" @enter-home="enterHome" />
    <div v-else class="content">
      <h1>你好！</h1>
      <h2>欢迎来到我的博客</h2>
      <p>这是一个部署在GitHub Pages上的Vue3静态页面</p>
      <p class="creator">代码创作者：AI Assistant</p>
    </div>
  </div>
</template>

<script>
import SplashScreen from './SplashScreen.vue'

export default {
  name: 'HomePage',
  components: {
    SplashScreen
  },
  data() {
    return {
      showSplash: true
    }
  },
  methods: {
    enterHome() {
      this.showSplash = false
    }
  }
}
</script>

<style scoped>
.home-page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0078d4 0%, #005a9e 100%);
  color: white;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

h2 {
  font-size: 1.5em;
  margin-bottom: 1em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

p {
  font-size: 1.2em;
  margin-bottom: 1em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.creator {
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 2em;
}
</style>