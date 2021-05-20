<template>
  <div class="top-bar-wrapper">
    <div class="top-bar-icon">
      <v-icon
        size="16"
        color="#666666"
      >
        mdi-chevron-left
      </v-icon>
    </div>
    <div class="top-bar-icon">
      <v-icon
        size="16"
        color="#666666"
      >
        mdi-chevron-right
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.top-bar-wrapper {
  padding-right: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  height: 46px;
  -webkit-app-region: drag;

  .top-bar-icon {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    @extend %unable-select;
    @extend %flex-center-row;

    -webkit-app-region: no-drag;

    &:hover {
      background-color: var(--divider_tertiary);
    }
  }
}
</style>
