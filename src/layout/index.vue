<template>
  <v-app id="inspire">
    <system-bar />

    <v-navigation-drawer
      v-model="drawer"
      permanent
      app
    >
      <v-list>
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
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        阿萨德
        <div class="demos" />
        <router-view :key="key" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SystemBar from './components/SystemBar'

export default {
  components: {
    SystemBar
  },
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam']
    ]
  }),
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.v-main {
  height: calc(100vh - 40px);
}

.demos {
  border: 1px solid #3333;
  width: 20px;
  height: 3000px;
}
</style>
