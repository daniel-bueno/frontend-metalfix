<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/icon quadrado.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="METALFIX" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <div class="pipe"></div>
        <RouterLink to="/about">Produtos</RouterLink>
        <div class="pipe"></div>
        <RouterLink to="/services">Serviços</RouterLink>
        <div class="pipe"></div>
        <RouterLink to="/materials">Materias</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.pipe {
  display: inline-block;
  margin: 0 0.5rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
  margin-left: 0 !important;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
