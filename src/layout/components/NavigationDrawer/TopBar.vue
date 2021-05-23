<template>
  <div class="top-bar-wrapper">
    <div
      class="top-bar-icon"
      @click="goBack"
    >
      <v-icon
        size="16"
        color="var(--context_secondary)"
      >
        mdi-chevron-left
      </v-icon>
    </div>
    <div
      class="top-bar-icon"
      @click="goTo"
    >
      <v-icon
        size="16"
        color="var(--context_secondary)"
      >
        mdi-chevron-right
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    goTo() {
      window.history.length > 1 ? this.$router.go(1) : this.$router.push('/')
    }
  }
}
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
