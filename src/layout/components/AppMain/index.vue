<template>
  <v-main class="app-main">
    <div class="app-main-container">
      <system-bar />
      <div>
        <div class="demos" />
        <router-view :key="key" />
      </div>
    </div>
  </v-main>
</template>

<script>
import SystemBar from './SystemBar'
export default {
  components: {
    SystemBar
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  height: 100vh;
  .app-main-container {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }
}

.app-main-content {
  padding-top: 28px;
  flex: 1 1;
  position: relative;
  width: 100%;
}
</style>
