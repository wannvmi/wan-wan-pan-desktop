<template>
  <v-navigation-drawer
    permanent
    app
    :width="240"
  >
    <top-bar />
    <nav-sider />
  </v-navigation-drawer>
</template>

<script>
import TopBar from './TopBar'
import NavSider from './NavSider'
export default {
  components: {
    TopBar,
    NavSider
  }
}
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
  background: var(--divider_tertiary) !important;
}

.nav-sider {
  display: flex;
  flex-direction: column;
  // height: 100%;
  width: 240px;
  padding-top: 36px;

  @extend %unselect;

  .nav-sider-logo {
    width: 108px;
    height: 24px;
    margin: 0px 0px 36px 24px;

    display: inline-flex;

    .nav-sider-logo-img {
      width: 24px;
      height: 24px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
      }
    }

    span {
      padding-left: 9px;
      display: block;
      height: 19px;
      font-weight: 600;
      letter-spacing: 3px;
    }
  }
}
</style>
