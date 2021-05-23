<template>
  <v-navigation-drawer
    permanent
    app
    :width="240"
  >
    <top-bar />
    <nav-sider />
    <sider-bottom />
  </v-navigation-drawer>
</template>

<script>
import TopBar from './TopBar'
import NavSider from './NavSider'
import SiderBottom from './SiderBottom'
export default {
  components: {
    TopBar,
    NavSider,
    SiderBottom
  }
}
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
  background: var(--divider_tertiary) !important;

  .v-navigation-drawer__content {
    position: relative;
  }
}
</style>
