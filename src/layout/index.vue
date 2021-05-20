<template>
  <div>
    <v-app id="inspire">
      <!-- <system-bar /> -->
      <navigation-drawer
        permanent
        app
      />

      <app-main />
    </v-app>
  </div>
</template>

<script>
// import SystemBar from './components/SystemBar'
import NavigationDrawer from './components/NavigationDrawer/index'
import AppMain from './components/AppMain'

export default {
  components: {
    // SystemBar,
    NavigationDrawer,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
.v-application {
  min-width: 1080px;
  min-height: 770px;
}

.v-main {
  height: calc(100vh - 40px);
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
