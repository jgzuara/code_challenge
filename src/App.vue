

<template>
  <header class="row">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">     
      <h1 class="text-center">Code challenge - TV Shows</h1>
      <!--<nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>-->
    </div>
  </header>
  <!--<RouterView />-->
  <home-view />
</template>

<script setup>
  //import { RouterLink, RouterView } from 'vue-router'
  //import HelloWorld from './components/HelloWorld.vue'
  import HomeView from './views/HomeView.vue'
</script>

<style scoped>
/*.bg-fashionette {
  background-color: #e5c1c4;
  font-family: AvenirNext,sans-serif;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
*/
</style>
