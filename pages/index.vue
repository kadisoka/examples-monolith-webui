<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">{{ $myApp.appName }}</h1>
      <h2 class="subtitle">{{ $myApp.appDesc }}</h2>
      <div class="links">
        <a v-if="isLoggedIn" href="/accounts/signout" class="button--green"
          >Sign out</a
        >
        <a v-else href="/accounts/signin" class="button--green">Sign in</a>
        <a
          href="https://github.com/kadisoka"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      isLoggedIn: !!this.$store.state.iam.accessToken
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
