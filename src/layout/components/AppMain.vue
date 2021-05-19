<template>
  <v-main>
    <v-container fluid>
      <div class="demos" />
      <router-view :key="key" />
    </v-container>
  </v-main>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.demos {
  border: 1px solid #3333;
  width: 20px;
  height: 3000px;
}

</style>
