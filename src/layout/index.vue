<template>
  <div>
    <v-app id="inspire">
      <system-bar />
      <v-navigation-drawer
        permanent
        app
      >
        <div>
          list
        </div>
        <!-- <v-list>
          <v-list-item
            v-for="[icon, text] in links"
            :key="icon"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list> -->
      </v-navigation-drawer>

      <app-main />
    </v-app>
  </div>
</template>

<script>
import SystemBar from './components/SystemBar'
import AppMain from './components/AppMain'

export default {
  components: {
    SystemBar,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
.v-main {
  height: calc(100vh - 40px);
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
