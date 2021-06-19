<template>
  <div class="system-bar">
    <div
      class="system-bar-icon"
      @click="minimize"
    >
      <v-icon
        :size="20"
        color="var(--context_secondary)"
      >
        mdi-minus
      </v-icon>
    </div>
    <div
      v-if="!isMaxWindow"
      class="system-bar-icon"
      @click="maximize"
    >
      <v-icon
        :size="18"
        color="var(--context_secondary)"
      >
        mdi-checkbox-blank-outline
      </v-icon>
    </div>
    <div
      v-else
      class="system-bar-icon"
      @click="unmaximize"
    >
      <v-icon
        :size="18"
        color="var(--context_secondary)"
      >
        mdi-checkbox-multiple-blank-outline
      </v-icon>
    </div>
    <div
      class="system-bar-icon system-bar-close"
      @click="close"
    >
      <v-icon
        :size="20"
        color="var(--context_secondary)"
      >
        mdi-close
      </v-icon>
    </div>
  </div>
</template>

<script>
import IpcBridge from '@/utils/IpcBridge'

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
    async minimize() {
      await IpcBridge.sendSync('win:minimize')
    },
    async maximize() {
      await IpcBridge.sendSync('win:maximize')
    },
    async unmaximize() {
      await IpcBridge.sendSync('win:unmaximize')
    },
    async close() {
      await IpcBridge.sendSync('win:close')
    }
  }
}
</script>

<style lang="scss" scoped>
.system-bar {
  padding: 0;
  width: 100%;
  height: 40px;
  -webkit-app-region: drag;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.system-bar-icon {
  width: 75px;
  height: 40px;
  -webkit-app-region: no-drag;

  @extend %flex-center-col;

  &:hover {
    background-color: var(--divider_tertiary);
  }

  .v-icon {
    margin: auto;
  }

  &.system-bar-close {
    &:hover {
      background-color: var(--red_hover);

      .v-icon {
        color: var(--basic_white) !important;
        caret-color: var(--basic_white) !important;
      }
    }
  }
}
</style>
