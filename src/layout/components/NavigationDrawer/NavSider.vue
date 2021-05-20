<template>
  <div class="nav-sider">
    <div class="nav-sider-logo">
      <div class="nav-sider-logo-img">
        <img src="@/assets/images/logo.jpg">
      </div>
      <span>
        万万盘
      </span>
    </div>

    <div class="nav-menu">
      <li class="nav-menu-item is-active">
        <span class="nav-menu-item-icon--23nDR" />
        <span>文件</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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

  .nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 1.5;

    .nav-menu-item {
      width: 216px;
      height: 44px;
      padding-left: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      color: var(--context_primary);
      cursor: pointer;
      transition: background-color 0.3s ease;
      border-radius: 10px;
      position: relative;

      &.is-active {
        font-weight: 500;
        background-color: var(--divider_tertiary);
      }
    }
  }
}
</style>
