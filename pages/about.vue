<template>
  <div>
    <form style="margin: 2rem">
      <input type="text" v-model="title" placeholder="title" />
      <input type="text" v-model="developer" placeholder="developer" />
      <input type="text" v-model="publisher" placeholder="publisher" />
      <button @click.prevent="addGame">Add Game</button>
    </form>
  </div>
</template>

<script setup>
const title = ref("");
const developer = ref("");
const publisher = ref("");
async function addGame() {
  console.log("Value submitted", { title, developer, publisher });
  const res = await $fetch("/api/addGame", {
    method: "post",
    body: {
      title: title.value,
      developer: developer.value,
      publisher: publisher.value,
    },
  });
  console.log("Response", res);
  title.value = "";
  developer.value = "";
  publisher.value = "";
}
</script>

<style></style>
