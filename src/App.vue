<template>
  <div>
    <sidebar></sidebar>
    <main>
      <router-view />
    </main>

  </div>
</template>

<script>
    import sidebar from './components/sidebar';

export default {
  name: 'app',
  components: {
      sidebar
  }
}
</script>

<style lang="scss">
  @import "/assets/scss/main";

  main{
    padding-top: 60px;
    height: 100vh;
    padding-left: $big-sidebar + 20;
    transition: all .3s;
  }

  .navbar.small {
    & + main {
      padding-left: $small-sidebar + 20;
    }
  }
</style>
