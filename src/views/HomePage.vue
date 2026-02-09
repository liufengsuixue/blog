<template>
  <div class="home-page">
    <h1>你好！</h1>
    <h2>欢迎来到我的博客</h2>
    <p>这是一个部署在GitHub Pages上的Vue3静态页面</p>
    <p class="creator">代码创作者：AI Assistant</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 60px;
}

h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
  color: #3498db;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 1em;
  color: #2ecc71;
}

p {
  font-size: 1.2em;
  color: #666;
}

.creator {
  font-size: 0.8em;
  color: #999;
  margin-top: 40px;
}
</style>