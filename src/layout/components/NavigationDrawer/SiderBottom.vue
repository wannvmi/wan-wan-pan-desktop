<template>
  <div class="sider-bottom">
    <div class="bottom-wrapper">
      <div class="user-info">
        <div class="user-info-avatar">
          <img src="@/assets/images/logo.jpg">
        </div>
        <span class="user-info-name">你的名字</span>
      </div>
      <div class="bottom-setting">
        <v-icon
          size="16"
          color="var(--context_secondary)"
        >
          mdi-cog-outline
        </v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sider-bottom {
  height: 75px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px 0 24px;

  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--divider_primary);
  }
  .bottom-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user-info {
      display: flex;
      height: 32px;
      align-items: center;

      .user-info-avatar {
        width: 32px;
        height: 32px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .user-info-name {
        color: var(--context_primary);
        font-size: 14px;
        line-height: 1.5;
        margin-left: 16px;
      }
    }

    .bottom-setting {
      color: var(--context_secondary);
      width: 28px;
      height: 28px;
      border-radius: 5px;
      cursor: pointer;
      display: -ms-flexbox;
      display: flex;
      align-items: center;
      -ms-flex-pack: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--divider_tertiary);
      }
    }
  }
}
</style>
