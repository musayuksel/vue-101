<script setup>
  import { ref } from 'vue'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
const nameInput = ref('')
function handleConsoleName(){
  console.log(">>>>", nameInput.value)
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <input type="text" placeholder="Name" v-model="nameInput" />
    <button @click='handleConsoleName'>Console Name</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}


.greetings h1 {
  text-align: center;
}

@media (min-width: 1024px) {
}
</style>

