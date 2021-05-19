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
      v-if="!isMaxWindow"
      @click="maximize"
    >
      <v-icon :size="18">
        mdi-checkbox-blank-outline
      </v-icon>
    </div>
    <div
      class="system-bar-icon"
      v-else
      @click="unmaximize"
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
import JsBridge from '@/utils/JsBridge'

export default {
  data() {
    return {}
  },
  computed: {
    isMaxWindow() {
      return this.$store.getters.isMaxWindow
    }
  },
  methods: {
    minimize() {
      JsBridge.ipcRendererSend('win:minimize')
    },
    maximize() {
      JsBridge.ipcRendererSend('win:maximize')
    },
    unmaximize() {
      JsBridge.ipcRendererSend('win:unmaximize')
    },
    close() {
      JsBridge.ipcRendererSend('win:close')
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
