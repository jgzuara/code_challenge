<template>
  <header class="row">
    <RouterLink to="/" class="text-center logo">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="325" height="125" />
    </RouterLink>
    <div class="wrapper fashionette-nav my-1 text-center">     
      CODE CHALLENGE - TV SHOWS
    </div>
  </header>
  <RouterView />
</template>
<style>
  .fashionette-nav {
    background-color: #e5c1c4;
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    padding-bottom: 3px;
    padding-top: 6px;
  }
  a.logo:hover {
    background-color: transparent;
  }
</style>