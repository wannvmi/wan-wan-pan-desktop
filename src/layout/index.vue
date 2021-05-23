<template>
  <div>
    <v-app id="inspire">
      <navigation-drawer
        permanent
        app
      />

      <app-main />
    </v-app>
  </div>
</template>

<script>
import NavigationDrawer from './components/NavigationDrawer'
import AppMain from './components/AppMain'

export default {
  components: {
    NavigationDrawer,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
.v-application {
  min-width: 480px;
  min-height: 770px;
}
</style>
