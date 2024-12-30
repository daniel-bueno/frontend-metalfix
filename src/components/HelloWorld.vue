<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="text-metalfix-blue font-intro-rust">{{ msg }}</h1>
    <h3>
      Usinagem de Precisão e Manutenção Industrial.
      Qualidade, Precisão e Agilidade para o seu Projeto.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
