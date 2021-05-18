<template>
  <v-system-bar
    height="40"
    window
    app
  >
    <span>wan wan pan</span>
    <v-spacer />
    <div
      class="system-bar-icon"
      @click="minimize"
    >
      <v-icon :size="20">
        mdi-minus
      </v-icon>
    </div>
    <div
      class="system-bar-icon"
      v-if="!isMax"
      @click="maximize"
    >
      <v-icon :size="18">
        mdi-checkbox-blank-outline
      </v-icon>
    </div>
    <div
      class="system-bar-icon"
      v-else
      @click="restore"
    >
      <v-icon :size="18">
        mdi-checkbox-multiple-blank-outline
      </v-icon>
    </div>
    <div
      class="system-bar-icon system-bar-close"
      @click="close"
    >
      <v-icon :size="20">
        mdi-close
      </v-icon>
    </div>
  </v-system-bar>
</template>

<script>
export default {
  data() {
    return {
      isMax: true
    }
  },
  methods: {
    minimize() {
      process.minimize()
    },
    maximize() {
      process.maximize()
    },
    restore() {
      process.restore()
    },
    close() {
      process.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.v-system-bar {
  padding: 0;
  -webkit-app-region: drag;
}

.system-bar-icon {
  width: 40px;
  height: 40px;
  -webkit-app-region: no-drag;

  @extend %flex-center-col;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }

  .v-icon {
    margin: auto;
  }

  &.system-bar-close {
    &:hover {
      background-color: rgba(255, 0, 0, 0.7);
    }
  }
}
</style>
