<template>
  <div>
    <nav
      class="navbar header has-shadow has-background-black-bis"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <div class="navbar-item has-text-white-ter"> (unfair) Geek Quiz</div>
      </div>
    </nav>



      <div style="height:90vh" class="container">
        <nuxt />
      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  },
  head () {
      return {
      }
    }

}
</script>
