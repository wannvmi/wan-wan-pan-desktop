<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    theme() {
      return this.$store.getters.theme
    }
  },
  watch: {
    theme() {
      this.setTheme()
    }
  },
  mounted() {
    this.setTheme()
  },
  methods: {
    setTheme() {
      document.querySelector('body').setAttribute('data-theme', this.theme)
      // document.querySelector('body').setAttribute('data-theme', 'dark')
      // this.$vuetify.theme.dark = true
    }
  }
}
</script>
